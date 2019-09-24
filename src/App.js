import React from "react";
import { Layout } from "antd";

import "./App.css";

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
