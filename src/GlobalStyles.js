import { createGlobalStyle } from 'styled-components';
import fontRegular from '../src/fonts/Manrope-Regular.ttf';
import fontBold from '../src/fonts/Manrope-Bold.ttf';
import fontSemiBold from '../src/fonts/Manrope-SemiBold.ttf';
import fontMedium from '../src/fonts/Manrope-Medium.ttf';

export const Global = createGlobalStyle`

@font-face {
    font-family: 'Manrope';
  font-weight: 400 500 600 700;
  src: url(${fontRegular}), url(${fontMedium}), url(${fontSemiBold}), url(${fontBold}) ;
}

body{
font-family: 'Manrope', sans-serif;
background-color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;