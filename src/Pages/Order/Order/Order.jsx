import React, { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
    const[menu]=useMenu()
    const{category}=useParams()
    console.log(category)
    const dessert=menu.filter(item=>item.category=='dessert')
    const pizza=menu.filter(item=>item.category=='pizza')
    const soup=menu.filter(item=>item.category=='soup')
    
    const salad=menu.filter(item=>item.category=='salad')
    const offered=menu.filter(item=>item.category=='offered')
    const drinks=menu.filter(item=>item.category=='drinks')
    return (
        <div>
            <Cover img={orderCoverImg} title={'order food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Dessert</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Salad</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
    <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;