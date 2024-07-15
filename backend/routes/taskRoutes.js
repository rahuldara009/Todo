import express from "express";
import TaskModel from "../models/taskModel.js";

const taskRouter = express.Router();

// Route to read all tasks
taskRouter.get("/read", async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to create a new task
taskRouter.post('/create', async (req, res) => {
    const { title, description, deadline, tag,completeornot } = req.body;

    try {
        const newTask = new TaskModel({
            title,
            description,
            tag,
            deadline: new Date(deadline), // Assuming deadline is passed as a string in dd mm yy format
            completeornot
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to delete a task by ID
taskRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await TaskModel.findByIdAndDelete(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to update a task by ID
taskRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, deadline, tag,completeornot } = req.body;
    try {
        const response = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default taskRouter;
