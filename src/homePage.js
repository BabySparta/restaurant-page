const background = () => {
    document.querySelector('.body').style.backgroundImage = "url(https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
}

const homeContent = () => {
    const bodyContent = document.createElement('div');
    bodyContent.classList.add('bodyContent');

    const founded = document.createElement('div');
    founded.classList.add('homeTxt');
    founded.textContent = 'Serving the delicious authentic Italian cuisine since 1836.'

    const img = document.createElement('img');
    img.src = "./imagesFonts/ManMakingNoodles.jpg"
    img.alt = "man making noodles"
    img.classList.add('homeImg');

    const fresh = document.createElement('div');
    fresh.textContent = "Handcrafted meals made with fresh, locally sourced ingredients."
    fresh.classList.add('homeTxt');

    bodyContent.appendChild(founded);
    bodyContent.appendChild(img);
    bodyContent.appendChild(fresh);
    body.appendChild(bodyContent);
}

const homePage = () => {
    const body = document.getElementById('body');
    body.textContent = "";
    background();
    homeContent();
}

export default homePage;