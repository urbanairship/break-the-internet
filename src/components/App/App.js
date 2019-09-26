import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import {CarouselNews} from '../Carousel';
import { SiderContent } from '../Sider';
import { Layout, Row, Col } from "antd";
import "./App.scss";

function App() {
  const { Footer } = Layout;

  return (
    <div>
      <Row>
        <div className="cardMargin">
          <Row type="flex" justify="space-around">
            <Col span={4}>
              <NewsCard />
            </Col>
            <Col span={4}>
              <NewsCard />
            </Col>
            <Col span={4}>
              <NewsCard />
            </Col>
            <Col span={4}>
              <NewsCard />
            </Col>
          </Row>
        </div>
        <div style={{ maxHeight: "100px" }}>
          <div>
            <Row>
              <Col span={17} offset={1}>
                <h2 className="title">
                  Top articles
                </h2>
                <div>
                  <CarouselNews />
                </div>
                <div>
                  <div className="events">
                    <h2 className="title">
                      Events
                    </h2>
                    <Row gutter={48}>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                    </Row>
                    <p className="more"><a href="#">see more...</a></p>
                  </div>
                  <div className="social">
                    <h2 className="title">
                      Social media community
                    </h2>
                    <Row gutter={48}>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                    </Row>
                    <p className="more"><a href="#">see more...</a></p>
                  </div>
                </div>
              </Col>
              <Col span={4} offset={1}>
                <SiderContent />
              </Col>
            </Row>
          </div>
        </div>
      </Row>
      <Footer className="footer">footer</Footer>
    </div>
  );
}

export default App;
