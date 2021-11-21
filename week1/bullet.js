function fireBullet() {
  return new Promise((resolve, reject) => {
    let distance = 0;

    const fly = () => {
      distance += 1;
      console.log('distance', distance);
      setTimeout(() => {
        if (distance === 10) {
          resolve('>>> Bullet hit target');
          return;
        }
        fly();
      }, 200);
    };

    fly();
  });
}

fireBullet()
  .then((message) => {
    console.log('Resolved', message);
  })
  .catch((error) => {
    console.log('Rejected', error);
  });
