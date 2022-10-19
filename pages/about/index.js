import React from 'react'
import {Color} from '../../components/UI/UIcomponents';
import {equpiment,software} from '../../components/UI/Api'
import { styled } from '@stitches/react';
// import Navbar from '../../components/Navbar';

const About = () => {
  return (
    <MainContainer>
    {/* <Navbar /> */}
    <MainBody>
      <Center>
        <h1 style={{fontSize:"98px"}}>
          /about
        </h1>

      <div>
        Hey there, I am Ayush Tripathi, Frontend developer. Currently I am work in <a href='https://www.wrky.ai/'>Wrky.ai</a> as a Frontend developer 
        and also I am in my final year of Bechelor of Technology (B.tech.) with the Computer Science of Engineering stream 
        . I have  1+ year of experiences on frontend development. and also work on 
        different-different project as a Freelencer
      </div>
      <h1>Some Equpiments, which I using!!  </h1>
      
      {equpiment?.map((ls)=>(
        <div key={ls.key} className='mt-2 mb-4'>
                 <Color><a href={ls.link} className='underline font-bold'>{ls.title}</a></Color>  {" "} <span>{ls.para}</span>
                 {console.log(ls.title)}
                </div>
      ))}

      <h1>Some Software 
      </h1>

      {software?.map((ls)=>
      <div key={ls.key} className='mt-2 mb-4'>
      <Color><a href={ls.link} className='underline font-bold'>{ls.title}</a></Color>{ " "}<span>{ls.para}</span>
     </div>)}

     <div>
      <p>
        Lets come out of the tech world. I like Travelling, Music, Riding etc. 
      </p>
     </div>
     </Center>
    </MainBody>
    </MainContainer>

  )
}

const MainContainer=styled("div",{

})
const MainBody = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  length: 0
});

const Center=styled('div',{
  maxWidth: '700px',
  width: '100%',
  minHeight: '92vh',
  padding: 'auto 1rem',
  length: 0
})

export default About