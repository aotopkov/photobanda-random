let places = [{ text: "Сердце Пармы", image: "photo/perm.jpg", link: "https://www.photobanda.pro/serdceparmy" },
{ text: "Лёд и Пламя Кольского", image: "photo/kolsky.jpg", link: "https://www.photobanda.pro/aurora" },
{ text: "Открытая Сербия", image: "photo/serbia.jpg", link: "https://www.photobanda.pro/открытая-сербия" },
{ text: "Маки в Крыму", image: "photo/maki.jpg", link: "https://www.photobanda.pro/makivkrimu" },
{ text: "Невероятный Крым", image: "photo/crimea.jpg", link: "https://www.photobanda.pro/unknowncrimea" },
{ text: "На встречу с Эльбрусом", image: "photo/elbrus.jpg", link: "https://www.photobanda.pro/kavkaz" },
{ text: "Кенозёрье", image: "photo/kenozero.jpg", link: "https://www.photobanda.pro/кенозерье" },
{ text: "Ладожские Шхеры", image: "photo/shheri.jpg", link: "https://www.photobanda.pro/шхеры" },
{ text: "Золото Кольского. Терский берег", image: "photo/terskii.jpg", link: "https://www.photobanda.pro/копия-золото-кольского" },
{ text: "Золото Кольского. Хибины", image: "photo/hibiny.jpg", link: "https://www.photobanda.pro/копия-золото-кольского" },
{ text: "Осенний Байкал", image: "photo/baikal.jpg", link: "https://www.photobanda.pro/baykal" },
{ text: "Энофототурю Озеро Сукко", image: "photo/sukko.jpg", link: "https://www.photobanda.pro/энофототур" }];

function getRandomPlaces() {

    let randomPlaces = Math.floor(Math.random() * places.length);
    return places[randomPlaces];
};


let placesText = document.querySelector(".places");
let button = document.querySelector(".button");
let image = document.querySelector(".image")

button.addEventListener("click", function () {
    let randomPlacesInt = getRandomPlaces()
    placesText.textContent = randomPlacesInt.text;
    document.getElementById("link1").href = randomPlacesInt.link;
    document.getElementById("link2").href = randomPlacesInt.link;
    smoothly(image, "src", randomPlacesInt.image);
}
);
