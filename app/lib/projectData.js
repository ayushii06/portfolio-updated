import Image1 from '../public/projects/1.png'
import Image2 from '../public/projects/2.png'
import Image3 from '../public/projects/3.png'
import Image4 from '../public/projects/4.png'

const projectData = [
    {
    id: 1,
    name: "AI Face Recognition Attendance System",
    desc: "",
    slug: "ai-face-recognition-attendance",
    duration: "Nov 2024 – Dec 2025",
    stacks: [
        "ReactJS",
        "Redux Toolkit",
        "Node.js",
      "Express.js",
      "TensorFlow",
      "Azure",
    ],
    image: Image1,
    description: {
      why: "This project helps automate attendance using facial recognition and geolocation tracking.",
      how: "Built using DeepFace for recognition, MongoDB for embeddings storage and React frontend.",
      techStack: "Next.js, Node.js, MongoDB, DeepFace, TailwindCSS",
      difficulties: "Optimizing face comparison to avoid scanning entire dataset.",
      learnings: "Learned embedding comparison and performance optimization.",
      next: "Improve real-time accuracy and reduce latency."
    },
    github: "https://github.com/ayushii06/Attendance-App",
    live: "https://attendance-app-olive.vercel.app/"
  },
  {
    id: 2,
    name: "DrawTool - Whiteboard Drawing Tool",
    slug: "drawtool-whiteboard",
    duration: "Oct 2024 - Nov 2024",
    stacks: [
      "React",
      "Canvas",
      "Node.js",
      "Express.js",
      "JWT"
    ],
    image: Image2,
    description: {
      why: "This project helps automate attendance using facial recognition and geolocation tracking.",
      how: "Built using DeepFace for recognition, MongoDB for embeddings storage and React frontend.",
      techStack: "Next.js, Node.js, MongoDB, DeepFace, TailwindCSS",
      difficulties: "Optimizing face comparison to avoid scanning entire dataset.",
      learnings: "Learned embedding comparison and performance optimization.",
      next: "Improve real-time accuracy and reduce latency."
    },
    github: "https://github.com/ayushii06/drawTool",
    live: "https://draw-tool-seven.vercel.app"
  },
  {
    id: 3,
    name: "Personalized Product Recommendations Using Gemini",
    slug: "gemini-match",
    duration: "April 2024 - June 2025",
    stacks: [
      "React",
      "Google Gemini",
      "AI",
      "Node.js",
      "JWT",
      "Express.js",
      "APIs"
    ],
    image: Image3,
    description: {
      why: "This project helps automate attendance using facial recognition and geolocation tracking.",
      how: "Built using DeepFace for recognition, MongoDB for embeddings storage and React frontend.",
      techStack: "Next.js, Node.js, MongoDB, DeepFace, TailwindCSS",
      difficulties: "Optimizing face comparison to avoid scanning entire dataset.",
      learnings: "Learned embedding comparison and performance optimization.",
      next: "Improve real-time accuracy and reduce latency."
    },
    github: "https://github.com/ayushii06/GeminiMatch",
    live: ""
  },
  
  {
    id: 4,
    name: "ForTheFuture - CS Base Climate Hackathon",
    slug: "forthefuture",
    duration: "May 2024",
    stacks: [
      "React",
      "Chart.js",
      "D3.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    image: Image4,
    description: {
      why: "This project helps automate attendance using facial recognition and geolocation tracking.",
      how: "Built using DeepFace for recognition, MongoDB for embeddings storage and React frontend.",
      techStack: "Next.js, Node.js, MongoDB, DeepFace, TailwindCSS",
      difficulties: "Optimizing face comparison to avoid scanning entire dataset.",
      learnings: "Learned embedding comparison and performance optimization.",
      next: "Improve real-time accuracy and reduce latency."
    },

    github: "https://github.com/ayushii06/ForTheFuture-Frontend",
    live: "https://forthefuture.onrender.com/"
  },
  
];

export { projectData };