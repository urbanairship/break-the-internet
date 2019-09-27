import React from "react";
import { Row, Col } from "antd";
import { Card } from '../Card';
import datasource from './mock';
import './SocialCards.scss';

const SocialCards = () => {
  return (
    <div className="social">
      <h2 className="title">
        Social media
      </h2>
      <div className="section">
        <Row gutter={150}>
            { 
              datasource.slice(0, 4).map(
                ({img, title, subtitle, corner,}, i) => {
                  const ntitle = `#${title}`;
                  const nsubtitle = `${subtitle} likes`;
                  const ncorner = <img src={corner} alt="social"/>
                  return (
                    <div key={i}>
                      <Col span={6}>
                        { Card({ img, title : ntitle, subtitle: nsubtitle, corner: ncorner}) }
                      </Col>
                    </div>
                  ) 

                }
              )
            }
        </Row>
      </div>
      <p className="more"><a href="#">see more...</a></p>
    </div>
  );
};

export default SocialCards;
