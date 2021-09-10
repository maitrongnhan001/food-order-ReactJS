import React, { Component } from 'react';
import './Category.scss';

class Category extends Component {

    render() {
        return (
            <section className="categories">
                <div className="container">
                    <h2 className="text-center">Categorys</h2>
                    <a href="/">
                        <div className="box-3 float-container">
                            <img src="/Images/Categories/burger.jpg" alt="Pizza" className="img-responsive img-curve" />
                            <h3 className="float-text text-white">Burger</h3>
                        </div>
                    </a>
                    <a href="/">
                        <div className="box-3 float-container">
                            <img src="/Images/Categories/momo.jpg" alt="Pizza" className="img-responsive img-curve" />
                            <h3 className="float-text text-white">Momo</h3>
                        </div>
                    </a>
                    <a href="/">
                        <div className="box-3 float-container">
                            <img src="/Images/Categories/pizza.jpg" alt="Pizza" className="img-responsive img-curve" />
                            <h3 className="float-text text-white">Pizza</h3>
                        </div>
                    </a>
                    <div className="clearfix" />
                </div>
            </section>
        );
    }
}

Category.propTypes = {

};

export default Category;