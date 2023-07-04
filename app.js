const car = {
    img: "https://img5.lalafo.com/i/posters/original_webp/b8/97/87/59c9c183f95073a5880055bb15.webp",
    model: "BMW X5  M50i",
    price: 100000,
    color: "white",
    year: 2020,
    salon: "black leather",
};
const car2 = {
    ...car,
    img: "https://img5.lalafo.com/i/posters/original_webp/73/4f/c1/e3a2e5504af305fd56848db2f3.webp",
    price: 44000,
    color: "black",
};
const car3 = {
    img: "https://img5.lalafo.com/i/posters/original_webp/16/52/88/65d210bf257ed62af8384ab786.webp",
    model: "X6 M",
    price: "67 000",
    color: "black",
    year: 2015,
    salon: "grey leather",
};
const car4 = {
    ...car3,
    img: "https://img5.lalafo.com/i/posters/original_webp/97/b8/94/bmw-104316391_image-1684781825.webp",
    price: 26000,
    color: "red",
};
const cars = [car, car2, car3, car4];
const bmw5 = [car, car2];
const bmw6 = [car3, car4];
function fetchCar(carName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (carName === "bmw") {
                resolve(cars);
            }else if(carName === "bmw x5"){
                resolve(bmw5);
            }else if (carName === "bmw x6"){
                resolve(bmw6)
            }else {
                reject("product not found")
            }
        }, 2000)
    });
}
const input = document.getElementById("input");
const btn = document.getElementById("btn-s");
const emptyDiv = document.getElementById("car");

btn.onclick = () => {
    const name = input.value;
    const res = fetchCar(name).then((data) => {
        emptyDiv.innerHTML = "";
       for (let i = 0; i < data.length; i++){
        emptyDiv.innerHTML += `
        <div>
             <img src="${data[i].img}" width="150px" height="200px"  alt="" />
        </div>
        <div>
            <h4>${data[i].model}</h4>
            <p>Price: ${data[i].price} сом</p>
            <p>Year: ${data[i].year}</p>
            <p>Color: ${data[i].color}</p>
            <p>Salon: ${data[i].salon}</p>
        </div>
        `;
       }
    }).catch((error) => {
        emptyDiv.innerText = error;
    }).finally(() => {
        input.value = "";
    }); 
    console.log(res);
};

