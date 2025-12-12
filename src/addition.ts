/**
 * Additionne deux nombres
 * @param a - Premier nombre
 * @param b - Deuxième nombre
 * @returns La somme de a et b
 */
export function addition(a: number, b: number): number {
  
  console.log("la valeur de a est :", a);
  console.log("la valeur de b est :", b);

  return a + b;
}

// Exemple d'utilisation

let a = 12;
let b = 5;

const resultat = addition(a, b);

console.log(`12 + 5 = ${resultat}`);
console.log(a + " + " + b + " = " + resultat);
console.log("Le résultat de l'addition est de : " + resultat);
