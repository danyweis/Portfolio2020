var projectInfo = {
    firstDiv: '<div class="card col-12 col-sm-6 col-md-4 bg-dark text-white" ></div>',
    imgTag: '<img class="card-img-top">',
    cardBodyTag: '<div class="card-body text-center"></div>',
    cardTitle: '<h5 class="card-title"></h5>',
    cardDescription: '<p class="card-text"></p>',
    cardLink: '<a class="card-btn btn btn-primary">Project</a>',
    cardLinkCode: '<a class="card-btn-code btn btn-primary">Code</a>',
    screenShotLink: {
        0: 'smallProjects/screenshot/001momentum.png',
        1: 'smallProjects/screenshot/002randomBG.png',
        2: 'smallProjects/screenshot/003rgb2hex.png',
        3: 'smallProjects/screenshot/004FlipCoin.png',
        4: 'smallProjects/screenshot/005age.png',
        5: 'smallProjects/screenshot/006heroSlider.png',
        6: 'smallProjects/screenshot/007playingfield.png',
        7: 'smallProjects/screenshot/008stopWatch.png',
        8: 'smallProjects/screenshot/009pomodoro.png',
        9: 'smallProjects/screenshot/010navbar.png',
        10: 'smallProjects/screenshot/011CovidAPI.png',
        11: 'smallProjects/screenshot/012song.png',
        12: 'smallProjects/screenshot/013crypto.png',
        13: 'smallProjects/screenshot/014pokedex.png',
        14: 'smallProjects/screenshot/015weather.png',
        15: 'smallProjects/screenshot/016landingA.jpg',
        16: 'smallProjects/screenshot/017PRS.jpg',
        17: 'smallProjects/screenshot/018ISSss.png',
    },
    projectName: {
        0: 'Momentum Clone',
        1: 'Random background color on click',
        2: 'Color converter (rgb & hex)',
        3: 'Flip a Coin',
        4: 'What age?',
        5: 'Pure CSS Hero slider',
        6: 'Guess the color',
        7: 'Simple Stopwatch',
        8: '25/5 Pomodoro',
        9: 'Navbar',
        10: 'Covid-19 Data',
        11: 'Lyrics',
        12: 'Crypto Watch',
        13: 'Pokedex',
        14: 'Weather App',
        15: 'Landing Page ArchiModern',
        16: 'Paper Rock Scissors',
        17: 'ISS position ',
    },
    projectDescription: {
        0: 'In this project I created a momentum clone in witch I learned using local storage.',
        1: 'This is a small project where the color of the background changes randomly on every click.',
        2: 'This is the beginning of a bigger Project for later "Color Converter."',
        3: 'This is a simple coin flipper.',
        4: 'After you give your date of birth it tell you how long till your B-Day.',
        5: 'This is a Hero slider done with only CSS.',
        6: 'This is the Game guess the color. Build with HTML CSS Vanilla JavaScript.',
        7: 'This is a simple stopwatch with start, stop and reset function.',
        8: 'Small pomodoro clock.',
        9: 'Simple navbar build with CSS and JavaScript.',
        10: 'In this project I made a call to the Covid-19 API.',
        11: 'You can get the lyrics of you favorite songs.',
        12: 'Beginning of a Crypto price tracker.',
        13: "Pokedex which shows information's about the original 151 Pokemons.",
        14: 'Small weather app.',
        15: 'Landing page for fictive Architect.',
        16: 'Paper Rock Scissors Game.',
        17: 'In this project we track the position of the ISS. Unfortunately it isn\'t working because the API is http and my server is https.,
    },
    projectLink: {
        0: 'smallProjects/001momentum.html',
        1: 'smallProjects/002randomBG.html',
        2: 'smallProjects/003rgb2hex.html',
        3: 'smallProjects/004FlipCoin.html',
        4: 'smallProjects/005age.html',
        5: 'smallProjects/006heroSlider.html',
        6: 'smallProjects/007guessColor.html',
        7: 'smallProjects/008stopWatch.html',
        8: 'smallProjects/009pomodoro.html',
        9: 'smallProjects/010navbar.html',
        10: 'smallProjects/011CovidAPI.html',
        11: 'smallProjects/012song.html',
        12: 'smallProjects/013crypto.html',
        13: 'smallProjects/014pokedex.html',
        14: 'smallProjects/015weather.html',
        15: 'smallProjects/016landingA/index.html',
        16: 'smallProjects/017PRS.html',
        17: 'smallProjects/018ISS.html',
    },
    projectCodeLink: {
        0: 'https://github.com/danyweis/oneDay/tree/master/001MomentumClone',
        1: 'https://github.com/danyweis/oneDay/tree/master/002RandomBGonclick',
        2: 'https://github.com/danyweis/oneDay/tree/master/003rgb2hex',
        3: 'https://github.com/danyweis/oneDay/tree/master/004FlipCoin',
        4: 'https://github.com/danyweis/oneDay/tree/master/005age',
        5: 'https://github.com/danyweis/oneDay/tree/master/006heroSlider',
        6: 'https://github.com/danyweis/oneDay/tree/master/007guessColor',
        7: 'https://github.com/danyweis/oneDay/tree/master/008stopWatch',
        8: 'https://github.com/danyweis/oneDay/tree/master/009pomodoro',
        9: 'https://github.com/danyweis/oneDay/tree/master/010navbar',
        10: 'https://github.com/danyweis/oneDay/tree/master/011CovidAPI',
        11: 'https://github.com/danyweis/oneDay/tree/master/012song',
        12: 'https://github.com/danyweis/oneDay/tree/master/013crypto',
        13: 'https://github.com/danyweis/oneDay/tree/master/014pokedex',
        14: 'https://github.com/danyweis/oneDay/tree/master/015weather',
        15: 'https://github.com/danyweis/oneDay/tree/master/016landingA',
        16: 'https://github.com/danyweis/oneDay/tree/master/017PRS',
        17: 'https://github.com/danyweis/oneDay/tree/master/018ISS',
    },
}

