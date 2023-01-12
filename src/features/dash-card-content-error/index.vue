<template>
  <div class="card-content-error">
    <CloseIcon />
    <div class="card-content-error__content">
      <emd-text color="#962647">i18n.card.content.error.title</emd-text>
      <emd-text>i18n.card.content.error.description</emd-text>
    </div>
  </div>
</template>

<script>
import EmdText from "../../components/emd-text";
import CloseIcon from "../../features/dash-icons/close-icon";
export default {
  components: {
    CloseIcon,
    EmdText,
  },
};
</script>

<style scoped>
.card-content-error {
  display: flex;
  column-gap: 16px;
}

.card-content-error__content {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.card-content-error__content > div:first-child {
  font-weight: 700;
}
</style>