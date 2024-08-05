var num = [5, 8, 2, 9, 3]
num[3] = 1
num.push(7)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)

var position = num.indexOf(5)
if (position == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 5 está na posição ${position}`)
}
