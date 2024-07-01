<script lang="ts">



</script>
<template>
    <ModalComponent
        v-show="modalShow"
        @close="()=>{modalShow = false}"
    ></ModalComponent>
    <section class="body" id="project">
        <h3>Meus Projetos</h3>
        <div class="content">
            <div class="card-project">
                <img src="../assets/painel/img2.png"  alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Chrunch Control</span>
                        <div class="desc" >
                            Gestão de igreja, financeiro, débitos, membros, agenda
                        </div>
                    </p>
                </div>
            </div>
            
            <div class="card-project">
                <img src="../assets/painel/img3.png"  alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Painel de Senhas</span>
                        <div class="desc">
                            Criação de senhas por setor, multiplos guichê, painel sonoro, administrativo de configuração de estilo
                        </div>
                    </p>
                </div>
            </div>

            <div class="card-project">
                <img src="../assets/painel/img1.png"  alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Clinica Escola Odontologia</span>
                        <div class="desc">
                            Cadastro de triagem, controle de usuário, autenticação JWT
                        </div>
                    </p>
                </div>
            </div>

            <div class="card-project">
                <img src="../assets/painel/img3.png"  alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Revisaço</span>
                        <div class="desc">
                            Aplicativo para auxilio de revisão, AdMob, SqLite
                        </div>
                    </p>
                </div>
            </div>
            
        </div>

    </section>
</template>
<style scoped>
   
    .see-more{
        border-radius: 30px;
        width: 100px;
        border: none;
        padding-block: 5px;
        margin-top: 10px;
        background-color: var(--main);
    }

    .see-more:hover{
        cursor: pointer;
        background-color: #08f57f;
    }
    .body{
        padding: 5vw;
    }
    .content{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-block: 30px;
        justify-content: center;
        gap: 10px;
    }

    .desc{
        max-width: 80%;
        text-align: center;
    }
    .card-project{
        background-color: #353636b2;
        border-radius: 10px;
        border: solid 1px #ffffff54;
        position: relative;
        overflow: hidden;
    }
    .card-project img{
        width: 100%;
    }
    
    .card-project .messagem {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all 0.5s;
        font-size: 11px;
        color: white;
    }

    .card-project .messagem .title{
        display: block;
        border-bottom: #08f57f solid 1px;
        margin-bottom: 10px;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
    }

    @media (max-width: 1080px) {
        
        h3{
            font-size: calc(3vw + 10px)
        }

        .body{
            padding-block: 9vw;
        }
        
        .content {
            width: 100%;
            background-position: right;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }   
        
    }

    @media (max-width: 500px) {
        .content {
            grid-template-columns: 1fr;
        }
    }

    
    
   


</style>