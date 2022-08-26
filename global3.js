let brand-fanduel = {};
$.getScript("https://cdn.jsdelivr.net/gh/YesDominus/dist@main/brand-fanduel.min.js", function() {
  brand-fanduel = fanduel;
});

function setOperatorBonus(operatorBonusTD, setBonus) {
    if (operatorBonusTD) {
        for (i = 0; i < operatorBonusTD.length; i++) {
            let currentBonusTD = operatorBonusTD[i]
            currentBonusTD.innerHTML = setBonus;
        }
    }
}
