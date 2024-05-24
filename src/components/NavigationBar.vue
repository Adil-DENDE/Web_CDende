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
          <div>
            <div class="navList">
              <a class="p-2 h4 navItem text-decoration-none" href="/cars"><i
                  class="bi bi-car-front-fill text-white"></i><span class="navTitle">Voitures</span></a>
              <a class="p-2 h4 navItem text-decoration-none " href="/"> <i
                  class="bi bi-box-arrow-right text-white"></i><span class="navTitle">Deconnexion</span></a>
              <a class="p-2 h4 navItem text-decoration-none " href="/"><i
                  class="bi bi-person-circle text-white"></i><span class="navTitle">Profil</span></a>
            </div>
          </div>

        </div>
      </div>
      <!-- Navbar content -->
    </nav>
  </div>

</template>


<script setup>

</script>

<style>
#navbarSupportedContent {
  justify-content: flex-end;
}


@media only screen and (max-width: 991px) {
  .navItem {
    display: block;
    border: solid 1px white;
    border-radius: 15px;
   width: fit-content
  }

  .navTitle {
    padding-left: 5px;
  }
}

@media only screen and (min-width: 991px) {
  .navTitle {
    display: none;
  }
}
</style>