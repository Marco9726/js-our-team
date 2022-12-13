
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

//  creo un cilo for per ciclare gli oggetti
for (let i = 0; i<team.length; i++){
    //in una variabile assegno il valore dell'oggetto dell'array (teamMember)
    let teamMember = team[i];
    // in una variabile mi collego alle colonne dell'html 
    let col = document.getElementsByClassName('col-4');
    // creo il div che conterrà le immagini
    let imgContainer = document.createElement('div');
    //assegno l'id al div appena creato
    imgContainer.setAttribute('id', 'imgContainer');
    //inserisco il div imgContainer all'interno delle colonne
    col[i].appendChild(imgContainer);
    //creo il div che conterrà le descrizioni
    let descrtionsContainer = document.createElement('div');
    //assegno l'id al div appena creato
    descrtionsContainer.setAttribute('id', 'descritionsContainer');
    //inserisco il div descritionsContainer all'interno delle colonne
    col[i].appendChild(descrtionsContainer);
    //creo un ciclo for in per ciclare le proprietà degli oggetti ( teamMember)
    
            //in una costante assegno il valore della proprietà image del teamMember
            const img = teamMember['image'];
            console.log(img);
            //in una costante assegno il valore della proprietà name del teamMember
            const name = teamMember['name'];
            //in una costante assegno il valore della proprietà role del teamMember
            const role = teamMember['role'];
            //creo l'elemento html dell'immagine
            const picture = document.createElement('img');
            // inserisco il valore della proprietà img nel src dell'immagine
            picture.src =`./img/${img}`

            // creo l'h4 che conterrà il nome del teamMember
             let h4 = document.createElement('h4');
            // inserisco il valore del name nell'h4 
            h4.innerText = `${name}`
            //inserisco l'h4 nel div
            descrtionsContainer.appendChild(h4)
            // creo lo span che conterrà il ruolo del teamMember
             let span = document.createElement('span');
            // inserisco il valore del ruolo nello span 
            span.innerText = `${role}`
            //inserisco lo span nel div
            descrtionsContainer.appendChild(span)


            
         
        
        
}

