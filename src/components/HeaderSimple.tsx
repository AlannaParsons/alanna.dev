// pre-built mantine - https://ui.mantine.dev/category/headers/#header-simple
"use client"
import { useState } from 'react';
import { Badge, Burger, Container, Drawer, Flex, Group, Space, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faFile } from "@fortawesome/free-solid-svg-icons"

const links = [
  { link: '/home', label: 'Home', icon: faHouse },
  { link: '/resume', label: 'Resume', icon: faFile},
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = (location: string) => {

    return links.map((link) => {
      const locationClasses: any = {
        full_screen:`hover:bg-khaki_dark ${active === link.link ? 'bg-darkBlue' : 'bg-rose'} py-[8px] px-[12px] rounded-md text-md font-medium`,
        burger_menu: `text-black m-1 p-2 text-lg border flex inline items-center`
      }
    
      return ( <Link
          key={link.label}
          href={link.link}
          className= {`${locationClasses[location]}`}
          data-active={active === link.link || undefined}
          onClick={() => {
            setActive(link.link);
          }}

        >
          <FontAwesomeIcon icon={link.icon} className= {location == 'full_screen' ? 'hidden' : ''}/>
          <Space w='sm'></Space>
          <Text>{link.label} </Text>
          
        </Link>
      )
    })
  }

  return (
    <header className={`h-[56px] bg-khaki sticky top-0 z-10`} > 
      <Container size="xl" className={`flex h-[56px] justify-between items-center`}>
        <Badge size="xl" color='rose'  circle> 
          <Title fz="md" className="mt-1"> AP </Title>
        </Badge>
        <Group gap={5} visibleFrom="xs">
          {items('full_screen')}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> 
        
        <Drawer
          opened={opened}
          onClose={toggle}
          padding="lg"
          size='11rem'
          position='right'
        >
          <Flex 
            direction="column"> 
            {items('burger_menu')}
          </Flex>
        </Drawer>
      </Container>
    </header>
  );
}