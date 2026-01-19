import {Flex, Image, Text, Space} from '@mantine/core';

export default function ProfileSection() {
  return(
    <div className="flex flex-1 flex-col w-full max-w-4xl items-center"> 
      <h1 className="text-2xl text-darkBlue font-bold p-5 w-full flex "> 
        PROFILE
        <Space w="sm"/>
        <span className="flex-grow self-center bg-darkBlue h-[1px]"></span>          
      </h1> 
      
      <div className='relative min-h-64 pb-2 px-5'>

        <Flex direction={'column'} align='center'>
          <div>
            <Image
                className='w-56 h-56 rounded-full'
                src='/images/portugal_picohike.jpg'
                alt='Alanna Profile pic'
            />
          </div>

          <Text className='m-2 text-black text-center font-bold p-2'>        
            Currently working towards a software developer diploma and finding my space in the tech world
          
            {/* Outside of computer work, I like to
            spend time outdoors in summer,
            enjoying gardening and hiking. In winter,
            I tend to hunker down with boardgames.
            I keep busy in my free time with
            personal projects and continual home
            renovations. */}
          </Text>
        </Flex>

        
       
        <div className='absolute top-[112px] bottom-0 bg-khaki left-5 right-5 -z-50'></div>
      </div>
      
    </div>
  )
}