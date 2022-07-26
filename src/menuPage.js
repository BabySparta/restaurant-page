
const background = () => {
    document.querySelector('.body').style.backgroundColor = "rgb(253, 200, 131)";
    document.querySelector('.body').style.backgroundImage = 'none';
}

const homeContent = () => {
    const bodyContent = document.createElement('div');
    bodyContent.classList.add('bodyContentM');

    const header = document.createElement('div');
    header.classList.add('menuTxt');
    header.textContent = 'Menu';
    bodyContent.appendChild(header);

    const makeItem = (source, alt, name, cost, description) => {
        const item = document.createElement('div');
        item.classList.add('item');
    
        const img = document.createElement('img');
        img.classList.add('imgM');
        img.src = source;
        img.alt = alt;
    
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
    
        const wrapper2 = document.createElement('div');
        wrapper2.classList.add('wrapper2');
    
        const title = document.createElement('div');
        title.classList.add('titleM');
        title.textContent = name
    
        const price = document.createElement('div');
        price.classList.add('textM');
        price.textContent = cost
    
        const desc = document.createElement('div');
        desc.classList.add('textM');
        desc.textContent = description
    
    
        wrapper2.appendChild(title);
        wrapper2.appendChild(price);
        wrapper.appendChild(wrapper2);
        wrapper.appendChild(desc);
        item.appendChild(img);
        item.appendChild(wrapper);
        bodyContent.appendChild(item);
    }

    makeItem('./imagesFonts/risotto.jpg', 'risotto', 'Risotto with Shrimp', '$9.79', 'A classic creamy risotto topped with shrimp and garnish');
    makeItem('./imagesFonts/margherita.jpg', 'margherita pizza', 'Margherita pizza', '$17.99', 'A delicious 12-inch pizza with fresh mozzarella');
    makeItem('./imagesFonts/pepperoni.jpg', 'pepperoni pizza', 'Pepperoni Pizza', '$17.99', 'A delicious take on the classic cheese pizza with pepperoni');
    makeItem('./imagesFonts/meat-pizza.jpg', 'meat lovers pizza', 'Meat Lovers Pizza', '$17.99', 'A pizza for meat lovers with pepperoni, sausage, and ground beef')
    makeItem('./imagesFonts/gnocchi.jpg', 'gnocchi', 'Gnocchi', '$10.99', 'Puffy Gnocchi topped with parmesean and tomato sauce');
    makeItem('./imagesFonts/meatballs-and-spaghetti.jpg', 'spaghetti and meatballs', 'Spaghetti and meatballs', '$12.99', 'Delicous fresh meatballs with handmade spaghetti.');
    makeItem('./imagesFonts/lasagne-bolgnese.png', 'lasagne', 'Lasagne Bolognese', '$12.99', 'Fresh meat, cheese, and sauce stacked between handmade noodles');
    makeItem('./imagesFonts/chocolate-Gelato.jpg', 'gelato', 'Gelato', '$5.99', 'Comes in 6 flavors: Cioccolato, Fragola, Limone, Menta, Stracciatella, and Bacio');

    const disclaimer = document.createElement('div');
    disclaimer.textContent = "Dishes may contain allergens. Please check before ordering."
    disclaimer.classList.add('menuBottom');

    bodyContent.appendChild(disclaimer);
    body.appendChild(bodyContent);
}


const menuPage = () => {
    const body = document.getElementById('body');
    body.textContent = "";
    background();
    homeContent();
}

export default menuPage;