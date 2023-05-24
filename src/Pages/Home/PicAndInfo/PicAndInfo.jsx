import React from 'react';
import bg from '../../../assets/home/chef-service.jpg'
const PicAndInfo = () => {
    let me={
        display: "grid",
        width: 100,
        "place-items": "center",
       " background-size": "cover",
        "background-position": "center"
    }
    return (
        <div className=" place-items-center bg-cover  bg-center grid h-80" style={{ backgroundImage: `url(${bg})` }}>
       
        <div className=" text-center text-neutral-content">
          <div className="max-w-4xl bg-white ">
            <h1 className="mb-5 text-5xl font-bold text-black">Bistro Boss</h1>
            <p className="mb-5 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    );
};

export default PicAndInfo;