// Your code goes here
const getOne = (selector) => {
    return document.querySelector(selector)
  }


const getAll = (selector) => {
    return document.querySelectorAll(selector)
  }


const links = getAll("a")



const linkHover = (event) => {
    event.target.style.backgroundColor = "THISTLE"
    event.target.style.color = "darkcyan"
  }



const linkExit = (event) => {
    event.target.style.backgroundColor = "MEDIUMSEAGREEN"
    event.target.style.color = "black"
    event.target.style.transform = ""
  }


const clickAnimation = (event) => {
    event.target.style.transform = "translateY(5px)"
  }

  const noRefresh = (event) => {
    event.preventDefault();
};

   
for (let i = 0; i < links.length; i++) {
    const link = links[i]
    link.style.padding = "10px"
    link.style.borderRadius = "10px"
    link.style.backgroundColor = "MEDIUMSEAGREEN"
    link.addEventListener("mouseover", linkHover)
    link.addEventListener("mouseleave", linkExit)
    link.addEventListener("click", clickAnimation)
    link.addEventListener("click", noRefresh);
  } 

const header = getOne("header")
const h1 = getOne("h1")
h1.style.padding = "5px"
h1.style.borderRadius = "5px"

const scrollColors = (event) => {
    const randomNumber = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
      }

    const rgb1 = "rgb(" + randomNumber(200) + ", " + randomNumber(200) + ", " + randomNumber(200) + ")"
    const rgb2 = "rgb(" + randomNumber(300) + ", " + randomNumber(300) + ", " + randomNumber(300) + ")"
    const rgb3 = "rgb(" + randomNumber(400) + ", " + randomNumber(400) + ", " + randomNumber(400) + ")"
    header.style.backgroundColor = rgb1
    h1.style.color = rgb2
    h1.style.backgroundColor = rgb3
}

const hover = (event) => {
    event.target.style.backgroundColor = "white";
};

document.addEventListener('scroll', scrollColors)
h1.addEventListener("mouseover", hover);

const image = getAll("img")
const message = (event) => {
    alert("Come and Visit!")
}

for(let i = 0; i < image.length; i++) {
    const images = image[i]
    images.addEventListener("dblclick", message)
}

const paragraph = getAll("p");
const largeP = (event) => {
  event.target.style.fontSize = `2rem`;
};
for (let i = 0; i < paragraph.length; i++) {
  const para = paragraph[i];
  para.addEventListener("wheel", largeP);
}
