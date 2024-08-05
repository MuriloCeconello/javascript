function fatorial(num) {
    var fat = 1
    for (var conta = num; conta > 1; conta--) {
        fat *= conta
    }
    return fat
}

console.log(fatorial(5))