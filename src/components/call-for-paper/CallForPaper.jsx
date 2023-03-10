import React from "react";
import styled from "styled-components";
import wave from "../../assets/wavetop.svg";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const CommitteContainer = styled.div`
  background-color: black;
  padding: 30px;

  /* background: #FC5C7D; 
background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D); 
background: linear-gradient(to right, #6A82FB, #FC5C7D);  */

background: #7F00FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  /* background-image: url("${wave}"); */
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;

  text-shadow: 5px 5px  #7F00FF;
  /* color: #4775f4; */
  margin: 2rem 0;
  color: white;
  font-size: 100px;
  @media (max-width: 786px) {
    font-size: 10vw;
  }
`;

const Card = styled.div`
  /* border: 0.2px solid gray; */
  padding: 1rem;

  border-radius: 10px;
  /* margin: 2rem 0; */
  background-color: #000000;
  color: #ffffff;
  backdrop-filter: blur(10px);
  text-align: left;

  /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  /* background-color: #ffffff; */
  /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */ /* this is good*/
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
`;
const Cardname = styled.h3`
  color: #ffffff;
  font-weight: bolder;
  text-align: center;
  @media (max-width: 435px) {
    font-size: medium;
  }
`;
const Cardposition = styled.h4`
  color: #4775f4;
`;
const Container = styled.div`
margin-top: 2rem;
  /* display: flex;
  justify-content: space-evenly;
  align-items: flex-start; */

  /* flex-wrap: wrap; */
  padding: 0;
  margin: 0;
  /* padding: 1em; */


  @media (max-width: 786px) {
    /* flex-direction: column; */
  }
`;
const Head2 = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  text-align: center;
  justify-content: flex-start;
  @media (max-width: 786px) {
     flex-direction: column;


    
  }
`
const Heading = styled.h1`
  color: white;
  text-shadow: 5px 5px  #7F00FF;
  /* letter-spacing: 10px; */
  /* background-color: white; */
  padding: 10px;
  margin: 1rem 0;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bolder;
  /* color: black; */

  text-align: left;
  @media (max-width: 786px) {
    text-align: center;
  }
`;

function CallForPaper() {
  const EnergyEngineering = [
    {
      name: "Agriculture ",
    },
    {
      name: "Quality Education",
    },
    {
      name: "Health Care ",
    },
    {
      name: "Clean Water ",
    },
    ,
    {
      name: "Energy Management",
    },
    ,
    {
      name: "Climate Modelling ",
    },
    ,
    {
      name: "Green Environment",
    },
  ];
  const EnvironmentalEngineering = [
    {
      name: "GIS Application for Air Pollution Modelling",
    },
    {
      name: "GIS Application for Land Use",
    },
    {
      name: "Environmental System Modelling and Optimization",
    },
  ];
  const AI = [
    {
      name: "Machine Learning and Deep Learning ",
    },
    {
      name: "Big Data Analytics",
    },
    {
      name: "Image Processing",
    },
    {
      name: "Nano Computing ",
    },
    {
      name: "Mobile Communication ",
    },
    {
      name: "Network Security ",
    },{
name:'5G technologies '
    },
    {
      name: "Internet of Things ",
    },
  ];

  return (
    <CommitteContainer>
      <Title data-aos="fade-up">Call for Paper</Title>
      {/* <Alert severity="info" sx={{
        textAlign:'center'
      }}>Authors are invited to submit technical papers in Taylor & Francis Conference Proceeding template format which are not under review in any other conference or journal for presentation on the following broad topics, but not limited to </Alert> */}
      
      <p style={{
        color:'white',
        fontSize:'20px',
        fontWeight:'bolder'
      }}>Authors are invited to submit technical papers for ICARSI'23 in Taylor & Francis Conference Proceeding template which are not under review in any other conference or journal. The invited papers on the following broad topics, but not limited to</p>
      <Container>
        <div>
          <Heading data-aos="zoom-in">Sustainable Goals </Heading>
<Head2>

          {EnergyEngineering.map((data, i) => {
            return (
              <Card data-aos="fade-right" data-aos-delay={i * 100}>
                <Cardname>{data.name}</Cardname>
                {/* <Cardposition>{data.position}</Cardposition> */}
              </Card>
            );
          })}
</Head2>
`
        </div>
        <div style={{
          marginTop:'2rem'
        }}>
          <Heading data-aos="zoom-in">
            Technologies for Sustainable Development{" "}
          </Heading>
          <Head2>

          {AI.map((data, i) => {
            return (
              <Card data-aos="fade-left" data-aos-delay={i * 100}>
                <Cardname>{data.name}</Cardname>
                {/* <Cardposition>{data.position}</Cardposition> */}
              </Card>
            );
          })}
          </Head2>
        </div>
      </Container>
    </CommitteContainer>
  );
}

export default CallForPaper;
