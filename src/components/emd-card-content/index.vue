<template>
  <div>
    <div class="emd-card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "EmdCardContent",
};
</script>

<style scoped>
.emd-card-content {
  padding: 1rem;
}
</style>