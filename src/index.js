// 1. Definimos las listas de palabras
const pronouns = ['the', 'our', 'my', 'your'];
const adjectives = ['great', 'big', 'crypto', 'smart', 'eco'];
const nouns = ['jogger', 'racoon', 'hub', 'lab', 'space'];
const extensions = ['.com', '.net', '.io', '.dev'];

// 2. Función que combina todo y lo muestra en la terminal
function generateDomains() {
    let domainCount = 0;

    // Estos bucles se encargan de mezclar cada palabra
    for (let p of pronouns) {
        for (let a of adjectives) {
            for (let n of nouns) {
                for (let ext of extensions) {
                    // console.log imprime el resultado en tu consola Bash
                    console.log(`${p}${a}${n}${ext}`);
                    domainCount++;
                }
            }
        }
    }
    
    console.log(`${domainCount} combinaciones de dominios.`);
}

// 3. Ejecutamos la función
generateDomains();
