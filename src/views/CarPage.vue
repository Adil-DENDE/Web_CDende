<script setup>
import NavigationBar from '@/components/NavFooter/NavigationBar.vue';
import FooterBar from '@/components/NavFooter/FooterBar.vue';
import CardContainer from '@/components/CarContainer.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';


// LIJST VAN ALLE AUTOS NAMEN
let carName = ref([]);
let carImg = ref([]);
const search = ref("");

onMounted(() => {
    getCars();
});

function getCars(search) {
    carName.value = [];
    carImg.value = [];
    if (search == "" || search == null) {
        axios.get('https://freetestapi.com/api/v1/cars?limit=5')
            .then((response) => {
                const data = response.data;
                data.forEach(cars => {
                    carName.value.push(cars.make + " " + cars.model);
                    carImg.value.push(cars.image);
                });
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        axios.get('https://freetestapi.com/api/v1/cars?search=' + search)
            .then((response) => {
                const data = response.data;
                data.forEach(cars => {
                    carName.value.push(cars.make + " " + cars.model);
                    carImg.value.push(cars.image);
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

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
                        <em class="text-dark">(Prochainement vous pourrez cliquer sur le boutons info d'une voiture pour avoir + d'info sur la
                        voiture)</em>
                    </p>

                    <div class="input-group mb-3">
                        <input v-model="search" type="text" class="form-control" placeholder="Nom de la voiture..."
                            aria-label="Username" aria-describedby="basic-addon1">
                        <span @click="getCars(search)" class="input-group-text" id="basic-addon1"><i
                                class="bi bi-search text-dark"></i></span>
                    </div>

                    <div v-if="!carName.length == 0" class="text-center">
                        <div class="listCar overflow-hidden ">
                            <CardContainer v-for="(car, index) in carName" :key="car" :carName="carName[index]"
                                :carImg="carImg[index]" carLink="/home" />

                        </div>
                    </div>
                    <div v-else>
                        <p class="text-white text-center bg-primary rounded-2 h5">Aucune voiture trouvée</p>
                    </div>


                </div>
            </div>
        </div>
        <!-- Later kan ik een component hier zetten -->

        <!-- Footer component -->
        <FooterBar class="footerBar" />
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

.footerBar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
}
</style>