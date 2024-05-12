export class Utils {
    static shuffleArray<T>(array: T[]): T[] {
        // Copie du tableau pour éviter la mutation du tableau d'origine
        const newArray = [...array];
        
        // Algorithme de Fisher-Yates pour mélanger le tableau
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        
        return newArray;
    }
};