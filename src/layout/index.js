import React from 'react'
import logo from 'logo.svg';

function Layout(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> React Hook - Context </h1>
      </header>
      <main className="App-body">{props.children}</main>
      <footer className="App-footer">
        <p style={{ fontSize: 8 }}>
          {`${process.env.REACT_APP_WEBSITE_NAME} V${process.env.REACT_APP_VERSION}`}
        </p>
      </footer>
    </div>
  );
}

export default Layout
