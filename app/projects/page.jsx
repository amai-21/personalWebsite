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
        image: '/workImages/assemblyCodePic2.png',
        live: "",
        github: "https://github.com/amai-21/codeGenPro"

    },
    {
        num: '02',
        category: 'tournament tracker',
        title: 'project 2',
        description: 'A tournament scheduler that manages competitive events for efficient data management. WORK IN PROGRESS',
        stack: [{name: "C#"}, {name: "SQL"}],
        image: '',
        live: "",
        github: "https://github.com/amai-21/TournamentTracker"

    },
      {
        num: '03',
        category: 'There Is No Website',
        title: 'project 2',
        description: '"There Is No Website" is a quirky, interactive web experience that challenges the very notion of what a website should be. With a twist on the theme "Functionally Dysfunctional," we crafted an experience where things aren\'t quite what they seem. The user is drawn into an unconventional, physics-based web world where interactions defy expectations, blending the boundaries between functionality and dysfunctionality. This project was created during the \"Hackathon with Lewis\" event held from August 9-16, 2024. There is one surprise at the end! So do visit the live deployment to try out.',
        stack: [{name: "TypeScript"}, {name: "JavaScript"}, {name: "HTML"}, {name: "CSS"}],
        image: '/workImages/thereIsNoWebsite.png',
        live: "https://thereisnoweb.site/",
        github: "https://github.com/AndreiBalan-dev/there-is-no-website"

    },
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        //updateproject state based on current slide index
        setProject(projects[currentIndex]);
    }

    return(
        <motion.section initial = {{ opacity: 0 }} animate = {{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className = "container mx-auto">
                <div className = "flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className = "flex flex-col gap-[30px] h-[50%]">
                            <div className = "text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>

                            <h2 className = "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className = "text-white/60">{project.description}</p>

                            <ul className = "flex gap-4">
                                {project.stack.map((item, index) => {
                                    return ( 
                                        <li key = {index} className = "text-xl text-accent">{item.name}</li>
                                    );
                                })}
                            </ul>

                            <div className = "border border-white/20"></div>
                            <div className = "flex items-center gap-4">
                                <Link href = {project.github}>
                                    <TooltipProvider delayDuration = {100}>
                                        <Tooltip>
                                            <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className = "text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className = "w-full xl:w-[50%]">
                        <Swiper spaceBetween = {30} slidesPerView = {1} className = "xl:h-[520px] mb-12" onSlideChange = {handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key = {index} className = "w-full">
                                        <div className = "h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div>

                                            </div>

                                            <div className = "relative w-full h-full">
                                                <Image src = {project.image} fill className = "object-cover" alt = "" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects;