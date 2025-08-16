let i = 0;
while (i <= 10){
    console.log(i);
    i = i + 1;
    
}

for (let q = 2 ; q <= 20 ; q += 2){
      if (q % 2 !== 0) {
        continue; 
  }
  console.log(q);
  
}




const number = 7;
for(let s = 0; i <= 10; i+= 1){
    console.log(`${number * s}`);
    
}




let fixedNumber = Number(prompt("введіть ваше число n"))
for(let l = 0 ; l < fixedNumber ; l += 1){
    if (l > fixedNumber){
        break
    }
    console.log(l);
    
}



let d = 1
while(d <= 20){
    d = d + 1
          if (d % 3 === 0) {
        continue; 
  }
  console.log(d);
  
}