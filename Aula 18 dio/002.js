//Evitando argumento inválido
function exponencial (array, num1 = 1){
    const resoult = [];

    for(let i = 0; i < array.length; i++) {
        resoult.push(array[i] ** num1);
    }
    return resoult
}

console.log(exponencial([1,2,3]))
console.log(exponencial([1,2,3], 5))

//Objeto arguments

function findMax(){
    let max = - Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}


console.log(findMax(1,2,9,15))

// Outro exemplo

function showArgs (){
    return arguments;
}

console.log(showArgs(1,20,[5,6,3],'Bob'))

//Spread

function sum (x,y,z){
    return x+y+z
}

const numbers = [5,2,3]

console.log(sum(...numbers))

//Rest

function confere (...args){
    console.log(args.length)
}
confere(1,5)

//object destructuring

const user = {
    id: 42,
    displayName: 'Jdoe',
    fullName: {
        firstName: 'Joe',
        lastName:'Doe'
    }
};

function userID({id}){
    return id;
}

function getFullName ({fullName:{firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

console.log(userID(user))
console.log(getFullName(user))