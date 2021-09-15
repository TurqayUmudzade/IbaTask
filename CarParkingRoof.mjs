const carParkingRoof = (cars, k) => cars.sort((a, b) => a - b)[k - 1] - cars[0] + 1

export default carParkingRoof