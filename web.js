import React from 'react';

class RestaurantApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const categories = ["Lunch", "Dinner", "Sushi", "Drinks"]; // Define your categories here
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        window.location.href = '/menu_items/' + randomCategory;
    }

    render() {
        return (
            <div id="tiles">
                <div className="tile" id="menu-tile">Menu</div>
                <div className="tile" id="specials-tile" onClick={this.handleClick}>Specials</div>
                <div className="tile" id="map-tile">Map</div>
            </div>
        );
    }
}

export default RestaurantApp;
