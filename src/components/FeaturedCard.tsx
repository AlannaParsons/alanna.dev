//---------------------------------------------------------
//revisit error/success toast for like
//onError event for image not found, better way to handle?
//---------------------------------------------------------

//pre built mantine - https://ui.mantine.dev/category/app-cards/ 
import { useEffect, useState } from 'react';
import { Anchor, Badge, Button, Card, Group, Image, Popover, Text} from '@mantine/core';
import classes from './FeaturedCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { Carousel } from '@mantine/carousel';
import NextImage from 'next/image';
  //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M273 151.1L288 171.8L303 151.1C328 116.5 368.2 96 410.9 96C484.4 96 544 155.6 544 229.1L544 231.7C544 249.3 540.6 267.3 534.5 285.4C512.7 276.8 488.9 272 464 272C358 272 272 358 272 464C272 492.5 278.2 519.6 289.4 544C288.9 544 288.5 544 288 544C272.5 544 257.2 539.4 244.9 529.9C171.9 474.2 32 343.9 32 231.7L32 229.1C32 155.6 91.6 96 165.1 96C207.8 96 248 116.5 273 151.1zM320 464C320 384.5 384.5 320 464 320C543.5 320 608 384.5 608 464C608 543.5 543.5 608 464 608C384.5 608 320 543.5 320 464zM521.4 403.1C514.3 397.9 504.2 399.5 499 406.6L446 479.5L419.2 452.7C413 446.5 402.8 446.5 396.6 452.7C390.4 458.9 390.4 469.1 396.6 475.3L436.6 515.3C439.9 518.6 444.5 520.3 449.2 519.9C453.9 519.5 458.1 517.1 460.9 513.4L524.9 425.4C530.1 418.3 528.5 408.2 521.4 403.1z"/></svg>

export function FeaturedCard({project}:{project: Project}) {
  const [disabled, setDisabled] = useState(false);
  const [beat, setBeat] = useState(false);
  const [opened, setOpened] = useState(false);
  let beatTimer, popoverTimer;

  // clear timeouts
  useEffect(() => {
    localStorage.getItem(`${project.name}`) === 'true' ? setDisabled(true) : setDisabled(false);

    return () => {
        clearTimeout(beatTimer);
        clearTimeout(popoverTimer);
    }
  });

  const sendLike = async () => {
    setBeat(true)
    try {
      const res = await fetch(`/api/discord-msg`,{
        method: 'POST',
        body: JSON.stringify({project: project.name}),
        headers: {
          'content-type': 'application/json'
        }
      })
      
      if(res.ok){
        localStorage.setItem(`${project.name}`, 'true');
        beatTimer = setTimeout(()=>{
          setBeat(false); 
          setDisabled(true);
          setOpened(true);
        } , 1500)
        popoverTimer = setTimeout(() => {
          setOpened(false);
        } , 2500)
        
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='feature-card md:p-10 p-2 bg-khaki_dark'>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Carousel
          align="start"
          withIndicators
          initialSlide={0}
          >
            {project.images.map((imageSrc) => {
              return <Carousel.Slide key={imageSrc}>
                <Image 
                  className=" m-4 max-h-96 object-scale-down justify-self-center pr-3 pl-3" 
                  src={imageSrc} 
                  alt={project.name}/>
              </Carousel.Slide>
          })}
          </Carousel>      
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="xl" fw={500}>
              {project.name}
            </Text>
            {project.tags.map((tag: string) => (
              <Badge size="sm" variant="light" key={tag}>
                {tag}
              </Badge>
            ))}
          </Group>
          <Text fz="sm" mt="xs" ml="md" ff='monospace'>
            {project.description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} c="dimmed">
            Stack
          </Text>
          <Group gap={7} mt={5}>
            {project.technologies.map((tech: string) => {
              return <div className="inline-flex" key={`${tech}`}>
                <Badge variant="light">
                  <div className='flex items-center'> 
                    <NextImage src={`/icons/tech/${tech.toLocaleLowerCase()}.png`} 
                    alt={`${tech}`}
                    className="max-w-3 max-h-3 mr-1 !relative" 
                    onError={event=> event.target.classList.add('hidden')}
                    fill={true}
                    />
                  <p>{tech}</p>
                  </div>
                </Badge>
              </div>
            })}
          </Group>
        </Card.Section>

        <Group mt="xs">
          <Anchor href={project.link} target="_blank" title="github_repository" style={{ flex: 1 }}> 
            <Button radius="md" fullWidth>
              Show Details 
            </Button>
          </Anchor>

          <Popover position="top" opened={opened}>
            <Popover.Target>
              <Button color='red' disabled={disabled} className={disabled ? ` bg-red-400` : ``} onClick={() => sendLike()}>
                {disabled ? 
                  <FontAwesomeIcon icon={faHeartCircleCheck} beatFade={beat} className={`w-5 h-5 text-white`} /> : 
                  <FontAwesomeIcon icon={faHeart} beatFade={beat} className={`w-5 h-5 text-white`} />
                }
              </Button>
            </Popover.Target>
            <Popover.Dropdown>Thanks</Popover.Dropdown>
          </Popover>
        </Group>
      </Card>
    </div>
  );
}