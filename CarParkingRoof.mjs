/*
I used the sliding window algorihtm with 2 pointers one on the left and one on the right,
 when we reached the desired window size of k, we move try to minimize the window
*/
const carParkingRoof = (cars, k) => {

    if (k === 1) return 1 //we only need one roof to cover one car

    let arr = new Array(Math.max(...cars)).fill(0)// initilize the array of size of the largest element in cars

    for (let i = 0; i < cars.length; i++) arr[cars[i] - 1] = 1// fill in the spots

    let min = Number.MAX_SAFE_INTEGER// biggest number since we need  to find the min
    let left = 0
    let counter = 0
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 1) counter++//move left pointer until the desired window size is reached
        while (counter === k && left < right) {
            min = Math.min(right - left + 1, min)//calculate min
            if (arr[left] === 1) counter-- //adjust counter if we remove any cars
            left++//move left pointer
        }
    }
    return min
}

export default carParkingRoof