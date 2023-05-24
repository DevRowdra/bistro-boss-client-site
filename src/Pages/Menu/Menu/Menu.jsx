import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularManu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitl/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
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
      {/* main cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory items={dessert}
      title={'dessert'}
      img={dessertImg}
      ></MenuCategory>
      {/* pizza       items */}
      <MenuCategory items={pizza}
      title={'pizza'}
      img={pizzaImg}
      ></MenuCategory>
      {/* Salad       items */}
      <MenuCategory items={salad}
      title={'salad'}
      img={saladImg}
      ></MenuCategory>
      {/* soups       items */}
      <MenuCategory items={soup}
      title={'soups'}
      img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
