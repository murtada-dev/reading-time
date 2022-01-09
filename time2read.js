/*
name: time2read.js
Author: Murtada A.Bahal
version: 1.0
*/
class TimeToRead {
  constructor(text, speed) {
    this.text = text;
    this.speed = speed;
  }
  TimeToRead(text, speed) {
    const words = text.split(" ").length;
    const slow = Math.ceil(words / 125);
    const average = Math.ceil(words / 300);
    const fast = Math.ceil(words / 450);
    console.log(words);
    // word > 1 && < 250
    if (words > 0 && words <= 250 && speed === "slow") {
      return `${slow} min to read`;
    } else if (words > 0 && words <= 250 && speed === "average") {
      return `less than ${average} min to read`;
    } else if (words > 0 && words <= 250 && speed === "fast") {
      return `less than ${fast} min to read`;
    }

    // word > 250 && < 7500
    if (words > 250 && words <= 7500 && speed === "slow") {
      return `${slow} hours to read`;
    }
    if (words > 250 && words <= 7500 && speed === "average") {
      return `${average} min to read`;
    }
    if (words > 250 && words <= 7500 && speed === "fast") {
      return `${fast} min to read`;
    }

    // word > 7500 && < 100000
    if (words > 7500 && words <= 100000 && speed === "slow") {
      return `${slow} hours to read`;
    }
    if (words > 7500 && words <= 100000 && speed === "average") {
      return `${average} hours to read`;
    }
    if (words > 7500 && words <= 100000 && speed === "fast") {
      return `${fast} hours to read`;
    }

    // word > 100000
    if (words > 100000 && speed === "slow") {
      return `${slow} hours to read`;
    }
    if (words > 100000 && speed === "average") {
      return `${average} hours to read`;
    }
    if (words > 100000 && speed === "fast") {
      return `${fast} hours to read`;
    }
  }
}
