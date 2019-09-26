import React from "react";
import { Carousel, Row, Col, Tag } from "antd";

import "./Carousel.scss";

const CarouselNews = () => {
  const news = [
    {
      img: "https://picsum.photos/200/300",
      title: "Segmentation beta",
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
      img: "https://picsum.photos/201/301",
      title: "News 2",
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
      voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi
      consequuntur magni dolores eos qui ratione voluptatem sequi
      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
      sit amet, consectetur.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
      voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi
      consequuntur magni dolores eos qui ratione voluptatem sequi
      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
      sit amet, consectetur.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae
      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
      voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi
      consequuntur magni dolores eos qui ratione voluptatem sequi
      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
      sit amet, consectetur.`,
      tags: ["tag A", "tag B"]
    },
    {
      img: "https://picsum.photos/202/302",
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
      <Carousel>
        {news.map(({ img, title, description, tags }, index) => (
            <div className="carousel" key={index}>
            <Row key={title}>
              <Col span={9}>
              <div className="img">
                <img src={img} alt="news" />
              </div>
              </Col>
              <Col span={15} className="carousel-content">
              <div className="box-shadow">
                <div className="text">
                  <h3 className="title">{title}</h3>
                  <div className="description">
                    {description.length > 630 ? description.slice(0, 630) + '...': description}
                    </div>
                    <div className="tags">
                      <h4>Related tags</h4>
                      {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
                    </div>
                    <div className="see-all">
                      <h4><a href="#">See all articles</a></h4>
                    </div>
                </div>
              </div>
              </Col>
            </Row>
            </div>
        ))}
      </Carousel>
  );
};

export default CarouselNews;
