# Scope: gissa först, kör sedan

Kopiera koden nedan till en ny fil, `src/scope.ts`, och lägg raden `import "./scope";` överst i `src/loopar.ts`. Då körs den när sidan laddas.

Obs: i TypeScript syns några av felen redan som röda understrykningar. Det är en del av poängen.

**Gissa vad varje `console.log` skriver ut INNAN du kör.** Skriv din gissning som kommentar bredvid.

```ts
const kafe = 'Kardemumma'

function visaNamn() {
    const recept = 'hemligt'
    console.log(kafe) // gissning:
    console.log(recept) // gissning:
}
visaNamn()

//  Kardemummahemligt

let räknare = 0
function ökaRäknare() {
    räknare = räknare + 1
}
ökaRäknare()
ökaRäknare()
console.log(räknare) // gissning:

//2

function lokal() {
    let räknare = 100
    räknare++
    return räknare
}
console.log(lokal()) // gissning:
console.log(räknare) // gissning:

// Ta bort kommentaren på nästa rad och läs felet:
console.log(recept) // gissning:
//101
//undefined

for (let i = 0; i < 3; i++) {
    console.log('varv', i)
}
// Ta bort kommentaren på nästa rad och läs felet:
// console.log(i);         // gissning:

//0 1 2
varv 0
varv 1
varv 2
```

## Skriv din regel

Fyll i med egna ord:

- En variabel som skapas inuti en funktion kan ... utanför funktionen.
- En funktion kan se variabler som ligger ... den.
- `let i` i en for-loop lever ...

Ifylld:

- En variabel som skapas inuti en funktion kan inte användas utanför funktionen.
- En funktion kan se variabler som ligger ovanför den.
- `let i` i en for-loop lever i for loopen
