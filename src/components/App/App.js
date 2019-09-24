import React from "react";
import { Layout, Row, Card } from "antd";
import "./App.scss";

function App() {
  const { Sider } = Layout;

  return (
    <Layout className="app-container1">
      <Row type="flex" style={{margin: '2%'}}>
        <Row type="flex" justify="space-between" style={{marginBottom: '1%', width: "94%"}}>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Row>
        <Row type="flex" className="carrousel-container">
          <Row type="flex" className="carrousel">
            <Card style={{ height: 250, width: "100%" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Row type="flex" justify="space-between" className="card-events">
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
            <Row type="flex" justify="space-between" className="card-events">
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Row>
          <Row type="flex" className="sider-container" style={{marginLeft: '1%'}}>
            <Sider width="400" className="sider">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Sider>
          </Row>
        </Row>
      </Row>
    </Layout>
  );
}

export default App;
