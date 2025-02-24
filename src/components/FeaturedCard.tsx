//---------------------------------------------------------
// make fallback img of transparent pixel for stack badges? hydration issues, doesnt always hide broken src onError -.-
//revisit error/success toast for like
//---------------------------------------------------------

//pre built mantine - https://ui.mantine.dev/category/app-cards/ 
import { useState } from 'react';
import { ActionIcon, Anchor,  Badge, Button, Card, Group, Image, Space, Text} from '@mantine/core';
import classes from './FeaturedCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Carousel } from '@mantine/carousel';

export function FeaturedCard({project}:{project: Project}) {
  const [disabled, setDisabled] = useState(false);
  const [beat, setBeat] = useState(false);
  

  const sendLike = async () => {
    setBeat(true)

    //toast for error/success???
    try {
      const res = await fetch(`/api/discord-msg`,{
        method: 'POST',
        body: JSON.stringify({project: project.name}),
        headers: {
          'content-type': 'application/json'
        }
      })
      
      if(res.ok){
        setTimeout(()=>{
          setBeat(false); 
          setDisabled(true);
        } , 2000)
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='md:p-10 p-5 bg-khaki_dark'>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Carousel>
            {project.images.map((imageSrc) => {
              return <Carousel.Slide key={imageSrc}>
                <Image className="max-h-96 m-4 w-3/4 justify-self-center" src={imageSrc} alt={project.name}/>
              </Carousel.Slide>
          })}
          </Carousel>      
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {project.name}
            </Text>
            {project.tags.map((tag: string) => (
              <Badge size="sm" variant="light" key={tag}>
                {tag}
              </Badge>
            ))}
          </Group>
          <Text fz="sm" mt="xs">
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
                  <Image src={`/icons/tech/${tech.toLocaleLowerCase()}.png`}
                    className="max-w-3 max-h-3 mr-1" 
                    fallbackSrc='/images/1px.png'/>
                    {/* <img src={`/icons/tech/${tech.toLocaleLowerCase()}.png`} 
                    className="max-w-3 max-h-3 mr-1" 
                    onError={event=> event.target.classList.add('hidden')}/> */}
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
          
          <ActionIcon variant="default" radius="md" size={36} disabled={disabled} className={`${disabled ?  "bg-red-500" : " text-[#ffffff] bg-red-500 "}}`} onClick={() => sendLike()}>
            <FontAwesomeIcon icon={faHeart} beatFade={beat} className={` w-4 h-4`} />
          </ActionIcon>
        </Group>
      </Card>
    </div>
  );
}