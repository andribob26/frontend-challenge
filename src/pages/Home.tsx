import React, { useLayoutEffect, useState } from "react";
import { IResponse } from "../interfaces/IResponse";
import { List, Typography, Button, Col, Row } from "antd";
import { getAllData } from "../services/api";
import Loading from "../components/Loading";
const imgErr: string = `https://www.batecfrance.fr/wp-content/themes/emcwil/images/PF-image.jpg`;

const Home: React.FC = () => {
  const [data, setData] = useState<IResponse | null>(null);
  const [perPage] = useState<number>(10);
  const [loadNext, setLoadNext] = useState<boolean>(false);

  const getData = async () => {
    const dataRes = await getAllData();
    setData(dataRes);
  };

  const errorImgHandler = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = imgErr;
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <List
      loading={loadNext}
      itemLayout="horizontal"
      size="small"
      dataSource={data.articles}
      renderItem={(item, i) => {
        return (
          <List.Item
            style={{
              backgroundColor: "#ffff",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            key={i}
          >
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
                    <Typography.Paragraph>
                      {item.description}
                    </Typography.Paragraph>
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
          </List.Item>
        );
      }}
      pagination={{
        onChange(page, pageSize) {
          setLoadNext(true);
          setTimeout(() => {
            setLoadNext(false);
          }, 500);
        },
        pageSize: perPage,
        showSizeChanger: false,
      }}
    />
  );
};

export default Home;
