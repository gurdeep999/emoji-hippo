// fisher yates shuffle

const shuffle = (array) => {
  let m = array.length, t, i

  while (m) {

    i = Math.floor(Math.random() * m--)

    t = array[i]
    array[i] = array[m]
    array[m] = t
    array[m].id = generateId()


  }

  return array
}

const generateId = () => {
 return Math.floor(Math.random() * 1000000000)
}

const utils = {
  shuffle
}

export default utils


