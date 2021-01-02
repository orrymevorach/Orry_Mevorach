import React, { useState, createContext } from 'react';

const darkRed = 'rgb(232, 16, 63)';
const lightRed = 'rgb(236, 22, 69)';
const redBoxShadow = 'rgba(182, 9, 46, 0.23)';
const darkPurple = 'rgb(113, 52, 219)';
const lightPurple = 'rgb(117, 51, 231)';
const darkBlue = 'rgb(35, 111, 255)';
const lightBlue = '#3679f8';
const lightGrey = 'rgb(236, 236, 236)';
const darkGrey = 'rgb(199, 198, 198)';
const lightYellow = 'rgb(253, 208, 80)';
const darkYellow = 'rgb(251, 202, 61)';
const shadowYellow = 'rgb(209, 155, 7)';
const white = '#ffffff';

// export const ThemeContext = createContext('theme');

export const themes = {
  red: {
    outerContainerStyles: {
      backgroundColor: darkRed,
    },
    innerContainerStyles: {
      backgroundColor: lightRed,
      backgroundImage:
        'https://orry-mevorach.s3.ca-central-1.amazonaws.com/red-dot-graphics-copy.png',
      boxShadow: redBoxShadow,
    },
    variables: {
      dark: darkRed,
      light: lightRed,
      boxShadow: redBoxShadow,
    },
  },
};

// export default function ThemeContextProvider({ children }) {
//   return (
//     <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
//   );
// }
