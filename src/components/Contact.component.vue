

<template >
    <div class="body">
        <h3>Contato</h3>
        <div class="content">
            <div class="contat" 
            >
                <span class="material-symbols-outlined">
                    mail
                </span>
                davidpontes461@gmail.com
            </div>

            <div class="contat" v-on:click="openUrl('https://api.whatsapp.com/send?phone=5588994563932')">
                <span class="material-symbols-outlined">
                    call
                </span>
                +55 (88) 99456-3932
            </div>

            <div class="contat" v-on:click="openUrl('https://www.google.com/maps/place/Frecheirinha,+CE,+62340-000/data=!4m2!3m1!1s0x7eb31953d42c2f7:0xf7af08ffe3d16851?sa=X&ved=1t:242&ictx=111')">
                <span class="material-symbols-outlined">
                    pin_drop
                </span>
                Frecheirinha, Ceará, Brasil
            </div>

            
        </div>

    </div>
    
</template>
<script lang="ts" setup>
    const openUrl = (url: string)=>{
        window.open(url);
    }
</script>

<style scoped>

    .textarea-input-control{
        resize: none;
        text-align: start !important;
    }
    .body{
        padding: 5vw;
        background-color: #313131;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content{
        margin-block: 30px;
        display: flex;
        justify-content: space-around;
        width: 60%;
    }

    .content .contat{
        cursor: pointer;
        white-space: nowrap;
        display: flex;
        gap: 5px;
        align-items: center;
    }

    .form-contat{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input-control{
        text-align: center;
        margin: 10px 5px;
        width: 500px;
        padding: 10px;
        border-radius: 30px;
        border: none;
    }

    .input-control:focus{
        outline: none;
    }

    .leave-message{
        height: 40px;
        width: fit-content;
        padding-inline: 50px;
        border-radius: 3px;
        border: none;
        background-color: var(--main);
    }

    .leave-message:hover{
        cursor: pointer;
        background-color: #08f57f;
        box-shadow: 0 0 5px #17df7b;
    }

    @media (max-width: 1080px) {
        
        h3 {
            font-size: calc(3vw + 10px)
        }
        .content{
            font-size: 2vw;
            width: 100%;
        }
    }


    @media (max-width: 600px) {
        
        
        .content{
            flex-direction: column;
            font-size: 11px;
            width: 100%;
        }

        .input-control{
            width: 80vw;
        }
    }

</style>