<template>
    <div class="pageContainer">

<div class="loginContainer">
    <div>
        <h1 class="loginTitle">Mot de passe oublié ?</h1>
    </div>
    <br>
    <div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="email" class="form-control" placeholder="Email" aria-label="Email"
                aria-describedby="basic-addon1">
        </div>


        <div class="d-grid gap-2">
            <button class="btn btn-light  font-monospace" type="button">Stuur</button>
        </div>


        <div class="d-flex justify-content-between">
            <a class="btn btn-link p-lg-0 font-monospace text-white" href="/">J'ai déjà un compte</a>
        </div>
        
    </div>
</div>
</div>
</template>

<script setup></script>

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
    font-family: 'Courier New', Courier, monospace;
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