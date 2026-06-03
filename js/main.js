const heroImages = [

    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg"

];

const randomImage =
heroImages[
    Math.floor(
        Math.random() *
        heroImages.length
    )
];

document.querySelector(".hero")
.style.backgroundImage =

`
linear-gradient(
rgba(0,0,0,.45),
rgba(0,0,0,.75)
),
url('${randomImage}')
`;
