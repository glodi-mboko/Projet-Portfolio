let lienRealisation = document.getElementById('realisation');
let aboutMe = document.getElementById('aboutMeIllustration');
let hard =document.getElementById('illustrationHard');
let soft = document.getElementById('illustrationSoft');
function onClickRealisation(event)
{
    event.preventDefault();
    event.stopPropagation();
    let trigger = event.target;
    console.log(trigger.text);
    let projectOne = document.createElement('div');
    let titleOne = document.createElement('h3');
    let imgOne = document.createElement('img');
    let paragrapheOne = document.createElement('p');
    projectOne.classList.add('container__description__about-me__illustration__realisation');
    titleOne.textContent = 'Formulaire';
    imgOne.setAttribute('src', 'public/img/projet-formulaire.png');
    imgOne.setAttribute('alt', 'Projet-formulaire');
    imgOne.classList.add('container__description__about-me__illustration__realisation__image');
    paragrapheOne.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet eos quis';

    
    let projectTwo = document.createElement('div');
    let titleTwo = document.createElement('h3');
    let imgTwo = document.createElement('img');
    let paragrapheTwo = document.createElement('p');
    projectTwo.classList.add('container__description__about-me__illustration__realisation');
    titleTwo.textContent = 'Formulaire';
    imgTwo.setAttribute('src', 'public/img/projet-formulaire.png');
    imgTwo.setAttribute('alt', 'Projet-formulaire');
    imgTwo.classList.add('container__description__about-me__illustration__realisation__image');
    paragrapheTwo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet eos quis';



    let projectThree = document.createElement('div');
    let titleThree = document.createElement('h3');
    let imgThree = document.createElement('img');
    let paragrapheThree = document.createElement('p')
    projectThree.classList.add('container__description__about-me__illustration__realisation');
    titleThree.textContent = 'Formulaire';
    imgThree.setAttribute('src', 'public/img/projet-formulaire.png');
    imgThree.setAttribute('alt', 'Projet-formulaire');
    imgThree.classList.add('container__description__about-me__illustration__realisation__image');
    paragrapheThree.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet eos quis'

    aboutMe.removeChild(hard);
    aboutMe.removeChild(soft);

    projectOne.appendChild(titleOne);
    projectOne.appendChild(imgOne);
    projectOne.appendChild(paragrapheOne);

    projectTwo.appendChild(titleTwo);
    projectTwo.appendChild(imgTwo);
    projectTwo.appendChild(paragrapheTwo);

    projectThree.appendChild(titleThree);
    projectThree.appendChild(imgThree);
    projectThree.appendChild(paragrapheThree);

    aboutMe.appendChild(projectOne);
    aboutMe.appendChild(projectTwo);
    aboutMe.appendChild(projectThree);

}

lienRealisation.addEventListener('click', onClickRealisation);


