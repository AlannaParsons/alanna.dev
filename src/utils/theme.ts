import { createTheme } from '@mantine/core';
import localFont from 'next/font/local';
import { myDarkBlue, myEggshell, myKhaki, myLightBlue, myRose} from './colors'

const milkyWalkyFont = localFont({ src: "../fonts/MilkyWalky-Regular.otf" })

//palette ref https://coolors.co/28536b-c2948a-7ea8be-f6f0ed-bbb193

  export const theme: any = createTheme({
  /** mantine theme override here */
  fontFamily:  `Verdana, sans-serif, ${milkyWalkyFont.style.fontFamily}`,
  headings: { fontFamily: milkyWalkyFont.style.fontFamily, },

  colors: {
    darkBlue: myDarkBlue,
    rose: myRose,
    lightBlue: myLightBlue,
    eggshell: myEggshell,
    khaki: myKhaki,
  },
  primaryColor: 'darkBlue',
  // secondaryColor: 'rose',
});
