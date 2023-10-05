const myLibrary = [];
let submitBtn = document.getElementById("submit-btn");

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
};

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let read = document.getElementById("read");

    let newBook = new Book(title.value, author.value, read.checked);
    myLibrary.push(newBook);

    displayBook();
};

submitBtn.addEventListener("click", addBookToLibrary);

function displayBook() {
    let library = document.getElementById("library");

    library.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        let title = document.createElement("p");
        title.classList.add("title");
        let author = document.createElement("p");
        author.classList.add("author");
        let read = document.createElement("p");
        read.classList.add("read")
        let removeButton = document.createElement("button");
        removeButton.classList.add("close-button");
        removeButton.textContent = "X";

        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        read.textContent = (myLibrary[i].read) ? "Already read" : "Want to read";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(read);
        card.appendChild(removeButton);

        library.appendChild(card);

        removeButton.addEventListener('click', () => {
            myLibrary.splice(i,1);
            card.remove()
        });

        read.addEventListener('click', () => {
            if(read.textContent == "Already read") {
                read.textContent = "Want to read";
                myLibrary[i].read = false;
            } else {
                read.textContent = "Already read";
                myLibrary[i].read = true;
            }
        });
    };
};

let readStatus = document.querySelector(".read");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show-display");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});