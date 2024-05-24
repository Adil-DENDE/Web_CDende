<template>

  <div class="bg-primary ">
    <nav class="navbar navbar-expand-lg bg-primary container" data-bs-theme="dark">
      <!-- Navbar content -->
      <div class="container-fluid">
        <a class="navbar-brand  fs-3" href="/home">CDende</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- HIER ZET IK WAT IN DE NAV ZAL ZIJN  -->
          <div v-if="isComputer">
            <div>
              <a class="p-2 h5" href="/cars"><i class="bi bi-car-front-fill text-white"></i></a>
              <a class="p-2 h5" href="/"> <i class="bi bi-box-arrow-right text-white"></i></a>
              <a class="p-2 h5" href="/"><i class="bi bi-person-circle text-white"></i></a>
            </div>
          </div>
          <div v-if="isMobile">
            <div>
              <a class="p-2" href="/cars"><i class="bi bi-car-front-fill text-white ">Voitures</i></a>
              <a class="p-2" href="/"> <i class="bi bi-box-arrow-right text-white">Se deconnecter</i></a>
            </div>
            <div>
              <a class="p-2" href="/"><i class="bi bi-person-circle text-white">Profil</i></a>
            </div>
          </div>

        </div>
      </div>
      <!-- Navbar content -->
    </nav>
  </div>

</template>


<script setup>
const isComputer = window.innerWidth > 768;
const isMobile = window.innerWidth < 768;
</script>

<style>
#navbarSupportedContent {
  justify-content: flex-end;
}
</style>