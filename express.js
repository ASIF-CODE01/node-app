console.log(`===== Mongo DB connection =====`);
// mongodb://localhost:27017/user_database
async function mongoConnection(){
    try {
        await mongoose.connect("mongodb://localhost:27017/user_database");
        console.log("====== Connection successfully ==========");   
    } catch (error) {
        console.log(error);
    }
}
// Defining Schema for Student
const schemaStudent = new mongoose.Schema({
    name: { type: String },
    college: { type:String },
    marks: { type: Number}
},
{ collection: "student_collection"}
);

// Creating the Model for Schema: schemaStudent
const Student = mongoose.model('Student', schemaStudent);
mongoConnection();

//To retrieve or fetch the data
app.get("/students", async (request, response)=>{
    const allStudents = await Student.find({});
    response.status(200)
    .json({
        allStudents
    });
} ); 