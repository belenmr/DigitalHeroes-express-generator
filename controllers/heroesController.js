const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    showHeroes: (req, res) => {
        res.render('heroes', {
            title: 'Digital Heroes',
            heroes: heroes});
    },
    detail: (req,res) => {
        let heroe = heroes.find(heroe => heroe.id === Number(req.params.id) );	
        
        res.render('heroes-detail', {
            title: 'Digital Heroes',
            text: "Heroe no encontrado",
            heroe: heroe
        });
    },
    biography: (req,res) => {
        let heroe = heroes.find(heroe => heroe.id === Number(req.params.id) );

        if (heroe === undefined) {
            res.send("No encontramos un héroe para mostrarte su biografía");
        } else if (req.params.ok === 'ok'){
            res.send(`Heroe: ${heroe.nombre} <br> Reseña: ${heroe.resenia}`);
        } else {
            res.send(`${heroe.nombre} dice: Lamento que no quieras saber más de mí :(`);
        }
    }
}

