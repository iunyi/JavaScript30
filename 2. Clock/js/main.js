'use strict';

const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
const eyes = document.querySelectorAll('.eye');

function setDate() {
  const now = new Date();

  //   Get seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //   Get minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //   Get hours
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  //   Move eyes
  const eyesDegrees = (seconds / 60) * 360;
  for (let eye of eyes) {
    eye.style.transform = `rotate(${eyesDegrees}deg)`;
  }
}

setInterval(setDate, 1000);

setDate();
