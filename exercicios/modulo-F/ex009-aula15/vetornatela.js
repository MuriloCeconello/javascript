var valores = [8, 1, 7, 4, 2, 9]

valores.sort()
console.log(valores)

/*
for (var position = 0; position < valores.length; position++) {
console.log(`A posição do ${position} tem o valor ${valores[position]}`)
}
*/

for(var position in valores){
    console.log(`A posição ${position} tem o valor ${valores[position]}`)
}