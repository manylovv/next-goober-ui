import React from 'react';
import { setup, styled } from 'goober';

setup(React.createElement);

const StyledCard = styled('div')`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 114px;
  height: 107px;
  background: #ffffff;
  border-radius: 10px;
`;

const StyledIcon = styled('div')`
  margin: 15px 0px 12px 0px;
`;

const StyledLabel = styled('span')`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 2px;
`;

const StyledValue = styled('span')`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
`;

interface CardProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

export const Card = ({ icon, label, value }: CardProps) => {
  return (
    <StyledCard>
      <StyledIcon>{icon}</StyledIcon>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </StyledCard>
  );
};
