import React from 'react';
import { data } from './Data';

const Recipes = () => {
    return (
        <div className='container'>
            <div className='recipes'>

            
            <h1>Вкусные рецепты</h1>
            {
                data.map(el => (
                    <div>
                        <h3>{el.name}</h3>
                        <ul>
                        {
                            el.ingredients.map(ingredient => (
                                <li>{ingredient.name}</li>
                            ))
                        }
                        </ul>
                        <h3>Инструкция по приготовлению</h3>
                       <ol>
                       {
                            el.steps.map(step => (
                                <li>{step}</li>
                            ))
                        }
                       </ol>
                       <hr style={{margin: '10px 0'}}/>
                    </div>
                ))
            }
            </div>
        </div>
        
    );
};

export default Recipes;