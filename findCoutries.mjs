/*
I used depth first-search to solve this problem, 
the is to look at it as a graph and go depth first 
for each number n and mark the placed we visied with * to avoid them after.
*/
const findCountries = (matrix) => {
    let h = matrix.length
    let w = matrix[0].length
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    let dfs = (x, y, n) => {
        if (matrix[x][y] === n)//Found a match, mark it as visited
            matrix[x][y] = "*"
        for (const [dx, dy] of dirs) { // go in 4 directions
            let newX = x + dx
            let newY = y + dy
            if (newX >= 0 && newX < h && newY >= 0 && newY < w && matrix[newX][newY] == n) {
                dfs(newX, newY, n) //dfs deeper
            }
        }
    }

    let count = 0
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (matrix[i][j] !== '*') {
                dfs(i, j, matrix[i][j])
                count++
            }
        }
    }
    return count
};

export default findCountries