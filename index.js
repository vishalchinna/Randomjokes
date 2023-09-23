let jokeBox = document.getElementById("jokeBox")
let jokeBtn = document.getElementById("jokebtn")

jokeBtn.addEventListener("click" , randomjoke)

function randomjoke(){
jokeBox.innerHTML = ` <p class="no">Loading...</p>
`

    let options = {
        method: "GET",
        headers: {
              accept: "application/json",
              "User-Agent": "Learning App",
            }
      };
      
      fetch("https://icanhazdadjoke.com", options)
        .then(function(response) {
          return response.json();
        })
        .then(function(jsonData) {
            jokeBox.innerHTML = `
            <p class="joke">${jsonData.joke}</p>
            <div>
            <div class="icon-box">
          <i class="fa-regular icn fa-clipboard" style="color: #ccd822;"></i>
          <i class="fa-regular icn fa-star" style="color: #db340a;"></i>
          <i class="fa-solid icn fa-volume-low" style="color: #e47d07;"></i>  </div>
          <p class="opt">options</p>
          </div>
      </div>
            `
        });
}

randomjoke()
