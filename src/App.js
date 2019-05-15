import React from "react";

import Layout from "./hoc/Layout/Layout";
import BurderBulder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurderBulder />
      </Layout>
    </div>
  );
}

export default App;
