import nReadlines from 'n-readlines'

export function main():void {
    const inputLines = new nReadlines('input.txt')
    console.log(countDeeper(inputLines))
}

export function countDeeper(rl:nReadlines):Number {
    let deeperCount = 0

    let currentVal
    let lastVal = nextNumber(rl)
    while (currentVal = nextNumber(rl)) {
        if (currentVal > lastVal) {
            deeperCount++
        }
        lastVal = currentVal
    }

    return deeperCount
}

export function nextNumber(rl:nReadlines):(false | Number) {
    let line
    if (line = rl.next()) {
        return Number(line.toString())
    } else {
        return false
    }
}

main()