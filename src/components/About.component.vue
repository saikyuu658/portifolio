
<template>
    <div class="body">
        <div class="content">
            <h3>Sobre Mim</h3>
            <p class="description">
                Eu tenho adiquirido durante minhas experiencias em empresas e na execução de projetos pessoais,
                qualidades para exercer minhas função como programador com maestria, principalemente envolvendo javaScript,
                mas também já utilizeis de outras ferramentas que ampliaram meu leque de conhecimento. Hoje sou programador full Stack
                com mais de 4 anos de experiência como desenvolvedor Web
            </p>

            <div>
                <p></p>
            </div>
            <a href="../assets/newCVDavid.pdf" target="_blank" download="newCVDavid.pdf" class="download-cv" v-on:click="">
                Baixar CV 
                <span class="material-symbols-outlined">
                    download
                </span>
            </a>
            
        </div>
    </div>

    <ProjectComponent></ProjectComponent>
</template>
<style scoped>
    .body{
        padding: 5vw;
    }
    .content{
        width: 60vw;
    }

    .description{
        margin-block: 20px;
    }

    .download-cv{
        background-color: var(--main);
        color: #1d1d1d;
        width: fit-content;
        text-decoration: none;
        font-size: 15px;
        border: solid 1px #fffFFF20;
        display: flex;
        align-items: center;
        height: 50px;
        padding-inline: 20px;
        border-radius: 5px;
        transition: all 0.2s;
    }

    .download-cv:hover{
        cursor: pointer;
        background-color: #08f57f;
        box-shadow: 0 0 5px #17df7b;
    }

    @media (max-width: 700px) {

        h3 {
            font-size: calc(3vw + 10px)
        }
        .content {
            width: 100%;
        }
    }

</style>