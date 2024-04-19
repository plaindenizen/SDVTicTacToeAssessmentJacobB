//SECTION - 3x3 grid using for loops

// let gridx = []
// let y = 0
// for (i=0; i<3; i++) {
    
//     for (x=0; x<3; x++) {
//         y++
//         if (gridx.length == 3) {
//             continue;
//         }
//         gridx.push(y)
//     }
//     console.log(gridx)
// }




// let x = []
// let y = []

// for (i=0; i<3; i++) {
//     for (i=0; i<3; i++) {
//         console.log('-')
//     }
// }

// gridx1 =[1,2,3]
// gridx2 =[4,5,6]
// gridx3 =[7,8,9]

// console.log(gridx2[2])

// let sign = console.log("Welcome to tictactoe");

// const readline = require('readline')

// const r1 = readline.Interface({
//     input: process.stdin,
//     outpu: process.stdout
// })

// r1.question('P1 move', (answer) => {
//     console.log(answer.concat(' is your move'))
//     process.exit()      
// }) 

// let x1 = [];
// let x2 = [];
// let x3 = [];

// for (i=1; i<4; i++) {
//     x1.push(i)
// } console.log(x1)

// for (i=4; i<7; i++) {
//     x2.push(i)
// } console.log(x2)

// for (i=7; i<10; i++) {
//     x3.push(i)
// } console.log(x3)

const readline = require('readline')

const r1 = readline.Interface({
    input: process.stdin,
    output: process.stdout
})


let x1 = [];
let x2 = [];
let x3 = [];

function grid(){
    for (i=1; i<4; i++) {
        x1.push(i)
    } console.log(x1)
    for (i=4; i<7; i++) {
        x2.push(i)
    } console.log(x2)
    for (i=7; i<10; i++) {
        x3.push(i)
    } console.log(x3)
}

grid()


r1.question('Please input youer move ',(answer) => {    //if no text is included in question parameter the nit wont worrk for some reason.
    console.log(answer.concat(" is your move"))
    process.exit()
})

console.log(r1.question.answer)