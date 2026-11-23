function reverseStringnew(str: string): string {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
   reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseStringnew("hello")); // Output: olleh

console.log('*****************************');

function usingInbuiltMethod(){

  
  let str:String = "typescript";

  let result = str.split("").reverse().join("");

  console.log(result);

}

usingInbuiltMethod()
function reversde(){
  let rev = "";
  let str:String = "happy";
  console.log(str.length);  

  for (let j=str.length-1;j>=0;j--){
    rev = rev+str[j];
   
  }
   console.log(rev);
}

reversde();



function reverseString(str:String):String {
  if (str === "") {
    return "";
  }

  return reverseString(str.substring(1)) + str[0];
}
console.log(reverseString("hello"));