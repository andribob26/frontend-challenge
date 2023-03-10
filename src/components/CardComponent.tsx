import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { IArticle } from "../interfaces/IArticle";

interface ICardProps {
  item: IArticle;
  errorImgHandler?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const CardComponent: React.FC<ICardProps> = (props) => {
  const { item, errorImgHandler } = props;
  return (
    <Row style={{ width: "100%" }}>
      <Col xs={24} md={5}>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "150px",
            borderRadius: "5px",
          }}
          alt={item.urlToImage}
          src={item.urlToImage}
          onError={errorImgHandler}
        />
      </Col>
      <Col
        xs={24}
        md={19}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0px 10px",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Col>
            <Typography.Title level={5}>{item.title}</Typography.Title>
            <Typography.Paragraph>{item.description}</Typography.Paragraph>
          </Col>
        </Col>
        <Col>
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <Row
              style={{
                gap: "10px",
              }}
            >
              <Typography.Paragraph type="secondary">
                {new Date(item.publishedAt).toLocaleDateString()}
              </Typography.Paragraph>
              <Typography.Paragraph type="secondary">
                {item.author}
              </Typography.Paragraph>
            </Row>
            <Button
              href={item.url}
              target={`_blank`}
              rel={`noopener noreferrer`}
            >
              Detail
            </Button>
          </Row>
        </Col>
      </Col>
    </Row>
  );
};

export default CardComponent;
