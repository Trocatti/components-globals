<template>
  <div>
    <div class="emd-card" :style="{ backgroundColor }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmdCard",
  props: {
    backgroundColor: {
      type: String,
      default: "#fff",
    },
  },
};
</script>

<style scoped>
.emd-card {
  background: #fff;
  border-radius: 2px;
  border: 1px solid transparent;

  position: relative;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
</style>