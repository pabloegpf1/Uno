/*
const createGame = (name) => {

  let gameID = knex("Games")
  .returning("ID")
  .insert({
   Name: name
 })
  .then();
  return gameID;
};

const createDrawDeck = (gameID) => {

  function drawDeck1(index){
    for(let i=1; i<49; i++){
      knex('DrawDeck').insert([
        { GameID: gameID, CardID: i, CardIndex: index},
        { GameID: gameID, CardID: i, CardIndex: index+1},
        { GameID: gameID, CardID: i, CardIndex: index+2},
        { GameID: gameID, CardID: i, CardIndex: index+3}
        ]).then(index+=4);
    } return index;
  }

  function drawDeck2(index){
    for(let i=49; i<53; i++){
      knex('DrawDeck').insert(
        { GameID: gameID, CardID: i, CardIndex: index}
        ).then(index++);
    }
  }

  function drawDeck3(index){
    for(let i=53; i<55; i++){
      knex('DrawDeck').insert([
        { GameID: gameID, CardID: i, CardIndex: index},
        { GameID: gameID, CardID: i, CardIndex: index+1}
        ]).then(index+=2);
    }
  }

  let index = 0;

  new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);

  }).then(function(result) {
    drawDeck1(index)
    return Number(result);
  }).then(function(result) {
    drawDeck2(result)
    return Number(result);
  }).then(function(result) {
    drawDeck2(result)
    return Number(result);
  });
}

const shuffleDrawDeck = (gameID) => {
 getTotalDrawDeck(gameID).then(function(result) {
  let currentIndex = result;
});

 let temporaryValue, randomIndex;

    // // While there remain elements to shuffle...
    // while (0 !== currentIndex) {

    //   // Pick a remaining element...
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;

    //   // And swap it with the current element.
    //   temporaryValue = this.deckArray[currentIndex];
    //   this.deckArray[currentIndex] = this.deckArray[randomIndex];
    //   this.deckArray[randomIndex] = temporaryValue;

    //   knex('DrawDeck')
    //   .where('GameID', gameID)
    //   .where('CardIndex', currentIndex)
    //   .update({
    //     status: 'archived',
    //     thisKeyIsSkipped: undefined
    //   })
    // }

  }

  function getTotalDrawDeck(gameID) {
    var id = Number(gameID);

    return knex('DrawDeck')
    .where('GameID', id)
    .orderBy('CardIndex')
    .first('CardIndex')
    .then(function(Index){
      return Index["CardIndex"];
    });
  }

  module.exports = {
    createGame,
    createDrawDeck,
    shuffleDrawDeck
  }


  // shuffleDeck() {
  //   let currentIndex = this.deckArray.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = this.deckArray[currentIndex];
  //     this.deckArray[currentIndex] = this.deckArray[randomIndex];
  //     this.deckArray[randomIndex] = temporaryValue;
  //   }
  //}*/
