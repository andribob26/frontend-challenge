import { IResponse } from "../interfaces/IResponse";

const base: string = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=045f9c4ad72e4cd08fdf222aa4d55fcd`;

export const getAllData = async () => {
  const response = await fetch(base);
  const dataRes: IResponse = await response.json();
  return dataRes;
};

