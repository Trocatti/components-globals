<template>
  <div>
    <emd-card>
      <emd-card-header>
        <emd-text size="tiny"> Cobranças </emd-text>
      </emd-card-header>
      <emd-card-content>
        <emd-text size="tiny"> Nº de cobranças </emd-text>
        <emd-text size="tiny"> 173.132 </emd-text>
      </emd-card-content>
    </emd-card>
    <br />
    <emd-card>
      <emd-card-content>
        <emd-text size="tiny"> Nº de cobranças </emd-text>
        <emd-text size="tiny"> 173.132 </emd-text>
      </emd-card-content>
    </emd-card>
    <br />
    <emd-card backgroundColor="#F4F7F9">
      <emd-card-content>
        <emd-text size="tiny"> Nº de cobranças </emd-text>
        <emd-text size="tiny"> 173.132 </emd-text>
      </emd-card-content>
    </emd-card>
  </div>
</template>

<script>
import EmdCard from "./emd-card";
import EmdCardHeader from "./emd-card-header";
import EmdCardContent from "./emd-card-content";
import EmdText from "./emd-text";

export default {
  name: "DashWebappExample",
  components: {
    EmdCard,
    EmdCardHeader,
    EmdCardContent,
    EmdText,
  },
};
</script>

<style>
.emd-card {
  word-break: break-all;

  background: #fff;
  padding-bottom: 24px;
  border-radius: 2px;
  border: 1px solid transparent;

  position: relative;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
.emd-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background-color: #dde4e8;
  padding: 12px;

  color: #272a2d;
  min-height: 2em;
  /* 4em / 14px body */
}
.emd-card-content {
  padding: 12px 12px 0;
}
</style>