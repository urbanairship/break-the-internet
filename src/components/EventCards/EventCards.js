import React from "react";
import { Row, Col } from "antd";
import { Card } from '../Card';
import datasource from './mock';
import './EventCard.scss';



const EventCards = () => {
  return (
    <div className="events">
      <h2 className="title">
        Events
      </h2>
      <div className="section">
        <Row gutter={150}>
            { 
              datasource.slice(0, 4).map(
                (data, i) => (
                  <div key={i}>
                    <Col span={6}>
                      {Card(data)}
                    </Col>
                  </div>
                )
              )
            }
        </Row>
      </div>
      <p className="more"><a href="#">see more...</a></p>
    </div>
  );
};

export default EventCards;
