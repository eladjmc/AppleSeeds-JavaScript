const book = {
  name: "Tales of demons and gods",
  authorName : "Mad Snail",
  yearOfPublish : "2014"
};

const displayBook = (book) => `The book "${book.name}" was written by ${book.authorName} in the year ${book.yearOfPublish}`;

console.log(displayBook(book));

