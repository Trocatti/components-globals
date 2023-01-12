<template>
  <div class="emd-card-header">
    <slot></slot>
    <slot name="actions" />
  </div>
</template>

<script>
export default {
  name: "EmdCardHeader",
};
</script>

<style scoped>
.emd-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background-color: #dde4e8;
  padding: 12px 16px;
  min-height: 2em;

  color: #272a2d;
  font-weight: 700;
}
</style>