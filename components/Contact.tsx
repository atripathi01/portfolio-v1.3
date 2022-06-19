import { styled } from '@stitches/react'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
  return (
    <MainContact>
        <ContactBody>
            <Note>If you interest and know more about me and my works. You can check my Resume</Note>
            <ResumeBtn className='mb-8'>Resume</ResumeBtn>
            <Title className='mt-6 mb-8'>Connect with me,</Title>
            <Social >
                <TwitterIcon className='text-4xl' />
                <LinkedInIcon className='text-4xl' />
                <GitHubIcon className='text-4xl' />
                <EmailIcon className='text-4xl' />
            </Social>
        </ContactBody>
    </MainContact>
  )
}

const Note=styled('div',{
 fontSize:"18px",
 color:"#757575",
length:0,
})
const ResumeBtn=styled('button',{
    fontSize:'16px',
    padding:'0.5rem 1rem',
    background:'transparent',
    border:'3px solid #7510f7',
    color:'#7510f7',
    length:0,
    fontWeight:"bold",
    borderRadius:'3px',
})
const MainContact=styled('div',{
    length: 0
})
const ContactBody=styled('div',{
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    length: 0
})
const Social=styled('div',{
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    length: 0
})
const Title=styled('h1',{
    fontSize: '26px',
    fontWeight: 'bold',
    length: 0
})

export default Contact