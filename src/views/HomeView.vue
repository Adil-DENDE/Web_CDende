<template>
  <main>
    <NavigationBar />
    <main style="background-color: #181818;">
      <div class="container pageContainer">

        <div class="d-flex justify-content-center">
          <div class="spinner-border mt-5 bg-white" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <h5 class="text-center text-white">J'ai just pas d'inspi coming soon..?</h5>

      </div>
    </main>
  </main>
  <FooterBar />
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>

<style scoped>
.pageContainer {
  height: 100vh;

}
</style>