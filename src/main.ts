import { showReviewTotal, populateUser, getTopTwoReviews } from './utils'
import { Permissions, LoyaltyUser } from './enums'
import { Review, Property } from './interfaces'
import { MainProperty } from './classes'
const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

// let isLoggedIn: boolean

// Reviews
let reviews : Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER,
        date: '27-03-2021'
    },
]

// Add the reviews
let count = 0;
function addReviews(array: Review[]): void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name
            reviewContainer?.appendChild(card)
        }
        container!.removeChild(button!)
    }
}

// Show the reviews when the button is clicked
button?.addEventListener('click', () => addReviews(reviews))


// User information
const you = {
    firstName: 'Adriane James',
    lastName: 'Puzon',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 19,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

// Current location of the user
let currentLocation : [string, string, number] = ['London', '11.03', 17]
footer!.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

// Array of Properties
const properties : Property[] = [
    {
        image: 'src/images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'src/images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'src/images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'src/images/malaysian-property.jpg',
        title: 'Malia Hotel',
        price:  35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
]

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer!.appendChild(card)
}

// Instantiate a new property from class
let yourMainProperty = new MainProperty(
    [
        {
            name: "Olive",
            stars: 5,
            loyaltyUser: LoyaltyUser.GOLD,
            date: '12-04-2021'
        }
    ],
    "src/images/italian-property.jpg",
    "Italian House",
)

// Add the main property to the top part of the page
const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer!.appendChild(image)