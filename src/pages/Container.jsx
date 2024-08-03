import React, { useEffect, useState } from "react";
import Audio from "./Audio";
import Choose from "../Components/Choose";
import Error from "./Error";
import Tv from "./Tv";
import Mobile from "./Mobile";
import Gaming from "./Gaming";
import Navbar from "../Components/Nav";
import Nothing from "./Nothing";
import Loader from "../Components/Loader";
import Sidebar from "../Components/Sidebar";
import CardSkeleton from "../Components/CardSkeleton";

function Container() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsloading(true);
        const res = await fetch("https://fakestoreapi.in/api/products");
        const data = await res.json();
        setData(data.products);
        console.log(data.products);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    if (check.includes("audio") && item.category === "audio") return true;
    if (check.includes("mobile") && item.category === "mobile") return true;
    if (check.includes("tv") && item.category === "tv") return true;
    if (check.includes("gaming") && item.category === "gaming") return true;
    if (check.includes([])) return false;
    else return false;
  });
console.log("Filtered Data" ,filteredData);
  const renderComponent = (item, index) => {
    switch (item.category) {
      case "mobile":
        return (
          <Mobile
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            color={item.color}
            description={item.description}
          />
        );
      case "tv":
        return (
          <Tv
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            color={item.color}
            description={item.description}
          />
        );
      case "gaming":
        return (
          <Gaming
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            color={item.color}
            description={item.description}
          />
        );
      case "audio":
        return (
          <Audio
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            color={item.color}
            description={item.description}
          />
        );
      default:
        return <Error key={index} />;
    }
  };

  return (
    <>
   {/* <Sidebar/> */}
      <Choose check={check} setCheck={setCheck}/>
      <div className="p-3 flex justify-center flex-row items-start gap-4 h-full bg-[#000000] flex-wrap">
      
        {isloading ? <Loader /> : filteredData.length === 0 ? <Nothing/>  :filteredData.map(renderComponent)}
      </div>
    </>
  );
}

export default Container;
