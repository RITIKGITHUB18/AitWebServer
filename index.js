const express = require("express");
const app = express();

const departmentRoutes = require("./routes/DepartmentRoute");
const faculty_staff = require("./routes/FacultyRoute");
const emagazineRoute = require("./routes/EmagazineRoute");
const syllabusRoute = require("./routes/SyllabusRoute");
const studentTopper = require("./routes/StudentTopper");
const placementDetail = require("./routes/PlacementDetailRoute");
const studentRoll = require("./routes/StudentRollRoute");
const database = require("./configuration/databaseConfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.use("/api/v1/department", departmentRoutes);
app.use("/api/v1/faculty_staff", faculty_staff);
app.use("/api/v1/emagazine", emagazineRoute);
app.use("/api/v1/syllabus", syllabusRoute);
app.use("/api/v1/studentTopper", studentTopper);
app.use("/api/v1/placement", placementDetail);
app.use("/api/v1/studentroll", studentRoll);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});