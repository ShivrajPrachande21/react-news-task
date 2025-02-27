import React, { useState, lazy, Suspense } from "react";
const Card = lazy(() => import("../Component/Card"));
import { newsData } from "../Constant/ConstantData";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
const MainSection = () => {
  const [data, setNewsData] = useState(newsData);

  const naviagte = useNavigate();
  const handleFavorite = (id) => {
    const updatedData = data.map((item, index) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setNewsData(updatedData);
    console.log(updatedData);
  };

  const soretedNews = data.sort((a, b) => b.isFavorite - a.isFavorite);
  const handleSearchNewsData = (id) => {
    naviagte(`/show-news-data/${id}`);
  };

  return (
    <div className=" bg-[red]  grid grid-cols-1  md:grid-cols-5 gap-6 overflow-x-hidden overflow-scroll p-4   mainSection">
      {soretedNews.map((item, index) => (
        <Suspense
          fallback={
            <>
              {" "}
              <Skeleton
                
                variant="rectangular"
                width={210}
                height={118}
              />
             
             
            </>
          }
        >
          <Card
            key={index}
            cardData={item}
            handleFavorite={handleFavorite}
            handleSendParams={handleSearchNewsData}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default MainSection;
