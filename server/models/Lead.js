import mongoose from 'mongoose';
const timelineSchema = new mongoose.Schema({ action: { type: String, required: true }, date: { type: Date, default: Date.now } }, { _id: false });
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, phone: { type: String, required: true, trim: true },
  property: { type: String, required: true }, location: { type: String, required: true }, budget: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['New','Contacted','Interested','Hot','Follow-up','Closed','Lost'], default: 'New' },
  priority: { type: String, enum: ['High','Medium','Low'], default: 'Medium' }, assignedTo: { type: String, required: true },
  nextFollowUp: Date, followUpCompleted: { type: Boolean, default: false }, notes: { type: String, default: '' }, timeline: { type: [timelineSchema], default: [] }
}, { timestamps: true });
export default mongoose.model('Lead', leadSchema);
