function createPhoneNumber(numbers){
    let number = numbers.join('');
    return `(${number.substring(0,3)}) ${number.substring(3,6)}-${number.substring(6)}`;  
}