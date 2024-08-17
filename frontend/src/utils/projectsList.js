import Medicine from "../attachments/medicine.PNG"
import quiz from "../attachments/quiz.PNG"
import iot from "../attachments/iot.PNG"
import portfolio from "../attachments/portfolio.PNG"

export const projectsList = [
  {
    _id: 1,
    name: "JP Morgan Code for Good 2024",
    img: "https://media.licdn.com/dms/image/D5612AQEtgzyAg9L4UA/article-cover_image-shrink_600_2000/0/1719380497835?e=2147483647&v=beta&t=a9gCM0RLaBAKoaxgAgteNftNSLnQTUYjsyhbv8MZB7U",
    desc: "Developed a library management system for rural areas, focusing on simplicity and internet connectivity, for the NGO Room to Read using the MERN stack.",
    stack: "MongoDB, ExpressJS, React, Node",
    git:"None"
  },
  {
    _id: 2,
    name: "Medicine Recommendation System",
    img: Medicine,
    desc: "Developed a medicine recommendation system based on input symptoms using machine learning techniques.",
    stack: "Python, Machine Learning,Flask",
    git:"https://github.com/sanjana3339/MedAI-ML-symptom-medicine-generator"
  },
  {
    _id: 3,
    name: "Voice Controlled Home Automation",
    img: iot,
    desc: "Developed a home automation project controlled by voice commands through Bluetooth connectivity from a mobile phone.",
    stack: "IoT, Bluetooth, C++",
    git:"https://github.com/sanjana3339/Home-automation-using-iot"

  },
  {
    _id: 4,
    name: "Quiz Application",
    img: quiz,
    desc: "Developed a Quiz application using Tkinter in Python.",
    stack: "Python, Tkinter",
    git:"https://github.com/sanjana3339/Quiz-application-python"
  },
  {
    _id: 5,
    name: "Portfolio",
    img: portfolio,
    desc: "Developed a personal portfolio showcasing my skills,projects and achievements",
    stack: "MongoDB, ExpressJS, React, Node",
    git:"https://github.com/sanjana3339/Portfolio"
  }

];
