const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

//Write a JavaScript function that receives the following library
// object as an input and displays the books that can be read (the
// reading status is true).
// Log the book name, author name, and reading status.


const foo = (libArray) => {
    const readableBooks = libArray.filter((book) => book.readingStatus);
    readableBooks.forEach(book => {
        console.log(book.title + ', ' + book.author + ', ' + 'Readable: '+book.readingStatus);
    });
}

foo(library);