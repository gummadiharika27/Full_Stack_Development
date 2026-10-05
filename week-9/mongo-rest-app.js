const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = express();
const PORT = 3000;

app.use(express.json());

const dbURI = "mongodb+srv://gummadiharika27_db_user:Rf6sXgnFJGzGZ6qF@cluster0.9d4uvlb.mongodb.net/college?appName=Cluster0"

mongoose
    .connect(dbURI)
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },
    course: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({
            message: "Error saving student",
            error: error.message
        });
    }
});

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});

app.put("/students/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({
            message: "Error updating student",
            error: error.message
        });
    }
});

app.delete("/students/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student record deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Ready for CRUD operations testing.");
});