import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //Object.keys() - gives anarray of keys, in ourcase its names(keys-names) of our ingredients object that we got from props
        .map(igKey => { //we can use map method since keys returns us an array
            return [...Array(props.ingredients[igKey])].map((_, i) => { //you can create an array with it || i means index which is important
                return <BurgerIngredient key={igKey + i} type={igKey} />;  //igKey is for.ex. a salas ans i is for the value from ingredients that means quantity
            });
        })
        .reduce((arr, el) => { //reduce allows us to transform anarray into smth else
            return arr.concat(el)//updated value 
        }, []); //[]-initial value 
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;