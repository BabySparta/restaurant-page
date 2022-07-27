import menuPage from "./menuPage";
import homePage from "./homePage";
import aboutPage from "./aboutPage";


const content = document.getElementById('content');

const initSite = () => {
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
        home.classList.add('active');
        home.id = "home";

        const menu = document.createElement('button');
        menu.textContent = 'Menu';
        menu.classList.add('page');
        menu.id = "menu"

        const about = document.createElement('button');
        about.textContent = 'About';
        about.classList.add('page');
        about.id = "about"

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
        body.id = 'body';
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

    makeHeader();
    makeBody();
    makeFooter();
}




const initPage = () => {
    initSite();
    homePage();
    
    const pgHome = document.getElementById('home')
    const pgMenu = document.getElementById('menu')
    const pgAbout = document.getElementById('about')

    pgHome.addEventListener('click', () => {
        homePage();
        pgHome.classList.remove('active');
        pgMenu.classList.remove('active');
        pgAbout.classList.remove('active');
        pgHome.classList.add('active');
    })
    pgMenu.addEventListener('click', () => {
        menuPage();
        pgHome.classList.remove('active');
        pgMenu.classList.remove('active');
        pgAbout.classList.remove('active');
        pgMenu.classList.add('active');
        
    })
    pgAbout.addEventListener('click', () => {
        aboutPage();
        pgHome.classList.remove('active');
        pgMenu.classList.remove('active');
        pgAbout.classList.remove('active');
        pgAbout.classList.add('active');
    })
}

export default initPage;