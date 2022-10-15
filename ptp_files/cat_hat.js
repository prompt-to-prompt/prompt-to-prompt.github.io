var animals;
var hats;
var cur_animal = 0;
var cur_hat = 0;
var image;



function changeImage(){
    let hat = hats[cur_hat].innerHTML.toLowerCase();
    if (hat === '...'){
        hat = "default";
    }
    image.src = "./ptp_files/" + animals[cur_animal].innerHTML.toLowerCase() + "_" + hat + ".png"

}

function clearStyle(elem){
    elem.style.color = '#8e8e8e';
    elem.style.backgroundColor = null;
}

function setStyle(elem){
    elem.style.color = '#000000';
    elem.style.backgroundColor = '#f88000';
}

function modifyAnimal(i){

    function inner_(){
        if (cur_animal !== i){
            clearStyle(animals[cur_animal]);
            cur_animal = i;
            setStyle(animals[cur_animal]);
            changeImage();
        }
    }
    return inner_
}

function modifyHat(i){

    function inner_(){
        if (cur_hat !== i){
            clearStyle(hats[cur_hat]);
            cur_hat = i;
            setStyle(hats[cur_hat]);
            changeImage();
        }
    }
    return inner_
}

function init() {
    image = document.getElementById("cat-hat-img");
	animals = document.getElementsByClassName("cat-hat-button_a");
    hats = document.getElementsByClassName("cat-hat-button_b");
    setStyle(animals[cur_animal]);
    setStyle(hats[cur_hat]);
    for (let i = 0; i < animals.length; ++i){
        animals[i].addEventListener("click", modifyAnimal(i));
    }
    for (let i = 0; i < hats.length; ++i){
        hats[i].addEventListener("click", modifyHat(i));
    }

}
document.addEventListener("DOMContentLoaded", () => {
  init();
});
