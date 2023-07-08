let hiddenMenu = false;
// funcion que oculta el menu
function showMenu(){
    if(hiddenMenu){
        document.getElementById("nav").classList="";
        hiddenMenu = false
    }else{
        document.getElementById("nav").classList="responsive"
        hiddenMenu = true
    }
}

function select(){
    //oculto el menu una vez seleccionada opcion
    document.getElementById("nav").classList = "";
    hiddenMenu = false
}

//funcion que aplica las  animaciones de las habilidades
function habilityEffect(){
    var skills = document.getElementById("skills");
    var skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillsDistance >=300){
        let hability = document.getElementsByClassName("skill-bar");
        hability[0].classList.add("javascript")
        hability[1].classList.add("htmlcss")
        hability[2].classList.add("reactjs")
        hability[3].classList.add("nodejs")
        hability[4].classList.add("comunication")
        hability[5].classList.add("team-worker")
        hability[6].classList.add("creative")
        hability[7].classList.add("english")
        

    }
}

window.onscroll = function(){
    habilityEffect()
}

