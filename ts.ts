/*function idadeNome(id : number, name : string) { // precisa TYPAR
    console.log()
}

console.log(idadeNome(23, 'Alvaro'))

const boiolas = (boiola1: string, boiola2: string) : string => {  //declara tudo
    return boiola1 + boiola2
}
console.log(boiolas('b', 'c'));*/

type PqpProps = {
    fdp: string;
};

export const fdp = (a: string, b: string) : PqpProps => {
    return {
        fdp: a + b
    };
}