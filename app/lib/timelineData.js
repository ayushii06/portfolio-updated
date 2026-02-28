import RGIPT from "../public/rgipt.png";
import bg1 from "../public/rgipt_bg.jpg";
import school from "../public/school.png";
import bg2 from "../public/school_bg.jpg";

const experience = [
  {
    id:0,
    logo: RGIPT,
    year: "2022-2026",
    school_name: "Rajiv Gandhi Institute Of Petroleum Technology",
    grade: "9.00",
    degree: "Bachelor of Technology",
    Courses: [
      "C/C++ Programming",
      "Data Structures and Algorithms",
      "Object Oriented Programming System",
      "Database Management System",
      "Data Handling & Visualisations",
      "AI/ML",
      "Operating System",
      "Software Engineering",
    ],
    marksheet:
      "https://drive.google.com/file/d/1PKqvvVaGR66OprHVstmmodLduo8WQCA2/view?usp=sharing",
    coCurricular: [
      "Selected as a Microsoft Learn Student Ambassador in 1st Year",
      "Member of CDC Cell of college representing my branch",
      "Won silver in Badminton singles and silver in TT Doubles",
    ],
    background:bg1,
  },
  {
    id:1,
    logo: school,
    year: "2021-22",
    school_name: "St. Mary's School",
    grade: "92.3",
    degree: "Senior Secondary School",
    Courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English",
      "Information Practices",
      "Physical Education",
    ],
    marksheet:
    "https://drive.google.com/file/d/1sV_yG_1r2YgBMzx56T22fpBoRz1VtEOr/view?usp=sharing",
    coCurricular: [
      "Cleared JEE Advanced 2022, National Level College Entrance Examination with a rank of 22k among 2L candidates",
    ],
    background:bg2,
  },
  {
    id:2,
    logo: school,
    year: "2019-2020",
    school_name: "St. Mary's School",
    grade: "97.8",
    degree: "High School",
    Courses: [
      "Science",
      "Hindi",
      "English",
      "Mathematics",
      "Social Studies",
      "Information Technology",
    ],
    marksheet:
    "https://drive.google.com/file/d/1IUHQHdBsNIxqEwRnqgjj2E_HnIY5nlVC/view?usp=sharing",
    coCurricular: [
      "School Rank 2 and awarded scholarship worth 5,000 INR",
      "Won a Debate Competition for my House on `Indian History`",
      "Gave Speeches on Various Ocassions",
      "Led School Morning Assembly on every wednesday",
    ],
    background:bg2,
  },
];

export {experience}