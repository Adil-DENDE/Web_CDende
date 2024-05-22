<template>
  <main>
    <NavigationBar />
    <main class="pageContainer">
      <div class="container">
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <h5 class="text-center">J'ai just pas d'inspi coming soon..?</h5>
    </main>

  </main>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<style scoped>
.pageContainer {
  height: 100vh;
  background-color: rgb(255, 255, 255);
}
</style>