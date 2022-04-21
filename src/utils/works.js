/* -------- LOGOS ---------*/
const logoHornero = require("../Assets/LogoHornero.png")
const logoDW = require("../Assets/LogoDW.png")
const logoFuturum = require("../Assets/logoFuturum.png")
const logoLoop = require("../Assets/looplogo.png")


/*-------- IMAGES --------*/
const horneroApp = require("../Assets/HorneroApp.jpg")
const williams = require("../Assets/Dwilliamss.jpg")
const futurum = require("../Assets/Futurum.png")
const loop= require("../Assets/Loopa.png")




const works = [
    {
        name: "HorneroApp",
        logo:logoHornero ,
        containerClass: "information-container",
        information: "Together with a team of 5 people using agile Scrum methodology, we develop a Mobile Web App for the company Globant. Allow users to make reservations for meeting rooms and desks in the different offices of the company. We use geolocation for office recommendations, reservations through a calendar, administrator dashboards with relevant data and more.",
        informationOrientation: "rigth",
        img: horneroApp,
        repositoryLink: "https://github.com/Agustinsant/HorneroApp",
        imgOrientation: "left"
    },
    {
        name: "Futurum",
        logo: logoFuturum,
        containerClass: "information-container",
        information: "Together with a team of 5 people using agile Scrum methodology, We developed an Ecommerce Web Page, oriented to education and online courses. With the team, cover the basic needs of an ecommerce such as shopping cart, order history, products by categories and more.",
        informationOrientation: "rigth",
        img: futurum,
        repositoryLink: "https://github.com/Tomas13d/Futurum-Ecommerce",
        imgOrientation: "left"
    },
    {
        name: "Loop",
        imgClass: "logos",
        containerClass: "information-container2",
        logo:"https://see.fontimg.com/api/renderfont4/X3WjK/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiM1NEVFRUUiLCJiZ2MiOiIjMEIwQjBCIiwidCI6MX0/TE9PUA/uncracked-free-trial.png",
        information: "Web page of movies that constantly interacts with an API called The Movie Data Base, where the information of the movies is required. This was one of my first projects and I did it completely on my own, both front-end and back-end.",
        informationOrientation: "left-in",
        img: loop,
        repositoryLink: "https://github.com/Tomas13d/Loop-TMDB",
        imgOrientation: "rigth-in",
    },
    {
        name: "D’ Williams Real State",
        logo: logoDW,
        containerClass: "information-container",
        information: "Complete Web Page design for an important real estate company in the city of San Luis, Argentina. I did this project completely alone, both the front-end and back-end.",
        informationOrientation: "left-in",
        img: williams,
        repositoryLink: "",
        imgOrientation: "rigth-in",
    }
]

export default works;
