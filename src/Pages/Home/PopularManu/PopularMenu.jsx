import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitl/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const filter=data.filter(item=>item.category=='popular')
            setMenu(filter)

        })
    },[])
    return (
        <div>
            <SectionTitle
            heading={'From Out Menu'}
            subHeading={'Popular Items'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item=> <MenuItem key={item._id}
                    item={item}
                    ></MenuItem> )
                }
            </div>
            <button className="btn btn-outline text-center">View Full Menu</button>
        </div>
    );
};

export default PopularMenu;