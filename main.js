const library = [];

function Book(name, author, pages, haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages
    this.read = haveRead;
};

function addBookToLibrary(name, author, pages, haveRead) {
    const newBook = new Book(name, author, pages, haveRead)
    library.push(newBook)
    return `${newBook.name} was written by ${newBook.author}. It has been added to the library`
};

const bookTest = addBookToLibrary("Reacher", "Not Sure",544, false)
const bookTest2 = addBookToLibrary("Naruto", "I dont know",700, true)
const bookTest3 = addBookToLibrary("Assassin's Apprentice", "Robin Hobb",392, true)
const bookTest4 = addBookToLibrary("Atomic Habbits", "James Clear",306, true)

console.log(bookTest);
console.log(library);

function addToPage(title, subtitle, textContent) {
    const container = document.querySelector('.container')
    const row = document.querySelector('.row')
    
    const divCol = document.createElement('div')
    const divCard = document.createElement('div')
    const divBody = document.createElement('div')
    const h5 = document.createElement('h5')
    const h6 = document.createElement('h6')
    const p = document.createElement('p')


        divCol.classList.add('col-md-4', 'mb-3')
        divCard.classList.add('card')
        divCard.style.width = "18rem";

        divBody.classList.add('card-body')

        h5.classList.add('card-title')
        h5.textContent = title;
        h6.classList.add('card-subtitle', 'mb-2', 'text-body-secondary')
        h6.textContent = subtitle;
        p.classList.add('card-text')
        p.textContent = textContent;

        divBody.append(h5, h6, p)
        divCard.appendChild(divBody)
        divCol.appendChild(divCard)
        row.appendChild(divCol)
}



function loadCards() {
    const row = document.querySelector('.row');
    row.innerHTML = '';

    for (let i = 0; i < library.length; i++) {
        const name = library[i].name;
        const author = library[i].author;
        const readCheck = library[i].read
        let haveRead = readCheck ? "Yes" : "No"
    
        
        addToPage(name, author, `Finished? : ${haveRead}`)
        
    
}}

loadCards()


const createBtn = document.getElementById('addbookBtn')

createBtn.addEventListener('click', () => {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'), {backdrop : false});
    myModal.show();
})


document.getElementById('addbookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('addbookName').value;
    const author = document.getElementById('addbookAuthor').value;
    const pages = document.getElementById('addbookPages').value;
    const haveRead = document.querySelector('input[name="readStatus"]:checked').value;


    const readStatus = (haveRead === 'Yes');
    const newbookInfo = new addBookToLibrary(name, author, pages, readStatus);

    document.getElementById('addbookForm').reset();
    const myModal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    myModal.hide();

    console.log(library);

    loadCards()
})