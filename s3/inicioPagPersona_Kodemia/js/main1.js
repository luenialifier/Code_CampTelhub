




function getCarData (){
    var carCompany = $("#car-company").val();
    var carModel = $("#car-model").val();
    var carColor = $("#car-color").val();
    var carHP = $("#car-horse-power").val();
    var carCilinders = $("#car-cilinders").val();
    console.log(car-company,car-model,car-color,car-horse-power,car-cilinders);

    var carObjet = {

        company:carCompany,
        model:carModel,
        color:carColor,
        horsePower:carHP,
        cilinders:carCilinders

    }
    mazdaCars.push(carObjetc);
    console.log(mazdaCars)
}
$("#submit-button").on("click", function (){
    getCarData();
});

if(!localStorage.getItem("carsArray")){

    localStorage.setItem("carsArray",)
}