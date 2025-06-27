const player1 = {
  name: "mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  name: "bowser",
  velocidade: 5,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};
const player3 = {
  name: "peach",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 2,
  pontos: 0,
};
const player4 = {
  name: "dk",
  velocidade: 2,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};
const player5 = {
  name: "luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};
const player6 = {
  name: "yoshi",
  velocidade: 2,
  manobrabilidade: 4,
  poder: 3,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function playerRaceEngine(character1, character2) {}
  
(async function main() {
 console.log(`🏁🚦  Começando uma corrida entre ${player1.name} versos ${player2.name} ...\n`);

 await playerRaceEngine(player1, player2);
})();
