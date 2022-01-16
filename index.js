function findLargestCosecutiveRepetingChar (stringInput) {
    let strArr = stringInput.split("");
    let repetingChars ="";
    let tempRepetingChars="";

    for (let i=0; i<strArr.length;i++) {
        if(i === 0) {
            tempRepetingChars = strArr[i];
        } else {
            if(tempRepetingChars[0] === strArr[i]) {
                tempRepetingChars += strArr[i];
            } else {
                tempRepetingChars = strArr[i];
            }
            if( tempRepetingChars.length >= repetingChars.length) {
                repetingChars = tempRepetingChars;
            }
        }
    }

    return repetingChars;
}

// test function 
function testFunction(string){
    let result=findLargestCosecutiveRepetingChar(string);
    console.log(result);
}

//test with input
testFunction("aanyyeeeddk");
testFunction("btyyrjp");