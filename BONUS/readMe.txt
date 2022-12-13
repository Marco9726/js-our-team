Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
Una volta che avete terminato una milestone, fare un push e nel messaggio indicare che avete terminato la milesione numero X.

MILESTONE 0 X
//0 creo array con i membri del team
    //0.1 creo 6 oggetti dei membri del team all'interno dell'array
MILESTONE 1 X
//1 creo un ciclo for per ciclare gli oggetti dell'array 
    //1.1 in una variabile assegno il valore dell'oggetto dell'array (teamMember)
    //1.2 mostro sulla console i teamMember 
MILESTONE 2
//2 creo un elemento con ID nell'HTML nel quale visualizzare le informazioni
    //2.1 collego l'elemento HTML ad una costante (teamList)
    //2.2 all'interno del ciclo dell'array creo l'elemento li e lo assegno ad una variabile (memberNumber)
    //2.3 inserisco all'interno dell' li 'Member' + il numero di iterazione attuale
    //2.4 inserisco gli li nella ul
    //2.5 creo un ciclo for in all'interno del ciclo for per ciclare le proprietà dei vari oggetti ( teamMember)
        //2.5.1 in una variabile assegno il valore della proprietà(key) del teamMember
        //2.5.2 creo una lista da visualizzare in HTML delle proprietà
        //2.5.3 in una variabile creo gli li da inserire nella listac
        //2.5.4 inserisco il valore delle proprietà negli li



        
// // MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
//     //2.1 collego l'elemento HTML ad una costante
//     const teamlist = document.getElementById('teamList')


// // MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// //1 creo un ciclo for per ciclare gli oggetti dell'array 
// for (i=0; i< team.length; i++){
//     //1.1 in una variabile assegno il valore dell'oggetto dell'array (teamMember)
//     let teamMember = team[i];
//     //1.2 mostro sulla console i teamMember
//     console.log(teamMember); 
//     //2.2 all'interno del ciclo dell'array creo l'elemento li e lo assegno ad una variabile (memberNumber)
//     let memberNumber = document.createElement('li');
//     //2.3 inserisco all'interno dell' li 'Member' + il numero di iterazione attuale
//     memberNumber.innerHTML = `Member ${i + 1}`;
//     //2.4 inserisco gli li nella ul
//     teamlist.appendChild(memberNumber)
//     //2.5 creo un ciclo for in all'interno del ciclo for per ciclare le proprietà dei vari oggetti ( teamMember)
//     for (let key in teamMember){
//         //2.5.1 in una variabile assegno il valore della proprietà(key) del teamMember
//         let property = teamMember[key];
//         //2.5.2 creo una lista da visualizzare in HTML delle proprietà
//         let propertyList = memberNumber.appendChild(document.createElement('ul'));
//         //2.5.3 in una variabile creo gli li da inserire nella lista
//         let propertyLi = propertyList.appendChild(document.createElement('li'));
//         //2.5.4 inserisco il valore delle proprietà negli li
//         propertyLi.innerHTML = `${property}`        

//     }
// }