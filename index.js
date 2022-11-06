const prompt = require("prompt-sync")({ sigint: true });

//Coins=[25,10,5,1]
amount=prompt("Amount: ");
Result=0;
remainder = 0;
Count=0;
i=0;

   Division1 = Math.floor(amount / 25);
   answer1 = amount % 25;
   //console.log(Division1);
   //console.log(answer1);

   Division2 = Math.floor(answer1 / 10);
   answer2 = answer1 % 10;
   //console.log(Division2);
   //console.log(answer1);

   Division3 = Math.floor(answer2 / 5);
   answer3 = answer2 % 5;
   //console.log(Division2);
   //console.log(answer2); 

   Division4 = Math.floor(answer3 / 1);
   answer4 = answer3 % 1;
   //console.log(Division3);
   //console.log(answer3);

console.log(`25-Coins:${Division1} ` + ` 10-Coins:${Division2} ` + ` 5-Coins:${Division3} ` + ` 1-Coins:${Division4}`);


