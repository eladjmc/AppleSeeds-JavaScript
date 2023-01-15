const printTriangle = (N) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i ; j++) {
      process.stdout.write("#");
    }
    console.log('');
  }
};

printTriangle(6)
