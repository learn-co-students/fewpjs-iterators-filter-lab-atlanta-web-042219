function findMatching(array, string) {
  // console.log('array', array)
  // console.log('string', string)

  return array.filter(x => {
    // console.log('x', x.toLowerCase())
    // console.log('string', string.toLowerCase())

    return x.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(list, partialName) {
  let lengthOfName = partialName.length
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName
  })
}

function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}