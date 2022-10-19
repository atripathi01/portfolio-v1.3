import { styled } from '@stitches/react';
import React from 'react'

const Blog = () => {
  return (
    <MainBody>
      <Center>
      <h1 style={{fontSize:"98px"}}>/blogs</h1>
      <div>
      Coming Soon.
      </div>
      </Center>
    </MainBody>
   
  )
}

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

export default Blog