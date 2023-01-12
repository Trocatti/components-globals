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
