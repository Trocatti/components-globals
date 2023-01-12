<template>
  <div>
    <example-progress />
    <br />
    <hr />
    <br />
    <example-card />
  </div>
</template>

<script>
import ExampleProgress from "./components/example-progress";
import ExampleCard from "./components/example-card";
export default {
  components: {
    ExampleProgress,
    ExampleCard,
  },
};
</script>
