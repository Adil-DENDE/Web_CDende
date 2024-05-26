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
                  class="bi bi-car-front-fill text-white icon"></i><span class="navTitle">Voitures</span></a>

                  <a class="p-2 h4 navItem text-decoration-none" href="/sports"><i ><svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16">
                    <path
                      d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                    <path
                      d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                  </svg></i><span class="navTitle">Sports</span></a>


              <a class="p-2 h4 navItem text-decoration-none" href="/message"> <i class="bi bi-send icon"></i><span
                  class="navTitle">Messages</span></a>

              

              <span class="dropdown">
                <a class="p-2 h4 navItem text-decoration-none dropdown-toggle " data-bs-toggle="dropdown"
                  aria-expanded="false" href="/"><i class="bi bi-person-circle text-white icon"></i><span
                    class="navTitle">Profil</span></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="#"><i class="bi bi-person-circle text-white icon"></i>Profil</a>
                  </li>
                  <li><a class="dropdown-item" href="#"><i class="bi bi-gear-fill"></i>Paramètres</a></li>
                  <li><a class="dropdown-item" href="/"><i
                        class="bi bi-box-arrow-right text-white icon"></i>Deconnexion</a></li>
                </ul>
              </span>
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
    width: fit-content;
  }

  .navTitle {
    padding-left: 5px;
    font-size: 16px;
  }

  .icon {
    font-size: 16px;

  }
}

@media only screen and (min-width: 991px) {
  .navTitle {
    display: none;
  }
}
</style>