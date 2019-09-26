import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Typography, Card } from "antd";
import "./ClockNews.scss";

const ClockNews = ({ timezone, cardTitle }) => {
  const { Title, Text } = Typography;
  const currentDate = moment.tz(new Date(), timezone).format("LT");
  const [getDate, setDate] = useState(currentDate);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment.tz(new Date(), timezone).format("LT"));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone, currentDate]);

  return (
    <Card className="clock-card" bordered={false}>
      <Title level={3}>{cardTitle}</Title>
      <Text style={{fontSize: '30px'}} strong>{getDate}</Text>
    </Card>
  );
};

export default ClockNews;
