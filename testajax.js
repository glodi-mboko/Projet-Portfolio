var monNom = document.getElementById('myNames'); 
let maQualification = document.getElementById('myQualification');
let maResidence = document.getElementById('myCountry');
let maVille = document.getElementById('myCity');
let monApropos = document.getElementById('apropos');
let frenchLevel = document.getElementById('frenchLevel');
let englishLevel = document.getElementById('englishLevel');
let portuguaisLevel = document.getElementById('portuguaisLevel');
let htmlLevel = document.getElementById('htmlLevel');
let cssLevel = document.getElementById('cssLevel');
let sassLevel = document.getElementById('sassLevel');
let javascriptLevel = document.getElementById('javascriptLevel');
let softFirst = document.getElementById('softFirst');
let softSecond = document.getElementById('softSecond');
let softThird = document.getElementById('softThird');
let softFord = document.getElementById('softFord');
let softFive = document.getElementById('softFive');
let softSix = document.getElementById('softSix');
let softSeven = document.getElementById('softSeven');
fetch("http://localhost:3000/Identites")
    .then(function(respons) {
    return respons.json();
    })
    .then(function(Identites) {
        for (const Identite of Identites) {
            monNom.textContent = Identite.nom +" "+ Identite.prenom;
            maQualification.textContent = Identite.qualification;
            maResidence.textContent = Identite.residence;
            maVille.textContent =  Identite.ville;
            monApropos.textContent = Identite.apropos;
        }
    });


fetch("http://localhost:3000/softskills")
    .then(function(respons) {
    return respons.json();
    })
    .then(function(softskills) {
        for (const softskill of softskills) {
            softFirst.textContent = softskill.first;
            softSecond.textContent = softskill.second;
            softThird.textContent = softskill.third;
            softFord.textContent = softskill.ford;
            softFive.textContent = softskill.five;
            softSix.textContent = softskill.six;
            softSeven.textContent = softskill.seven;
        }
    });
    console.log(softSeven.textContent)

fetch("http://localhost:3000/levelLanguages")
    .then(function(respons) {
        return respons.json();
    })
    .then(function(levelLanguages) {
        for (const levelLanguage of levelLanguages) {
            frenchLevel.textContent = levelLanguage.french;
            englishLevel.textContent = levelLanguage.english;
            portuguaisLevel.textContent = levelLanguage.portuguais;
        }
    });



fetch("http://localhost:3000/technologies")
.then(function(respons) {
    return respons.json();
})
.then(function(technologies) {
    for (const technologie of technologies) {
        htmlLevel.textContent = technologie.html;
        cssLevel.textContent = technologie.css;
        sassLevel.textContent = technologie.sass;
        javascriptLevel.textContent = technologie.javascript;
    }
});

