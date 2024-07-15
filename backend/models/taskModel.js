import mongoose from "mongoose";
const  Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: String, required: true },
    tag:{type:String,required:true},
    completeornot: { type: Boolean, default: false }
  },
  { timestamps: true } // Remove the trailing comma here
);

const TaskModel = mongoose.model("TaskModel", TaskSchema);

export default TaskModel;
