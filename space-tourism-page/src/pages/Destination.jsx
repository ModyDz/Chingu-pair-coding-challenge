import styled from "styled-components";
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";
import mobileBackground from "../assets/destination/background-destination-mobile.jpg";
import tabletBackground from "../assets/destination/background-destination-tablet.jpg";
import desktopBackground from "../assets/destination/background-destination-desktop.jpg";
import data from "../data";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: url(${mobileBackground}) no-repeat;
  background-color: black;
  color: white;
  max-width: 1400px;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    background: url(${tabletBackground}) no-repeat;
  }
  @media screen and (min-width: 768px) {
    background: url(${desktopBackground}) no-repeat;
  }
`;

const PlanetContainer = styled.div`
  margin-top: 2rem;
  max-width: 1100px;
  width: 100%;
`;

const Header = styled.div`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;
  &::before {
    content: "01";
    color: rgba(255, 255, 255, 0.25);
    margin-right: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    margin-left: 2.25rem;
    text-align: left;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  & > * {
    flex-shrink: 0;
    flex: 1;
  }
`;
const PlanetSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > * {
    flex: 1;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
const PictureContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  flex-shrink: 0;
`;
const PictureSlider = styled.div`
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}%);
  width: 100%;
`;
const PlanetPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
`;
const Picture = styled.img`
  width: 170px;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1024px) {
    width: 455px;
    margin-bottom: 0;
  }
`;

const Planet = styled.div`
  flex-shrink: 0;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;
const PlanetsDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`;
const DetailsSlider = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  transform: translateX(${(props) => props.sliderIndex * -100}%);
`;
const List = styled.ul`
  justify-content: center;
  display: flex;
  gap: 1.7rem;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const PlanetDetail = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #d0d6f9;
  cursor: pointer;
  padding: 0.5rem;
  border-bottom: ${(props) =>
    props.planetIndex === props.sliderIndex && "3px solid white"};
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
const PlanetName = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-family: "Bellefair", serif;
  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 6.25rem;
  }
`;

const Description = styled.div`
  padding: 0 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "Barlow", sans-serif;
  color: #d0d6f9;
  @media screen and (min-width: 1024px) {
    text-align: left;
    padding: 0;
    line-height: 2;
    font-size: 1.2rem;
  }
`;
const HorizLine = styled.hr`
  width: 90%;
  border: 1px solid #383b4b;
  align-self: center;
  @media screen and (min-width: 1024px) {
    align-self: flex-start;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
  @media screen and (min-width: 1024px) {
    align-self: flex-start;
  }
`;
const Distance = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.75rem;
  font-family: "Bellefair", serif;
  &::before {
    content: "AVG. DISTANCE";
    display: block;
    font-size: 14px;
    color: #d0d6f9;
    margin-bottom: 0.75rem;
  }
`;
const Time = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.75rem;
  font-family: "Bellefair", serif;
  &::before {
    content: "EST. TRAVEL TIME";
    display: block;
    font-size: 14px;
    color: #d0d6f9;
    margin-bottom: 0.75rem;
  }
`;
export default function Destination() {
  const [planetSlider, setPlanetSlider] = useState(0);
  return (
    <Container>
      <PlanetContainer>
        <Header>PICK YOUR DESTINATION</Header>
        <SliderContainer>
          <PlanetSlider>
            <PictureContainer>
              <PictureSlider sliderIndex={planetSlider}>
                <PlanetPicture>
                  <Picture src={Moon} />
                </PlanetPicture>
                <PlanetPicture>
                  <Picture src={Mars} />
                </PlanetPicture>
                <PlanetPicture>
                  <Picture src={Europa} />
                </PlanetPicture>
                <PlanetPicture>
                  <Picture src={Titan} />
                </PlanetPicture>
              </PictureSlider>
            </PictureContainer>
            <Planet>
              <List>
                {data.map((planet, index) => (
                  <ListItem
                    planetIndex={index}
                    sliderIndex={planetSlider}
                    onClick={() => {
                      setPlanetSlider(index);
                    }}
                  >
                    {planet.name}
                  </ListItem>
                ))}
              </List>
              <PlanetsDetails>
                <DetailsSlider sliderIndex={planetSlider}>
                  {data.map((planet) => (
                    <PlanetDetail>
                      <PlanetName>{planet.name.toUpperCase()}</PlanetName>
                      <Description>{planet.description}</Description>
                      <HorizLine />
                      <Details>
                        <Distance>{planet.distance}</Distance>
                        <Time>{planet.travel}</Time>
                      </Details>
                    </PlanetDetail>
                  ))}
                </DetailsSlider>
              </PlanetsDetails>
            </Planet>
          </PlanetSlider>
        </SliderContainer>
      </PlanetContainer>
    </Container>
  );
}
