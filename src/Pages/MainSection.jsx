import React, { useState } from "react";
import Card from "../Component/Card";
import { newsData } from "../Constant/ConstantData";
import { useNavigate } from "react-router-dom";
const MainSection = () => {
  const [data, setNewsData] = useState(newsData);

  const naviagte=useNavigate()
  const handleFavorite = (id) => {
    const updatedData = data.map((item, index) =>
      index+1 === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setNewsData(updatedData)
    console.log(updatedData);
  };

  const soretedNews=data.sort((a,b) =>b.isFavorite-a.isFavorite)
  const handleSearchNewsData=(id)=>{
    
    naviagte(`/show-news-data/${id}`)
  }

  return (
    <div className="h-[100vh] bg-[red] w-[100%] grid grid-cols-5 gap-6 overflow-scroll p-4   ">
      {soretedNews.map((item, index) => (
        <Card key={index} cardData={item} handleFavorite={handleFavorite} handleSendParams={handleSearchNewsData}/>
      ))}
    </div>
  );
};

export default MainSection;
