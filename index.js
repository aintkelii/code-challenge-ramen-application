const btnOne = document.getElementById("myBtn1");
const btnTwo = document.getElementById("myBtn2");
const btnThree = document.getElementById("myBtn3");
const btnFour = document.getElementById("myBtn4");
const btnFive = document.getElementById("myBtn5");

btnOne.addEventListener("mouseover", () => {
  btnOne.style.color = "blue";
  btnOne.style.transition = "1s";
  btnOne.style.height = "250px";
  btnOne.style.borderRadius = "10px";
  // btnOne will mouseOvered
});

btnTwo.addEventListener("mouseover", () => {
  btnTwo.style.transition = "1s";
  btnTwo.style.height = "250px";
  btnTwo.style.color = "blue";
  btnTwo.style.borderRadius = "10px";
  // btnTwo will be mouseOvered
});

btnThree.addEventListener("mouseover", () => {
  btnThree.style.transition = "1s";
  btnThree.style.height = "250px";
  btnThree.style.color = "blue";
  btnThree.style.borderRadius = "10px";
  // btnThree will be mouseOvered
});

btnFour.addEventListener("mouseover", () => {
  btnFour.style.transition = "1s";
  btnFour.style.height = "250px";
  btnFour.style.color = "blue";
  btnFour.style.borderRadius = "10px";
  // btnFour will be mouseOvered
});

btnFive.addEventListener("mouseover", () => {
  btnFive.style.transition = "1s";
  btnFive.style.height = "250px";
  btnFive.style.color = "blue";
  btnFive.style.borderRadius = "10px";
  // btnFive will be mouseOvered
});

btnOne.addEventListener("mouseout", () => {
  return (btnOne.style.height = "200px");
});

btnTwo.addEventListener("mouseout", () => {
  return (btnTwo.style.height = "200px");
});

btnThree.addEventListener("mouseout", () => {
  return (btnThree.style.height = "200px");
});

btnFour.addEventListener("mouseout", () => {
  return (btnFour.style.height = "200px");
});

btnFive.addEventListener("mouseout", () => {
  return (btnFive.style.height = "200px");
});

let ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];
const myDiv = document.getElementById("ramen-detail");

btnOne.addEventListener("click", () => {
  if (btnOne) {
    // location.reload(myDiv)
    // location.reload.style.transition="5s"

    const img = document.createElement("img");
    img.src = "shoyu.jpg";
    const div = document.getElementById("ramen-detail").appendChild(img);

    img.style.height = "296px";
    img.style.width = "394px";
    myDiv.style.display = "block";
    btnOne.style.display = "none";
  } else {
    myDiv.style.display = "none";
  }

  const elementCreate = document.createElement("div");
  myDiv.appendChild(elementCreate);
  elementCreate.style.fontSize = "30px";
  elementCreate.style.color = "black";
  elementCreate.style.fontWeight = "bold";
  elementCreate.textContent = "name:" + ramens[0].name;

  const theeCreate = document.createElement("div");
  myDiv.appendChild(theeCreate);
  theeCreate.style.color = "orange";
  theeCreate.style.fontSize = "30px";
  theeCreate.style.fontWeight = "bold";
  theeCreate.textContent = "comment:" + ramens[0].comment;

  const theeeCreate = document.createElement("div");
  myDiv.appendChild(theeeCreate);
  theeeCreate.style.color = "aqua";
  theeeCreate.style.fontSize = "30px";
  theeeCreate.style.fontWeight = "bold";
  theeeCreate.textContent = "rating:" + ramens[0].rating;
});

btnTwo.addEventListener("click", () => {
  if (btnOne) {
    const img = document.createElement("img");
    img.src = "naruto.jpg";
    const div = document.getElementById("ramen-detail").appendChild(img);
    img.style.height = "296px";
    img.style.width = "394px";
    myDiv.style.display = "block";
    btnTwo.style.display = "none";
  } else {
    btnTwo.style.display = "none";
  }

  const elementCreate = document.createElement("div");
  myDiv.appendChild(elementCreate);
  elementCreate.textContent = "name:" + ramens[1].name;
  elementCreate.style.fontSize = "30px";
  elementCreate.style.fontWeight = "bolder";
});

btnThree.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "kojiro.jpg";
  const div = document.getElementById("ramen-detail").appendChild(img);
  img.style.height = "296px";
  img.style.width = "394px";
  myDiv.style.display = "block";

  const elementCreate = document.createElement("div");
  myDiv.appendChild(elementCreate);
  elementCreate.textContent = ramens[2].name;
});
btnFour.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "nirvana.jpg";
  const div = document.getElementById("ramen-detail").appendChild(img);
  img.style.height = "296px";
  img.style.width = "394px";
  myDiv.style.display = "block";

  const elementCreate = document.createElement("div");
  myDiv.appendChild(elementCreate);
  elementCreate.textContent = ramens[3].name;
});

btnFive.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "gyukotsu.jpg";
  const div = document.getElementById("ramen-detail").appendChild(img);
  img.style.height = "296px";
  img.style.width = "394px";
  myDiv.style.display = "block";

  const elementCreate = document.createElement("div");
  myDiv.appendChild(elementCreate);
  elementCreate.textContent = ramens[4].name;
});

//   const elementCreate=document.createElement("div")
//   myDiv.appendChild(elementCreate)
//   elementCreate.ramens[0].name
const Ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "images/shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "images/miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "images/tonkotsu.jpg",
  },
];

function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

function handleClick(ramen) {
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
  document.getElementById(
    "ramen-rating"
  ).textContent = `Rating: ${ramen.rating}`;
  document.getElementById(
    "ramen-comment"
  ).textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
  const form = document.getElementById("new-ramen");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("new-name").value;
    const restaurant = document.getElementById("new-restaurant").value;
    const image = document.getElementById("new-image").value;
    const rating = parseInt(document.getElementById("new-rating").value);
    const comment = document.getElementById("new-comment").value;

    if (
      !name ||
      !restaurant ||
      !image ||
      isNaN(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const newRamen = {
      id: ramens.length + 1,
      name: name,
      restaurant: restaurant,
      image: image,
      rating: rating,
      comment: comment,
    };

    ramens.push(newRamen);

    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener("click", () => handleClick(newRamen));
    ramenMenu.appendChild(img);

    form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
btnOne.addEventListener("mouseover",()=>{
     btnOne.style.color="blue"
     btnOne.style.transition="1s"
     btnOne.style.height="250px"
     btnOne.style.borderRadius="10px"
     // btnOne will mouseOvered
});

//function createListItem() {
  //logic for creating a list
  //document.createElement('tag): Creates a new element
  //const newTaskList = document.createElement('li')
  //console.log(newTaskList)

  //const taskInput = document.getElementById('taskinput')

  //const taskInputValue = taskInput.value
  //console.log(taskInputValue)

//}
//SubmitEvent.addEventListener('click',createListItem)