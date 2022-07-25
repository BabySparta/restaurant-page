
const content = document.getElementById('content');

const makeHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');


    const title = document.createElement('div');
    title.textContent = 'Brizza Italian Cuisine';
    title.classList.add('title');


    const pageWrapper = document.createElement('div');
    pageWrapper.classList.add('pageWrapper');

    const home = document.createElement('button');
    home.textContent = 'Home';
    home.classList.add('page');

    const menu = document.createElement('button');
    menu.textContent = 'Menu';
    menu.classList.add('page');

    const about = document.createElement('button');
    about.textContent = 'About';
    about.classList.add('page');

    pageWrapper.appendChild(home);
    pageWrapper.appendChild(menu);
    pageWrapper.appendChild(about);

    header.appendChild(title);
    header.appendChild(pageWrapper);

    content.appendChild(header);
}

const makeBody = () => {
    const body = document.createElement('div');
    body.classList.add('body');
    content.appendChild(body);
}


const makeFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const credit = document.createElement('div');
    credit.textContent = 'Made by Brandon Young 2022';
    credit.classList.add('credit');

    footer.appendChild(credit);
    content.appendChild(footer);
}

const initPage = () => {
    makeHeader();
    makeBody();
    makeFooter();
}

export default initPage;