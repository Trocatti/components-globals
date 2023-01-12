import { mount } from "@vue/test-utils";
import EmdProgressBar from "./";

describe("EmdProgressBar", () => {
  it("has expected default structure", () => {
    const wrapper = mount(EmdProgressBar);

    expect(wrapper.element.tagName).toBe("DIV");
    expect(wrapper.classes()).toContain("emd-progress-bar");
    expect(wrapper.attributes("role")).toBe("progressbar");
    expect(wrapper.attributes("aria-valuemin")).toBe("0");
    expect(wrapper.attributes("aria-valuemax")).toBe("100");
    expect(wrapper.attributes("aria-valuenow")).toBe("0");
    expect(wrapper.attributes("style")).toBe(
      "background-color: rgb(86, 145, 214); width: 0%; height: 13px;"
    );
    expect(wrapper.text()).toEqual("");

    wrapper.destroy();
  });

  it("has value set", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        value: 50
      }
    });

    expect(wrapper.attributes("role")).toBe("progressbar");
    expect(wrapper.attributes("aria-valuemin")).toBe("0");
    expect(wrapper.attributes("aria-valuemax")).toBe("100");
    expect(wrapper.attributes("aria-valuenow")).toBe("50");
    expect(wrapper.attributes("style")).toBe(
      "background-color: rgb(86, 145, 214); width: 50%; height: 13px;"
    );

    wrapper.destroy();
  });

  it("has max set", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        value: 10,
        max: 50
      }
    });

    expect(wrapper.attributes("role")).toBe("progressbar");
    expect(wrapper.attributes("aria-valuemin")).toBe("0");
    expect(wrapper.attributes("aria-valuemax")).toBe("50");
    expect(wrapper.attributes("aria-valuenow")).toBe("10");
    expect(wrapper.attributes("style")).toBe(
      "background-color: rgb(86, 145, 214); width: 20%; height: 13px;"
    );

    wrapper.destroy();
  });

  it("has label set", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        label: "foobar"
      }
    });

    expect(wrapper.text()).toBe("foobar");

    wrapper.destroy();
  });

  it("has slot set", () => {
    const wrapper = mount(EmdProgressBar, {
      slots: {
        default: "foobar"
      }
    });

    expect(wrapper.text()).toBe("foobar");

    wrapper.destroy();
  });

  it("has showValue set", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        value: 50,
        showValue: true
      }
    });

    expect(wrapper.text()).toBe("50");

    wrapper.destroy();
  });

  it("has showValue set with precision", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        value: 50,
        showValue: true,
        precision: 2
      }
    });

    expect(wrapper.text()).toBe("50.00");

    wrapper.destroy();
  });

  it("has color set", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        color: "red"
      }
    });

    expect(wrapper.attributes("style")).toBe(
      "background-color: red; width: 0%; height: 13px;"
    );

    wrapper.destroy();
  });

  it("has height set", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        height: 30
      }
    });

    expect(wrapper.attributes("style")).toBe(
      "background-color: rgb(86, 145, 214); width: 0%; height: 30px;"
    );

    wrapper.destroy();
  });

  it("has showProgress set", () => {
    const wrapper = mount(EmdProgressBar, {
      propsData: {
        showProgress: true,
        value: 50,
        max: 100
      }
    });

    expect(wrapper.text()).toEqual("50%");

    wrapper.destroy();
  });
});
