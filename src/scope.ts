const kafe = 'Kardemumma'

function visaNamn() {
    const recept = 'hemligt'
    console.log(kafe) // gissning:
    console.log(recept) // gissning:
}
visaNamn()

//  Kardemummahemligt
//Kardemumma
//Hemligt

let räknare = 0
function ökaRäknare() {
    räknare = räknare + 1
}
ökaRäknare()
ökaRäknare()
console.log(räknare) // gissning:

//2
//2

function lokal() {
    let räknare = 100
    räknare++
    return räknare
}
console.log(lokal()) // gissning:
console.log(räknare) // gissning:

// Ta bort kommentaren på nästa rad och läs felet:
//console.log(recept) // gissning:

//101
//undefined

//101
//2

for (let i = 0; i < 3; i++) {
    console.log('varv', i)
}

//0 1 2
//varv 0
//varv 1
//varv 2

/*
## Skriv din regel

Fyll i med egna ord:

- En variabel som skapas inuti en funktion kan ... utanför funktionen.
- En funktion kan se variabler som ligger ... den.
- `let i` i en for-loop lever ...

Ifylld:

- En variabel som skapas inuti en funktion kan inte användas utanför funktionen.
- En funktion kan se variabler som ligger ovanför den.
- `let i` i en for-loop lever i for loopen
*/
