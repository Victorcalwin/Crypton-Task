
function splitNumbers(number){ 
    
    output = [],
    sNumber = number.toString();
    
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }
    
    console.log(output);
}
splitNumbers(123456)