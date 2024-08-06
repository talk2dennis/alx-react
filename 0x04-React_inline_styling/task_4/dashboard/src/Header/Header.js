import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  appHeader: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
  },
  appHeaderImage: {
    width: '200px',
    height: '200px',
  },
});

function Header() {
  return (
    <>
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appHeaderImage)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;
