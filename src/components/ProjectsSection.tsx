//---------------------------------------------------------
// sizing issue: see carosel and feature card at all times
//---------------------------------------------------------

import React, { useState } from "react";
import { FeaturedCard } from "./FeaturedCard";
import { Carousel } from '@mantine/carousel';
import { Image, Space, Text } from '@mantine/core';

export default function Projects() {
  const placeholder_img = '/images/under_development.png';

  const projects:Project[] = [
    {
      name:"Bullet Journal",
      images: [placeholder_img],
      tags: ["solo project", "current"],
      description: `This is meant to act like a digital bullet journal. The user can pull in template 
        pages and customize them to their specific useage. Currently, rating, notes and goals pages 
        have been implimented, though the structure is loose so that the user may tailor them to their needs.`,
      technologies: [
        "react",
        "nextJS",
        "chakra UI", 
        "postgreSQL",
        "vercel"
      ],
      link: 'https://github.com/AlannaParsons/bullet_journal'
    },
    {
      name:"Tandem",
      images: [placeholder_img],
      tags: ["school project", "2023"],
      description: `This is a scheduling app where in a primary user will set their schedule, 
        the schedule will generate a unique url to be sent to a secondary user. The secondary 
        user can rank options from available dates/times, currently this info will be sent 
        back to the primary user where the primary user may check current results, ideally it 
        will eventually integrate w google/apple calendar for proper scheduling`,
      technologies: [
        "javascript",
        "sass",
        "express",
        "ejs"
      ],
      link: 'https://github.com/AlannaParsons/Tandem'
    },
    {
      name:"Tweeter",
      images: [placeholder_img],
      tags: ["school project", "2023"],
      description: `A twitter clone by Lighthouse Labs for web bootcamp students to learn front-end dev skillz`,
      technologies: [
        "javascript",
        "express",
        "sass",
        "jquery"
      ],
      link: 'https://github.com/AlannaParsons/Tweeter'
    },
    {
      name:"TinyApp",
      images: ["https://raw.githubusercontent.com/AlannaParsons/TinyApp/refs/heads/main/docs/urls-page.png","https://raw.githubusercontent.com/AlannaParsons/TinyApp/refs/heads/main/docs/urls%3Aid-page.png"],
      tags: ["school project", "2023"],
      description: `TinyApp is a full stack web application built with Node and 
        Express that allows users to shorten long URLs (à la bit.ly).`,
      technologies: [
        "javascript",
        "express",
        "ejs"
      ],
      link: 'https://github.com/AlannaParsons/TinyApp'
    },
    {
      name:"Scheduler",
      images: [placeholder_img],
      tags: ["school project", "2023"],
      description: `TinyApp is a full stack web application built with Node and 
        Express that allows users to shorten long URLs (à la bit.ly).`,
      technologies: [
        "react",
        "cypress",
        "axios"
      ],
      link: 'https://github.com/AlannaParsons/TinyApp'
    },
    {
      name:"Space Game",
      images: ["/images/space_game/Screenshot 2025-02-14 154737.png", 
        "/images/space_game/Screenshot 2025-02-14 154908.png", 
        "/images/space_game/Screenshot 2025-02-14 155119.png"],
      tags: ["group project", "school project", "2018"],
      description: `This is a game meant to be played on a touch table at the EPL. I was primarily in 
        charge of sound controls as this was an important feature to the client. 
        Bound by the limitations of school timelines, I am proud of how this project turned 
        out and how we worked as a team and with the client.`,
      technologies: [
        "unity",
        "c#"
      ],
      link: 'https://github.com/AlannaParsons/Space-Game'
    },

  ]

  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="max-w-4xl"> 
      <h1 className="text-2xl text-darkBlue font-bold p-5 w-full flex"> 
        PROJECTS
        <Space w="sm"/>
        <span className="flex-grow self-center bg-darkBlue h-[1px]"></span>          
      </h1> 
      <Carousel
        slideSize={{ base: "70%", sm: "33.333333%"}}
        slidesToScroll={{ base: 1, sm: 3}}
        // align={{ base: "center", sm: "start"}}
        //slidesToScroll={1|3}
        className="h-200"
        withIndicators
        // slideSize="33.333333%"
        slideGap="md"
        loop
        // align="start"
        controlsOffset="lg"
        controlSize={14}
        // slidesToScroll={3}
        p="md"
      >
        {projects.map((project:Project) => {
          return <Carousel.Slide key={project.name} className="flex">
            <div className="flex relative size-full cursor-pointer justify-center bg-rose" onClick={() => setActiveProject(project)}> 
              <Image className="object-cover brightness-50 opacity-90 max-h-48" 
                src={project.images[0]} 
                alt={project.name} 
                fallbackSrc="/icons/general/image-regular.svg"
                />
              <header className={`bg-transparent absolute inset-0 sm:p-4 p-2 text-lg flex sm:justify-start justify-center `} > 
                <Text 
                  truncate="end"
                  className={`sm:font-normal sm:text-start font-bold text-center`}>{project.name}
                </Text>
              </header>
                            
            </div>
          </Carousel.Slide>
        })}
      </Carousel>

      <Space h={"md"}></Space>

      <FeaturedCard project={activeProject}/>
    </div>
  )
}