import React, { useEffect } from "react";
import ball from "../../assets/ball.svg";
import wave from "../../assets/wave.svg";
import styled from "styled-components";
import '../impdate/css/style.css'
import '../impdate/css/media-query.css'
import wave2 from "../../assets/wavenobg.svg";
const CommitteContainer = styled.div`
  background-color: black;
  padding: 30px;
  background-image: url("${wave2}");
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

 &::before{
  content: '';
  width: 200px;
  height: 300px;
  color: red;
  background-color: red;
 }
`;

const Title = styled.h1`
  text-align: center;
  text-shadow: 5px 5px #0044ff;
  /* color: #4775f4; */
  color: white;
  font-size: 5vw;
  @media (max-width: 786px) {
    font-size: 10vw;
  }
`;

const Card = styled.div`
  border: 0.6px solid gray;
  padding: 1rem;

  border-radius: 10px;
  margin: 2rem 0;
  color: black;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const Cardname = styled.h2`
  @media (max-width: 435px) {
    font-size: medium;
  }
`;
const Cardposition = styled.h4`
  color: #4775f4;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 2em;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;
const Heading = styled.h1`
  color: white;
text-align: center;
`
function Committe() {
  const chiefPatron = [
    {
      name: "Dr.N.M.Veeraiyan",
      position: "Founder & President SIMATS Patrons",
    },
    {
      name: "Dr. Saveetha Rajesh",
      position: "Director, SMCH",
    },
    {
      name: "Dr. S. Rajesh,",
      position: "Director, SEC",
    },
  ];
  const coPatron = [
    {
      name: "Dr. N. Duraipandian,",
      position: "Principal, SEC",
    },
    {
      name: "Dr. R. Senthil Kumar,",
      position: "Vice Principal, SEC",
    },
    {
      name: "Dr. V. Vijayachamundeewari,",
      position: "Professor & Dean",
    },
    {
      name: "Mr. C. Obed Otto,",
      position: "Dean (ICT)",
    },
  ];
// const Bgimg = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
// `
// const Bgimg2 = styled.img`
//   position: absolute;
// bottom: 0;
//   left: 0;

// `
  return (
    <CommitteContainer >
      {/* <Bgimg  src={wave}/>
      <Bgimg2 src={wave2}/> */}
      <Title data-aos="fade-up">Organizing Committe</Title>
      <Container>
        <div>
          <Heading data-aos="zoom-in">Cheif Patron</Heading>

          {chiefPatron.map((data,i) => {
            return (
              <Card data-aos="fade-right" data-aos-delay={i*100}>
                <Cardname>{data.name}</Cardname>
                <Cardposition>{data.position}</Cardposition>
              </Card>
            );
          })}
        </div>
        <div>
          <Heading data-aos="zoom-in">Co-Patrons</Heading>
          {coPatron.map((data,i) => {
            return (
              <Card data-aos="fade-left"  data-aos-delay={i*100}>
                <Cardname>{data.name}</Cardname>
                <Cardposition>{data.position}</Cardposition>
              </Card>
            );
          })}
        </div>
      </Container>
    </CommitteContainer>
  );
}

export default Committe;
