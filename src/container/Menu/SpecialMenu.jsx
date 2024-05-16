import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte'/>
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_hotDrinks flex__center'>
        <p className='app__specialMenu-menu_heading'>Hot Drinks</p>
        <div className='app__specialMenu-menu_items'>
          {data.hotDrinks.map((hotDrinks, index) => (
            <MenuItem key={hotDrinks.title + index} title={hotDrinks.title} price={hotDrinks.price} tags={hotDrinks.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='menu' />
      </div>

      <div className='app__specialMenu-menu_coldDrinks flex__center'>
        <p className='app__specialMenu-menu_heading'>Cold Drinks</p>
        <div className='app__specialMenu-menu_items'>
          {data.coldDrinks.map((coldDrinks, index) => (
            <MenuItem key={coldDrinks.title + index} title={coldDrinks.title} price={coldDrinks.price} tags={coldDrinks.tags}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{marginTop: '15px'}}>
          <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
