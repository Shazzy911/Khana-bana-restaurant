import { slide_dummy } from "@/json/slide_dummy";
import style from "./MainSlide.module.scss";
import Button from "@/app/components/ui/button/Button";
import Link from "next/link";

const MainSlide = () => {
  return (
    <>
      {slide_dummy.map((item) => (
        <div className={style.container} key={item.id}>
          <div className={style.slide_content}>
            <div className={style.detail}>
              <h1 dangerouslySetInnerHTML={{ __html: item.heading }}></h1>
              <p className={style.desc}>{item.description}</p>
              <div className={style.recommend}>
                {item.dishes.map((dish, index) => (
                  <div key={index}>
                    <Link href={"/"}>
                      <div
                        className={style.recomend_img}
                        style={{
                          background: `url(${dish.dish}) center center / cover no-repeat`,

                          objectFit: "cover",
                        }}
                      ></div>
                      <p>{dish.heading}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <Button />
            </div>
          </div>
          <div
            className={style.slide_bg}
            style={{
              background: `url(${item.image}) center center / cover no-repeat`,
              objectFit: "cover",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};
export default MainSlide;
