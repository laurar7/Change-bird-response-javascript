const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 5, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  }
};

bird.eat = function () {
  if (this.hungerScale === 0) {
    console.log(`${this.name} isn’t hungry and won’t eat.`);
  } else {
    this.hungerScale -= 1;
    console.log("Nom nom nom nom nom!");
  }
};

bird.eat();

console.log(bird.isHappy());
