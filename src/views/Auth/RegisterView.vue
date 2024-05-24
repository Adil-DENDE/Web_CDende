<template>
    <div class="pageContainer">

        <div class="loginContainer">
            <div>
                <h1 class="loginTitle">Inscrivez-vous</h1>
            </div>
            <br>
            <div>
                <!-- Input velden voor in te loggen (bootstrap) -->
                <!-- En voor de icons https://primevue.org/icons/ -->
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><span class="pi pi-user text-dark"></span></span>
                    <input type="text" class="form-control" placeholder="Pseudo" aria-label="Naam"
                        aria-describedby="basic-addon1">
                </div>
                <!-- Input velden voor in te loggen (bootstrap) -->
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><span class="pi pi-at text-dark"></span></span>
                    <input type="password" class="form-control" placeholder="E-mail" aria-label="Email"
                        aria-describedby="basic-addon1">
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><span class="pi pi-key text-dark"></span></span>
                    <input type="password" ref="inputTypePwd" class="form-control" placeholder="Mot de passe" aria-label="paswoord"
                        aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1"><span ref="eyeIcon" @click="changeInputType(inputTypePwd, eyeIcon)" class="pi pi-eye-slash text-dark" id="togglePassword" role="button"></span></span>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><span class="pi pi-key text-dark"></span></span>
                    <input type="password" ref="inputTypePwdRepeat" class="form-control" placeholder="Confirmer le mot de passe" aria-label="paswoord" aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1"><span ref="eyeIconPwdRepeat" @click="changeInputType(inputTypePwdRepeat, eyeIconPwdRepeat)" class="pi pi-eye-slash text-dark" id="togglePassword" role="button"></span></span>
                </div>





                <div class="d-grid gap-2">
                    <button class="btn btn-light " type="button" @click="register">S'inscrire</button>
                </div>

                <div class="d-flex justify-content-between">
                    <a class="btn btn-link p-lg-0  text-light" href="/">J'ai déjà un compte</a>
                    <a class="btn btn-link p-lg-0  text-light" href="/recover">Mot de passe oublié ?</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter(); // router om te navigeren //
const inputTypePwdRepeat = ref(); // ref voor het type van het input veld //
const eyeIconPwdRepeat = ref(); // ref voor het eye icon te veranderen //
const inputTypePwd = ref(); // ref voor het type van het input veld //
const eyeIcon = ref(); // ref voor het eye icon te veranderen //

function changeInputType(input, icon) {
    if (input.type == 'password') {
        input.type = 'text';
        icon.classList.remove('pi-eye-slash');
        icon.classList.add('pi-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('pi-eye');
        icon.classList.add('pi-eye-slash');
    }
}



function register(/*naam, email, password, passwordrepeat*/) {
    // HIER MOET DE REGISTRATIE GEBEUREN EN JUIST ERNA DIRECT INLOGGEN //
    // DEZE METHODE MOET IN DE STORE GEIMPLEMENTEERD WORDEN //
    // DUS LATER IN DE STORE(ik laat die hier om visueel te hebben) //
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
    background-color: #0E48BC;
    border-radius: 25px;
    border: solid 1px rgb(255, 255, 255);
    padding: 35px;
    width: 450px;
    min-width: 300px;
}

.loginTitle {
    text-align: center;
    color: white;

}



.txtInput {
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    width: 100%;
    border: 0;
    padding: 10px 10px;
    margin: 15px -10px;
}


*:focus {
    box-shadow: none !important;
}

@media only screen and (max-width: 420px) {

.txtAccount,
.txtPwd {
    font-size: small;
}

.pageContainer {
display: block;
}
.loginContainer {
width: 100%;
border-radius: 0px;
padding: 15px;
padding-top: 25px;
}
}

</style>