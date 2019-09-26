import React from "react";
import { Row, Col, Tag } from "antd";
import "./Sider.scss";


const mockArticles = [
  {
    date: "09/12",
    title: "Segmentation phase 1 is now ended and launched qsdqsdqs dqsdsq dqdqsd dq qs dqs d qsd qsd q sd qsd "
  },
  {
    date: "09/12",
    title: "Segmentation phase 1 is now ended and launched"
  },
  {
    date: "09/12",
    title: "Segmentation phase 1 is now ended and launched"
  },
  {
    date: "09/12",
    title: "Segmentation phase 1 is now ended and launched"
  }
]

const mockTags = [
  "migration" , "segmentatio", "aggregate", "web push", "mobile"
];

const mockProjects = ["Segmentation", "migration", "mobile"];

const SiderContent = () => {
  return (
    <div className="sider box-shadow">
        <div className="content">
          <div className="articles">
            <div className="title">
              Recents articles
            </div>
              <div className="items">
                {
                  mockArticles.slice(0, 4).map(({date, title}, i) => (
                    <div className="item">
                      <div className="separator"></div>
                      <Row key={i}>
                        <Col span={4}>
                          <div className="date">
                            {date}
                          </div>
                        </Col>
                        <Col span={20}>
                          {title.length > 90 ? title.slice(0, 90) + '...': title}
                        </Col>
                      </Row>
                    </div>
                  ))
                }
              </div>
          </div>
          <div className="tags">
            <div className="title">
              Most Popular Tags
            </div>
              <div className="items">
                {mockTags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
              </div>
          </div>
          <div className="projects">
            <div className="title">
              Most Popular Projects
            </div>
            <ul className="items">
              { mockProjects.map((name, i) => (<li> {name}</li>))}
            </ul>
          </div>
        </div>
    </div>
  )
}
export default SiderContent;