<template>
  <div>
    <emd-card>
      <emd-card-header>
        <emd-text size="tiny"> Formas de pagamentos mais utilizadas </emd-text>
        <template #actions>
          <ellipsis-icon />
        </template>
      </emd-card-header>

      <emd-card-content>
        <dash-progress-bar title="Cartão de Crédito" value="70">
          <cred-card-icon />
        </dash-progress-bar>

        <dash-progress-bar title="Pix" value="20" color="#8267D3">
          <cred-card-icon />
        </dash-progress-bar>

        <dash-progress-bar value="10" color="#F3B700" showBackground>
          <cred-card-icon />
          <emd-text>Outros</emd-text>
          <info-icon />
        </dash-progress-bar>
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
    <br />
    <emd-card>
      <emd-card-content>
        <dash-card-content-error v-if="error" />
        <dash-progress-bar v-else title="Pix" value="20" color="#8267D3">
          <cred-card-icon />
        </dash-progress-bar>
      </emd-card-content>
    </emd-card>
    <br />
  </div>
</template>

<script>
import EmdCard from "./components/emd-card";
import EmdCardHeader from "./components/emd-card-header";
import EmdCardContent from "./components/emd-card-content";
import EmdText from "./components/emd-text";

import CredCardIcon from "./features/dash-icons/cred-card-icon";
import InfoIcon from "./features/dash-icons/info-icon";
import EllipsisIcon from "./features/dash-icons/ellipsis-icon";

import DashProgressBar from "./features/dash-progress-bar";
import DashCardContentError from "./features/dash-card-content-error";

export default {
  name: "DashWebappExample",
  components: {
    EmdCard,
    EmdCardHeader,
    EmdCardContent,
    DashCardContentError,
    EmdText,
    DashProgressBar,
    CredCardIcon,
    InfoIcon,
    EllipsisIcon,
  },
  data() {
    return {
      error: false,
    };
  },
};
</script>
