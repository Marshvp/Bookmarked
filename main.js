const library = [];

function Book(name, author, haveRead) {
    this.name = name
    this.author = author
    this.read = haveRead;
};

function addBookToLibrary(name, author, haveRead) {
    const newBook = new Book(name, author, haveRead)
    library.push(newBook)
    return `${newBook.name} was written by ${newBook.author}. It has been added to the library`
};

const bookTest = addBookToLibrary("Reacher", "Not Sure", false)
const bookTest2 = addBookToLibrary("Naruto", "I dont know", true)
const bookTest3 = addBookToLibrary("Assassin's Apprentice", "Robin Hobb", true)
const bookTest4 = addBookToLibrary("Atomic Habbits", "James Clear", true)

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




for (let i = 0; i < library.length; i++) {
    const author = library[i].author;
    const name = library[i].name;
    const readCheck = library[i].read
    let haveRead = readCheck ? "Yes" : "No"

    
    addToPage(name, author, `Finished? : ${haveRead}`)
    
}


const createBtn = document.getElementById('addbookBtn')

createBtn.addEventListener('click', () => {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'), {backdrop : false});
    myModal.show();
})