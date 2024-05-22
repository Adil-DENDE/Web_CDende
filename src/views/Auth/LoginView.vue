<template>
    <div class="pageContainer">

        <div class="loginContainer">
            <div class="p-3 w-100">
                <div>
                    <h1 class="loginTitle">Log In</h1>
                </div>

                <br>

                <div id="logoContainer">
                    <div id="logo"></div>
                </div>

                <div>
                    <!-- Input velden voor in te loggen (bootstrap) -->
                    <!-- En voor de icons https://primevue.org/icons/ -->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="pi pi-user"></span></span>
                        <input type="text" class="form-control" placeholder="Email" aria-label="email"
                            aria-describedby="basic-addon1">
                    </div>
                    <!-- Input velden voor in te loggen (bootstrap) -->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="pi pi-key"></span></span>
                        <input type="password" class="form-control" placeholder="paswoord" aria-label="paswoord"
                            aria-describedby="basic-addon1">
                    </div>
                    <!-- Button om in te loggen. 2 keuze -->
                    <!-- <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary">Login</button>
                </div> -->

                    <!-- Button om in te loggen. 2 keuze -->
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary font-monospace border border-light" type="button">Login</button>
                    </div>


                    <div class="d-flex justify-content-between">
                        <a class="btn btn-link p-lg-0 font-monospace txtAccount" href="./RegisterView.vue">Geen account?</a>
                        <a class="btn btn-link p-lg-0 font-monospace txtPwd" href="./RecoverPwdView.vue">Paswoord vergeten?</a>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
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
    background-color: rgb(46, 48, 52);
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