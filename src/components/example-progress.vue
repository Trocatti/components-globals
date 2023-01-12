<template>
  <div>
    <EmdProgress max="50">
      <EmdProgressBar value="10" show-value color="red"></EmdProgressBar>
      <EmdProgressBar value="5" show-value></EmdProgressBar>
      <EmdProgressBar value="20" show-value color="green"></EmdProgressBar>
      <EmdProgressBar value="40" show-value color="yellow"></EmdProgressBar>
      <EmdProgressBar value="40" show-value color="pink"></EmdProgressBar>
    </EmdProgress>
    <br />
    <EmdProgressBar value="80" max="81" show-progress></EmdProgressBar>
    <br />
    <EmdProgress value="5" backgroundColor="red" height="20px" />
    <br />
    <EmdProgressBar value="50" max="100" label="teste"></EmdProgressBar>
    <br />
    <EmdProgressBar value="120" max="100" show-progress></EmdProgressBar>
    <br />
    <div>
      <EmdProgressBar
        value="30"
        max="100"
        @emitterProgress="setProgress"
      ></EmdProgressBar>
      {{ progress }}
    </div>
    <br />
    <EmdProgress max="100">
      <EmdProgressBar
        :value="lowProgress"
        show-value
        color="red"
      ></EmdProgressBar>
    </EmdProgress>
    <button @click="onLowProgress">start</button>
  </div>
</template>

<script>
import EmdProgress from "./emd-progress/index.vue";
import EmdProgressBar from "./emd-progress-bar/index.vue";

let interval = undefined;

export default {
  name: "App",
  components: {
    EmdProgress,
    EmdProgressBar,
  },
  data() {
    return {
      progress: 0,
      lowProgress: 0,
    };
  },

  watch: {
    lowProgress(value) {
      if (value >= 100) {
        clearInterval(interval);
        this.lowProgress = 0;
      }
    },
  },

  methods: {
    setProgress(progress) {
      this.progress = progress;
    },

    onLowProgress() {
      interval = setInterval(() => this.lowProgress++, 100);
    },
  },
};
</script>
