
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/collegecoders")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

const Student = mongoose.model("Student", studentSchema);

app.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.render("apphome", { students });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post("/students", async (req, res) => {
    try {
        const student = new Student({
            name: req.body.name,
            rollNumber: req.body.rollNumber,
            course: req.body.course
        });

        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});