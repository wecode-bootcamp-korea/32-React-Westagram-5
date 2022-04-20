import React, { useEffect, useState } from 'react';
import './Main.scss';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import Nav from './Nav/Nav';

const Main = () => {
  const [data, setData] = useState([]);

  const dataFetch = () => {
    fetch('Data/commentData.json')
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);
  console.log(data);
  return (
    <>
      <Nav />
      <main>
        <div className="totalmain">
          <div className="main-wrapper">
            {data.map((item, index) => {
              return <Feed feedData={item} key={index} />;
            })}
          </div>
          <Aside />
        </div>
      </main>
    </>
  );
};

export default Main;
