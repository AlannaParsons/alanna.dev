import React, { useState, useEffect} from "react";

export default function Descriptors({className}:{className: string}) {

  const descriptors: string[] = [
    "Software Engineer",
    "Based in Canada",
    "Full Stack Capable",
    "Backend Enthusiast",
    "React Fanatic",
    "SQL Aficionado",
    "Wayfarer",
    "Cardboard Enthusiast",
    "DIY'er"
  ];

  const [activeDescriptor, setDescriptor] = useState(descriptors[0]);

  const setTimer = () => {
    let index: number = 0;
    setInterval(() => { 
      index = (index + 1) % descriptors.length;
      setDescriptor(descriptors[index])
    }, 3000)
  }

  useEffect(() => {
    setTimer();
  }, []) 
  
  return (
    <div className={className}>{activeDescriptor}</div>
  )
}