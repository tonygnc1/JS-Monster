const ATTACK_VALUE = 10;

let chosenMAxLife = 100;
let currentMonsterHealth = chosenMAxLife;
let currentPlayerHealth = chosenMAxLife;


adjustHealthBars(chosenMAxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);