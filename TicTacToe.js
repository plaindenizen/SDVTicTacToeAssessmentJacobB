//SECTION - 3x3 grid using for loops

let gridx = []
let y = 0
for (i=0; i<3; i++) {
    
    for (x=0; x<3; x++) {
        y++
        gridx.push(y)
    }
    console.log(gridx)
}
