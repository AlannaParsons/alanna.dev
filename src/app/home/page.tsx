"use client"

import React, { useEffect } from "react";
import { Title, Space} from '@mantine/core';
import { theme } from '@/utils/theme';
import Descriptors from "@/components/Descriptors"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection";
import Contacts from "@/components/Contacts";
import ProfileSection from "@/components/ProfileSection";


export default function Home() {

  useEffect(() => {
    //https://www.vantajs.com/
      VANTA.BIRDS({
        el: "#header",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color1: `${theme.colors.rose[5]}`,
        color2: 0x53bfe1,
        colorMode: "variance",
        birdSize: 3.00,
        quantity: 4.00,
        backgroundColor: `${theme.colors.khaki[5]}`
    })
  }, [])

  return (
    <div>
      <header id="header" className="p-10 bg-khaki">
        <Space h="lg" />
        <Title c="darkBlue.9" ta="center" className="lg:text-12xl sm:text-9xl text-8xl">alanna parsons</Title>
        <Space h="xl" />
        <Contacts/>
        <Space className="h-5"/>
        <Descriptors className="text-center lg:text-2xl sm:text-xl text-md"/>
      </header>

      <main className="flex flex-col items-center p-10">
        <ProjectsSection/>

        <div className="flex xl:flex-row flex-col xl:pl-40 xl:pr-40 md:pr-20 md:pl-20"> 
          <SkillsSection/>
          <ProfileSection/>
        </div>
      </main>

      <footer className="flex-grow self-center bg-white h-[1px] text-center">
        © 2025 Alanna Parsons. All Rights Reserved.
      </footer>
    </div>
  );
}