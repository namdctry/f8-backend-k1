function Competitor(name, dame, hp, df, counterAttack) {
  this.name = name;
  this.dame = dame;
  this.hp = hp;
  this.df = df;
  this.counterAttack = counterAttack;
  this.attack = function (competitor) {
    competitor.hp = competitor.hp - this.dame + competitor.df;
    this.hp -= competitor.counterAttack;
  };
}

Competitor.prototype.type;

const dog = new Competitor("dog", 20, 100, 10, 2);
const cat = new Competitor("cat", 15, 120, 12, 13);
let i = 1;
while (dog.hp > 0 && cat.hp > 0) {
  console.log(`đánh lần ${i}`);
  i++;
  dog.attack(cat);
  console.log(cat.hp);
  if (cat.hp <= 0) {
    console.log(`cat die`);
    break;
  }
  cat.attack(dog);
  console.log(dog.hp);
  if (dog.hp <= 0) {
    console.log(`dog die`);
    break;
  }
}
