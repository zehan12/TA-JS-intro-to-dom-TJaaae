//creating elements
let header = document.createElement('header');
header.style.backgroundColor = '#4075D5';
header.style.padding = "30px"
let h1 = document.createElement('h1');
h1.innerText = ' 👑 People Of GOT';
h1.style.fontSize = '32px';
h1.style.fontFamily = 'arial';
h1.style.color = 'white';
let body = document.querySelector('body');
body.style.backgroundColor = "red";
header.append(h1);
body.append(header);

let ul = document.createElement('ul');
body.append(ul);
ul.setAttribute('class','container');
ul.style.margin = '10px;
ul.style.padding = '20px  60px'



got.houses.forEach((v)=>{
    v.people.forEach((e)=>{
        let li = document.createElement('li');
        li.setAttribute('class','box');
        li.style.width= "90%"
        li.style.padding = "10px 190px"
        li.style.height= "200px"
        ul.append(li);
        let img = document.createElement('img');
        img.src = e.image;
        li.append(img);

    })
})























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