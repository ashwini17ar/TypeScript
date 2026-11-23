function printPattern(): void {
  for (let i = 5; i >= 1; i--) {
    let line = "";

    for (let j = i; j >= 1; j--) {
      line = line+j;
    }

    console.log(line);
  }
}
printPattern(); 

console.log('********************');

function printPattern1(): void {
  for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line += j;
    }

    console.log(line);
  }
}





printPattern1();
console.log('********************');

function printPattern2(): void {
  for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = i; j <= 5; j++) {
      line =line+j;
    }

    console.log(line);
  }
}



printPattern2();

console.log('************new thing********');

function printStarPattern(): void {
  for (let i = 1; i <= 5; i++) {
    
  let line = "";
    for (let j = 1; j <= i; j++) {
    line += "*";
    }
console.log(line);
   
    
  }
}
printStarPattern();
