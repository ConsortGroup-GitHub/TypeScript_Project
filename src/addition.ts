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

let a = 28;
let b = 11;

const resultat = addition(a, b);

console.log(a + " + " + b + " = " + resultat);
console.log("Le résultat de l'addition est de : " + resultat);

// Commentaire à la fin pour faire un test Avec une modification de ce commentaire. 
