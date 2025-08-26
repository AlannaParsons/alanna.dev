//---------------------------------------------------------
// sizing issue: see carosel and feature card at all times
//---------------------------------------------------------

import React, { useState } from "react";
import { FeaturedCard } from "./FeaturedCard";
import { Carousel } from '@mantine/carousel';
import { Image, Space, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export default function Projects() {
  // const placeholder_img = '/images/under_development.png';
  //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M273 151.1L288 171.8L303 151.1C328 116.5 368.2 96 410.9 96C484.4 96 544 155.6 544 229.1L544 231.7C544 249.3 540.6 267.3 534.5 285.4C512.7 276.8 488.9 272 464 272C358 272 272 358 272 464C272 492.5 278.2 519.6 289.4 544C288.9 544 288.5 544 288 544C272.5 544 257.2 539.4 244.9 529.9C171.9 474.2 32 343.9 32 231.7L32 229.1C32 155.6 91.6 96 165.1 96C207.8 96 248 116.5 273 151.1zM320 464C320 384.5 384.5 320 464 320C543.5 320 608 384.5 608 464C608 543.5 543.5 608 464 608C384.5 608 320 543.5 320 464zM521.4 403.1C514.3 397.9 504.2 399.5 499 406.6L446 479.5L419.2 452.7C413 446.5 402.8 446.5 396.6 452.7C390.4 458.9 390.4 469.1 396.6 475.3L436.6 515.3C439.9 518.6 444.5 520.3 449.2 519.9C453.9 519.5 458.1 517.1 460.9 513.4L524.9 425.4C530.1 418.3 528.5 408.2 521.4 403.1z"/></svg>

  const projects:Project[] = [
    { 
      name:"Bullet Journal",
      images: ["/images/bullet_journal/Screenshot 2025-07-30 165530.png",
        "/images/bullet_journal/Screenshot 2025-07-30 165550.png",         
        "/images/bullet_journal/Screenshot 2024-10-23 141321.png",
        "/images/bullet_journal/Screenshot 2024-10-23 141423.png",
        "/images/bullet_journal/Screenshot 2024-10-23 141512.png"],
      tags: ["solo project", "current"],
      description: `This is meant to act like a digital bullet journal. The user can pull in template 
        pages and customize them to their specific useage. Currently, rating, notes, goals and bookshelf pages 
        have been implemented, the structure is loose so that the user may tailor each page to their needs.`,
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
      images: ["/images/tandem/Screenshot 2025-02-25 161427.png",
            "/images/tandem/Screenshot 2025-02-25 162106.png",
            "/images/tandem/Screenshot 2025-02-25 162140.png"],
      tags: ["school project", "2023"],
      description: `This is a scheduling app where in a primary user will set their schedule, 
        which will generate a unique url to be sent to a secondary user. The secondary 
        user can select options from given available dates/times. Currently this info will be sent 
        back to the primary user as ranked results. Eventually I'd like to integrate this with
        google/apple calendar for proper scheduling use`,
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
      images: ["/images/tweeter/Screenshot 2025-02-25 165127.png"],
      tags: ["school project", "2023"],
      description: `A twitter clone by Lighthouse Labs for web bootcamp students to learn 
        front-end development skills`,
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
      images: ["/images/scheduler/Screenshot 2025-02-25 172651.png"],
      tags: ["school project", "2023"],
      description: `This Scheduler has been designed to allow appointments to be booked Mon-Fri 
        between the hours of 12 pm -5pm. It is limmited to only allow one interview to be booked 
        for time slot.`,
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

  const { width } = useViewportSize();
  const [activeProject, setActiveProject] = useState(projects[0]);
  const scrollControl = (index: number) => {
    if (width < 768) {
      setActiveProject(projects[index])
    }
  }

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
        className="h-200"
        withIndicators
        slideGap="md"
        loop
        controlsOffset="lg"
        p="md"
        onSlideChange={(index) => scrollControl(index)}
      >
        {projects.map((project:Project) => {
          return <Carousel.Slide key={project.name} className="flex">
            <div className="flex relative size-full cursor-pointer justify-center bg-khaki" onClick={() => setActiveProject(project)}> 
              <Image className="object-cover brightness-50 opacity-90 max-h-48" 
                src={project.images[0]} 
                alt={project.name} 
                fallbackSrc="/icons/general/image-regular.svg"
                />
              <header className={`bg-transparent absolute inset-0 md:p-4 p-2 text-lg flex md:justify-start justify-center `} > 
                <Text 
                  truncate="end"
                  className={`md:font-normal md:text-start font-bold text-center`}>
                    {project.name}
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