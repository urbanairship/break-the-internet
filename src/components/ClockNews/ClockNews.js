import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Clock from "react-clock";
import { Typography, Card } from "antd";
import "./ClockNews.scss";

const ClockNews = ({ timezone, cardTitle }) => {
  const { Title } = Typography;
  const currentDate = moment.tz(new Date(), timezone).format("YYYY-MM-DD HH:mm:ss");
  const [getDate, setDate] = useState(currentDate);
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment.tz(new Date(), timezone).format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone, currentDate]);
  return (
    <Card className="clock-card">
      <Title level={4}>{cardTitle}</Title>
      <Clock value={new Date(getDate)} />
    </Card>
  );
};

export default ClockNews;
