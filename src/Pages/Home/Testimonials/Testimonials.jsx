import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitl/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper';
import { Rating } from '@smastrom/react-rating';
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0)
  useEffect(() => {
    fetch('Testimonials.json')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setRating(data.rating)
      });
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={'what out client says'}
        heading={'testimonials'}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className='m-24 flex flex-col items-center '>

            {/* <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} /> */}

            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
     readOnly
     className='mb-11'
    />

              <p>{review.details}</p>
              <h3 className="text-2xl text-amber-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
