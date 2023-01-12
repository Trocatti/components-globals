<template>
  <div class="dash-progress-bar">
    <div class="dash-progress-bar__header">
      <slot></slot>
      <emd-text>{{ title }}</emd-text>
    </div>
    <div class="dash-progress-bar__content">
      <emd-progress v-if="showBackground" :max="$attrs.max">
        <emd-progress-bar v-bind="$attrs" @emitterProgress="setProgress" />
      </emd-progress>
      <emd-progress-bar v-else v-bind="$attrs" @emitterProgress="setProgress" />
      {{ progress }}
    </div>
  </div>
</template>

<script>
import EmdProgressBar from "../../components/emd-progress-bar";
import EmdProgress from "../../components/emd-progress";
import EmdText from "../../components/emd-text";

export default {
  name: "DashProgressBar",
  components: {
    EmdProgressBar,
    EmdProgress,
    EmdText,
  },

  props: {
    title: String,
    showBackground: Boolean,
  },

  data() {
    return {
      progress: "",
    };
  },

  methods: {
    setProgress(value) {
      this.progress = value;
    },
  },
};
</script>

<style scoped>
.dash-progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 12px;

  margin-bottom: 20px;
}

.dash-progress-bar:last-child {
  margin-bottom: 0;
}

.dash-progress-bar__header {
  display: flex;
  align-items: center;
  column-gap: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.dash-progress-bar__content {
  display: flex;
  align-items: center;
  column-gap: 8px;

  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #30313C;
}
</style>