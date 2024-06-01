<script setup>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

// Back button //
function backButton() {
    router.go(-1);
}


axios.get('https://freetestapi.com/api/v1/cars/' + route.params.id)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

</script>


<template>
    <input type="button" class="btn btn-secondary" value="Retour" @click="backButton">
    <div class="container bg-secondary rounded-2">
        <h1 class="text-center">Car : {{ route.params.id }}</h1>
        <div class="row">
            <div class="col-6">
                <img src="https://via.placeholder.com/300" alt="Car image" class="img-fluid rounded-3">
            </div>
            <div class="col-6">
                <p>Car make: pipi </p>
                <p>Car model: caca</p>
                <p>Car year: zizi</p>
                <p>Car price: zezette</p>
                <p>Car description:  zoulette</p>
            </div>
        </div>
    </div>
</template>