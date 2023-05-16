import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonGrey(props) {
  return (
    <Container {...props}>
      <LearnMore>Learn More</LearnMore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(74,74,74,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const LearnMore = styled.span`
  font-family: Calibri;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  font-style: normal;
`;

export default CupertinoButtonGrey;
