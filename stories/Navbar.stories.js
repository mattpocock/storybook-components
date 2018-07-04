import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import './resets.scss';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';

storiesOf('Navbar')
  .add('Default', () => (
    <Navbar
      tabs={[
        { title: 'Facebook', href: 'https://www.facebook.com', active: true },
        { title: 'Twitter', href: 'https://www.twitter.com', active: false },
      ]}
    />
  ))
  .add('With Jumbotron', () => (
    <React.Fragment>
      <Navbar
        title={
          <h1>Matt Pocock</h1>
        }
        tabs={[
          { title: 'Facebook', href: 'https://www.facebook.com', active: true },
          { title: 'Twitter', href: 'https://www.twitter.com', active: false },
          { title: 'asdasdjhbasd', href: 'https://www.twitter.com', active: false },
          { title: 'asdasd', href: 'https://www.twitter.com', active: false },
          { title: 'asdasfasgasdasdr', href: 'https://www.twitter.com', active: false },
          { title: 'asgasdasd', href: 'https://www.twitter.com', active: false },
          { title: 'Twitter', href: 'https://www.twitter.com', active: false },
          { title: 'Twitter', href: 'https://www.twitter.com', active: false },
        ]}
      />
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
    </React.Fragment>
  ))
  .add('Blue with Jumbotron', () => (
    <React.Fragment>
      <Navbar
        tabs={[
          { title: 'Facebook', href: 'https://www.facebook.com', active: true },
          { title: 'Twitter', href: 'https://www.twitter.com', active: false },
        ]}
        style={{
          background: '#0074D9',
        }}
      />
      <Jumbotron
        imgSrc="https://avatars1.githubusercontent.com/u/28293365?s=460&v=4"
        imgAlt="Matt Pocock"
        imgRadius={220}
        style={{
          background: '#0074D9',
          boxShadow: '0 0 300px inset rgba(0,0,0,0.1)',
          color: 'white',
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
        <h3
          style={{ marginTop: 10 }}
        >
          A marvellous web developer
        </h3>
      </Jumbotron>
    </React.Fragment>
  ));
