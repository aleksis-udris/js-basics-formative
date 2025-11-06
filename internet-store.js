// Katra prece tiek attēlota kā objekts ar četrām īpašībām: nosaukums, kategorija, cena un daudzums noliktavā.

const categories = [
    'Electronics',
    'Shoes',
    'Art Supplies',
    'Make-Up',
]

const Item = class {
    constructor(name, category, price, amount) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.amount = amount;
    }

    isOf(category) {
        if (this.category === category) {
            return true;
        }

        return false;
    }

    toString() {
        return 'The ' + this.name + ' is of category ' + this.category + ' and costs ' + this.price + '$';
    }
}

const stocked_items = [
    new Item('A-Dell', categories[0], 1299.99, 34),
    new Item('Nike Air-Force', categories[1], 149.67, 12),
    new Item('Neur Blush "Rim-Me"', caregories[3], 34.99, 234),
    new Item('Guache 12 Colors', categories[2], 12.99, 30),
    new Item('iPhone 17 Pro Max 256GB', categories[0], 1499.99, 12)
]

function find_electronics(list) {
    list.forEach(item => {
        if (item.category = categories[0]) {
            console.log(item.toString() + '\n');
        }
    })
}

function total_inventory_price(list) {
    let total = 0;

    list.forEach(item => {
        total += (item.price * item.amount);
    });

    console.log(total + '$ \n')
}

find_electronics(stocked_items);
total_inventory_price(stocked_items);

