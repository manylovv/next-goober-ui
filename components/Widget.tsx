import React from 'react';
import { styled, setup } from 'goober';
import { Card } from './Card';

setup(React.createElement);

const StyledWidget = styled('div')`
  background: #f1f9fd;
  width: 660px;
  height: 210px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 0px 30px 30px;
  div + div {
    margin-left: 8px;
  }
`;

interface Card {
  icon: JSX.Element;
  label: string;
  value: string;
}

export const Widget = ({ cards }: { cards: Card[] }) => {
  return (
    <StyledWidget>
      {cards.map((card) => (
        <Card key={card.label} {...card} />
      ))}
    </StyledWidget>
  );
};
