<script setup >
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
axios.get('https://freetestapi.com/api/v1/cars/' + route.params.id)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

</script>


<template>
    <h1>VOITURE ID : {{ route.params.id }} </h1>
</template>