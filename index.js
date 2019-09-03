'use strict';

// Create the Car Constructor Function
function Car(x, y) {
  this.x;
  this.y;
}

function drawCar(car) {
  const carHtml = '<img src="http://nostarch.com/images/car.png">';
  const carElement = $(carHtml);

  carElement.css({
    position: 'absolute',
    left: car.x,
    top: car.y
  });

  $('body').append(carElement);
}

const tesla = new Car(20, 20);
const nissan = new Car(100, 200);

drawCar(tesla);
drawCar(nissan);
