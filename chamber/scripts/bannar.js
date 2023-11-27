let today = new Date();
const bannar = document.querySelector("#bannar")

if(today.getDay() == 3 || today.getDay() == 4 || today.getDay() == 5 || today.getDay() == 6){
    bannar.style.display = "none";
}
else{
    bannar.style.display = "block";
}

function deleteBannar(){
    bannar.style.display = "none";
}