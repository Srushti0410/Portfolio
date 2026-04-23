const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Atlas connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact form schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true },
  submittedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// POST /contact — save form submission
app.post('/contact', async (req, res) => {
  try {
    const { Name, Email, Message } = req.body;

    if (!Name || !Email || !Message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const contact = new Contact({ name: Name, email: Email, message: Message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message saved successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Portfolio backend is running.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
