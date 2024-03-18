const express = require('express');
const router = express.Router();
const Submission = require('../models/submission');

// POST endpoint to handle form submissions
router.post('/submit', async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        // Create new submission document
        const newSubmission = new Submission({
            fullName,
            email,
            message
        });

        // Save submission to MongoDB
        await newSubmission.save();

        res.status(201).json({ success: true, message: 'Submission saved successfully' });
    } catch (error) {
        console.error('Error saving submission:', error);
        res.status(500).json({ success: false, message: 'An error occurred while saving the submission' });
    }
});

// GET endpoint to retrieve data from MongoDB
router.get('/', async (req, res) => {
    try {
        // Fetch submissions from MongoDB
        const submissions = await Submission.find();

        // Send the fetched submissions as a response
        res.status(200).json({ success: true, data: submissions });
    } catch (error) {
        // Handle error and send error response to frontend
        console.error('Error fetching submissions:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching submissions' });
    }
});

module.exports = router;
