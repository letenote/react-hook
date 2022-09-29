import React from 'react'
import logo from '../logo.svg';

function Layout(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> React Hook #3 - State Management</h1>
      </header>
      <main className="App-body">{props.children}</main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default Layout
