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
