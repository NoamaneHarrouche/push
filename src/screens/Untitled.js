import React, { Component } from "react";
import styled, { css } from "styled-components";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import ZocialIcon from "react-native-vector-icons/dist/Zocial";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Untitled(props) {
  return (
    <>
      <Rect>
        <IconRow>
          <EvilIconsIcon
            name="sc-facebook"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 43,
              height: 47,
              width: 43,
              marginTop: 3
            }}
          ></EvilIconsIcon>
          <FontAwesomeIcon
            name="instagram"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 30,
              height: 30,
              width: 26,
              marginLeft: 3,
              marginTop: 12
            }}
          ></FontAwesomeIcon>
          <ZocialIcon
            name="twitter"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 27,
              height: 29,
              width: 27,
              marginLeft: 18,
              marginTop: 14
            }}
          ></ZocialIcon>
          <EntypoIcon
            name="pinterest"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 30,
              height: 33,
              width: 30,
              marginLeft: 15,
              marginTop: 12,
              marginBottom: 9
            }}
          ></EntypoIcon>
          <EvilIconsIcon
            name="sc-tumblr"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 35,
              height: 38,
              width: 35,
              marginLeft: 10,
              marginTop: 9
            }}
          ></EvilIconsIcon>
          <MaterialCommunityIconsIcon
            name="whatsapp"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 30,
              height: 33,
              width: 30,
              marginLeft: 9,
              marginTop: 10
            }}
          ></MaterialCommunityIconsIcon>
          <EvilIconsIcon
            name="sc-youtube"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 50,
              height: 54,
              width: 50,
              marginLeft: 6
            }}
          ></EvilIconsIcon>
          <LoremIpsum27>© Start, 2022. All rights reserved.</LoremIpsum27>
        </IconRow>
      </Rect>
      <Rect2>
        <Image3Row>
          <Image3 src={require("../assets/images/image_NAVU..png")}></Image3>
          <Start>Start</Start>
          <Home>Home</Home>
          <Portfolio>Portfolio</Portfolio>
          <Services>Services</Services>
          <Contact>Contact</Contact>
        </Image3Row>
        <WelcomeColumnRow>
          <WelcomeColumn>
            <Welcome>WELCOME</Welcome>
            <Text8>Lorem ipsum dolor sit amet consectetur</Text8>
            <Text7>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </Text7>
            <CupertinoButtonGrey1
              style={{
                height: 44,
                width: 135,
                marginTop: 52,
                marginLeft: 35
              }}
            ></CupertinoButtonGrey1>
          </WelcomeColumn>
          <Image src={require("../assets/images/Group.png")}></Image>
        </WelcomeColumnRow>
      </Rect2>
      <Image2 src={require("../assets/images/Frame_24.png")}></Image2>
      <Partners>Partners</Partners>
      <LoremIpsumDolor>Lorem Ipsum Dolor</LoremIpsumDolor>
      <Text>
        Lorem ipsum, dolor sit amet consectetur{"\n"}adipisicing elit.
      </Text>
      <CupertinoButtonGrey
        style={{
          height: 44,
          width: 133,
          backgroundColor: "rgba(60,58,58,1)",
          marginTop: 143,
          marginLeft: 654
        }}
      ></CupertinoButtonGrey>
      <Image4Row>
        <Image4 src={require("../assets/images/image_Uiv1..png")}></Image4>
        <Text2Column>
          <Text2>Lorem ipsum dolor sit amet consectetur</Text2>
          <Text3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </Text3>
          <CupertinoButtonGrey
            style={{
              height: 44,
              width: 133,
              backgroundColor: "rgba(60,58,58,1)",
              marginTop: 24
            }}
          ></CupertinoButtonGrey>
        </Text2Column>
      </Image4Row>
      <Text6ColumnRow>
        <Text6Column>
          <Text6>Lorem ipsum dolor sit amet consectetur</Text6>
          <Text5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </Text5>
          <CupertinoButtonGrey
            style={{
              height: 44,
              width: 133,
              backgroundColor: "rgba(60,58,58,1)",
              marginTop: 29
            }}
          ></CupertinoButtonGrey>
        </Text6Column>
        <Image5 src={require("../assets/images/image_on8N..png")}></Image5>
      </Text6ColumnRow>
      <LoremIpsum12Row>
        <LoremIpsum12></LoremIpsum12>
        <Team>Team</Team>
      </LoremIpsum12Row>
      <Image9Row>
        <Image9 src={require("../assets/images/image_FlAY..png")}></Image9>
        <Image8 src={require("../assets/images/image_osb1..png")}></Image8>
        <Image7 src={require("../assets/images/image_udDD..png")}></Image7>
        <Image6 src={require("../assets/images/image_VNZ2..png")}></Image6>
      </Image9Row>
      <Text4>
        Lorem ipsum, dolor sit amet consectetur{"\n"}Suscipit nemo hic quos, ab,
      </Text4>
      <OurTalents>Our talents</OurTalents>
      <CupertinoButtonInfo
        style={{
          height: 44,
          width: 130,
          marginTop: 398,
          marginLeft: 643
        }}
      ></CupertinoButtonInfo>
    </>
  );
}

const Rect = styled.div`
  width: 1440px;
  height: 125px;
  background-color: rgba(116,198,157,1);
  flex-direction: row;
  display: flex;
  margin-top: 2915px;
`;

const LoremIpsum27 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 39px;
  width: 383px;
  font-size: 25px;
  margin-left: 474px;
  margin-top: 9px;
