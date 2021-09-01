// Game states
// "Win" - Player robot has defeated all enemy robots.
//      * Fight all enemy robots.
//      * Defeat each enemy-robot.
// "Lose" - Player robot's health is zero or less.

var fightOrSkip = function() {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    // conditional recursive function call
    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes, leave fight.
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight! Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);    
                return true;
            }
        }
    return false;
}


var fight = function(enemy) {
    // window.alert("Welcome to Robot Gladiators!");
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
    }
        // generate random damage value based on players attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
    
    // check enemy health.
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health remaining.");
    }
        
    // generate random damage value based on enemy attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        
    // Check player health.
    if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " has died!");
        break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
        }
    }  
};

var startGame = function() {
    // reset player stats
    playerInfo.reset ();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // pick new enemy to fight based on index of enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            // reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the name of the enemyName parameter
            fight(pickedEnemyObj);
            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                shop();
            }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        // Ask player if they'd like to play again
    };
    
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if the player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            // restart the game;
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators!");
        }

};

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    // switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": 
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            // do nothing so function ends.
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop function again to force player to pick a valid option
            shop();
            break;
    }

};

var randomNumber = function(max, min) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
        window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
    name: "Roborto",
    attack: randomNumber(10, 14)
    },
    {
    name: "Amy Android",
    attack: randomNumber(10, 14)
    },
    {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
    }
];

startGame();
