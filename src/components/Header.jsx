import React from 'react';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      Navigation bar
      <Nav items={['Home', 'About', 'Contact']} />
    </header>
  );
}
