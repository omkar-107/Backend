const Instructor = require("../Models/Instructor");
const Student = require("../Models/Student");


exports.getAllInstructors = async (req, res) => {
    try {
        const userName1 = req.user.userName;
        console.log(userName1);
        const student =  await Student.findById(req.user.id);
        console.log(student);
        const instructors = await Instructor.find({ students: student._id })
        const instructors1 = instructors.map(instructor => {return {name:instructor.userName,id: instructor._id}});
        // console.log(instructors);
       
        res.status(200).json({
        success: true,
        data: instructors1 ,
        message: "Instructors Fetched Successfully",
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Instructors can't be fetched",
        });
    }
}

exports.getAllStudents= async (req, res) => {
    try {
        const userName1 = req.user.userName;
        const allData = await Instructor.findById(req.user.id).populate("students");
        const studentUsernames = allData.students.map(student => {return {stdname:student.userName,
                                                                   stdid: student._id}});
        res.status(200).json({
        success: true,
        data: studentUsernames,
        message: "Instructors Fetched Successfully",
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Instructors can't be fetched",
        });
    }   
}