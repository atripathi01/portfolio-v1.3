import { styled } from '@stitches/react'
import React from 'react'
import { data } from './UI/Api'
import { Bold, Color, LinkTag } from './UI/UIcomponents'

const About = () => {
  return (
    <AboutContainer>
        <Paragraph>
            <div>
            I'm a India-based developer. Basically I love working with React. I'm also worked with some other language like Javascript, Typescript, Graphql, Nodejs, Expressjs, Redux, C++, and so more.
            <br></br>
            <br />
            I'm currently a frontend engineer at <Color className="font-bold">Wrki.ai</Color>. there I'm working with <Color className='font-bold'> Typescript + React.</Color>
            <br />
            <br />
            <br />
            <br />
            <Bold>
                Some other things and tools, which I use for working and I am familar with that,
            </Bold>
            <br />
            
            {data?.map((ls,index)=>(
                <div key={index} className='mt-2 mb-4'>
                 <Color><a href={ls.link} className='underline font-bold'>{ls.title}</a></Color>  : <span>{ls.para}</span>
                </div>
            ))}
          
          
          
          
            </div>

            
         
        </Paragraph>
    </AboutContainer>
  )
}

const AboutContainer=styled('div',{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    length: 0
})
const Paragraph=styled('div',{
    // maxWidth:'700px';
    display: 'flex',
    justifyContent: 'left',
    alignItems: "center",
    fontSize: "1.2em",
    // padding:"1rem";
    width: '100%',
    length: 0
})
const ListOfTools=styled('div',{
    length: 0
})
export default About