import * as fs from 'fs';

fs.readFile('./staticCodes.txt', 'utf8',(err,data) => {
  if(err){
    console.log("found err", err);
    return;
  }
   const splitLInes = data.split('\n');
   const list1: number[] = [];
   const list2: number[] = [];
   let totalDifference = 0;

   splitLInes.forEach(each => {
    const [num1, num2] = each.trim().split(/\s+/);
       list1.push(parseInt(num1, 10));
       list2.push(parseInt(num2, 10));
   });

   list1.sort((a,b) => a - b);
   list2.sort((a,b) => a - b);

   // Assumption lists are of the same length : true
   for(let i = 0; i < list1.length; i++){
      totalDifference+= Math.abs(list1[i] - list2[i]);
   }
  // 1506483
   console.log(totalDifference);
});