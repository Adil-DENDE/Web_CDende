<script setup lang="ts">
import NavigationBar from '@/components/NavFooter/NavigationBar.vue';
import FooterBar from '@/components/NavFooter/FooterBar.vue';
import CardContainer from '@/components/CarContainer.vue';
</script>

<template>
    <main style="background-color: #181818;">

        <!-- Nav component -->
        <NavigationBar />
        <!-- Nav component -->

        <!-- Later kan ik een component hier zetten -->
        <div class="container mb-5 pageContainer">
            <h1 class="text-white text-center pt-5 ">Liste de voitures</h1>
            <div class="card">
                <div class="card-body ">
                    <h3 class="card-title h3">Recherche une voiture</h3>


                    <p class="card-text text-dark">Ici, vous pouvez rechercher une voiture et voir vos propres voitures.
                    </p>

                    <div class="input-group mb-3">

                        <input type="text" class="form-control" placeholder="Nom de voiture" aria-label="Username"
                            aria-describedby="basic-addon1">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-search text-dark"></i></span>
                    </div>

                    <div class="listCar ">
                        <CardContainer />
                        <CardContainer />
                        <CardContainer />
                        <CardContainer />
                        <CardContainer />
                        <CardContainer />


                    </div>

                </div>
            </div>
        </div>
        <!-- Later kan ik een component hier zetten -->

        <!-- Footer component -->
        <FooterBar />
        <!-- Footer component -->
    </main>
</template>

<style scoped>
main {
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.pageContainer {
    height: 100%;
}

.listCar {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
}
</style>