import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"], // Custom error message
        trim: true, // Trim spaces
    },
    lastname: {
        type: String,
        required: [true, "Lastname is required"],
        trim: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"], // Adding validation for gender
    },
    age: {
        type: Number,
        min: [15, "Age cannot be Less than 15"], // Adding a minimum value validation
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address", // Regex validation for email
        ],
    },
    address: {
        type: String,
    },
    mobile: {
        type: String,
        required: [true, "Contact is required"],
        match: [
            /^\d{10}$/,
            "Contact number must be 10 digits", // Simple validation for phone number
        ],
    },
    bio: {
        type: String,
        maxlength: [200, "Bio cannot exceed 200 characters"], // Limit length of bio
    },
    role: {
        type: String,
        enum: ["admin", "client"],
        required: [true, "Role is required"],
        default: "client", // Default role
    },
    language: {
        type: [String],
    },
    intrested_topic: {
        type: [String],
    },
    social_media_link: {
        type: [String],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"], // Enforce password length
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
});

// Convert schema to model object
const UserModel = mongoose.model("user", userSchema);

export default UserModel;
