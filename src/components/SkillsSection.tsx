import {Image, Space, Tooltip} from '@mantine/core';
import classes from './SkillsSection.module.css';

export default function SkillsSection() {
  //maintain consistent naming with icon img files
  const skills = ['React', 'C', 'Python', 'Javascript', 'Html5', 
    'Css3', 'Github', 'Jest', 'Mocha', 'NextJS', 'PostgreSQL', 'Tailwind',
    'Vercel', 'Vim', 'VScode'
  ];

return(
  <div className="flex flex-1 flex-col mt-10"> 

    <h1 className="text-2xl text-darkBlue font-bold p-5 w-full flex "> 
      SKILLS 
      <Space w="sm"/>
      <span className="flex-grow self-center bg-darkBlue h-[1px]"></span>          
    </h1> 

    <div className="grid xl:grid-cols-4  lg:grid-cols-5  grid-cols-4 gap-4 bg-inherit p-5">

      {skills.map((skillName:string)=>{
        return <Tooltip 
          label={skillName} 
          key={skillName} 
          events={{ hover: true, focus: true, touch: true }}
          >
            <div className="bg-rose rounded-xl" >  
              <Image       
                src={`/icons/tech/${skillName.toLocaleLowerCase()}.png`}
                alt={skillName} 
                className={classes.skillIcons}
              />
            </div>
          </Tooltip>

    })}
    </div>
  </div>
)}