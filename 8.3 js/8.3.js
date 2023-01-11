const book = {
    name: "Tales of demons and gods",
    authorName : "Mad Snail",
    yearOfPublish : "2014"
  };
const bookUtil = {
    name: "Against the gods",
    authorName : "Turtle me",
    yearOfPublish : "2015",
    getFirstPublished : (book1,book2)=> book1.yearOfPublish > book2.yearOfPublish ? book2 : book1 
  };

  console.log(bookUtil.getFirstPublished(book,bookUtil).name);