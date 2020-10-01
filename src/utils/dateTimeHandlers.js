const getDate = (date) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString()
}

const getTime = (time) => {
    let newTime = new Date(time)
    newTime = newTime.toLocaleTimeString()
    return newTime.substr(0, 5).replace(':', 'h')

}

export {
    getDate,
    getTime,
}
