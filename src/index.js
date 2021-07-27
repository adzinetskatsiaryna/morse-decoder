const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
   // перебераем строку с шагом i=10 на каждой иттерации
    for(let i = 0; i<expr.length; i+=10){
        arr.push(expr.substr(i, 10)) //пушим в массив подстроки от позиции i размером 10
       // console.log(arr)
    }
   
    for (let item of arr) {
      let morse = item.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'); // заменяем 00, 10, 11 и * на '.' и '-'
      arr.splice(arr.indexOf(item),1, MORSE_TABLE[morse] || ' ') //удаляем 1 элмент в массиве по индексу и вставляем букву на его место из обекта MORSE_TABLE, если не нашлось совпадение вставляем пробел
    }
    return arr.join('')
    
}

module.exports = {
    decode
}



