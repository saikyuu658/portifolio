<template>
    <section class="body">
        <div class="content">
            <div class="hi">
                <p>Olá, eu sou</p>
                <h3>David Pontes Silva</h3>
                <div class="description">
                    <p>
                        Desenvolvedor JavaScript full Stack
                    </p>
                </div>
                <button class="send-mesage">
                    <span>
                        Enviar Mensagem!
                    </span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .body{
        padding-top: 70px;
        height: calc(100vh - 90px);
        width: 100%;
        display: flex;
        align-items: end;
        justify-content: center;
        background-color: #313131;
        
    }

    h3{
        border-bottom: none;
        color: #0feb7d;
    }

    .content{
        width: 55%;
        background-image: url('../assets/DSC_5666-removebg.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
        display: flex;
        height: 90%;
        align-items: center;
    }

    .description{
        
        margin-block: 20px;
        font-size: 25px;
        width: 300px;
    }


    .send-mesage{
        border: solid 2px  var(--main);
        background-color: transparent;
        border-radius: 3px;
        height: 50px;
        width: 180px;
        font-size: 15px;
        font-weight: 500;
        color: white;
        position: relative;

    }

    .send-mesage:hover::after{
        width: 100%;
    }
   
    .send-mesage span {
        position: absolute;
        z-index: 2;
        inset: 0 0 0 50%;
        transform: translate(-50%,0%);
        transition: all 0.5s;
    }

    .send-mesage::after{
        position: absolute;
        content: '';
        width: 0;
        left: 0;
        bottom: 0;
        top: 0;
        transition: all 1s;
        background-color: #0feb7d;
    }


    .send-mesage:hover{
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        h3{
            border-bottom: none;
            color: #0feb7d;
            font-size: calc(3vw + 10px)
        }

        .body{

            min-height: fit-content;
        }
        .content {
            width: 90%;
            background-position: right;
        }   
        .hi{
            margin-block: 3vw;
        }
        
        .description {
            font-size: 3vw;
        }
    }

    @media (max-width: 650px) {
        .body{
            padding-top: 0px;
            height: 60vw;
        }
    }
</style>