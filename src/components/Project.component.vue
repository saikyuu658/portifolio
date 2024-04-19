<template>
    <section class="body">
        <h3>Meus Projetos</h3>
        <div class="content">
            <div class="card-project">
                <img src="https://control-webpanel.com/wp-content/uploads/2019/03/slider-user-dashboard.jpg" height="100%" alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Chrunch Control</span>
                        <div class="desc" >
                            Gestão de igreja, financeiro, débitos, membros, agenda
                        </div>
                    </p>
                    <button class="see-more">Ver</button>
                </div>
            </div>
            
            <div class="card-project">
                <img src="https://control-webpanel.com/wp-content/uploads/2019/03/slider-user-dashboard.jpg" height="100%" alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Painel de Senhas</span>
                        <div class="desc">
                            Criação de senhas por setor, multiplos guichê, painel sonoro, administrativo de configuração de estilo
                        </div>
                    </p>
                    <button class="see-more">Ver</button>
                </div>
            </div>

            <div class="card-project">
                <img src="https://control-webpanel.com/wp-content/uploads/2019/03/slider-user-dashboard.jpg" height="100%" alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Clinica Escola Odontologia</span>
                        <div class="desc">
                            Cadastro de triagem, controle de usuário, autenticação JWT
                        </div>
                    </p>
                    <button class="see-more">Ver</button>
                </div>
            </div>

            <div class="card-project">
                <img src="https://control-webpanel.com/wp-content/uploads/2019/03/slider-user-dashboard.jpg" height="100%" alt="">
                <div class="messagem">
                    <p class="description">
                        <span class="title">Revisaço</span>
                        <div class="desc">
                            Aplicativo para auxilio de revisão, AdMob, SqLite
                        </div>
                    </p>
                    <button class="see-more">Ver</button>
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
       

        position: relative;
        overflow: hidden;
    }
    .card-project img{
        width: 100%;
        height: 100%;
    }
    

    .card-project:hover > .messagem {
        transform: translateY(0);
    }

    .card-project .messagem {
        transform: translateY(100%);
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all 0.5s;
        background-color: #353636b2;
        font-size: 11px;
        color: white;
    }

    .card-project .messagem .title{
        display: block;
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