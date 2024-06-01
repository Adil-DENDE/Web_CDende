<script setup>


defineProps({
    carName: String,
    carImg: String,
    carDetails: Function
})


</script>




<template>
    <div class="CarCard" @click="carDetails">
        <p class="text-dark text-center h3">{{ carName }}</p> <!--//NAAM VOOR DE PROPS // -->
        <img class="CarImg" :src="carImg"><!--//IMG VOOR DE PROPS // -->
    </div>
</template>

<style>
.CarCard {
    background-color: #fff;
    border-radius: 10px;
    border: solid 2px #000000;
    box-shadow: #000000 0px 0px 10px;
    padding: 10px;
    margin: 10px;
    width: 30%;
    height: 300px;
}

.CarImg {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border: #000000 solid 2px;
    border-radius: 10px
}

@media only screen and (max-width: 990px) {

    .CarCard {
        width: 100%;
    }
}
</style>