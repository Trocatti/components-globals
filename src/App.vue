<template>
  <div id="app">
    <example-card />
    <br />
    <hr />
    <br />
    <example-progress />
    <br />
  </div>
</template>

<script>
import ExampleProgress from "./example-progress";
import ExampleCard from "./example-card";

export default {
  components: {
    ExampleProgress,
    ExampleCard,
  },
};
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
}
</style>