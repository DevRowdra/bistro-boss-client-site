import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularManu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitl/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]=useMenu()
    const dessert=menu.filter(item=>item.category=='dessert')
    const pizza=menu.filter(item=>item.category=='pizza')
    const soup=menu.filter(item=>item.category=='soup')
    
    const salad=menu.filter(item=>item.category=='salad')
    const offered=menu.filter(item=>item.category=='offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={img} title={'Our Menu'}></Cover>
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
    </div>
  );
};

export default Menu;
