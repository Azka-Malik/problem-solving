const prompt = require("prompt-sync")({ sigint: true });

//const age = prompt("How old are you? ");
//console.log(`You are ${age} years old.`);

Coins=[25,10,5,1]
const amount=prompt("Amount: ");
Result=0;
remainder = 0;
Count=0;
i=0;
    // Result = amount/Coins[i];
     if(amount%Coins[i] == 0){
        Result = amount / Coins[i];
     }
     else if (amount%Coins[i] != 0){
        remainder = amount%Coins[i];
        
            n = remainder / Coins[i+1];
            if(n==0){
                Result= Result + n;
            }

     }
   //return CoinReturn;   
console.log(`Return Coins: ${Result}.`)



