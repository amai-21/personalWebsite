"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub }from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip.jsx";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: '01',
        category: 'compiler',
        title: 'project 1',
        description: '"CodeGenPro" is a compiler written in C++ that scans, parses, semantically checks, and translates a custom language into the University of Missouri-St.Louis\'s (UMSL) Assembly language.',
        stack: [{name: "C++"}],
        image: '../../public/workImages/assemblyCodePic.png',
        live: "",
        github: ""

    },
    {
        num: '02',
        category: 'full-stack',
        title: 'project 2',
        description: 'A tournament scheduler that manages competitive events for efficient data management.',
        stack: [{name: "C#"}, {name: "SQL"}],
        image: '',
        live: "",
        github: ""

    },
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);
    return(
        <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1 }} className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className = "container mx-auto">
                <div className = "flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className = "w-full xl:w-[50%]">text</div>
                    <div className = "w-full xl:w-[50%]">slider</div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects;