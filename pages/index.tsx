import { styled } from '@stitches/react';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <MainContainer>
        <Navbar />
        <MainBody>
          <Center>
            {' '}
            <Header />
            <About />
            <Contact />
          </Center>
        </MainBody>
      </MainContainer>
            <Footer>
                <Content>Made in <a href='https://nextjs.org/'>Nextjs</a></Content>
            </Footer>
    </div>
  );
}


const MainContainer = styled('div', {
    color: 'rgba(255,255,255,0.9)',
    // color:'#010101',
    // backgroundColor:"#fff",
      backgroundColor: '#020d1f',
    // background: " rgb(231,237,255) linear-gradient(180deg, rgba(231,237,255,1) 0%, rgba(255,255,255,1) 100%)",
    length: 0
});
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
const Footer=styled('footer',{
    length:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'6vh',
    width:'100%',
    backgroundColor:'#7510f7'
})
const Content=styled('div',{
    color:'#cfcfcf',
    length:0,
    fontSize:'18px',
    
})