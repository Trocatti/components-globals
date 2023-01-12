<template>
  <div :class="['emd-text', styled]">
    <slot></slot>
  </div>
</template>

<script>
const SIZE = {
  tiny: "_size_tiny",
  small: "_size_small",
  section: "_size_section",
  subpage: "_size_subpage",
  page: "_size_page",
  display: "_size_display",
  huge: "_size_huge",
};

export default {
  name: "EmdText",

  props: {
    size: {
      type: String,
      default: SIZE.section,
      validation: (size) => Object.keys(SIZE).includes(size),
    },
  },
  computed: {
    styled() {
      return SIZE[this.size];
    },
  },
};
</script>
