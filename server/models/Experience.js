import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to User model
        required: true, // Ensure every experience entry belongs to a user
    },
    jobtitle: {
        type: String,
        required: [true, "Job Title is required"],
        
    },
    company_name: {
        type: String,
        required: [true, "Company Name is required"],
        
    },
    startdate: {
        type: Date,
        required: [true, "Start Date is required"],
    },
    enddate: {
        type: Date,
        required: false, // Allow enddate to be optional
    },
    employment_type: {
        type: String,
        required: [true, "Employment Type is required"],
    },
    industry: {
        type: String,
        required: [true, "Industry is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
}, {
    timestamps: true,
});

const ExperienceModel = mongoose.model("experience", experienceSchema);

export default ExperienceModel;
