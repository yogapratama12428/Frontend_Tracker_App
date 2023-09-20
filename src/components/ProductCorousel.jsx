import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination} from 'swiper/modules'

import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import CardProduct from './CardProduct';
import { useEffect, useState } from 'react';


const ProductCorousel = () => {
    const [dimention, setDimention] = useState('')

    useEffect(()=>{
        const resolution = window.innerWidth > 700 ? 3 : 1
        setDimention(resolution)
        console.log(resolution)
    },[])

   
  return (
    <div className="flex justify-center py-5 ">
        {
           <Swiper
                slidesPerView={dimention}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
                <SwiperSlide> 
                    <CardProduct />
                </SwiperSlide>
            </Swiper>
           
        }
       
    </div>
  )
}

export default ProductCorousel