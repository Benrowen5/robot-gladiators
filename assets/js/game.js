// Game states
// "Win" - Player robot has defeated all enemy robots.
//      * Fight all enemy robots.
//      * Defeat each enemy-robot.
// "Lose" - Player robot's health is zero or less.


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["roborto" , "Amy Android" , "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // window.alert("Welcome to Robot Gladiators!");
    while (playerHealth > 0 && enemyHealth > 0) {
        // Ask player if they want to fight or run.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip.
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes, leave fight.
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight! Goodbye!");
                playerMoney = Math.max(0, playerMoney - 10);    
                console.log("playerMoney" , playerMoney);
                break;
            }            
        }
        // generate random damage value based on players attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    // check enemy health.
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }
        
    // generate random damage value based on enemy attack power
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = Math.max(0, playerHealth - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
    // Check player health.
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }  
};

var startGame = function() {
    // reset okayer stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // pick new enemy to fight based on index of enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40, 60);
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the name of the enemyName parameter
            fight(pickedEnemyName);
            if (i < enemyNames.length - 1 && playerHealth > 0) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
            if (playerMoney >= 7) {
                window.alert("refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You do not have enough money!");
            }
            break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // increase player attack and decrease money
                playerAttack = playerAttack + 6;
                playerMonday = playerMoney - 7;
            } else {
                window.alert("You do not have enough money!");
            }
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

// debugger;
startGame();
