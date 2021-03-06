function Tenpin() {
  this.scoreCard = [];
  this.strikeCount = 0;
  this.spareCount = 0;
  this.frameCount = 0;
};

Tenpin.prototype.frame = function(roll1, roll2) {
  this.frameCount += 1;
  if (roll1 + roll2 < 10) {
    this.normalScore(roll1, roll2);
  } else if (roll1 === 10) {
    this.strikeCount += 1;
    this.postStrikeScore(roll1, roll2);
  } else if (roll1 + roll2 === 10) {
    this.spareCount += 1;
    this.postSpareScore(roll1, roll2);
  };
};

Tenpin.prototype.postStrikeScore = function(roll1, roll2) {
  if (this.frameCount === 11) {
    this.scoreCard.push(30);
  }
  if (this.strikeCount === 3) {
    this.scoreCard.push(30)
    this.strikeCount -= 1;
  } else if (this.spareCount === 1) {
    this.scoreCard.push(20);
    this.spareCount = 0;
  }
}

Tenpin.prototype.postSpareScore = function(roll1, roll2) {
  if (this.spareCount === 2) {
    this.scoreCard.push(10 + roll1);
    this.spareCount -= 1;
  } else if (this.strikeCount === 1) {
    this.scoreCard.push(20);
    this.strikeCount = 0;
  }
};

Tenpin.prototype.normalScore = function(roll1, roll2) {
  if (this.frameCount === 11 && this.strikeCount > 0) {
    this.scoreCard.push(30);
    this.scoreCard.push(10 + roll1 + roll2);
    this.strikeCount = 0;
  } else if (this.frameCount === 11 && this.spareCount > 0) {
    this.scoreCard.push(10 + roll1 + roll2);
    this.spareCount = 0;
  } else if (this.strikeCount === 0 && this.spareCount === 0) {
    this.scoreCard.push(roll1 + roll2);
  } else if (this.strikeCount === 1) {
    this.scoreCard.push(10 + roll1 + roll2);
    this.scoreCard.push(roll1 + roll2);
    this.strikeCount = 0;
  } else if (this.strikeCount === 2) {
    this.scoreCard.push(20 + roll1);
    this.scoreCard.push(10 + roll1 + roll2);
    this.scoreCard.push(roll1 + roll2);
    this.strikeCount = 0;
  } else if (this.spareCount === 1) {
    this.scoreCard.push(10 + roll1);
    this.scoreCard.push(roll1 + roll2);
    this.spareCount = 0;
  }
};
