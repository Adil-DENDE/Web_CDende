<template>
    <div class="pageContainer">

        <div class="loginContainer">
            <div class="p-3 w-100">
                <div>
                    <h1 class="loginTitle">Se connecter</h1>
                </div>


                <div id="logoContainer">
                    <div id="logo"></div>
                </div>

                <div>
                    <!-- Input velden voor in te loggen (bootstrap) -->
                    <!-- En voor de icons https://primevue.org/icons/ -->
                    <div class="input-group mb-3 ">
                        <span class="input-group-text" id="basic-addon1"><span class="pi pi-user"></span></span>
                        <input v-model="email" type="text" class="form-control" placeholder="E-mail"  aria-label="email"
                            aria-describedby="basic-addon1">
                    </div>
                    <!-- Input velden voor in te loggen (bootstrap) -->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="pi pi-key"></span></span>
                        <input v-model="password" ref="inputType" type="password" class="form-control" placeholder="Mot de passe"
                            aria-label="paswoord" aria-describedby="basic-addon1">
                        <span class="input-group-text" id="basic-addon1"><span @click="changeInputType" ref="eyeIcon"
                                class="pi pi-eye-slash" id="togglePassword" role="button"></span></span>
                    </div>


                    <div class="d-grid gap-2">
                        <button class="btn btn-light font-monospace border border-light" type="button" @click="auth(email, password)">Se
                            connecter</button>
                    </div>


                    <div class="d-flex justify-content-between">
                        <a class="btn btn-link p-lg-0 font-monospace text-white txtAccount" href="/register">Vous n'avez
                            pas de compte ?</a>
                        <a class="btn btn-link p-lg-0 font-monospace text-white txtPwd" href="/recover">Mot de passe
                            oublié ?</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter(); // router om te navigeren //
const inputType = ref(); // ref voor het type van het input veld //
const eyeIcon = ref(); // ref voor het eye icon te veranderen //

const email = ref(''); // ref voor het email veld //
const password = ref(''); // ref voor het password veld //

function changeInputType() {
    if (inputType.value.type == 'password') {
        inputType.value.type = 'text';
        eyeIcon.value.classList.remove('pi-eye-slash');
        eyeIcon.value.classList.add('pi-eye');
    } else {
        inputType.value.type = 'password';
        eyeIcon.value.classList.remove('pi-eye');
        eyeIcon.value.classList.add('pi-eye-slash');
    }
}

 // DUS LATER IN DE STORE(ik laat die hier om visu te hebben) //
function auth(inputEmail, inputPassword) {  // DEZE METHODE MOET IN DE STORE GEIMPLEMENTEERD WORDEN IMO //
    console.log(inputEmail, ", ", inputPassword);
    router.push('/home');
}

</script>

<style scoped>
.pageContainer {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background-color: #181818;
}

.loginContainer {
    background-color: rgb(14, 72, 188);
    border-radius: 25px;
    border: solid 1px rgb(255, 255, 255);
    padding: 25px;
    width: 450px;
    /* min-width: 300px; */
}


.loginTitle {
    text-align: center;
    color: white;
    font-family: 'Courier New', Courier, monospace;
}

#logoContainer {
    display: flex;
    justify-content: center;
}

#logo {
    padding: 50px;
    background-image: url(/src/assets/friends-icon.png);
    filter: invert(97%) sepia(0%) saturate(2%) hue-rotate(112deg) brightness(118%) contrast(100%);
    opacity: 0.6;
    background-size: contain;
    background-repeat: no-repeat;
}

.form-control {
    font-family: 'Courier New', Courier, monospace;
}

.txtInput {
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    width: 100%;
    border: 0;
    padding: 10px 10px;
    margin: 15px;
}

*:focus {
    box-shadow: none !important;
}

.bloc {
    padding: 5px;
    background-color: #ffffff;
}

@media only screen and (max-width: 420px) {

    .txtAccount,
    .txtPwd {
        font-size: small;
    }
}
</style>