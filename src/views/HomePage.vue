<template>
  <main style="background-color: #181818;">
    <!-- Nav component -->
    <NavigationBar />
    <!-- Nav component -->

    <!-- Later kan ik een component hier zetten -->
    <div class="container pageContainer">
      <div class="d-flex justify-content-center">
        <div class="spinner-border mt-5 text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <h5 class="text-center text-white">J'ai just pas d'inspi coming soon..?</h5>
    </div>
    <!-- Later kan ik een component hier zetten -->

    <!-- Footer component -->
    <FooterBar />
    <!-- Footer component -->
  </main>
</template>

<script setup>
import NavigationBar from '@/components/NavFooter/NavigationBar.vue';
import FooterBar from '@/components/NavFooter/FooterBar.vue';
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
}

.pageContainer{
  height: 100%;
}

</style>