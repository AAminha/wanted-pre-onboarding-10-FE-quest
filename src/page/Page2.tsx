import { useEffect, useState } from "react";
import { getData } from "../API";
import { DataType } from "../types";

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
    <div>
      <h1>Page2</h1>
      <div>
        <span className="">id</span>
        <span className="">name</span>
      </div>
      <div>
        {newData &&
          newData.map((item) => (
            <div key={item.id}>
              <span>{item.id}</span>
              <span>{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page2;
