import React from "react";
import styled from "styled-components";
import Image from "../img/dina.jpg";
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={Image} />
      <Details>
        <Name>
          Saima Sultana <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae aspernatur temporibus tenetur omnis ut eveniet iusto tempora
          impedit nihil accusantium repellat facere, in error incidunt.
          Recusandae ratione totam eaque.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
