const Todo = require('../model/todoModel');


const addTask = (req, res) => {
    var list = {
        'task': req.sanitize(req.body.task),
        'description': req.sanitize(req.body.description),
        'date': req.sanitize(req.body.date)
    }

    Todo.create(list, function(err, list) {
        if(err) {
            console.log(err);
        }
     res.redirect("/");
    });

};


const getTask = async (req, res) => {
    try{
        const task = await Todo.find();
        if(!task){
            return res.status(404).json({
                error: "Error in getting Task!",
            });
        }
        res.render("index", {
                     list: task
                 });
    }catch(e){
        return response.status(404).json({
            error: e,
        });
    }
};


const deleteTask = async(req, res) => {
    try{
       await Todo.findByIdAndRemove({_id: req.params.id } ,(err, result) => {
           if(err){
               return res.status(404).json({
                   message: "Error uy",
                   err : err
               });  
           }
        res.redirect('/')
        })
    }
    catch(e){
        return res.status(404).json({
            message : "Error uy",
            err: e
        })
    }
};

const getTaskForUpdate = async(req,res) => {
    try{
        Todo.findById(req.params.id, (err,task) => {
            if(err){
                return res.status(404).json({
                    message : "Error uy"
                })
            }
            // console.log(task);

            res.render("task/update",{list : task})
        })
    }
    catch (e) {
        return res.status(404).json({
            message: "Error uyy!",
            err : e
        })
    }

};

const updateTask = async(req, res) => {
    try{
        const result = await Todo.updateOne(
            {_id: req.params.id},
            {$set:req.body}
        );
        if (!result) {
            return response.status(404).json({
                error: "Error in updating task!",
            })
        }
        res.status(200).redirect('/');
    }
    catch(e){
        res.status(404).json({
            message: "Error uyy",
            err : e
        })
    }
}

module.exports = {
    addTask,
    getTask,
    deleteTask,
    updateTask,
    getTaskForUpdate
}