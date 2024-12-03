import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to User model
        required: true, // Ensure every education entry belongs to a user
    },
    degree: {
        type: String,
        required: [true, "Degree is required"],
        trim: true,
    },
    college: {
        type: String,
        required: [true, "College is required"],
        trim: true,
    },
    fieldofstudy: {
        type: String,
        required: [true, "Field of Study is required"],
        trim: true,
    },
    startdate: {
        type: Date,
        required: [true, "Start Date is required"],
    },
    enddate: {
        type: Date,
        required: false, // Allow enddate to be optional
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const EducationModel = mongoose.model("education", educationSchema);

export default EducationModel;
