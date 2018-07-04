import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import './resets.scss';
import Jumbotron from '../components/Jumbotron';

storiesOf('Jumbotron')
  .add('Default', () => (
    <Jumbotron
      imgSrc="https://avatars1.githubusercontent.com/u/28293365?s=460&v=4"
      imgAlt="Matt Pocock"
      imgRadius={220}
    >
      <h1
        style={{ marginBottom: 0 }}
      >
        Matt Pocock
      </h1>
      <h3>A marvellous web developer</h3>
    </Jumbotron>
  ))
  .add('With Custom background', () => (
    <Jumbotron
      imgSrc="https://avatars1.githubusercontent.com/u/28293365?s=460&v=4"
      imgAlt="Matt Pocock"
      imgRadius={220}
      style={{
        background: '#001f3f',
        boxShadow: '0 0 300px inset rgba(0,0,0,0.1)',
        color: 'hsla(210, 100%, 75%, 1.0)',
      }}
      imgStyle={{
        border: 0,
        boxShadow: 0,
      }}
    >
      <h1
        style={{ marginBottom: 0 }}
      >
        Matt Pocock
      </h1>
      <h3>A marvellous web developer</h3>
    </Jumbotron>
  ));
