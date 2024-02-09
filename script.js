const url = "https://api.nasa.gov/planetary/apod"
const key = "FVLxCbXIHuiuPu8tRboOugFBnVmUGZAW50MnIklp"

let container = document.querySelector(".info-container")

fetch((`${url}?api_key=${key}&count=10`))
.then((res) => res.json())
.then((res) => {
  console.log(res);
  console.log(res.date)

  res.forEach(element => {

    const mockHTML = `
    <div class="card">
      <img src=${element.url} class="img"/>
      <div class="info">
      <h1 class="title">${element.title}</h1>
      <p>${element.date}</p>
      <p>${element.explanation}</p>
      </div>
    </div>
    `;

    container.insertAdjacentHTML("beforeend", mockHTML);

    // let h1 = document.createElement("h1")
    // h1.innerText = element.title
    // h1.classList.add("space")
    // document.querySelector("body").appendChild(h1)


    // let image = document.createElement("img")
    // image.src = element.url

    // document.querySelector("body").appendChild(image)

  })
});

