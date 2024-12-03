import UserModel from "../models/User.js";
import ExperienceModel from "../models/Experience.js"
import EducationModel from "../models/Education.js";

class profileController {
    static getUserAllInfo = async (req, res) => {
        try {
            const user = req.user;
            const userEducation = await EducationModel.find({userId:user._id}); 
            const userExperience = await ExperienceModel.find({userId:user._id}); 
            res.send({ message: "sucess", result: user,education:userEducation, experience:userExperience });
        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
        }
    }
    static addEducation = async (req, res) => {
        try {
            const { degree, college, fieldofstudy, startdate, enddate } = req.body;
            const user = req.user;

            if (!degree || !college || !fieldofstudy || !startdate) {
                return res.status(400).send({ error: "All fields are required" });
            }

            const newEducation = new EducationModel({
                userId: user._id,
                degree: degree,
                college: college,
                fieldofstudy: fieldofstudy,
                startdate: startdate,
                enddate: enddate || null // If enddate is not provided, set it to null
            });
            const saveEducation = await newEducation.save();

            res.send({ message: "Submitted", result: saveEducation });

        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }
    static addExperience = async (req, res, next) => {
        try {
            const { jobtitle, company_name, industry, startdate, enddate, employment_type, location } = req.body;
            const user = req.user;

            if (!jobtitle || !company_name || !industry || !startdate || !employment_type || !location) {
                return res.status(400).send({ error: "All fields are required" });
            }

            const newExperience = new ExperienceModel({
                userId: user._id,
                jobtitle: jobtitle,
                company_name: company_name,
                startdate: startdate,
                enddate: enddate || null, // If enddate is not provided, set it to null
                industry: industry,
                employment_type: employment_type,
                location: location

            });
            const saveExperience = await newExperience.save();

            res.send({ message: "Submitted", result: saveExperience });

        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }

    static updatePersonalInfo = async (req, res, next) => {
        try {
            // console.log(skip);
            const { firstname, lastname, email, gender, age, address } = req.body
            const user = req.user  //here complete user docmuent is served

            if (!firstname || !lastname || !email || !gender || !age || !address) {
                return res.status(400).send({ error: "All fields are required" });
            }
            // Update the user document with the new personal info
            const updatedUser = await UserModel.findByIdAndUpdate(
                user._id,  // Use the user's ID
                {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    gender: gender,
                    age: age,
                    address: address
                },
                { new: true }  // To return the updated document
            );
            // console.log(results);
            res.send({ message: "Updated", result: updatedUser });
        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
        }
    }



    static updateBio = async (req, res, next) => {
        try {
            const { bio } = req.body;
            const user = req.user;
            if (!bio) {
                return res.status(400).send({ error: "All fields are required" });
            }
            // Update the user document with the new personal info
            const updatedUser = await UserModel.findByIdAndUpdate(
                user._id,  // Use the user's ID
                {
                    bio: bio,
                },
                { new: true }  // To return the updated document
            );
            // console.log(results);
            res.send({ message: "Updated", result: updatedUser });
        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
        }
    }
    static updateLanguage = async (req, res, next) => {
        try {
            const { languages } = req.body;
            const user = req.user;
            if (!languages) {
                return res.status(400).send({ error: "All fields are required" });
            }
            // Update the user document with the new personal info
            const updatedUser = await UserModel.findByIdAndUpdate(
                user._id,  // Use the user's ID
                {
                    language: languages,
                },
                { new: true }  // To return the updated document
            );
            // console.log(results);
            res.send({ message: "Updated", result: updatedUser });
        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
        }
    }
    static updateIntrestedTopic = async (req, res, next) => {
        try {
            const { intrested_topic } = req.body;
            const user = req.user;
            if (!intrested_topic) {
                return res.status(400).send({ error: "All fields are required" });
            }
            // Update the user document with the new personal info
            const updatedUser = await UserModel.findByIdAndUpdate(
                user._id,  // Use the user's ID
                {
                    intrested_topic: intrested_topic,
                },
                { new: true }  // To return the updated document
            );
            // console.log(results);
            res.send({ message: "Updated", result: updatedUser });

        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }

    static updateSocialMedia = async (req, res, next) => {
        try {
            const { social_media_link } = req.body;
            const user = req.user;
            if (!social_media_link) {
                return res.status(400).send({ error: "All fields are required" });
            }
            // Update the user document with the new personal info
            const updatedUser = await UserModel.findByIdAndUpdate(
                user._id,  // Use the user's ID
                {
                    social_media_link: social_media_link,
                },
                { new: true }  // To return the updated document
            );
            // console.log(results);
            res.send({ message: "Updated", result: updatedUser });

        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }
    static updateEducation = async (req, res) => {
        try {
            const { degree, college, fieldofstudy, startdate, enddate } = req.body;
            const user = req.user;

            if (!degree || !college || !fieldofstudy || !startdate) {
                return res.status(400).send({ error: "All fields are required" });
            }

            const updatedEducation = await EducationModel.findByIdAndUpdate(
                educationid,  // Use the education document's ID
                {
                    degree: degree,
                    college: college,
                    fieldofstudy: fieldofstudy,
                    startdate: startdate,
                    enddate: enddate || null // If enddate is not provided, set it to null
                },
                { new: true }  // To return the updated document
            );

            // Check if the education record exists
            if (!updatedEducation) {
                return res.status(404).send({ error: "Education record not found" });
            }

            res.send({ message: "Updated successfully", result: updatedEducation });

        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }
    static updateExperience = async (req, res, next) => {
        try {
            const { jobtitle, company_name, industry, startdate, enddate, employment_type, location } = req.body;
            const user = req.user;
            const experienceid = req.params['id'];

            if (!jobtitle || !company_name || !industry || !startdate || !employment_type || !location) {
                return res.status(400).send({ error: "All fields are required" });
            }

            const updatedUser = await ExperienceModel.findByIdAndUpdate(
                experienceid,  // Use the user's ID
                {
                    jobtitle: jobtitle,
                    company_name: company_name,
                    startdate: startdate,
                    enddate: enddate || null, // If enddate is not provided, set it to null
                    industry: industry,
                    employment_type: employment_type,
                    location: location
                },
                { new: true }  // To return the updated document
            );

            if (!updatedUser) {
                return res.status(404).send({ error: "Experience record not found" });
            }

            // console.log(results);
            res.send({ message: "Updated", result: updatedUser });
        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }
    static deleteEducation = async (req, res) => {
        try {
            const educationid = req.params['id'];

            // Check if educationid is provided
            if (!educationid) {
                return res.status(400).send({ error: "Education ID is required" });
            }

            const deletedEducation = await EducationModel.findByIdAndDelete(educationid);

            // Check if the education record exists
            if (!deletedEducation) {
                return res.status(404).send({ error: "Education record not found" });
            }

            res.status(200).send({ message: "Deleted successfully", result: deletedEducation });

        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }
    static deleteExperience = async (req, res, next) => {
        try {
            const experienceid = req.params['id'];
        
            // Check if experienceid is provided
            if (!experienceid) {
                return res.status(400).send({ error: "Education ID is required" });
            }
    
            const deletedExperience = await EducationModel.findByIdAndDelete(experienceid);
    
            // Check if the education record exists
            if (!deletedExperience) {
                return res.status(404).send({ error: "Education record not found" });
            }
    
            res.status(200).send({ message: "Deleted successfully", result: deletedExperience });

        }
        catch (error) {
            console.log(error);
            res.send({ error: "something is misssing in db" })
            // res.redirect("/error")
            // return res.status(500).send({ status: "failed", message: "Uable to register" });
        }
    }

}
export default profileController;