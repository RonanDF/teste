//ATIVIDADE 1
let numA = 2;
let numB = 6;
let numC = 9;

const verificarPar = (numA, numB, numC) => {
    if (numA % 2 === 0 || numB % 2 === 0 || numC % 2 === 0) {
        return true;
    }else{
        return false
    }
}

console.log(verificarPar(numA, numB, numC));

//ATIVIDADE 2
const fatorial = (numFatorial) => {
    let resultado = numFatorial;
    for (let i = numFatorial - 1; i >= 1; i--) {
        resultado = resultado * i;
    }

    return resultado;
}

console.log(fatorial(10));

//ATIVIDADE 3
function quadrado(n) {

    if (n > 1) {

        for (var i = 0; i < n; i++) {
            var linha = '';

            for (var j = 0; j < n; j++) {
                linha += '* ';
            }

            console.log(linha);
        }
    } else {
        console.log("O valor de n deve ser maior que 1.");
    }
}

quadrado(5);

//ATIVIDADE 4
const school = {
    lessons: [
        {
            course: 'Python',
            students: 20,
            professor: 'Carlos Patrício',
            shift: 'Manhã',
        },
        {
            course: 'Kotlin',
            students: 10,
            professor: 'Gabriel Oliva',
            shift: 'Noite',
        },
        {
            course: 'JavaScript',
            students: 738,
            professor: 'Gustavo Caetano',
            shift: 'Tarde',
        },
        {
            course: 'MongoDB',
            students: 50,
            shift: 'Noite',
        },
    ]
};

const somaEstudante = (dados) => {
    let resultado = 0;
    for (let i = 0; i < dados.lessons.length; i++) {
        resultado += dados.lessons[i].students;
    }

    return resultado;
}

console.log(somaEstudante(school));

//ATIVIDADE 5
const alteraOTurno = (dados, curso, valorDaChave) => {
    for (let i = 0; i < dados.lessons.length; i++) {
        if (dados.lessons[i].course === curso) {
            dados.lessons[i].shift = valorDaChave;
            break;
        }
    }
}

alteraOTurno(school, "Python", "Noite");

console.log(school);