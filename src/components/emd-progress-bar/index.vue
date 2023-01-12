<template>
  <div
    class="emd-progress-bar"
    :style="progressBarStyles"
    v-bind="computedAttrs"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else-if="showProgress">
      {{ computedProgress }}
    </template>
    <template v-else-if="showValue">
      {{ computedValue }}
    </template>
    <template v-else>
      {{ label }}
    </template>
  </div>
</template>

<script>
import { toFixed } from "./number.utils";

import { getProgress, getPrecision, getMax, getValue } from "./math.utils";

export default {
  name: "EmdProgressBar",

  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
    max: {
      type: [String, Number],
      default: 100,
    },
    color: {
      type: String,
      default: "#5691D6",
    },
    height: {
      type: [String, Number],
      default: "13px",
    },
    precision: Number,
    showValue: Boolean,
    showProgress: Boolean,
    label: String,
  },

  computed: {
    computedValue() {
      return getValue(this.value);
    },
    computedMax() {
      return getMax(this.max);
    },
    computedPrecision() {
      return getPrecision(this.precision);
    },
    computedProgress() {
      return this.handleProgress();
    },
    computedAttrs() {
      return {
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": this.computedMax.toString(),
        "aria-valuenow": this.computedValue,
      };
    },
    progressBarStyles() {
      // Calculates the bar width based on the computed properties
      const calcWidth = 100 * (this.computedValue / this.computedMax);
      return {
        backgroundColor: this.color,
        width: this.clamp(calcWidth, this.computedMax) + "%",
        height: toFixed(this.height) + "px",
      };
    },
  },

  created() {
    if (this.$attrs?.onEmitterProgress) {
      const progress = this.handleProgress();
      this.$emit("emitter-progress", progress);
    }
  },

  methods: {
    handleProgress() {
      const progress =
        getProgress(
          this.computedValue,
          this.computedMax,
          this.computedPrecision
        ) + "%";
      return progress;
    },
    // to easily clamp numbers between a min and a max value
    clamp(value, max, min = 0) {
      return Math.min(Math.max(value, min), max);
    },
  },
};
</script>

<style scoped>
.emd-progress-bar {
  width: 0%;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  line-height: 0;
  color: white;
  text-align: right;
  white-space: nowrap;

  transition: width 0.6s ease;
}

.emd-progress .emd-progress-bar {
  display: flex;
  overflow: hidden;
  border-radius: 0;
}

.emd-progress .emd-progress-bar:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.emd-progress .emd-progress-bar:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
