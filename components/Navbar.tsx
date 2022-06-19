import Link from 'next/link';
import React from 'react';
import { styled } from '@stitches/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = () => {
  return (
    <Nav>
      <NavbarWrapper>
        <Logo>
          <Name></Name>
        </Logo>
        <NavItems>
          <NavLink>
            <StyledLink href='/about'>About</StyledLink>
          </NavLink>
          {/* <NavLink>
            <StyledLink href='#project'>Projects</StyledLink>
          </NavLink> */}
          <NavLink>
            <StyledLink href='/blog'>Blogs</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink href='#contact'>Contact</StyledLink>
          </NavLink>
          <NavLink>
            <SocialLink href='https://github.com/atripathi01'>
              <GitHubIcon />
            </SocialLink>
          </NavLink>
          <NavLink>
            <SocialLink href='https://twitter.com/ayush___07'>
              <TwitterIcon />
            </SocialLink>
          </NavLink>
        </NavItems>
      </NavbarWrapper>
    </Nav>
  );
};
const Nav = styled('div', {
    width: '100%',
    height: 'fit-content',
    minHeight: '3rem',
    backgroundColor: 'transparent',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    length: 0
});
const NavbarWrapper = styled('nav', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '1rem auto',
    maxWidth: "700px",
    width: '100%',
    length: 0
});
const NavItems = styled('ul', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    length: 0
});
const NavLink = styled('li', {
    margin: '0.5rem 1rem',
    fontSize: '18px',
    display: 'inline-block',
    position: 'relative',

    ':after': {
        content: '',
        position: 'absolute',
        width: ' 100%',
        transform: 'scaleX(0)',
        height: '3.5px',
        bottom: '0',
        left: '0',
        // backgroundColor: "#0087ca",
        background: 'rgb(252,179,44) linear-gradient(90deg, rgba(252,179,44,1) 0%, rgba(252,200,44,1) 100%)',
        // background:
        //   ' rgb(9,9,121)   linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,91,255,1) 100%)',
        transformOrigin: 'bottom right',
        transition: 'transform 0.25s ease-out',
    },

    ':hover:after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
    },
    length: 0
});
const SocialLink = styled(Link, {
    length: 0
});
const StyledLink = styled(Link, {
    length: 0
});
const Logo = styled('ul', {
    length: 0
});
const Name = styled('li', {
    length: 0
});
export default Navbar;
