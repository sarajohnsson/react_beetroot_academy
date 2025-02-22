import wheyImage from '../images/whey.jpg';
import creatineImage from '../images/creatine.jpg';
import shoeImage from '../images/shoes.jpg';
import shakerImage from '../images/shaker.jpg';

import '../styling/ObjectOrientedData.scss';
import Button from '../TipsCalcHomework/Button';

export default function ObjectOrientedData() {
    const shoppingCart = [
        {
            id: 1,
            category: 'Supplements',
            label: 'Whey Isolate',
            price: '299',
            image: wheyImage,
        },
        {
            id: 2,
            category: 'Supplements',
            label: 'Creatine',
            price: '169',
            image: creatineImage,
        },
        {
            id: 3,
            category: 'Equipment',
            label: 'Shoes',
            price: '1299',
            image: shoeImage,
        },
        {
            id: 4,
            category: 'Accessories',
            label: 'Shaker',
            price: '79',
            image: shakerImage,
        },
    ];

    function GetItems() {
        return (
            <div className="container">
                <h1 className="title">Shopping List</h1>
                <div key={shoppingCart.id} className="card">
                    {shoppingCart.map((item) => {
                        return (
                            <div className="item-card">
                                <img
                                    className="card-image"
                                    src={item.image}
                                    alt="item.label"
                                />
                                <h2 className="label">{item.label}</h2>
                                <h3 className="price">{item.price} SEK</h3>
                                <p className="text">{item.category}</p>
                                <Button className="btn" title="Add to cart" />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div>
            <GetItems />
        </div>
    );
}
