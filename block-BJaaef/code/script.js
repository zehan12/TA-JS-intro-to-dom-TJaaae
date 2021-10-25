// //creating elements
// let header = document.createElement('header');
// header.style.backgroundColor = '#4075D5';
// header.style.padding = "30px"
// let h1 = document.createElement('h1');
// h1.innerText = ' 👑 People Of GOT';
// h1.style.fontSize = '32px';
// h1.style.fontFamily = 'arial';
// h1.style.color = 'white';
// let body = document.querySelector('body');
// body.style.backgroundColor = "red";
// header.append(h1);
// body.append(header);

// let ul = document.createElement('ul');
// body.append(ul);
// ul.setAttribute('class','container');
// // ul.style.gridTemplateAreas = '190px 60px ';
// ul.style.gridTemplateColumns = 'repeat(3,360px)';
// ul.style.gridGap = '40px'
// ul.style.margin = '10px';
// ul.style.padding = '20px  60px';



// got.houses.forEach((v)=>{
//     v.people.forEach((e)=>{
//         let li = document.createElement('li');
//         li.setAttribute('class','box');
//         li.style.widh= "90%"
//         li.style.padding = "10px 190px"
//         li.style.height= "200px"
//         li.style.display = 'flex';
//         li.style.justifyContent = 'spaceEvenly'
//         ul.append(li);
//         // ul.style.display = 'flex';
//         // ul.style.flexWrap = 'wrap';
//         // ul.style.justifyContent = 'spaceBetween';
//         let img = document.createElement('img');
//         img.src = e.image;
//         img.style.borderRadius = '40px';
//         img.style.height = '50px';
//         img.style.width = '50px';
//         li.append(img);
//         let span = document.createElement('span');
//         span.innerText = e.name;
//         li.append(span);
//         let p = document.createElement('p');
//         p.innerText = e.description;
//         li.append(p);


//     })
// })























// // Creating elements

// let header = document.createElement('header');
// header.style.backgroundColor = "#4075D5";
// header.style.paddingTop = "1rem";
// header.style.paddingBottom = "1rem";
// let h1 = document.createElement('h1');
// h1.innerText = "👑 Peoples Of Got";
// h1.style.color = "#fff";
// let body = document.querySelector('body');
// body.style.backgroundColor = "#F4F5F9";
// header.append(h1);
// body.append(header);


// // UL code
// // img , span , p , button

// let ul = document.createElement('ul');
// body.append(ul);
// ul.style.display = "flex";
// ul.style.flexWrap = "wrap";
// ul.style.justifyContent = "space-between";

// got.houses.forEach(house => {
//     house.people.forEach((ele) => {
//       let li = document.createElement('li');
//       li.style.display = "flex";
//       li.style.flexDirection = "column";
//       li.style.width = "32%";
//       li.style.marginTop = "2rem";
//       let img = document.createElement('img');
//       img.src = ele.image;
//       img.style.borderRadius = "50%";
//       img.style.width = "100px";
//       img.style.objectFit = "cover";
//       let span = document.createElement('span');
//       span.innerText = ele.name;
//       let para = document.createElement('para');
//       para.innerText = ele.description;
//       let button = document.createElement('button');
//       button.innerText = "Learn More !";

//       li.append(img, span, para, button);

//       ul.append(li);
//     })
// });





let allPeople = [];
for (let house of got.houses){
    for(let person of house.people){
        allPeople.push(person);
    }
}
let ul = document.querySelector("ul");
let final = allPeople.forEach((elm) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = elm.image;
    let span = document.createElement("span");
    span.innerText = elm.name;
    
    
    let p = document.createElement("p");
    p.innerText = elm.description;
    let button = document.createElement("button");
    let a = document.createElement("a");
    a.innerText = "Learn More!";
    a.href = elm.wikiLink;
    let div = document.createElement("div");
    div.append(img,span)
    button.append(a);
    li.append(div,p,button);
    ul.append(li);
    
})


let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, [])

let cardsHTML = allPeople.map((person) => {
    return (
        `<li>
            <div>
            <img 
            src=${person.image} 
            alt=${person.name}>
            <h2>${person.name}</h2>
            </div>
            <p>${person.description}</p>
            <button>
            <a href=${person.wikilink}>Learn More!</a>
            </button>
        </li> `
    )
})

console.log(cardsHTML);

let ul = document.querySelector("ul");
ul.innerHTML = cardsHTML.join("");