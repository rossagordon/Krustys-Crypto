import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";
import Monkey from "../assets/Mr._Teeny.png"

const Tracker = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="bg-[#00957C] h-full w-full grid md:grid-cols-2 gap-5 items-center">
      {/* Left Side*/}
      <div>
        <h2 className="text-center text-4xl m-8">
          Track your favorite crytpo! 
        </h2>
        <img src={Monkey} className="mx-auto" alt="Mr. Teeny" />
      </div>

      {/* Right Side */}
      <div className="h-[400px] w-[400px] flex grid grid-cols-3 mx-auto gap-[50px] items-center">
        <div className="p-5">
          <div className="">
            <img src={data[0].image} className="w-[75%] h-[75%]" alt="Bitcoin" />
          </div>
          <div>
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
          </div>

          {data[0].price_change_percentage_24h < 0 ? (
            <span>
              <FiArrowDown className="" />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span>
              <FiArrowUpRight />
              {data[0].price_change_percentage_24h}%
            </span>
          )}
        </div>

        <div>
          <div>
            <img src={data[1].image} className="w-[75%] h-[75%]" alt="Ethereum" />
          </div>
          <div>
            <h5>{data[1].name}</h5>
            <p>${data[1].current_price.toLocaleString()}</p>
          </div>

          {data[1].price_change_percentage_24h < 0 ? (
            <span>
              <FiArrowDown className="" />
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span>
              <FiArrowUpRight />
              {data[1].price_change_percentage_24h}%
            </span>
          )}
        </div>

        <div>
          <div>
            <img src={data[2].image} className="w-[75%] h-[75%]" alt="Tether" />
          </div>
          <div>
            <h5>{data[2].name}</h5>
            <p>${data[2].current_price.toLocaleString()}</p>
          </div>

          {data[2].price_change_percentage_24h < 0 ? (
            <span>
              <FiArrowDown className="" />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span>
              <FiArrowUpRight />
              {data[2].price_change_percentage_24h}%
            </span>
          )}
        </div>

        <div className="p-5">
          <div>
            <img src={data[3].image} className="w-[75%] h-[75%]" alt="USD Coin" />
          </div>
          <div>
            <h5>{data[3].name}</h5>
            <p>${data[3].current_price.toLocaleString()}</p>
          </div>

          {data[3].price_change_percentage_24h < 0 ? (
            <span>
              <FiArrowDown className="" />
              {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span>
              <FiArrowUpRight />
              {data[0].price_change_percentage_24h}%
            </span>
          )}
        </div>

        <div>
          <div>
            <img src={data[4].image} className="w-[75%] h-[75%]" alt="BNB" />
          </div>
          <div>
            <h5>{data[4].name}</h5>
            <p>${data[4].current_price.toLocaleString()}</p>
          </div>

          {data[4].price_change_percentage_24h < 0 ? (
            <span>
              <FiArrowDown className="" />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span>
              <FiArrowUpRight />
              {data[4].price_change_percentage_24h}%
            </span>
          )}
        </div>

        <div>
          <div>
            <img src={data[5].image} className="w-[75%] h-[75%]" alt="Binance USD" />
          </div>
          <div>
            <h5>{data[5].name}</h5>
            <p>${data[5].current_price.toLocaleString()}</p>
          </div>

          {data[5].price_change_percentage_24h < 0 ? (
            <span>
              <FiArrowDown className="" />
              {data[5].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span>
              <FiArrowUpRight />
              {data[0].price_change_percentage_24h}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracker;
