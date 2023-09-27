import { useEffect, useState } from "react";
import { getData } from "../API";
import { DataType } from "../types";
import styled from "styled-components";

const Page2 = () => {
  const [newData, setNewData] = useState<DataType[]>([]);
  const getNewData = async () => {
    const { data } = await getData();
    setNewData(data);
  };

  useEffect(() => {
    getNewData();
  }, []);

  return (
    <MainContainer>
      <h1>Page2</h1>
      <div className="data-container">
        <div className="header">
          <span className="id">id</span>
          <span className="">name</span>
        </div>
        {newData &&
          newData.map((item) => (
            <div key={item.id} className="body">
              <span className="id">{item.id}</span>
              <span>{item.name}</span>
            </div>
          ))}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 2px 4px 8px;
  color: black;

  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 1.1rem;
    width: 300px;
    gap: 7px;

    .header {
      display: flex;
      margin-bottom: 10px;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .body {
      display: flex;
      font-size: 1.1rem;
    }

    .id {
      width: 30px;
      margin-right: 10px;
      text-align: center;
    }
  }
`;

export default Page2;
