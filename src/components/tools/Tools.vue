<template>
  <section>
    <CardDealerTool />

    <hr />

    <DiceRollerTool />
  </section>
</template>

<script setup lang="ts">
  import DiceRollerTool from "./DiceRollerTool.vue";
  import CardDealerTool from "./CardDealerTool.vue";
</script>

<style scoped>

hr {
  border: .5px solid white;
  height: 0;
  margin: 2em 0;
}

</style>
