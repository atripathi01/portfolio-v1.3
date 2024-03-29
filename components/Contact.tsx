import { styled } from "@stitches/react";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <MainContact className="pt-9">
      <ContactBody>
        <Note>
        If you are interested and want to know more about me and my works.You can check my <span><a style={{color:"#7510f7"}} href="https://drive.google.com/file/d/1dgLSyGCcgdLblutYwPBtiZ9UhbokShuW/view?usp=sharing">Resume</a></span>
        </Note>
        {/* <ResumeBtn className="mb-8">Resume</ResumeBtn> */}
        <Title className="mt-6 mb-8">Connect with me,</Title>

        <MailBox>
          <MainContainer>
            <RightContainer>
              If want to connect or contact <br />
              you sent me a mail.
              <br />
              <Social className="pt-9">
                <TwitterIcon className="text-3xl" />
                <LinkedInIcon className="text-3xl" />
                <GitHubIcon className="text-3xl" />
                <EmailIcon className="text-3xl" />
              </Social>
            </RightContainer>
            <LeftContainer>
              <form>
              <label>Name</label><br />
              <input placeholder="enter your name" style={{padding:"5px 10px",margin:"3px 0",color:"#010101"}}/><br />
              <label>Email</label><br />
              <input placeholder="enter your email" style={{padding:"5px 10px",margin:"3px 0",color:"#010101"}}/><br />
              <label>Messege</label><br />
              <textarea placeholder="enter messege" style={{padding:"5px 10px",margin:"3px 0",color:"#010101"}}/><br />
              <button type="submit" style={{padding:"3px 5px", background:"#7510F7", color:"#ffffff", borderRadius:"2px"}}>Send</button>
              </form>
              

            </LeftContainer>
          </MainContainer>
        </MailBox>
      </ContactBody>
    </MainContact>
  );
};

const Note = styled("div", {
  fontSize: "18px",
  color: "#757575",
  length: 0,
});
const ResumeBtn = styled("button", {
  fontSize: "16px",
  padding: "0.5rem 1rem",
  background: "transparent",
  border: "3px solid #7510f7",
  color: "#7510f7",
  length: 0,
  fontWeight: "bold",
  borderRadius: "3px",
});
const MainContact = styled("div", {
  length: 0,
});
const ContactBody = styled("div", {
  display: "flex",
  justifyContent: "left",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  length: 0,
});
const Social = styled("div", {
  width: "100%",
  maxWidth: "250px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  length: 0,
});
const Title = styled("h1", {
  fontSize: "26px",
  fontWeight: "bold",
  length: 0,
});
const MailBox = styled("div");
const MainContainer = styled("section",{
  display:"flex",
  justifyContent:"flex-start",
  alignItems:"center",
  paddingBottom:"5rem"
});
const RightContainer = styled("div",{
  marginRight:"4rem"
});
const LeftContainer = styled("div");
export default Contact;
