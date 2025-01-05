import React, { Suspense } from "react";
const MainSwiper = React.lazy(
  () => import("@/app/components/layout/Swiper/main_swiper/MainSwiper")
);
const CommonSwiper = React.lazy(
  () => import("@/app/components/layout/Swiper/common_swiper/CommonSwiper")
);

const CollectionSwiper = React.lazy(
  () => import("./components/layout/Swiper/collection_swiper/CollectionSwiper")
);

import MainSlide from "./components/layout/swiper-slides/main_slider/MainSlide";
import CommonSlide from "@/app/components/layout/swiper-slides/common_slide/CommonSlide";
import { common_slide } from "@/json/common_slide_json";
import CollectionSlide from "./components/layout/swiper-slides/collection_slide/CollectionSlide";
const Home = () => {
  return (
    <div>
      <MainSwiper>
        <MainSlide />
      </MainSwiper>
      <section>
        {/* <SectionInformation heading="Top Albums" url="/album" /> */}

        <Suspense fallback={<h1>Loading...</h1>}>
          <CommonSwiper delay={50000000}>
            <CommonSlide props={common_slide} />
          </CommonSwiper>
        </Suspense>
      </section>
      <section>
        {/* <SectionInformation heading="Podcast" url="/events" /> */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <CollectionSwiper>
            <CollectionSlide />
          </CollectionSwiper>
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
