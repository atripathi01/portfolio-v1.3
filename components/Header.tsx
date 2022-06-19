import { styled } from '@stitches/react';
import React from 'react';
import classes from '../styles/Home.module.css';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div>
      <HeaderMain className={classes.fontty}>
        Hey, I'm Ayush Tripathi! 👋
      </HeaderMain>
      <HeaderS className={classes.fontty}>
        Frontend developer {'  '}
        <Languages>
          <Typewriter
            options={{
              strings: ['Reactjs', 'Typescript','Javascript','Graphql','Nextjs','Nodejs','Expressjs','MongoDB','Framer-Motion','Figma','Styled-components','AWS Amplify & AppSync'],
              autoStart: true,
              loop: true,
            }}
          />
        </Languages>
      </HeaderS>
    </div>
  );
};

const HeaderMain = styled('div', {
  fontSize: '5rem',
  // fontWeight: 'bold',
  margin: '5rem auto',
  length: 0,
});
const HeaderS = styled('div', {
  fontSize: '3rem',
  // fontWeight: 'bold',
  length: 0,
  marginTop: '-2rem',
  marginBottom: '3rem',
});
const Languages = styled('span', {
  fontSize: '1.8rem',
  color:"rgb(252,179,44)",
  length:0,
});
export default Header;
