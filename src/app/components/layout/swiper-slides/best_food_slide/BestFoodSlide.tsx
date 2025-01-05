import React from "react";
// import Button from "../button/Button";
import style from "./BestFoodSlide.module.scss";
import Link from "next/link";
import { CollectionData } from "@/types/CollectionSlide.type";

const BestFoodSlide = () => {
  return (
    <>
      {CollectionData.map(
        ({ id, title, image, date, time, location, button }) => (
          <Link href={`/news/${id}`} key={id}>
            <div
              className={style.container}
              style={{
                backgroundImage: `url(${image})`, // Use backgroundImage here
              }}
            >
              {/* <Button
                text={button}
                style={{
                  padding: "8px 20px",
                  fontSize: "1.2rem",
                  minHeight: "3rem",
                  minWidth: "6rem",
                  fontWeight: 400,
                  margin: "1.5rem 1rem",
                  zIndex: "1",
                }}
              /> */}
              <div className={style.info}>
                <div className={style.time}>
                  <h4>{date}</h4>
                  <p>{time}</p>
                </div>
                <div className={style.singer_info}>
                  <h1>{title}</h1>
                  {location}
                </div>
              </div>
            </div>
          </Link>
        )
      )}
    </>
  );
};

export default BestFoodSlide;
