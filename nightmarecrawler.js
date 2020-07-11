const Nightmare = require('nightmare')
const nightmare = Nightmare()

nightmare
    .goto('https://www.google.com/')
    .type("input[title='Search']", 'ScrapingBee')
    .click("input[value='Google Search']")
    .wait('#rso > div:nth-child(1) > div > div > div.r > a')
    .evaluate(
        () =>
            document.querySelector(
                '#rso > div:nth-child(1) > div > div > div.r > a'
            ).href
    )
    .end()
    .then((link) => {
        console.log('Scraping Bee Web Link: ', link)
    })
    .catch((error) => {
        console.error('Search failed: ', error)
    })