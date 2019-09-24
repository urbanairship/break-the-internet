import React from "react";
import { Carousel, Row, Col, Tag } from "antd";

import "./Carousel.scss";

const CarouselNews = () => {
  const news = [
    {
      img: "https://place-hold.it/300x250",
      title: "News 1",
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
  quae ab illo inventore veritatis et quasi architecto beatae
  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
  voluptas sit aspernatur aut odit aut fugit, sed quia
  consequuntur magni dolores eos qui ratione voluptatem sequi
  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
  sit amet, consectetur.`,
      tags: ["tag 1", "tag 2", "tag 3"]
    },
    {
      img: "https://place-hold.it/300x250",
      title: "News 2",
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
      voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi
      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
      sit amet, consectetur.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
      voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi
      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
      sit amet, consectetur.`,
      tags: ["tag A", "tag B"]
    },
    {
      img: "https://place-hold.it/300x250",
      title: "News 4",
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque la fugit, sed quia
  consequuntur magni dolores eos qui ratione voluptatem sequi
  nesciunt. Neque lorem ipsum quia dolor
  sit amet, consectetur.`,
      tags: ["tag A", "tag 1", "tag A", "tag 1", "tag A", "tag 1"]
    }
  ];
  return (
    <Carousel style={{ height: 250, textAlign: "left", overflow: "hidden" }}>
      {news.map(({ img, title, description, tags }) => {
        return (
          <div key={title}>
            <Row gutter={8}>
              <Col span={8}>
                <img width="100%" src={img} alt="news" />
              </Col>
              <Col span={16} style={{ height: 300 }}>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p style={{ position: "absolute", bottom: 0 }}>
                    {tags.map((tag, ind) => (
                      <Tag key={ind}>{tag}</Tag>
                    ))}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselNews;
