import React from "react";
import styles from "./App.module.css";
import Menu from "./components/Menu/Menu";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className={styles.app}>
      <Menu />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
