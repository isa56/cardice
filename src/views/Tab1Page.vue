<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <nav>
          <div>
            <ion-icon aria-hidden="true" :icon="hammerOutline" />
            <ion-title>Tools</ion-title>
          </div>
          <div>
            Cardice
          </div>
        </nav>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- <ion-title size="large">Tab 1</ion-title> -->
        </ion-toolbar>
      </ion-header>

      <section class="container">
        <Header />

        <Tools />

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
import { hammerOutline } from "ionicons/icons";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Tools from "@/components/tools/Tools.vue";
</script>
