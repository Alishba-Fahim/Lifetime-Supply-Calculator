
function calculation(current_Age, maximum_Age, snack_PerDay) {
    let remainingAge = maximum_Age - current_Age; 
    let total_Snack = remainingAge * snack_PerDay * 365; 
    return total_Snack;
}

function startCalculation() {
    let fvrt_Snack = prompt("What is your favourite snack?");
    let current_Age = parseInt(prompt("Enter your current age:"));
    let maximum_Age = parseInt(prompt("Enter your life expectancy (how long you think you'll live):"));
    let snack_PerDay = parseInt(prompt("Enter how many snacks you eat per day:"));

    if (isNaN(current_Age) || isNaN(maximum_Age) || isNaN(snack_PerDay)) {
        document.getElementById("result").innerHTML = "Please Enter Valid Numbers!";
        return;
    }
    let totalSupply = calculation(current_Age, maximum_Age, snack_PerDay);
    document.getElementById("result").innerHTML = `You will need ${totalSupply} ${fvrt_Snack} to last you until the ripe old age of ${maximum_Age}`;
}
