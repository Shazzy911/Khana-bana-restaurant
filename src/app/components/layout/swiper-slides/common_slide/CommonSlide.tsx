import React from "react";
import style from "./CommonSlide.module.scss";

import Link from "next/link";
import Image from "next/image";
import { common_slide_type } from "@/types/common_slide.type";

interface AlbumSlideProps {
  props: common_slide_type[]; // The entire array as a prop
}

const CommonSlide: React.FC<AlbumSlideProps> = ({ props }) => {
  return (
    <>
      {props.map(({ id, image, title, sub_title }) => (
        <Link href={`/artist/${id}`} key={id}>
          <div className={style.container}>
            <div className={style.imgContainer}>
              <Image
                src={image || "Image"}
                alt="Image not found"
                height={210}
                width={210}
                layout="responsive" // Automatically adjusts to the image's original dimensions
                objectFit="cover" // Fills the container without stretching
              />
            </div>
            <div className={style.slideInfo}>
              <h3>{title}</h3>
              <p>{sub_title}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CommonSlide;
