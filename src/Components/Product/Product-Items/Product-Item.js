import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product-Item.scss'

class ProductItem extends Component {
    render() {
        return (
            <Link action="true" to="/">
                <div className="box-3 float-container">
                    <img src={this.props.Information.PathImage} alt="Pizza" className="img-responsive img-curve" />
                    <h3 className="float-text text-white">{this.props.Information.NameProduct}</h3>
                </div>
            </Link>
        );
    }
}



export default ProductItem;