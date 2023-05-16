import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonInfo(props) {
  return (
    <Container {...props}>
      <ViewTeam>View Team</ViewTeam>
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

const ViewTeam = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`;

export default CupertinoButtonInfo;
