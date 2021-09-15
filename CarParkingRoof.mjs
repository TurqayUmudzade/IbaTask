/*
I used the sliding window algorihtm with 2 pointers one on the left and one on the right,
 when we reached the desired window size of k, we move try to minimize the window
*/
const carParkingRoof = (cars, k) => {
    cars.sort((a, b) => a - b)
    let arr = new Array(cars[cars.length - 1]).fill(0)
    for (let i = 0; i < cars.length; i++) arr[cars[i] - 1] = 1

    let min = Number.MAX_SAFE_INTEGER
    let l = 0
    let counter = 0
    for (let r = 0; r < arr.length; r++) {
        if (arr[r] === 1) counter++
        while (counter === k) {
            min = Math.min(r - l + 1, min)
            if (arr[l] === 1) break
            l++
        }
    }
    return min
}

export default carParkingRoof