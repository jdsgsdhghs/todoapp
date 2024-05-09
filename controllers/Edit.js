const Todo = require('../models/Todo')

const getEdit = (req, res) =>{
    const { id } = req.params;

    Todo.findById(id)
        .then(todo => {
            console.log(todo);
            res.render('edit', { todo: todo });
        })
        .catch(err => {
            console.error(err);
            // Gérer l'erreur si nécessaire
            res.status(500).send('Une erreur s\'est produite lors de la récupération de la tâche');
        });
    
    
}
 const PutEdit = (req, res) =>{
    const { id } = req.params;

    Todo.findByIdAndUpdate(id, { title: req.body.title })
        .then(todo => {
            if (!todo) {
                // Gérer le cas où aucun document correspondant n'est trouvé
                return res.status(404).send("Tâche introuvable");
            }
            console.log("Tâche mise à jour :", todo);
            res.redirect('/');
        })
        .catch(err => {
            console.error(err);
            // Gérer l'erreur si nécessaire
            res.status(500).send("Une erreur s'est produite lors de la mise à jour de la tâche");
        });
    
 }

module.exports = {
    getEdit: getEdit,
    PutEdit:PutEdit
}