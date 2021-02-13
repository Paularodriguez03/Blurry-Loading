const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let FilterValue = 100;
let OpacityValue = 1;
let int = setInterval(blurring, 30)

function blurring() {
    

    if(load < 100){
       load += 1;
    }
    //si load es menor que 100 load se va ir aumentando
    //load es el mensaje que subira de 0 a 100

    if(FilterValue > 0){
        FilterValue -= 1;
    }
    //si filerValue es mayor que 100 entonces se le restara 1 

    if(OpacityValue > 0){
        OpacityValue -= 0.01;
    }
    //si la opacidad es mayor a 0 entonces  va a disminuir una fracción de 0.01
    //el 0.01 es para manerar un concepto como de 1 a 100 en los parametros validos para 
    //la opacidad, es decir, es como tener 100 muneros entre el 0 y 1 para cambiar la opacidad 
    //gradualmente

    loadText.innerText = load + "%";
    //se renderiza los numeros del 1 al 100
    loadText.style.opacity = OpacityValue;
    // se aplica la opacidad
    bg.style.filter = "blur(" + FilterValue + "px)";
    //se aplcia el filtro
}

//mientras el numero aumenta la opacidad y el filtro disminuyen