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
    //2.5 creo un ciclo for in all'interno del ciclo for per ciclare le proprietà dei vari oggetti ( teamMember)
    for (let key in teamMember){
        //2.5.1 in una variabile assegno il valore della proprietà(key) del teamMember
        let property = teamMember[key];
        //2.5.2 creo una lista da visualizzare in HTML delle proprietà
        let propertyList = memberNumber.appendChild(document.createElement('ul'));
        //2.5.3 in una variabile creo gli li da inserire nella lista
        let propertyLi = propertyList.appendChild(document.createElement('li'));
        //2.5.4 inserisco il valore delle proprietà negli li
        propertyLi.innerHTML = `${property}`        

    }
}

