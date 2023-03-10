import React, { useLayoutEffect, useState } from "react";
import { IResponse } from "../interfaces/IResponse";
import { List } from "antd";
import { getAllData } from "../services/api";
import Loading from "../components/Loading";
import CardComponent from "../components/CardComponent";
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
            <CardComponent item={item} errorImgHandler={errorImgHandler} />
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
