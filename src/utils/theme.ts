import { createTheme, MantineColorsTuple } from '@mantine/core';
import localFont from 'next/font/local';
import { myDarkBlue, myEggshell, myKhaki, myLightBlue, myRose} from './colors'

const milkyWalkyFont = localFont({ src: "../fonts/MilkyWalky-Regular.otf" })

//palette ref https://coolors.co/28536b-c2948a-7ea8be-f6f0ed-bbb193
const myColor: MantineColorsTuple = [
  '#ecf4ff',
  '#dce4f5',
  '#b9c7e2',
  '#94a8d0',
  '#748dc0',
  '#5f7cb7',
  '#5474b4',
  '#44639f',
  '#3a5890',
  '#2c4b80'
];

  //coolers alt?

  export const theme: any = createTheme({
  /** mantine theme override here */
  fontFamily:  `Verdana, sans-serif, ${milkyWalkyFont.style.fontFamily}`,
  headings: { fontFamily: milkyWalkyFont.style.fontFamily, },

  colors: {
    light: myColor,
    darkBlue: myDarkBlue,
    rose: myRose,
    lightBlue: myLightBlue,
    eggshell: myEggshell,
    khaki: myKhaki,
  },
  primaryColor: 'darkBlue',
  // secondaryColor: 'rose',
});
