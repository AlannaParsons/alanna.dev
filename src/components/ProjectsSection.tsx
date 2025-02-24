"use client"

import React, { useState } from "react";
import { FeaturedCard } from "./FeaturedCard";
import { Carousel } from '@mantine/carousel';
import { Image, Space, Text } from '@mantine/core';

export default function Projects() {
  let placeholder_img = '/images/under_development.png';

  let projects:Project[] = [
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
    {
      name:"Tandem",
      images: [placeholder_img],
      tags: ["solo project", "2024"],
      description: `This is an app`,
      technologies: [
        "unity",
        "c#"
      ],
      link: 'https://github.com/AlannaParsons/Space-Game'
    },
    {
      name:"Placeholder",
      images: [placeholder_img],
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
    {
      name:"Test",
      images: [placeholder_img],
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
        className="h-200"
        withIndicators
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        controlsOffset="lg"
        controlSize={14}
        slidesToScroll={3}
        p="md"
      >
        {projects.map((project:Project) => {
          return <Carousel.Slide key={project.name} className="flex">
            <div className="flex relative size-full cursor-pointer" onClick={() => setActiveProject(project)}> 
              <Image className="object-cover brightness-50 opacity-90" src={project.images[0]} alt={project.name} />

              <header className={`bg-transparent absolute inset-0 sm:p-4 p-2 text-lg flex sm:justify-start justify-center `} > 
                <Text className={`sm:font-normal sm:text-start font-bold text-center`}>{project.name}</Text>
              </header>
                            
            </div>
          </Carousel.Slide>
        })}
      </Carousel>

      <FeaturedCard project={activeProject}/>
    </div>
  )
}