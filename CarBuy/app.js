let money = 10000;
const buyACar = (car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 10000) {
        resolve("can buy " + car);
      } else {
        reject("Not enough money");
      }
    }, 100);
  });
};

money = 10000;
const promise = buyACar("a car").then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
