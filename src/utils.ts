const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

import { LoyaltyUser } from './enums'
import { Review } from './interfaces'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser): void {
    const iconDisplay = isLoyalty == LoyaltyUser.GOLD ? '⭐' : ''
    // reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
    reviewTotalDisplay.innerHTML = `${value.toString()} Review${makeMultiple(value)} Total | Last Reviewed by ${reviewer} ${iconDisplay}`
}

export function populateUser(isReturning: boolean, userName: string): void {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return 's'
    } else {
        return ''
    }
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}

