import React from 'react';
import { styled, setup } from 'goober';
import { Card } from './Card';
import { Card as CardType } from '../types/Card';

setup(React.createElement);

const StyledWidget = styled.div`
  background: #f1f9fd;
  width: 660px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

const Header = styled.h1`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  margin: 28px 0px 0px 30px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 0px 30px 30px;
  div + div {
    margin-left: 8px;
  }
`;

interface WidgetProps {
  cards: CardType[];
  header: string;
}

export const Widget = ({ cards, header }: WidgetProps) => {
  return (
    <StyledWidget>
      <Header>{header}</Header>
      <Body>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Body>
    </StyledWidget>
  );
};
