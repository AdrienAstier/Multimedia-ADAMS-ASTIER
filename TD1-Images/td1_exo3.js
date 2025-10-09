class Chose {
    constructor(parent) {
        // groupe pour englober la chose
        const g = parent.appendElement("g")
        // bordure autour de la chose
        g.appendElement("rect", {x: 1, y: 2, width: 3, height: 4, fill: "Gold"})
    }
}

// Exemple d'utilisation
const svg = SVGelement.fromSelector("#dessin")
const chose = new Chose(svg)