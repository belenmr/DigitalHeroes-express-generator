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
        let status = req.params.ok;
        let heroe = heroes.find(heroe => heroe.id === Number(req.params.id) );
        
        res.render('heroes-bio', {
            title: 'Digital Heroes',
            textNotFound: "No encontramos un héroe para mostrarte su biografía",
            status: status,
            heroe: heroe
        });
    }
}

