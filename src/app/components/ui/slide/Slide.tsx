import { slide_dummy } from '@/json/slide_dummy';
import style from "./Slide.module.scss";
import Button from "@/app/components/ui/button/Button";


const Slide = () => {
  return (
    <>
      {
        slide_dummy.map((item) => (
          <div className={style.container} key={item.id}>
            <div className={style.slide_content}>
              <h1>{item.heading}</h1>
              <p>{item.description}</p>
              <div className={style.recommend}>
                {item.dishes.map((dish, index) => (
                  <div key={index}>
                    <h4>{dish.dish}</h4>
                    <h4>{dish.heading}</h4>
                  </div>
                ))}
              </div>
              <Button />
            </div>
            <div  className= {style.slide_bg}style={{
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