import mongoose from 'mongoose';

const { Schema } = mongoose;

const timeSheetsSchema = new Schema({
  description: { type: String, required: true },
  date: { type: String, required: true },
  hours: { type: Number, required: true },
  task: { type: Schema.Types.ObjectId, ref: 'Task' },
  employee: { type: Schema.Types.ObjectId, ref: 'Employees' },
  project: { type: Schema.Types.ObjectId, ref: 'Projects' },
});

export default mongoose.model('TimeSheets', timeSheetsSchema);
