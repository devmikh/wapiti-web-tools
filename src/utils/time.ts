export function getTimeDifference(firstDate: Date, secondDate: Date): string {
    let startDate
    let endDate
    if (firstDate < secondDate) {
        startDate = firstDate
        endDate = secondDate
    } else {
        startDate = secondDate
        endDate = firstDate
    }

    // Calculate the difference in years, months, and days
    const startYear = startDate.getFullYear()
    const endYear = endDate.getFullYear()
    const startMonth = startDate.getMonth()
    const endMonth = endDate.getMonth()
    const startDay = startDate.getDate()
    const endDay = endDate.getDate()
  
    let yearDiff = endYear - startYear
    let monthDiff = endMonth - startMonth
    let dayDiff = endDay - startDay
  
    if (yearDiff === 0 && monthDiff === 0 && dayDiff === 0) {
        return '0 days'
    }

    if (monthDiff < 0) {
        yearDiff--
        monthDiff += 12
    }
  
    if (dayDiff < 0) {
        const prevMonthEndDate = new Date(endYear, endMonth, 0)
        dayDiff += prevMonthEndDate.getDate()
        monthDiff--
    }
  
    if (monthDiff < 0) {
        yearDiff--
        monthDiff += 12
    }
  
    const years = yearDiff > 0 ? `${yearDiff} year${yearDiff > 1 ? 's' : ''}` : ''
    const months = monthDiff > 0 ? `${monthDiff} month${monthDiff > 1 ? 's' : ''}` : ''
    const days = dayDiff > 0 ? `${dayDiff} day${dayDiff > 1 ? 's' : ''}` : ''
  
    let result = ''
    if (years) {
        result += years
    }
    if (months) {
        if (result) {
            result += ', '
        }
        result += months
    }
    if (days) {
        if (result) {
            result += ', '
        }
        result += days
    }
    return result
}

export const convertUnixToDate = (input: string) => {
    try {
        const date = new Date(Number(input) * 1000)
        if (isNaN(date.getTime())) {
            throw new Error('Invalid timestamp')
        }
        return date.toLocaleString()
    } catch {
        return 'Invalid timestamp'
    }
}
