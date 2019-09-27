import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { CarouselNews } from "../Carousel";
import { ClockNews } from "../ClockNews";
import { SiderContent } from "../Sider";
import { Layout, Row, Col, Icon } from "antd";
import logo from "../../logo.png";
import "./App.scss";

function App() {
  const { Footer } = Layout;
  const [getSider, setSider] = useState(false);
  const isSiderOpen = getSider ? { width: "250px" } : { width: "0px" };
  return (
    <div>
      <div className="side-menu">
        <span
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setSider(true)}
        >
          <Icon type="menu" />
        </span>
        <div id="mySidenav" className="sidenav" style={isSiderOpen}>
        <Icon type="close"  className="closebtn" onClick={() => setSider(false)} />
          <a href="#">Articles</a>
          <a href="#">Events</a>
          <a href="#">Favorites</a>
          <a href="#">Editor</a>
          <a href="#">Settings</a>
        </div>
      </div>
      <Row>
        <Row type="flex" justify="center">
          <img src={logo} alt="logo" />
        </Row>
        <div className="cardMargin">
          <div className="card-timezone">
            <Row type="flex" justify="center">
              <Col
                span={4}
                style={{ borderRight: "solid", borderWidth: "1px", margin: 20 }}
              >
                <ClockNews cardTitle="Portland" timezone="America/Vancouver" />
              </Col>
              <Col
                span={4}
                style={{ borderRight: "solid", borderWidth: "1px", margin: 20 }}
              >
                <ClockNews cardTitle="Paris" timezone="Europe/Paris" />
              </Col>
              <Col
                span={4}
                style={{ borderRight: "solid", borderWidth: "1px", margin: 20 }}
              >
                <ClockNews cardTitle="Londres" timezone="Europe/London" />
              </Col>
              <Col span={4} style={{ margin: 20 }}>
                <ClockNews
                  cardTitle="San Francisco"
                  timezone="America/Los_Angeles"
                />
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ maxHeight: "100px" }}>
          <div>
            <Row>
              <Col span={17} offset={1}>
                <h2 className="title">Top articles</h2>
                <div>
                  <CarouselNews />
                </div>
                <div>
                  <div className="events">
                    <h2 className="title">Events</h2>

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
                    <p className="more">
                      <a href="#">see more...</a>
                    </p>
                  </div>
                  <div className="social">
                    <h2 className="title">Social media community</h2>
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
                    <p className="more">
                      <a href="#">see more...</a>
                    </p>
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
