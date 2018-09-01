import React, { Component } from 'react';
import WeddingCakes from '../components/categories/WeddingCakes.js'
import BirthdayCakes from '../components/categories/BirthdayCakes.js'
import Category from '../components/categories/Category.js'

class Categories extends Component {
  render() {
    return (
      <div>
        <Category/>
      </div>
    );
  }
}

export default Categories;