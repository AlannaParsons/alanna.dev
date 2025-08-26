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

export function FeaturedCard({project}:{project: Project}) {
  const [disabled, setDisabled] = useState(false);
  const [beat, setBeat] = useState(false);
  const [opened, setOpened] = useState(false);
  let beatTimer, popoverTimer;

  // clear timeouts
  useEffect(() => {
    const isLiked = localStorage.getItem(`${project.name}`) === 'true';
    setDisabled(isLiked);

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