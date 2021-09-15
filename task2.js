//Bruce force dfs
const findCountries = (matrix) => {
    let h = matrix.length
    let w = matrix[0].length
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    let dfs = (x, y, n) => {
        if (matrix[x][y] === n)
            matrix[x][y] = "*"
        for (const [dx, dy] of dirs) {
            let newX = x + dx
            let newY = y + dy
            if (newX >= 0 && newX < h && newY >= 0 && newY < w && matrix[newX][newY] == n) {
                dfs(newX, newY, n)
            }
        }
    }

    let couunt = 0
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (matrix[i][j] !== '*') {
                dfs(i, j, matrix[i][j])
                couunt++
            }
        }
    }
    return couunt
};


let board = [
    [5, 4, 4],
    [4, 3, 4],
    [3, 2, 4],
    [2, 2, 2],
    [3, 3, 4],
    [1, 4, 4],
    [4, 1, 1]
]
console.log(findCountries(board))