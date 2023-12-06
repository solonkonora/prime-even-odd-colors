// //create a div container in HTML and create 100 to 100 numbers dynamically and append
// //even numbers background is green
// //odd numbers background is yellow
// //prime numbers background is red
// //hint: Math.floor(Math.random() * 100)

const container = document.getElementById('numberContainer');
function primeNum(b) {
  if (b < 2) return false
  for (var i = 2; i <= Math.sqrt(b); i++) {
    if (b % i === 0) return false
  }
  return true
}

for (let i = 1; i <= 100; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  console.log(randomNumber)

  const numberElement = document.createElement('div')
  numberElement.className = 'numberElement'
  numberElement.textContent = randomNumber
  container.appendChild(numberElement)

  if (i % 2 === 0) {
    numberElement.classList.add('even')
  } else {
    numberElement.classList.add('odd')
  }
  if (primeNum(i)) {
    numberElement.classList.add('prime')
  }
}
