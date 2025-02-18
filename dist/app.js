// avec reduce
// function sommes(nombres: number[]): number {
//   return nombres.reduce((total, nombres) => total + nombres, 0);
// }
// sans reduce
function sommes(nombres) {
    let som = 0;
    for (let i = 0; i < nombres.length; i++) {
        som += nombres[i];
    }
    return som;
}
const nombres = [1, 2, 3, 4, 5, 6, 7];
console.log(sommes(nombres));
