<template >
    <div class="body">
        <h3>Minhas Habilidades</h3>

        <div class="content">
            <div class="card">
                <div class="img-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"  alt="">
                </div>
                <div class="title-card">
                    JavaScript
                    <div class="subtitle-card">
                        (6 Anos)
                    </div>
                </div>
                
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="data:image/png;base64,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" alt="">
                </div>
                <div class="title-card">
                    TypeScript
                    <div class="subtitle-card">
                        (4 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png" width="100%" height="90%"  alt="">
                </div>
                <div class="title-card">
                    Vue.js
                    <div class="subtitle-card">
                        (2 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/angularjs_original_logo_icon_146649.png" alt="">
                </div>
                <div class="title-card">
                    Angular.js
                    <div class="subtitle-card">
                        (3 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"  alt="">
                </div>
                <div class="title-card">
                    Node.js
                    <div class="subtitle-card">
                        (4 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" alt="">
                </div>
                <div class="title-card">
                    Nest.js
                    <div class="subtitle-card">
                        (2 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/791px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"  alt="">
                </div>
                <div class="title-card">
                    CSS & Html
                    <div class="subtitle-card">
                        (6 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png" alt="">
                </div>
                <div class="title-card">
                    Flutter
                    <div class="subtitle-card">
                        (2 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png" width="100%" alt="">
                </div>
                <div class="title-card">
                    Spring Boot
                    <div class="subtitle-card">
                        (2 Anos)
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="">
                </div>
                <div class="title-card">
                    PostgreSql
                    <div class="subtitle-card">
                        (4 Anos)
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style scoped>

    
    .body{
        padding-inline: 5vw;
    }
    h3{
        text-align: center;
        width: 100%;
        border: none;
    }

    .subtitle-card{
        text-align: center;
        font-size: 15px;
        opacity: 0;
        transition: all 0.3s;
        color: #313131;
    }

    .content{
        padding: 50px 0 30px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

       
    }
    .card{
        min-width: 250px;
        min-height: 250px;
        background-color: #313131;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        align-items: center;
        gap: 20px;
        justify-content: center;
        transition: all 0.3s;
    }

    .card:hover{
        background-color: var(--main);
        cursor: pointer;
        color: #313131;
        
    }

    .card:hover>.title-card>.subtitle-card{
        opacity: 1;
    }

    .card .img-card{
        height: 70px;
        overflow: hidden;
    }

    .card .img-card img{
        height: 100%;
    }

    .card .title-card{
        font-size: 20px;
    }

    @media (max-width: 600px) {
        h3{
            font-size: calc(3vw + 10px)
        }
        .content {
            overflow-x: auto;
            flex-wrap: nowrap;
            justify-content: start;
        }  
        .body {
            padding-right: 0;
        }
        .card {
            min-width: 35vw;
            min-height: 50vw;
        }
    }

    /* width */
.content::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
.content::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
.content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 35px;
}

/* Handle on hover */
.content::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>