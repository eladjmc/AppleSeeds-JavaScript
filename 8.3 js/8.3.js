const book = {
  name: "Tales of demons and gods",
  authorName: "Mad Snail",
  yearOfPublish: "2014",
};
const book2 = {
  name: "Against the gods",
  authorName: "Turtle me",
  yearOfPublish: "2015",
};
const bookUtil = {

  getFirstPublished: (book1, book2) =>
    book1.yearOfPublish > book2.yearOfPublish ? book2 : book1,
  setNewEdition: (book, year) => {
    book.yearOfPublish = year;
  },
  setLanguage: (book, lang) => {
    book.language = lang;
  },

  setTranslation: (book, lang, trans) => {
    book.translation = { translator: trans, language: lang };
  },
  setPublisher: (book, pName, pLocation) => {
    book.publisher = { name: pName, location: pLocation };
  },
  isSamePublisher: (book1, book2) =>
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location,
};


console.log(book.publisher);
bookUtil.setPublisher(book, "jacob", "israel");
bookUtil.setPublisher(book2, "jacob", "israel");
console.log(bookUtil.isSamePublisher(book2,book));
