
<template>
    <input type="checkbox" id="id_control_side" style="display: none;">
    

    <label class="label-icon-menu" for="id_control_side" >
        <span class="material-symbols-outlined">
            menu_open
        </span>
    </label>
    <nav>
        <ul>
            <li>
                <a href="">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    Sobre mim
                </a>
            </li>
            <li>
                <a href="">
                    <span class="material-symbols-outlined">
                        phone
                    </span>
                        Contato
                </a>
            </li>

            <li >
                <a href="">
                    <span class="material-symbols-outlined">
                        description
                    </span>
                    Resumo
                </a>
            </li>

            <li>
                <button class="call-me">
                    Entre em contato
                </button>
            </li>
        </ul>
    </nav>
</template>
<style scoped>


    #id_control_side:checked ~ nav{
        width: 270px;
    }

    #id_control_side:checked ~ .label-icon-menu{
        left: 300px;
    }

    .label-icon-menu{
        position: absolute;
        top: 10px;
        left: 5vw; 
        transition: all 0.3s;
        display: none;   
        cursor: pointer;
    }

    nav{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }
    nav ul{ 
        height: 70px;
        justify-content: end;
        align-items: center;
        display: flex;
    }

    nav ul li {
        margin-inline: 25px;
    }
    nav ul li a{
        text-decoration: none;
        color: #ffffffed;
        display: flex;
        align-items: center;
        gap: 5px;
    }


    .call-me{
        height: 50px;
        border-radius: 3px;
        border: none;
        font-size: 15px;
        background-color: #ffffff;
        transition: all 0.3s;
    }

    .call-me:hover{
        box-shadow: 0 0 10px #17df7b ;
        cursor: pointer;
    }


    @media (max-width: 1080px) {
        nav ul{ 
            justify-content: center;
        }
    }


    @media (max-width: 650px) {
        nav{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 0px;
            overflow: hidden;
            z-index: 5;
            white-space: nowrap;
            transition: all 0.3s;
        }

        nav ul{
            display: block;
            padding-block: 20px;
            height: 100%;
            background-color: #3a3a3a;
        }

        nav ul li{
            margin: 20px 0;
            padding: 10px;

        }

        .label-icon-menu {
            display: block;   

        }
    }
    
</style>