class Book {
    constructor(name, author, pages, haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages
    this.read = haveRead;
    };
}
class Library {
    constructor() {
        this.books = []
    }
    addBook(name, author, pages, haveRead) {
        const newBook = new Book(name, author, pages, haveRead)
        this.books.push(newBook)
    }
    loadCards() {
        const row = document.querySelector('.row');
        row.innerHTML = '';
    
        this.books.forEach((book, index) => {
            const name = book.name;
            const author = book.author;
            const pagesText = `Number of Pages: ${book.pages}`;
            const haveReadText = book.read ? "Yes" : "No";
    
            addToPage(name, author, pagesText, haveReadText, index, this); 
        });
    }
    removeBook(index) {
        this.books.splice(index, 1);
        this.loadCards();
    }
    markAsRead(index) {
        this.books[index].read = true;
        this.loadCards();
    }
}

const myLibrary = new Library();
myLibrary.addBook("Reacher", "Not Sure",544, false)
myLibrary.addBook("Naruto", "I dont know",700, true)
myLibrary.addBook("Assassin's Apprentice", "Robin Hobb",392, true)
myLibrary.addBook("Atomic Habbits", "James Clear",306, true)

function addToPage(title, subtitle, textContent, haveRead, index, libraryInstance) {
    const container = document.querySelector('.container');
    const row = document.querySelector('.row');
    
    const divCol = document.createElement('div');
    const divCard = document.createElement('div');
    const divBody = document.createElement('div');
    const h5 = document.createElement('h5');
    const h6 = document.createElement('h6');
    const pages = document.createElement('p');
    const readStatus = document.createElement('p');
    let finishBtn;
    const removeBtn = document.createElement('button')

        divCol.classList.add('col-lg-4', 'mb-3', 'align-self-center')
        divCard.classList.add('card')
        divCard.style.width = "18rem";

        divBody.classList.add('card-body')

        h5.classList.add('card-title')
        h5.textContent = title;
        h6.classList.add('card-subtitle', 'mb-2', 'text-body-secondary')
        h6.textContent = subtitle;
        pages.classList.add('card-text')
        pages.textContent = textContent;
        
        readStatus.classList.add('card-text')
        readStatus.textContent = `Finished?: ${haveRead}`
        
        if (haveRead !== 'Yes') {
            finishBtn = document.createElement('button');
            finishBtn.classList.add('btn', 'btn-danger', 'finish-btn');
            finishBtn.textContent = "Mark as completed?";
            finishBtn.setAttribute('data-index', index); 
    
            readStatus.appendChild(finishBtn);
        }

        removeBtn.classList.add('btn', 'btn-warning', 'removeBtn')
        removeBtn.textContent = "Delete from List?"
        removeBtn.setAttribute('data-index', index)
        removeBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            libraryInstance.removeBook(index)            
        })

        divBody.append(h5, h6, pages, readStatus, removeBtn)
        divCard.appendChild(divBody)
        divCol.appendChild(divCard)
        row.appendChild(divCol)
}

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
    myLibrary.addBook(name, author, pages, readStatus);

    document.getElementById('addbookForm').reset();
    const myModal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    myModal.hide();
    myLibrary.loadCards()
})

const rowContainer = document.querySelector('.row');
if (rowContainer) {
    rowContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('finish-btn')) {
            const bookIndex = event.target.getAttribute('data-index');
            myLibrary.markAsRead(bookIndex)
        }
    });
}


// function addBookToLibrary(name, author, pages, haveRead) {
//     const newBook = new Book(name, author, pages, haveRead)
//     library.push(newBook)

// };



    
    

// function loadCards() {
//     const row = document.querySelector('.row');
//     row.innerHTML = '';

//     library.forEach((book, index) => {
//         const name = book.name;
//         const author = book.author;
//         const pagesText = `Number of Pages: ${book.pages}`;
//         const haveReadText = book.read ? "Yes" : "No";

//         addToPage(name, author, pagesText, haveReadText, index); 
//     });
// }
// loadCards()