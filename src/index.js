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

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;
    case random < 0.66:
      result = "Curva";
      break;
    default:
      result = "Confronto";
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲  Rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playerRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁  Rodada ${round}`);

    /* Sortear bloco */
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    /* Rolar os dados */

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    /* Teste de habilidade */

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "Reta") {
      totalTestSkill1 = diceResult1 + character1.velocidade;
      totalTestSkill2 = diceResult2 + character2.velocidade;

      await logRollResult(
        character1.name,
        "velocidade",
        diceResult1,
        character1.velocidade
      );
      await logRollResult(
        character2.name,
        "velocidade",
        diceResult2,
        character2.velocidade
      );
    }
    if (block === "Curva") {
      totalTestSkill1 = diceResult1 + character1.manobrabilidade;
      totalTestSkill2 = diceResult2 + character2.manobrabilidade;

      await logRollResult(
        character1.name,
        "manobrabilidade",
        diceResult1,
        character1.manobrabilidade
      );
      await logRollResult(
        character2.name,
        "manobrabilidade",
        diceResult2,
        character2.manobrabilidade
      );
    }
    if (block === "Confronto") {
      let powerResult1 = diceResult1 + character1.poder;
      let powerResult2 = diceResult2 + character2.poder;

      console.log(`${character1.name} Confrontou com ${character2.name}! ⚔️`);

      await logRollResult(
        character1.name,
        "poder",
        diceResult1,
        character1.poder
      );
      await logRollResult(
        character2.name,
        "poder",
        diceResult2,
        character2.poder
      );

      if (powerResult1 > powerResult2) {
        if (character2.pontos > 0) {
          character2.pontos--;
        }
        console.log(`${character1.name}, Venceu!`);
      }

      if (powerResult2 > powerResult1) {
        if (character1.pontos > 0) {
          character1.pontos--;
        }
        console.log(`${character2.name}, Venceu!`);
      }

      if (powerResult2 === powerResult1) {
        console.log("O confronto terminou empatado, nenhum ponto foi perdido!");
      }
    }

    /* Verificando o vencedor */

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.name}, Marcou um ponto!`);
      character1.pontos++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.name}, Marcou um ponto!`);
      character2.pontos++;
    }

    console.log("-------------------------------");
  }
}

(async function main() {
  console.log(
    `🏁🚦  Começando uma corrida ${player1.name} versos ${player2.name} ...\n`
  );

  await playerRaceEngine(player1, player2);
})();