let createPage = function (obj) {
    let row = document.querySelector('.row'),
        titleTag = obj.cardTitle,
        descriptionTag = obj.cardDescription,
        linkTag = obj.cardLink,
        codeLinkTag = obj.cardLinkCode,
        firstDiv = obj.firstDiv,
        imgTag = obj.imgTag,
        cardBodyTag = obj.cardBodyTag,
        screenShotLink = obj.screenShotLink,
        projectName = obj.projectName,
        projectLink = obj.projectLink,
        projectCodeLink = obj.projectCodeLink,
        projectDescription = obj.projectDescription,
        count = 1

    for (let i = 0; i < Object.keys(projectName).length; i++) {
        row.insertAdjacentHTML('afterbegin', firstDiv)

        // take the .card from the previos created firstDiv and insert imgTag
        let card = document.querySelector('.card')

        // Creation of the imgTag
        card.insertAdjacentHTML('afterbegin', imgTag)
        let cardImg = document.querySelector('.card-img-top')
        cardImg.src = screenShotLink[i]
        cardImg.alt = projectName[i]

        // Creation of the .cardBody
        cardImg.insertAdjacentHTML('afterend', cardBodyTag)
        let cardBody = document.querySelector('.card-body')

        // Creating the h5
        cardBody.insertAdjacentHTML('afterbegin', titleTag)
        let cardTitle = document.querySelector('.card-title')
        cardTitle.insertAdjacentHTML('afterbegin', `#${count}: ${projectName[i]}`)

        // Creating the description part
        cardTitle.insertAdjacentHTML('afterend', descriptionTag)
        let cardDescription = document.querySelector('.card-text')
        cardDescription.insertAdjacentHTML('afterbegin', projectDescription[i])

        // Creating the link part
        cardDescription.insertAdjacentHTML('afterend', linkTag)
        let cardBtn = document.querySelector('.card-btn')
        cardBtn.href = projectLink[i]
        cardBtn.target = '_blank'
        cardBtn.style = 'margin: 5px'

        cardBtn.insertAdjacentHTML('afterend', codeLinkTag)
        let cardBtnCode = document.querySelector('.card-btn-code')
        cardBtnCode.href = projectCodeLink[i]
        cardBtnCode.target = '_blank'
        cardBtnCode.style = 'margin: 5px'

        // console.log(titleTag);

        count++
    }
}

createPage(projectInfo)
