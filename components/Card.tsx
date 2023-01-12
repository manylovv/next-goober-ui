import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { setup, styled } from 'goober';
import { Card as CardType } from '../types/Card';

setup(React.createElement);

const StyledCard = styled.div`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 114px;
  height: 107px;
  background: #ffffff;
  border-radius: 10px;
`;

const StyledIcon = styled.div`
  margin-bottom: 10px;
`;

const StyledLabel = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 2px;
`;

const StyledValue = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 13px;
`;

export const Card = ({ icon, label, value }: CardType) => {
  const { path, alt, width, height } = icon;
  return (
    <StyledCard>
      <StyledIcon>
        <Image src={path} alt={alt} width={width} height={height} />
      </StyledIcon>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </StyledCard>
  );
};
