// Code your solution here
const findMatching = function (drivers, string) {
    const names = drivers.filter(function (element) {
        return element.toLowerCase() === string.toLowerCase()
    })
    return names
}


function fuzzyMatch (drivers, string) {
    const letterNames = drivers.filter(element => {
        return element[0] === string[0]
        })
        return letterNames
}


function matchName (drivers, string) {
      return drivers.filter(obj => obj.name === string)
}