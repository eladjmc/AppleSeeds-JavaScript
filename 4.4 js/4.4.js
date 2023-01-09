const boomGame = (n) => {
  for (let i = 1; i <= n; i++) {
    if (!(i % 7)) {
        process.stdout.write(`${i.toString().includes("7") ? "BOOM-BOOM" : "BOOM"}`);
    } else {
        process.stdout.write(`${i}`);
    }
    
    i < n ? process.stdout.write(`,`) :process.stdout.write(``) ;
  }
};

boomGame(30);
