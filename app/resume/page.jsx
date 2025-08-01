"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
    title: "About me",
    description: "To be filled out.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Andy Mai"
        },
        {
            fieldName: "Phone",
            fieldValue: "(314) 398-5447"
        },
        {
            fieldName: "Email",
            fieldValue: "andrew.y.mai@gmail.com"
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ years"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
    ]

};

const experience = {
    icon: "",
    title: "My experience",
    description: "To be added.",
    items: [
        {
            company: "University of Missouri-St. Louis",
            position: "Computer Science Tutor",
            duration: "2024-2025",
        },
        {
            company: "Lavner Education",
            position: "STEM Instructor Intern",
            duration: "Summer 2025",
        },
    ],
};


const education = {
    icon: "",
    title: "My Education",
    description: "To be added.",
    items: [
        {
            institution: "University of Missouri-St. Louis",
            position: "Programming and Data Structures",
            duration: "2022",
            description: "To be continued.",
        },
        {
            institution: "University of Missouri-St. Louis",
            position: "Computer Organization and Architecture",
            duration: "2022",
            description: "To be continued.",
        },
        {
            institution: "University of Missouri-St. Louis",
            position: "Web Full Stack Development",
            duration: "2023",
            description: "To be continued.",
        },
        {
            institution: "University of Missouri-St. Louis",
            position: "Advanced Web Development With JavaScript",
            duration: "2024",
            description: "To be continued.",
        },
        {
            institution: "University of Missouri-St. Louis",
            position: "Python For Data Structures",
            duration: "2024",
            description: "To be continued.",
        },
        {
            institution: "University of Missouri-St. Louis",
            position: "Web Development With Java",
            duration: "2025",
            description: "To be continued.",
        },
        {
            institution: "University of Missouri-St. Louis",
            position: "Program Translation Project",
            duration: "2025",
            description: "To be continued.",
        },
        {
            institution: "University of Missouri-St. Louis",
            position: "Database Management Systems",
            duration: "2025",
            description: "To be continued.",
        },
      
    ],
};

const skills = {
    
}

const Resume = () => {
    return(
        <div>resume page</div>
    )
}

export default Resume;