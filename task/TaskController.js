// const { application } = require('express');
const express = require ('express');
const Task = require('./Task');
const router = express.Router();


//get all tasks
router.get('/api/v1/tasks', async (req,res) => {
    Task.findAll()
        .then(tasks => {
            res.json(tasks);
            res.sendStatus(200);
        }).catch(e => {
            res.sendStatus(400);
        })
    
});

//create new task
router.post('/api/v1/tasks', async(req, res) => {
    const taskBody = req.body.task;
    const id = req.body.id;
    if(!id || !taskBody){
        res.sendStatus(400);
    }else{
        Task.create({
            task: taskBody,
            date: Date.now(),
            userId: id
        }).then(() => {
            res.sendStatus(201);
        }).catch(e => {
            res.statusCode = 500;
        });
    } 
});

//delete task
router.delete('/api/v1/tasks/:id', (req, res) => {
    const id = req.params.id;
    if(isNaN(id) && id != undefined) {
        res.sendStatus(400);
    }else{
        Task.destroy({
            where: {id: id}
        }).then(() => {
            res.sendStatus(204);
        }).catch(e => {
            res.sendStatus(404);
        })
    }
});

//update task
router.put('/api/v1/tasks/:id', (req, res) => {
    const id = req.params.id;
    const task = req.body.task;
    if(!task || isNaN(id)){
        res.sendStatus(400);
    }else{
        Task.update(
        {
            task: task
        }, 
        {
            where: {id: id}
        }).then((task) => {
            res.sendStatus(204);
        }).catch(e => {
            res.sendStatus(404);
        });
    }
});

module.exports = router;