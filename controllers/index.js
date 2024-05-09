const Todo = require('../models/Todo')

const getIndex = (req, res) => {
    Todo.find({})
    .then(todos => {
        console.log(todos);
        res.render('index', { todos: todos });
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des tâches');
    });

    
};


const PostIndex = (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    console.log(newTodo);
    newTodo.save()

    res.redirect('/');
    
}

const deleteIndex = (req, res) =>{
    const { id } = req.params;

    Todo.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.error(err);
            // Gérer l'erreur si nécessaire
            res.status(500).send('Une erreur s\'est produite lors de la suppression de la tâche');
        });

}

module.exports = {
    getIndex: getIndex,
    PostIndex: PostIndex,
    deleteIndex: deleteIndex
}
