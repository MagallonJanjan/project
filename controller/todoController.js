const Todo = require('../model/todoModel');


// const addTask = async (req, res) => {
//     try {
//         var list = {
//             'task': req.sanitize(req.body.list.task),
//             'description': req.sanitize(req.body.list.description),
//             'date': req.sanitize(req.body.list.date)
//         }

//         const newList = new Todo(list);
//         const result = await newList.save();

//         if (!result) {
//             return res.status(404).json({
//                 error :  "Error in adding new task!",
//             });
//         };
//     } catch (e) {
//         return res.status(404).json({
//             error: e,
//         });
//     }
// };

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
    // try {
    //     const tasks = await Todo.find();
    //     if (!tasks) {
    //         return res.status(404).json({
    //             error: "Error in getting tasks!",
    //         });
    //     }
    //     res.render("index", {
    //         list: tasks
    //     });

    // } catch (e) {
    //     return res.status(404).json({
    //         error: e,
    //     });
    // }
    Todo.find({}, function(err, task) {
        if(err) {
            console.log(err);
        }
        res.render("index", {
            list: task
        });
        // res.json(player)
    });
};


const deleteTask = async(req, res) => {

    try{
       await Todo.findByIdAndRemove({_id: req.params.id } ,(err, result) => {
           if(err){
               return res.status(404).json({
                   err : err
               });  
           }

        //    res.render("index",{
        //         list : task
        //    })

        //    res.status(200).json({
        //        message: "Okay na",
        //        result : result
        //    })
        res.redirect('/')
       })
    }
    catch(e){
        return res.status(404).json({
            err: e
        })
    }
};



const updateTask = async(req, res) => {
    try{
        
    }
    catch{

    }
}

module.exports = {
    addTask,
    getTask,
    deleteTask

}