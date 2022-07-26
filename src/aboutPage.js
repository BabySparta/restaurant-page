const background = () => {
    document.querySelector('.body').style.backgroundImage = "./imagesFonts/ingredients.jpg"
}

const aboutContent = () => {
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');

    const hoursTitle = document.createElement('div');
    hoursTitle.classList.add('aboutTitle');
    hoursTitle.textContent = "Hours:"

    const hoursTitle1 = document.createElement('div');
    hoursTitle1.classList.add('aboutTitle2');
    hoursTitle1.textContent = 'Monday-Thursday:';

    const hours1 = document.createElement('div');
    hours1.classList.add('aboutTxt');
    hours1.textContent = '11AM - 9PM';

    const hoursTitle2 = document.createElement('div');
    hoursTitle2.classList.add('aboutTitle2');
    hoursTitle2.textContent = 'Friday-Sunday:';

    const hours2 = document.createElement('div');
    hours2.classList.add('aboutTxt');
    hours2.textContent = '11AM - 11PM';

    const numberTitle = document.createElement('div');
    numberTitle.classList.add('aboutTitle');
    numberTitle.textContent = 'Phone Number:'

    const numberTxt = document.createElement('div');
    numberTxt.textContent = "(987) 123-456-789"
    numberTxt.classList.add('aboutTitle2');

    bodyContent.appendChild(founded);
    bodyContent.appendChild(img);
    bodyContent.appendChild(fresh);
    body.appendChild(bodyContent);
}

const aboutPage = () => {
    const body = document.getElementById('body');
    body.textContent = "";
    background();
    aboutContent();
}

export default aboutPage;