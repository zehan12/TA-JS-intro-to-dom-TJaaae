let books = [
    {
      isbn: "9781593275846",
      title: "Eloquent JavaScript, Second Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2014-12-14T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 472,
      image: "https://eloquentjavascript.net/img/cover.jpg",
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      website: "http://eloquentjavascript.net/",
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      author: "Addy Osmani",
      published: "2012-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      image:
        "https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg",
      description:
        "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      website:
        "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      subtitle: "An In-Depth Guide for Programmers",
      author: "Axel Rauschmayer",
      published: "2014-02-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 460,
      image: "http://speakingjs.com/speakingjs_cover.jpg",
      description:
        "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
      website: "http://speakingjs.com/",
    },
    {
      isbn: "9781491950296",
      title: "Programming JavaScript Applications",
      subtitle:
        "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
      author: "Eric Elliott",
      published: "2014-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      image: "https://learning.oreilly.com/library/cover/9781491950289/250w/",
      description:
        "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
      website:
        "https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/",
    },
    {
      isbn: "9781593277574",
      title: "Understanding ECMAScript 6",
      subtitle: "The Definitive Guide for JavaScript Developers",
      author: "Nicholas C. Zakas",
      published: "2016-09-03T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 352,
      image:
        "https://d2sofvawe08yqg.cloudfront.net/understandinges6/small?1558023536",
      description:
        "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
      website: "https://leanpub.com/understandinges6/read",
    },
    {
      isbn: "9781491904244",
      title: "You Don't Know JS",
      subtitle: "ES6 & Beyond",
      author: "Kyle Simpson",
      published: "2015-12-27T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 278,
      image:
        "https://github.com/getify/You-Dont-Know-JS/raw/2nd-ed/get-started/images/cover.png",
      description:
        "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the 'You Don’t Know JS' series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
      website:
        "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md",
    },
    {
      isbn: "9781449325862",
      title: "Git Pocket Guide",
      subtitle: "A Working Introduction",
      author: "Richard E. Silverman",
      published: "2013-08-02T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 234,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41hZDooM2zL._SX302_BO1,204,203,200_.jpg",
      description:
        "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
      website:
        "https://www.amazon.com/Git-Pocket-Guide-Working-Introduction/dp/1449325866",
    },
    {
      isbn: "9781449337711",
      title: "JavaScript Patterns",
      subtitle: "JavaScript Patterns",
      author: "Shi Chuan",
      published: "2014-04-07",
      publisher: "Github",
      pages: 538,
      image:
        "https://shichuan.github.io/javascript-patterns/img/js-patterns.png",
      description:
        "A JavaScript pattern and antipattern collection that covers function patterns, jQuery patterns, jQuery plugin patterns, design patterns, general patterns, literals and constructor patterns, object creation patterns, code reuse patterns, DOM and browser patterns",
      website: "https://shichuan.github.io/javascript-patterns/",
    },
  ]

  
let body = document.querySelector('body');
body.style.backgroundColor = "#FDF5E8";
let h1 = document.createElement('h1');
h1.innerText = "Bookly";
h1.style.textAlign = "center";
h1.style.paddingTop = "2rem";
h1.style.paddingBottom = "2rem";
h1.style.fontSize = "2rem";
h1.style.color = "yellow";
h1.style.backgroundColor = "#387E80";
h1.style.marginBottom = "2rem";
body.append(h1);

let box = document.createElement('div');
box.className = "box";
// box.style.backgroundColor = "#fff";
box.style.marginTop = "1rem";
let ul = document.createElement('ul');
box.append(ul);
body.append(box);
ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.style.justifyContent = "space-between";

books.forEach((char) => {

  let li = document.createElement('li');
  li.style.display = "flex";
  li.style.flexDirection = "column";
  li.style.width = "30%";
  li.style.justifyContent = "space-between";
  li.style.textAlign = "center";
  li.style.backgroundColor = "#fff";
  let img = document.createElement('img');
  img.src = char.image;
  img.style.marginLeft = "170px";
  img.style.marginTop = "1rem";
  let cite = document.createElement('cite');
  cite.innerText = char.title;
  cite.style.marginTop = "1rem";
  cite.style.marginBottom = "1rem";
  let para = document.createElement('para');
  para.innerText = char.author;
  para.style.marginBottom = "1rem";
  let btn = document.createElement('button');
  btn.innerText = "Buy Now";
  btn.style.width = "30%";
  btn.style.marginLeft = "153px";
  btn.style.backgroundColor = "#387E80";
  btn.style.borderRadius = "8px";
  btn.style.padding = "0.5rem"
  img.style.width = "100px"
  li.append(img, cite, para, btn);

  ul.append(li);
})