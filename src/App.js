import React from "react";

import Layout from "./hoc/Layout/Layout";
import BurderBulder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <div>
      <Layout>
        <BurderBulder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
