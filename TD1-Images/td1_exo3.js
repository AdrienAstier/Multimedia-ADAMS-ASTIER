// class Chose {
//     constructor(parent) {
//         // groupe pour englober la chose
//         const g = parent.appendElement("g")
//         // bordure autour de la chose
//         g.appendElement("rect", {x: 1, y: 2, width: 3, height: 4, fill: "Gold"})
//     }
// }

// // Exemple d'utilisation
// const svg = SVGelement.fromSelector("#dessin")
// const chose = new Chose(svg)

class Voilier {
    constructor(parent) {
        // groupe pour englober le voilier
        const g = parent.appendElement("g");

        g.appendElement("rect", {
            x: 6, y: 0.5, width: 0.2, height: 5,
            fill: "LightGray"
        });

        g.appendElement("path", {
            d: "M 9 5 L 6 0.5 L 4 5 Z",
            fill: "white",
            stroke: "#000",
            "stroke-width": 0.02
        });

        g.appendElement("path", {
            d: "M 9 5 L 3.5 5.3 L 3 6.5 L 8 6.5 Z",
            fill: "brown"
        });
    }
}

class Paysage {
    constructor(parent) {
        // groupe pour le paysage
        const g = parent.appendElement("g");

        // Fond
        g.appendElement("rect", {
            x: 0, y: 0, width: 16, height: 9,
            fill: "#DFF"
        });
        g.appendElement("rect", {
            x: 0, y: 6, width: 16, height: 3,
            fill: "LightBlue"
        });
        g.appendElement("circle", {
            cx: 13, cy: 1.5, r: 1,
            fill: "yellow"
        });

        // Voilier
        const voilier = new Voilier(g, 6, 5);
    }
}

// Initialisation quand la page est prête
document.addEventListener('DOMContentLoaded', function() {
    const svg = SVGelement.fromSelector("#dessin-demo");
    if (svg) {
        new Paysage(svg);
    }
});