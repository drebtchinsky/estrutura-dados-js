const matriz = [];

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = [];
    for (let k = 0; k < 3; k++) {
      matriz[i][j][k] = i + j + k;
    }
  }
}
// console.table(matriz);
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      console.log(i, j, k, matriz[i][j][k]);
    }
  }
}
