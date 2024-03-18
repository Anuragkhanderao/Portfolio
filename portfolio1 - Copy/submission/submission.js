const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    message: String
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
