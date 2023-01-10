const ifStrongOrWeakPass = (password) => {
    if(password.length < 8){
        return 'Weak'
    }
    return 'strong';
}

const ternaryStrongOrWeakPass = (password) => password.length < 8 ? 'Weak' : 'Strong';

const andStrongOrWeakPass = (password) =>  (password.length < 8) && password.length < 100 ? 'Weak' : 'Strong'; // ?????????

const advancePassValidator = (password) => {
    if(password.length < 8) {
        return 'Weak';
    }
    else if(/[A-Z]/.test(password)) {
        return 'Very Strong';
    }
    return 'Strong'
}

console.log(ifStrongOrWeakPass('la12345'));
console.log(ternaryStrongOrWeakPass('la12345'));
console.log(andStrongOrWeakPass('la12345'));
console.log(advancePassValidator('Lla12345'));



