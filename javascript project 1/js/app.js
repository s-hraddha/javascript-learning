console.log('welcome');
showNotes();
// if user add a note, add it to the local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addText = document.getElementById('addText');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {                           //if notes are null then
        noteObj = [];                                         //set it like this  
    }
    else {
        noteObj = JSON.parse(notes);           //pass string and gives array
    }
    let myObj = {                               //object to add title or text both   
        title: addTitle.value,
        text: addText.value
    }
    noteObj.push(myObj);                //to put text into notes we use push() 
    localStorage.setItem('notes', JSON.stringify(noteObj));          //pass array and give string 
    addText.value = "";
    addTitle.value = "";
    // console.log(noteObj);
    showNotes();             //to display notes 
})

// function to display notes on screen 

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let html = "";           //blank string
    noteObj.forEach(function (element, index) {
        html += `                        
        <div id="card" class="noteCard my-2 mx-2 card"  style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text"> ${element.text}</p>
                    <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    <button id=${index} onclick="addImp(this.id)"  type="button" class="btn btn-info">Info</button>
                    
                </div>
            </div> `;
    });
    // <button id=${index} onclick="addImp(this.id)" type="button" class=" addImp btn btn-info">Info</button>
    let notesElm = document.getElementById('notes');
    if (noteObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else (
        notesElm.innerHTML = `Nothing to show! Please add a note`
    )
}

// function to delete notes

function deleteNote(index) {
    // console.log('i am deleting', index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj))
    showNotes();
}

//to search data 

let Search = document.getElementById('searchText');
Search.addEventListener("input", function () {
    let inputVal = Search.value
    // console.log('input event fire', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        //    console.log(cardTxt)
    })
})

// function to mark notes important

function addImp(index) {
    console.log('clicked', index);

    let imp = document.getElementById('card');
    imp.addEventListener('click', function () {
        let impTxt = index.length;
        for (let impTxt = 0; impTxt < index.length; impTxt++) {
            const element = index[impTxt];
        }
        imp.style.backgroundColor = "red";
    })
}




