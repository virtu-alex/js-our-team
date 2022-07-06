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

//azione 1 - rimuovo la proprieta' pic da ogni elemento nell array
//azione 2 - trasformo pic in un url corretto

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
},
{
    'name': 'Angela Caroll',
    'job': 'Chief Editor',
    'pic': 'angela-caroll-chief-editor.jpg',
},
{
    'name': 'Walter Gordon',
    'job': 'Office Manager',
    'pic': 'walter-gordon-office-manager.jpg',
},
{
    'name': 'Angela Lopez',
    'job': 'Social Media Manager',
    'pic': 'angela-lopez-social-media-manager.jpg',
},
{
    'name': 'Scott Estrada',
    'job': 'Developer',
    'pic': 'scott-estrada-developer.jpg',
},
{
    'name': 'Barbara Ramos',
    'job': 'Graphic Designer',
    'pic': 'barbara-ramos-graphic-designer.jpg',
},
];

console.table(personalInformation)

for (let i = 0; i < personalInformation.length; i++) {
    const current = personalInformation[i];
    current['pic'] = `./img/${current['pic']}`;
}

//STAMPO IN CONSOLE

//CREO CICLO FOR PER STAMPARE IN PAGINA GLI ELEMENTI
for (let i = 0; i < personalInformation.length; i++) {
    const current = personalInformation[i];
    let container = document.createElement('div');
    let listItem = document.createElement('li');
    container.append(current.name);
    container.append(current.job);
    const teamImg1 = document.createElement('img');
    teamImg1.src = current['pic'];
    listItem.append(container);
    listItem.append(teamImg1);
    info.append(listItem);
}