`;

const IconRow = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 132px;
  margin-left: 149px;
  margin-top: 34px;
`;

const Rect2 = styled.div`
  width: 1440px;
  height: 559px;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
  margin-top: -3040px;
`;

const Image3 = styled.img`
  height: 48px;
  width: 100%;
  object-fit: contain;
`;

const Start = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  width: 99px;
  height: 50px;
  text-align: center;
  font-size: 40px;
`;

const Home = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  width: 58px;
  height: 25px;
  line-height: 20px;
  text-align: center;
  margin-left: 508px;
  margin-top: 13px;
`;

const Portfolio = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  width: 83px;
  height: 25px;
  line-height: 20px;
  text-align: center;
  margin-left: 28px;
  margin-top: 13px;
`;

const Services = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  width: 82px;
  height: 25px;
  line-height: 20px;
  text-align: center;
  margin-left: 26px;
  margin-top: 13px;
`;

const Contact = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  width: 78px;
  height: 25px;
  text-align: center;
  line-height: 20px;
  margin-left: 36px;
  margin-top: 13px;
`;

const Image3Row = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  margin-top: 34px;
  margin-left: 112px;
  margin-right: 260px;
`;

const Welcome = styled.span`
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 1px;
`;

const Text8 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 30px;
  width: 370px;
  height: 73px;
  margin-top: 15px;
`;

const Text7 = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  width: 415px;
  height: 78px;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 20px;
`;

const WelcomeColumn = styled.div`
  width: 415px;
  flex-direction: column;
  display: flex;
  margin-top: 82px;
`;

const Image = styled.img`
  width: 100%;
  height: 378px;
  margin-left: 1px;
  object-fit: contain;
`;

const WelcomeColumnRow = styled.div`
  height: 383px;
  flex-direction: row;
  display: flex;
  margin-top: 33px;
  margin-left: 120px;
  margin-right: 260px;
`;

const Image2 = styled.img`
  width: 1159px;
  height: 50px;
  margin-top: 301px;
  margin-left: 141px;
  object-fit: repeat;
`;

const Partners = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(116,198,157,1);
  font-size: 25px;
  text-align: center;
  line-height: 30px;
  letter-spacing: 4px;
  margin-top: -272px;
  margin-left: 657px;
`;

const LoremIpsumDolor = styled.span`
  font-family: Georgia Regular;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 44px;
  line-height: 44px;
  margin-top: 28px;
  margin-left: 527px;
`;

const Text = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 19px;
  text-align: center;
  line-height: 25px;
  letter-spacing: 1px;
  margin-top: 15px;
  margin-left: 544px;
`;

const Image4 = styled.img`
  height: 431px;
  width: 100%;
  object-fit: contain;
`;

const Text2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
  width: 370px;
  height: 73px;
`;

const Text3 = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 406px;
  height: 53px;
  font-size: 16px;
  margin-top: 11px;
`;

const Text2Column = styled.div`
  width: 406px;
  flex-direction: column;
  display: flex;
  margin-left: 155px;
  margin-top: 141px;
  margin-bottom: 85px;
`;

const Image4Row = styled.div`
  height: 431px;
  flex-direction: row;
  display: flex;
  margin-top: 98px;
  margin-left: 120px;
  margin-right: 159px;
`;

const Text6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
  width: 370px;
  height: 73px;
`;

const Text5 = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 406px;
  height: 53px;
  font-size: 16px;
  margin-top: 11px;
`;

const Text6Column = styled.div`
  width: 406px;
  flex-direction: column;
  display: flex;
  margin-top: 181px;
  margin-bottom: 175px;
`;

const Image5 = styled.img`
  height: 566px;
  width: 100%;
  margin-left: 120px;
  object-fit: contain;
`;

const Text6ColumnRow = styled.div`
  height: 566px;
  flex-direction: row;
  display: flex;
  margin-top: 102px;
  margin-left: 182px;
  margin-right: 132px;
`;

const LoremIpsum12 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const Team = styled.span`
  font-family: Alata;
  font-style: normal;
  font-weight: 400;
  color: rgba(116,198,157,1);
  font-size: 25px;
  text-align: center;
  line-height: 30px;
  letter-spacing: 4px;
  margin-left: 487px;
`;

const LoremIpsum12Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 106px;
  margin-left: 182px;
  margin-right: 692px;
`;

const Image9 = styled.img`
  height: 297px;
  width: 100%;
  object-fit: contain;
`;

const Image8 = styled.img`
  height: 297px;
  width: 100%;
  margin-left: 32px;
  object-fit: contain;
`;

const Image7 = styled.img`
  height: 297px;
  width: 100%;
  margin-left: 49px;
  object-fit: contain;
`;

const Image6 = styled.img`
  height: 297px;
  width: 100%;
  margin-left: 19px;
  object-fit: contain;
`;

const Image9Row = styled.div`
  height: 297px;
  flex-direction: row;
  display: flex;
  margin-top: 152px;
  margin-left: 154px;
  margin-right: 178px;
`;

const Text4 = styled.span`
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 19px;
  text-align: center;
  line-height: 25px;
  letter-spacing: 1px;
  margin-top: -362px;
  margin-left: 527px;
`;

const OurTalents = styled.span`
  font-family: Georgia Regular;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 44px;
  line-height: 44px;
  text-align: center;
  margin-top: -109px;
  margin-left: 594px;
`;

export default Untitled;
