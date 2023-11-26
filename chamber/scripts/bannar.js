const today = new Date();
const bannar = document.querySelector("#bannar")

if(currentDate.getDay() == 3 || currentDate.getDay() == 4 || currentDate.getDay() == 5 || currentDate.getDay() == 6){
    bannar.style.display = "none";
}

function deleteBannar(){
    bannar.style.display = "none";
}