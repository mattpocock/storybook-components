import React from 'react';
import { storiesOf } from '@storybook/react';
import BackdropInsetShadow from '../components/BackdropInsetShadow';
// import { linkTo } from '@storybook/addon-links';
import './resets.scss';

storiesOf('BackdropInsetShadow')
  .add('Default', () => (
    <BackdropInsetShadow
      style={{ height: '300px' }}
    />
  ))
  .add('With Children', () => (
    <BackdropInsetShadow
      style={{ height: '300px' }}
    >
      <h1 style={{ margin: 0 }}>
        Hello World
      </h1>
    </BackdropInsetShadow>
  ));
