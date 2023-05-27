<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <nav>
          <div>
            <ion-icon aria-hidden="true" :icon="journalOutline" />
            <ion-title>Journal</ion-title>
          </div>
          <div>Cardice</div>
        </nav>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <section class="container">
        <Header />

        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1>THIS PAGE IS STILL UNDER PROGRESS :)</h1>
          <h2>404</h2>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { journalOutline } from "ionicons/icons";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
div {
  text-align: center;
}
</style>
