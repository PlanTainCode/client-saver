import React from "react";
import { ClientS, Faq, Footer, Header, Help, How, LidMagnets, Main, Preim, Present, Price } from "./components";
import './styles/page.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <ClientS />
      <Help />
      <How />
      <Present />
      <LidMagnets />
      <Preim />
      <Price />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
