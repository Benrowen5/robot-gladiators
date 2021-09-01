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
                playerMoney = playerMoney - 10;    
                console.log("playerMoney" , playerMoney);
                break;
            }            
        }
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
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
        
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
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
            enemyHealth = 50;
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the name of the enemyName parameter
            fight(pickedEnemyName);
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

debugger;
startGame();
