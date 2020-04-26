const fetch = require('node-fetch');
const url = 'https://cricapi.com/api/playerStats?pid=35320&apikey=A8zoDoPaQgefmB7KunnSuApSgL73';
async function getCricketPlayerStats(){
   const response = await fetch(url);
   const json = await response.json();
   
   var playerObject = {profile:json.profile,image:json.imageURL,age:json.currentAge,name:json.fullName};
   console.log('JSON ',playerObject);
   return playerObject;
}
module.exports = getCricketPlayerStats;
//getCricketPlayerStats();