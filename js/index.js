const loadDog = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await res.json();
    displayDog(data);

    // anther way to load data 
    /* fetch("https://api.thedogapi.com/v1/breeds")
        .then(response => response.json())
        .then(data => console.log(data)) */
}

const displayDog = (dogList) => {
    const mainDiv = document.getElementById("main");
    const first10Dog = dogList.slice(0, 10);

    first10Dog?.forEach(dog => {
        const div = document.createElement("div");
        div.classList.add("col-lg-4");
        div.classList.add("col-md-6");
        div.classList.add("col-sm-12");
        console.log(dog);
        div.innerHTML = `
            <img width=250px; src = "${dog.image.url}">
            <h2>${dog.name}</h2>
            <p>${dog.bred_for}</p>
        `
        mainDiv.appendChild(div);
    })
}