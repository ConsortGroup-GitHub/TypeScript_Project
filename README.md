# TypeScript Project - Fonction Addition

Projet de démonstration TypeScript illustrant une fonction d'addition typée avec compilation et débogage sous Node.js.

## Prérequis

- **Node.js** >= 14.17
- **npm** (inclus avec Node.js)

## Installation

```bash
# Cloner le dépôt
git clone <url-du-depot>
cd TypeScript_Project

# Installer les dépendances
npm install
```

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run build` | Compile les fichiers TypeScript vers JavaScript dans `dist/` |
| `npm start` | Exécute le fichier compilé `dist/addition.js` |
| `npm run dev` | Compile puis exécute en une seule commande |

## Utilisation

```bash
# Compiler et lancer le programme
npm run dev
```

Sortie attendue :

```
la valeur de a est : 13
la valeur de b est : 5
13 + 5 = 18
Le résultat de l'addition est de : 18
```

## Structure du projet

```
TypeScript_Project/
├── src/
│   └── addition.ts       # Code source principal
├── dist/                  # Fichiers JS compilés (généré par tsc)
├── .vscode/
│   └── launch.json        # Configuration de débogage VS Code
├── package.json
├── tsconfig.json
└── .gitignore
```

## Informations techniques

| Élément | Valeur |
|---|---|
| Langage | TypeScript 5.9.3 |
| Cible de compilation | ES2020 |
| Système de modules | CommonJS |
| Mode strict | Activé |
| Source maps | Activées |
| Runtime | Node.js |

### Configuration TypeScript (`tsconfig.json`)

- **rootDir** : `./src` — répertoire des sources TypeScript
- **outDir** : `./dist` — répertoire de sortie des fichiers compilés
- **strict** : `true` — vérification stricte des types activée
- **sourceMap** : `true` — génération des source maps pour le débogage
- **esModuleInterop** : `true` — compatibilité avec les imports ES Modules

## Fonctionnalités

### Fonction `addition(a, b)`

Fonction exportée qui additionne deux nombres.

```typescript
export function addition(a: number, b: number): number
```

- **Paramètres** : deux valeurs de type `number`
- **Retour** : la somme des deux paramètres (`number`)
- **Logs** : affiche les valeurs d'entrée et le résultat dans la console

## Débogage avec VS Code

Une configuration de débogage est incluse (`.vscode/launch.json`). Pour l'utiliser :

1. Ouvrir le projet dans VS Code
2. Aller dans l'onglet **Run and Debug** (`Ctrl+Shift+D`)
3. Sélectionner la configuration **Debug TypeScript**
4. Lancer avec `F5`

La compilation est automatiquement effectuée avant le lancement grâce à la tâche `preLaunchTask`.

## Licence

ISC
