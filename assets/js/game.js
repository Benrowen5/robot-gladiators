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
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // check enemy health.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
         playerHealth = playerHealth - enemyAttack;
         // Log a resulting message to the console so we know that it worked.
         console.log(
         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
         );
        
        // Check player health.
        if (playerHealth <=0) {
         window.alert(playerName + " has died!");s
         }
         else {
             window.alert(playerName + " still has " + playerHealth + " health remaining.");
         };
        
     //  if player chooses to skip.
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip.
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes, leave fight.
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            playerMoney = playerMoney - 2;    
            console.log(playerMoney);
        }
        // if no ask again by running fight().
        else {
            fight();
        };
    } else {
        window.alert("You need to choose a valid option. Try again!");
    };
};
    
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

