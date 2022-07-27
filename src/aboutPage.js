const background = () => {
    document.querySelector('.body').style.backgroundImage = "url(./imagesFonts/ingredients.jpg)"
}

const aboutContent = () => {
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');


    const hourWrap = document.createElement('div');
    hourWrap.classList.add('hourWrap')
    
    const hoursTitle = document.createElement('div');
    hoursTitle.classList.add('aboutTitle');
    hoursTitle.textContent = "Hours:"

    const hoursWrap1 = document.createElement('div');
    hoursWrap1.classList.add('hourWrap1');

    const hoursTitle1 = document.createElement('div');
    hoursTitle1.classList.add('aboutTitle2');
    hoursTitle1.textContent = 'Monday-Thursday:';

    const hours1 = document.createElement('div');
    hours1.classList.add('aboutTxt');
    hours1.textContent = '11AM - 9PM';

    const hoursWrap2 = document.createElement('div');
    hoursWrap2.classList.add('hourWrap1');

    const hoursTitle2 = document.createElement('div');
    hoursTitle2.classList.add('aboutTitle2');
    hoursTitle2.textContent = 'Friday-Sunday:';

    const hours2 = document.createElement('div');
    hours2.classList.add('aboutTxt');
    hours2.textContent = '11AM - 11PM';


    const numWrapper = document.createElement('div');
    numWrapper.classList.add('numWrap');

    const numberTitle = document.createElement('div');
    numberTitle.classList.add('aboutTitle');
    numberTitle.textContent = 'Phone Number:'

    const numberTxt = document.createElement('div');
    numberTxt.textContent = "(987) 123-456-789"
    numberTxt.classList.add('aboutTitle2');


    const locWrapper = document.createElement('div');
    locWrapper.classList.add('locWrap');

    const locationTitle = document.createElement('div');
    locationTitle.textContent = "Location:"
    locationTitle.classList.add('aboutTitle');
    
    const location = document.createElement('div');
    location.textContent = "14115 St Germain Dr, Centreville, VA 20121";
    location.classList.add('aboutTxt');


    const descWrap = document.createElement('div');
    descWrap.classList.add('descWrap');

    const descImg = document.createElement('img');
    descImg.classList.add('descImg');
    descImg.src = "./imagesFonts/chef.jpg";
    descImg.alt = "chef";

    const descTxt = document.createElement('div');
    descTxt.classList.add('aboutTxt');
    descTxt.textContent = "Francesco Brizza founded the restaurant in 1836 after coming to America. He wanted to bring the Italian cuisine with him and so Brizza was born. Ownership of the restaraunt has been passed down each generation and now resides with Antonio Brizza."
    
    descWrap.appendChild(descImg);
    descWrap.appendChild(descTxt);

    aboutContent.appendChild(hourWrap);
    aboutContent.appendChild(numWrapper);
    aboutContent.appendChild(locWrapper);
    aboutContent.appendChild(descWrap);
    hourWrap.appendChild(hoursTitle);
    hourWrap.appendChild(hoursWrap1);
    hourWrap.appendChild(hoursWrap2);
    hoursWrap1.appendChild(hoursTitle1);
    hoursWrap1.appendChild(hours1);
    hoursWrap2.appendChild(hoursTitle2);
    hoursWrap2.appendChild(hours2);
    numWrapper.appendChild(numberTitle);
    numWrapper.appendChild(numberTxt);
    locWrapper.appendChild(locationTitle);
    locWrapper.appendChild(location);
    body.appendChild(aboutContent);
}

const aboutPage = () => {
    const body = document.getElementById('body');
    body.textContent = "";
    background();
    aboutContent();
}

export default aboutPage;