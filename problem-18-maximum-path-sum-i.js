function maximumPathSumI(triangle) {
  for (let i = triangle.length - 1; i > 0; i--){
    let triangleRow = triangle[i];
    let nextRow = triangle[i - 1];

    nextRow.forEach((item, index) => {
      if (item === 0) {
        return;
      }

      triangle[i - 1][index] = item + Math.max(
        triangleRow[index], triangleRow[index + 1]
      )
    })
  }

  let max = triangle[0][0];
  return max;
}

[
  [3, 0, 0, 0], 
  [7, 4, 0, 0],
  [2, 4, 6, 0],
  [8, 5, 9, 3]
]

maximumPathSumI([[3, 0, 0, 0], [7, 4, 0, 0],[2, 4, 6, 0],[8, 5, 9, 3]])