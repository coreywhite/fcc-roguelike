export function getRandom(seed, multiplier=1) {
    //Return the next random number for the specified seed
    //TODO: implement seeding. Currently just passes through to Math.random!
    return Math.random() * multiplier;
}

export function getRandomArray(seed, length, multiplier=1) {
    return [...new Array(length)].map(() => {return getRandom(seed, multiplier);});
}

export function getRandomGrid(seed, height, width, multiplier=1) {
    return [...new Array(height)].map(() => {return getRandomArray(seed, width, multiplier);});
}