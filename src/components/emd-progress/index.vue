<template>
  <div class="emd-progress" :style="{ backgroundColor }">
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else>
      <emd-progress-bar :max="max" :value="value" />
    </template>
  </div>
</template>

<script>
import EmdProgressBar from "../emd-progress-bar";

export default {
  name: "EmdProgressGroup",

  components: {
    EmdProgressBar,
  },

  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
    max: {
      type: [String, Number],
      default: 100,
    },
    backgroundColor: {
      type: String,
      default: "#F2F2F3",
    },
  },
};
</script>

<style scoped>
.emd-progress {
  width: 100%;
  border-radius: 4px;

  display: flex;
}
</style>
