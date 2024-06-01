<script setup>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

// Back button //
function backButton() {
    router.go(-1);
}

const mock = {
  "id": 1,
  "make": "Toyota",
  "model": "Corolla",
  "year": 2022,
  "color": "Silver",
  "mileage": 20000,
  "price": 25000,
  "fuelType": "Gasoline",
  "transmission": "Automatic",
  "engine": "2.0L 4-cylinder",
  "horsepower": 169,
  "features": [
    "Bluetooth",
    "Backup Camera",
    "Keyless Entry"
  ],
  "owners": 1,
  "image": "https://fakeimg.pl/500x500/cccccc"
};


axios.get('https://freetestapi.com/api/v1/cars/' + route.params.id)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

</script>


<template>
    <div class="CarDetails">
        <a class="bi bi-arrow-left display-6 backBtn "  @click="backButton" />
        <div class="container bg-white rounded-4">
            <h1 class="text-dark text-center">Nom de la voiture</h1>
            <div class="d-flex m-3">

                <div class="col-4">
                    <img src="https://fakeimg.pl/500x500/cccccc" class="img-fluid" alt="Car Image">
                </div>

                <div>
                    <p class="text-dark">Car Description:</p>
                    <p class="text-dark">Car Price</p>
                </div>

            </div>
        </div>
    </div>
</template>


<style>
.CarDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.backBtn {
    left: 0;
    margin-top: 20px;
    margin-left: 20px;
    top: 0;
    position: fixed
}
</style>