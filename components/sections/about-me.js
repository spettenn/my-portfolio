import styled from "styled-components";
import React from "react";

const About_me_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #fec401;
  height: 100vh;
  width: 100%;
  margin: 0%;
  text-align: center;
`;
const About_me_flex = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
`;

function About_me_layout() {
  return (
    <About_me_wrapper>
      {/* FIXME: ClassName has no real css */}
      <h1 className="about_title">About me</h1>
      <About_me_flex>
        <p className="about_text">
          Hello, I am 26 year old, born in Bærum, Norway. I have for the past
          two years been developing my skills in front-end development at Noroff
          school of technology. I started web-development after corona hit the
          coasts of Norway and I was forced to change my profession. I then was
          looking for another opportunity as i was currently working in
          tourism... For me, changing profession was an eye opener as i have
          always been an technology enthusiast, and getting to know and
          experience how the applications and solutions I have been using my
          whole life.
        </p>
      </About_me_flex>
    </About_me_wrapper>
  );
}

export default About_me_layout;
