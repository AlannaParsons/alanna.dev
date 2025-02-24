import {Image, Space, Text} from '@mantine/core';

export default function SkillsSection() {
  return(
    <div className="flex flex-1 flex-col bg-khaki rounded-xl mt-10"> 
      <h1 className="text-2xl text-darkBlue font-bold p-5 w-full flex "> 
        PROFILE
        <Space w="sm"/>
        <span className="flex-grow self-center bg-darkBlue h-[1px]"></span>          
      </h1> 
    <div className="flex justify-center sm:flex-row flex-col sm:items-start items-center"> 

    <Text className='p-5 sm:w-1/2 w-3/4 xl:text-base font-extralight text-lg font-stretch-50% text-black'>
      Outside of computer work, I like to
      spend time outdoors in summer,
      enjoying gardening and hiking. In winter,
      I tend to hunker down with boardgames.
      I keep busy in my free time with
      personal projects and continual home
      renovations.
    </Text>

    <Image
        alt='Alanna Profile pic'
        className='m-5 rounded-xl sm:w-1/2 w-3/4 max-w-64'
        src='/images/nfl_boat.png'
      />
    </div>
  </div>
  )
}