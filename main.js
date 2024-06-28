"use strict";
const button = document.querySelector("button");
const resetButton = document.querySelector(".calc__button-reset");
const medicalExpenses = document.querySelector("#medical-expenses");
const propertyDamages = document.querySelector("#property-damages");
const lostIncom = document.querySelector("#lost-income");
const futureMedicalExpenses = document.querySelector("#future-medical-expenses");
const multiplier = document.querySelector("#multiplier");
const economicDamages = document.querySelector("#economic-damages");
const nonEconomicDamages = document.querySelector("#non-economic-damages");
const total = document.querySelector("#total");

function calculatorInit() {
    button.addEventListener("click", () => {
        calculate();
        addDecimalIfNeeded();        
    });
    resetButton.addEventListener("click", reset);
    
    button.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            calculate();
            addDecimalIfNeeded();
            console.log("enter")      
        }
    });

    //Add a default value for the multiplier
    window.addEventListener("DOMContentLoaded", () => {
        function setDefaultMultiplierValue(multiplier, value){
            multiplier.value = value;
        }
        setDefaultMultiplierValue(multiplier, 1)
    })

    function calculate() {
        let sum = ((Number(medicalExpenses.value) + Number(propertyDamages.value) + Number(lostIncom.value) + Number(futureMedicalExpenses.value))) * Number(multiplier.value);
        if (!isNaN(sum)) {
            total.value = sum;
        } else {        
            total.value = "There was an error";
        }       
    }    

    function addDecimalIfNeeded() {
        const currentValue = parseFloat(total.value);
        if (currentValue > 100) {
            total.value = currentValue.toFixed(2); 
        }
    }

    function reset() {
        const inputs = document.querySelectorAll(".calc input");    
        inputs.forEach(input => {
            input.value = '';
        });
    }
}

calculatorInit();
