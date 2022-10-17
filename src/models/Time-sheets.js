import mongoose from 'mongoose';

const { Schema } = mongoose;

const timeSheetsSchema = new Schema({
  description: { type: String, required: true },
  date: { type: String, required: true },
  hours: { type: Number, required: true },
  tasks: { type: String, required: true },
});

export default mongoose.model('TimeSheets', timeSheetsSchema);
