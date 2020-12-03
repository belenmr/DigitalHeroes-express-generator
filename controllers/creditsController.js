module.exports = {
    credits: (req,res) => {
        res.render('credits', {
            title_head: 'Digital Heroes',
            title_body: 'Creditos',
            text: 'Ejercicio realizado por Belén Medina Roldán'});
    }
}