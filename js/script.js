/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
#//// MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
#//// MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
#//// MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.*/


// ARRAY DA MONTARE


/* Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg */


//RECUPERO IL MIO ELEMENTO UL DAL DOM
const info = document.getElementById('info')

//ARRAY DI OGGETTI
const personalInformation = [{
    'name': 'Wayne Barnett',
    'job': 'Founder & CEO',
    'pic': 'wayne-barnett-founder-ceo.jpg',
}, {
    'name': 'Angela Caroll',
    'job': 'Chief Editor',
    'pic': 'angela-caroll-chief-editor.jpg',
}, {
    'name': 'Walter Gordon',
    'job': 'Office Manager',
    'pic': 'walter-gordon-office-manager.jpg',
}, {
    'name': 'Angela Lopez',
    'job': 'Social Media Manager',
    'pic': 'angela-lopez-social-media-manager.jpg',
}, {
    'name': 'Scott Estrada',
    'job': 'Developer',
    'pic': 'scott-estrada-developer.jpg',
}, {
    'name': 'Barbara Ramos',
    'job': 'Graphic Designer',
    'pic': 'barbara-ramos-graphic-designer.jpg',
},
];

//STAMPO IN CONSOLE
console.log(personalInformation)

//CREO CICLO FOR PER STAMPARE IN PAGINA GLI ELEMENTI
for (let i = 0; i < personalInformation.length; i++) {
    const members = personalInformation[i];
    // console.log(members)
    info.innerHTML += `<li><strong>${members.name}</strong> <br> ${members.job} <br> ${members.pic}</li>`;
}


//TEST 1
// for (let i = 0; i < personalInformation.length; i++) {
//     const teamImg1 = document.createElement('img');
//     image = personalInformation[i];
//     teamImg1.src = '/img/angela-caroll-chief-editor.jpg'
//     // personalInformation[i].splice(2, (teamImg1))
//     // info.appendChild(teamImg1);
// }

// //TEST 2 FUNZIONE CON CICLO FOR

// function createImage() {
//     for (let i = 0; i < 6; i++) {
//         const teamImg = document.createElement('img');
//     }
// }


// // IMG 1
// const teamImg1 = document.createElement('img');
// teamImg1.src = '/img/wayne-barnett-founder-ceo.jpg'
// // img 2
// const teamImg2 = document.createElement('img');
// teamImg2.src = '/img/angela-caroll-chief-editor.jpg'
// // img 3
// const teamImg3 = document.createElement('img');
// teamImg3.src = '/img/walter-gordon-office-manager.jpg'
// // img 4
// const teamImg4 = document.createElement('img');
// teamImg4.src = '/img/angela-lopez-social-media-manager.jpg'
// // img 5
// const teamImg5 = document.createElement('img');
// teamImg5.src = '/img/scott-estrada-developer.jpg'
// // img 6
// const teamImg6 = document.createElement('img');
// teamImg6.src = '/img/barbara-ramos-graphic-designer.jpg'

// // info.appendChild(teamImg1);

// for (let key in personalInformation) {
//     console.log(key + personalInformation[key])

// }
