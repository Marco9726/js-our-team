//MILESTONE 0
//0 creo array con i membri del team
const team = [
    //0.1 creo 6 oggetti dei membri del team all'interno dell'array
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    //0.1
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    //0.1
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    //0.1
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    //0.1
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    //0.1
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }

]

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
    //2.1 collego l'elemento HTML ad una costante
    const teamlist = document.getElementById('teamList')


// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//1 creo un ciclo for per ciclare gli oggetti dell'array 
for (i=0; i< team.length; i++){
    //1.1 in una variabile assegno il valore dell'oggetto dell'array (teamMember)
    let teamMember = team[i];
    //1.2 mostro sulla console i teamMember
    console.log(teamMember); 
    //2.2 all'interno del ciclo dell'array creo l'elemento li e lo assegno ad una variabile (memberNumber)
    let memberNumber = document.createElement('li');
    //2.3 inserisco all'interno dell' li 'Member' + il numero di iterazione attuale
    memberNumber.innerHTML = `Member ${i + 1}`;
    //2.4 inserisco gli li nella ul
    teamlist.appendChild(memberNumber)
}

