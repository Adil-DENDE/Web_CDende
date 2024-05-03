<template>
    <div class="pageContainer">

        <div class="loginContainer">

            <div>
                <h1 class="loginTitle">Log In</h1>
            </div>
            <br>
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

                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Login</button>
                </div>

                <!-- <br> -->

                <div>
                    <button type="button" class="btn btn-link p-lg-0 ">Geen account?</button>
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
    background-color: rgba(52, 48, 48, 0.581);
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
</style>