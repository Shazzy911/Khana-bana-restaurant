import { slide_dummy } from '@/json/slide_dummy';
import style from "./Slide.module.scss";
import Button from "@/app/components/ui/button/Button";
import Image from 'next/image';
import Link from 'next/link';

const Slide = () => {
  return (
    <>
      {
        slide_dummy.map((item) => (
          <div className={style.container} key={item.id}>
            <div className={style.slide_content}>
              <h1 dangerouslySetInnerHTML={{ __html: item.heading }}></h1>
              <p className={style.desc}>{item.description}</p>
              <div className={style.recommend}>
                {item.dishes.map((dish, index) => (
                  <div key={index} >
                    <Link href={"/"} >
                      <div className={style.recomend_img} style={{
                        background: `url(${dish.dish}) center center / cover no-repeat`,
                        objectFit: "cover",
                      }}>


                      </div>
                      <p>{dish.heading}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <Button />
            </div>
            <div className={style.slide_bg} style={{
              background: `url(${item.image}) center center / cover no-repeat`,

            }}>
            </div>
          </div>
        ))
      }
    </>
  )
}
export default Slide;





// background: url(&quot;img/home/slide1.jpg&quot;) center center / cover no-repeat;