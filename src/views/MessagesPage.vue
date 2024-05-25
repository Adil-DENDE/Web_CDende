<template>
    <div class="pageContainer" style="background-color: #181818;">
        <div v-if="isComputer" class="chatContainer d-flex justify-content-between">
            <div class="leftchatSide">

                <div class="chatList">
                    <div class="d-flex topBarChatList">
                        <a href="/home" class="p-2 h4"><i class="bi bi-arrow-left-circle-fill h1"></i></a>
                        <h1 class="msgTitle w-75">Messages</h1>

                    </div>
                </div>
            </div>

            <div class="rightChatSide">
                <div class="chatSide">

                    <div class="topBarChatList">
                        <h1 class="text-center msgTitle">Discussion
                        </h1>
                    </div>

                    <div class="discussionContainer">
                        <p>CHAT ICI</p>
                    </div>
                    <div class="messageContainer">
                        <input type="text" class="inputMsg" placeholder="ecris un message.." />
                        <button type="button" class="btnMsg"><i class="bi bi-send icon"></i></button>
                    </div>
                </div>
            </div>

        </div>
        <div v-else>
            <div class="d-flex">
                <a href="/home" class=""><i class="bi bi-arrow-left-circle-fill h1"></i></a>
                <h2 style="margin-bottom: 0px">CHAT MOBILE</h2>
            </div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border mt-5 text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isComputer = window.innerWidth > 768;

</script>
<style>
.pageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}

.chatContainer {
    width: 80%;
    /* height: 80%; */
}

.leftchatSide {
    width: 30%;
    background-color: #282828;
    border-right: 1px solid #333;
    border-radius: 25px;
}

.topBarChatList {
    border-bottom: #ffffff 1px solid;
}

.rightChatSide {
    width: 67%;
    height: 100%;
    background-color: #282828;
    border-radius: 25px;
}

.chatSide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.discussionContainer {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.messageContainer {
    display: flex;
    justify-content: space-between;
}

.msgTitle {
    text-align: center;
    margin-bottom: 0px;
    margin-top: 5px;
}

.inputMsg {
    width: 90%;
    height: 40px;
    border-radius: 25px;
    border-color: 1px solid #ffffff;
    padding-left: 10px;
    margin: 5px;
    background-color: #333;
}



.btnMsg {
    width: 10%;
    height: 40px;
    border-radius: 25px;
    margin: 5px;
    background-color: #333;
    color: white;
    border: none;
}
</style>