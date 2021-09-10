import React, { Component } from 'react';
import ProductItem from './Product-Items/Product-Item';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //create sample data
            sample_data: [
                {
                    PathImage: "/Images/Products/menu-burger.jpg",
                    NameProduct: "Burger"
                },
                {
                    PathImage: "/Images/Products/menu-momo.jpg",
                    NameProduct: "Momo"
                },
                {
                    PathImage: "/Images/Products/menu-pizza.jpg",
                    NameProduct: "Pizza"
                },
                {
                    PathImage: "/Images/Products/menu-burger.jpg",
                    NameProduct: "Burger"
                },
                {
                    PathImage: "/Images/Products/menu-momo.jpg",
                    NameProduct: "Momo"
                },
                {
                    PathImage: "/Images/Products/menu-pizza.jpg",
                    NameProduct: "Pizza"
                }
            ]
        };
    }

    render() {
        return (
            <section className="categories">
                <div className="container">
                    <h2 className="text-center">Categorys</h2>
                    {this.state.sample_data.map((Element, Index) => {
                        return (<ProductItem
                                    key = {Index}
                                    Information = {Element}
                                ></ProductItem>
                                );
                    })}
                </div>
            </section>
        );
    }
}

export default Product;