function convertFeettoinches(){
    var feet =parseFloat(document.getElementById("heightFeet").value);
    var enteredInch = parseFloat(document.getElementById("heightInches").value);
    var convertInch = (feet * 12);
    var inch = (convertInch+enteredInch) ;    
    return inch;
}

function finalHeight(){
    var heigthinMetre = (convertFeettoinches() * 0.0254 ); 
    return heigthinMetre;
}

function calculateBMI(){
    var weightinKG = document.getElementById("weight").value;
    var heightFinal = finalHeight();
    var bmi = (weightinKG / (heightFinal* heightFinal ));
    var bmiFinal = bmi.toFixed(2);
    document.getElementById("output").innerHTML = "Your BMI is "+bmiFinal;
    /** Gives the Condition of the user */
    if(bmi > 0){
        if(bmi < 18.5)
            document.getElementById("condition").innerHTML = "You are Underweight";
        else if(bmi >= 18.5 && bmi <=24.9)
            document.getElementById("condition").innerHTML = "You are Healthy";
        else if(bmi >= 25.0 && bmi < 29.9)
            document.getElementById("condition").innerHTML = "You are OverWeight";
        else
            document.getElementById("condition").innerHTML = "You are Obese";
    }
    else
    document.getElementById("condition").innerHTML = "Try Again"
}
