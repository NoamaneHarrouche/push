import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonGrey1(props) {
  return (
    <Container {...props}>
      <Explore>Explore</Explore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Explore = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export default CupertinoButtonGrey1;
