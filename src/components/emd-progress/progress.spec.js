import { mount } from "@vue/test-utils";
import EmdProgress from "./";

describe("EmdProgress", () => {
  it("has expected default structure", () => {
    const wrapper = mount(EmdProgress);

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.classes()).toContain("emd-progress");
    expect(wrapper.text()).toEqual("");
    expect(wrapper.findAll(".emd-progress-bar").length).toBe(1);

    const $bar = wrapper.find(".emd-progress-bar");

    expect($bar.element.tagName).toBe("DIV");
    expect($bar.attributes("role")).toBe("progressbar");
    expect($bar.attributes("aria-valuemin")).toBe("0");
    expect($bar.attributes("aria-valuemax")).toBe("100");
    expect($bar.attributes("aria-valuenow")).toBe("0");
    expect($bar.attributes("style")).toBe(
      "background-color: rgb(86, 145, 214); width: 0%; height: 13px;"
    );

    wrapper.destroy();
  });

  it("should render content with a default slot", () => {
    const wrapper = mount(EmdProgress, {
      slots: {
        default: "<b>text</b>"
      }
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.classes()).toContain("emd-progress");
    expect(wrapper.text()).toEqual("text");

    wrapper.destroy();
  });

  it("should have the expected provided parameters", () => {
    const wrapper = mount(EmdProgress, {
      propsData: {
        value: "25",
        max: "125",
        backgroundColor: "blue"
      }
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.classes()).toContain("emd-progress");
    expect(wrapper.text()).toEqual("");
    expect(wrapper.attributes("style")).toBe("background-color: blue;");
    expect(wrapper.findAll(".emd-progress-bar").length).toBe(1);

    wrapper.destroy();
  });

  it("should have the expected provided parameters to the children components", () => {
    const wrapper = mount(EmdProgress, {
      propsData: {
        value: "25",
        max: "125",
        backgroundColor: "blue"
      }
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.classes()).toContain("emd-progress");
    expect(wrapper.text()).toEqual("");
    expect(wrapper.attributes("style")).toBe("background-color: blue;");
    expect(wrapper.findAll(".emd-progress-bar").length).toBe(1);

    const $bar = wrapper.find(".emd-progress-bar");

    expect($bar.element.tagName).toBe("DIV");
    expect($bar.attributes("role")).toBe("progressbar");
    expect($bar.attributes("aria-valuemin")).toBe("0");
    expect($bar.attributes("aria-valuemax")).toBe("125");
    expect($bar.attributes("aria-valuenow")).toBe("25");
    expect($bar.attributes("style")).toBe(
      "background-color: rgb(86, 145, 214); width: 20%; height: 13px;"
    );
    expect($bar.text()).toEqual("");

    wrapper.destroy();
  });
});
