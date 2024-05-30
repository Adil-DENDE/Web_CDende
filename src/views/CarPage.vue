<script setup>
import NavigationBar from '@/components/NavFooter/NavigationBar.vue';
import FooterBar from '@/components/NavFooter/FooterBar.vue';
import CardContainer from '@/components/CarContainer.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';


// LIJST VAN ALLE AUTOS NAMEN
let carName = ref([]);
let carImg = ref([]);
onMounted(() => {
    getAllCars();
});

function getAllCars() {

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
                    </p>

                    <div class="input-group mb-3">

                        <input type="text" class="form-control" placeholder="Nom de voiture" aria-label="Username"
                            aria-describedby="basic-addon1">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-search text-dark"></i></span>
                    </div>

                    <div class="listCar ">
                        <CardContainer v-for="(car, index) in carName" 
                        :key="car" 
                        :carName="carName[index]"
                        :carImg="carImg[index]" />




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