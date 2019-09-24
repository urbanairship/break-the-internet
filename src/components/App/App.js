import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Layout, Row, Carousel } from "antd";
import "./App.scss";

function App() {
  const { Sider } = Layout;

  return (
    <Layout className="app-container1">
      <Row type="flex" style={{ margin: "20px" }}>
        <Row
          type="flex"
          justify="space-between"
          style={{ marginBottom: "20px", width: "100%", flexWrap: "nowrap" }}
        >
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Row>
        <Row
          type="flex"
          className="carrousel-container"
          style={{ flexWrap: "nowrap" }}
        >
          <Row className="carrousel" type="flex">
            <Carousel
              style={{
                width: "1120px",
                background: "black",
                height: "160px",
                display: "block"
              }}
            >
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
            <Row
              type="flex"
              justify="space-between"
              className="card-events"
              style={{ flexWrap: "nowrap" }}
            >
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </Row>
            <Row
              type="flex"
              justify="space-between"
              className="card-events"
              style={{ flexWrap: "nowrap" }}
            >
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </Row>
          </Row>
          <Row
            type="flex"
            className="sider-container"
            style={{ marginLeft: "1%", flexWrap: "nowrap" }}
          >
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
