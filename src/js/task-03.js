const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const createListGallary = (images) => images.reduce((acc, image) => acc + `<li><img src = "${image.url}" alt = "${image.alt}" width = "250"></li>`, ""); 
const list = document.querySelector("ul");
list.insertAdjacentHTML("beforeend", createListGallary(images));

//const gallery = document.querySelector(".gallery");
//const imgGal = images.map((img) => {
//  const imgEl = document.createElement("img");
//  const liEl = document.createElement("li");
//  imgEl.src = img.url;
//  imgEl.alt = img.alt;
//  liEl.append(imgEl);
//  return liEl;
//});
//gallery.append(...imgGal);

