import React from 'react';
import { Widget } from '../components/Widget';
import { cards } from '../utils';

const Home = () => {
  return <Widget cards={cards} header="Characteristics" />;
};

export default Home;
