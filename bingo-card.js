window.onload = initAll;
var usedSongs = new Array(68);

var bailanta = [{"id": 0, "cancion": 'Los Bonnitos - Dile'}, 
                {"id": 1, "cancion": 'Marama - Loquita'}, 
                {"id": 2, "cancion": 'Pitbull - El taxi'}, 
                {"id": 3, "cancion": 'VI-EM - Canta'}, 
                {"id": 4, "cancion": 'Proyecto uno - El Tiburon'}, 
                {"id": 5, "cancion": 'Los Sultanes - Estoy Saliendo con un chabon'}, 
                {"id": 6, "cancion": 'Gilda - Fuiste'}, 
                {"id": 7, "cancion": 'La mona Jimenez - Beso a beso'}, 
                {"id": 8, "cancion": 'Rodrigo - Soy Cordobes'}, 
                {"id": 9, "cancion": 'Yerba Brava - Pibe Cantina'}, 
                {"id": 10, "cancion": 'Nene Malo - Como me gusta la noche'}, 
                {"id": 11, "cancion": 'Calle 13 - Fiesta de locos'}, 
                {"id": 12, "cancion": 'Rombai - Curiosidad'}, 
                {"id": 13, "cancion": 'Nicky Jam - El Perdon'},
                {"id": 14, "cancion": 'Agapornis - Tu'},
                {"id": 15, "cancion": 'Yandar - Te pintaron pajaritos'},
                {"id": 16, "cancion": 'Romeo Santos - Cancioncitas de Amor'},
                {"id": 17, "cancion": 'Don Omar - Danza Kuduro'}];

var popLatino = [{"id": 18, "cancion": 'Ricky Martin - La mordidita'}, 
                {"id": 19, "cancion": 'Cristian Castro - Lloviendo Estrellas'}, 
                {"id": 20, "cancion": 'Luis Fonsi - No te cambio por ninguna'}, 
                {"id": 21, "cancion": 'Chichi Peralta - Procura'}, 
                {"id": 22, "cancion": 'Chayanne - Baila baila'}, 
                {"id": 23, "cancion": 'Enrique Iglesias - Bailando'}, 
                {"id": 24, "cancion": 'Christina Aguilera - Ven conmigo'}, 
                {"id": 25, "cancion": 'Las Ketchup - Asereje'}, 
                {"id": 26, "cancion": 'Juan Luis Guerra - La bilirrubina'}, 
                {"id": 27, "cancion": 'Los del Rio - Macarena'}, 
                {"id": 28, "cancion": 'Son by Four - A puro dolor'}, 
                {"id": 29, "cancion": 'Azucar Moreno - Solo se vive una vez'}, 
                {"id": 30, "cancion": 'Ricardo Arjona - Mujeres'}, 
                {"id": 31, "cancion": 'Lali Esposito - Esperanza Mia'},
                {"id": 32, "cancion": 'Bacilos - Caraluna'},
                {"id": 33, "cancion": 'David Bisbal - Ave Maria'},
                {"id": 34, "cancion": 'Gloria Estefan - Conga'}];

var rockInt = [ {"id": 35, "cancion": 'Aqua - Barbie girl'}, 
                {"id": 36, "cancion": 'Britney Spears - Baby one more time'}, 
                {"id": 37, "cancion": 'Backstreet Boys - Everybody'}, 
                {"id": 38, "cancion": 'Spice Girls - Wannabe'}, 
                {"id": 39, "cancion": 'Robbie Williams - Rock DJ'}, 
                {"id": 40, "cancion": 'Maroon5 - Sugar'}, 
                {"id": 41, "cancion": 'Justin Bieber - What do you mean?'}, 
                {"id": 42, "cancion": "The Rembrandts - I'll be there for you"}, 
                {"id": 43, "cancion": 'Major Lazer - Lean On'}, 
                {"id": 44, "cancion": 'Maxi Trusso - Nothing at all'}, 
                {"id": 45, "cancion": 'Bastille - Pompeii'},
                {"id": 46, "cancion": 'Capital Cities - Safe and Sound'}, 
                {"id": 47, "cancion": 'Michael Jackson - Beat It'}, 
                {"id": 48, "cancion": 'Kenny Loggins - Footloose'}, 
                {"id": 49, "cancion": 'AC/DC - You Shook me all night long'}, 
                {"id": 50, "cancion": "Guns N' Roses - Sweet Child of Mine"}, 
                {"id": 51, "cancion": 'The Rolling Stones - Start me up'},
                {"id": 52, "cancion": 'Ini Kamoze - Here comes the Hotstepper'}];

var rockNacional = [{"id": 53, "cancion": 'Gustavo Cordera - La bomba loca'}, 
                    {"id": 54, "cancion": 'Mancha de Rolando - Chino'}, 
                    {"id": 55, "cancion": 'Los Autenticos Decadentes - Los Piratas'}, 
                    {"id": 56, "cancion": 'Los Fabulosos Cadillacs - El Matador'}, 
                    {"id": 57, "cancion": 'Soda Stereo - De musica ligera'}, 
                    {"id": 58, "cancion": 'Los Pericos - Parate y mira'}, 
                    {"id": 59, "cancion": 'Charly Garcia - No voy en tren'},
                    {"id": 60, "cancion": 'Fito Paez - Mariposa Tecknicolor'},
                    {"id": 61, "cancion": 'Andres Calamaro - Flaca'},
                    {"id": 62, "cancion": 'Vicentico - Algo Contigo'},
                    {"id": 63, "cancion": 'Illya Kuryaki - Coolo'},
                    {"id": 64, "cancion": 'Catupecu Machu - Magia Veneno'},
                    {"id": 65, "cancion": 'Divididos - Ala Delta'},
                    {"id": 66, "cancion": 'Fabiana Cantilo - Mi enfermedad'},
                    {"id": 67, "cancion": 'Enanitos Verdes - Lamento Boliviano'}];

function initAll() {
  if (document.getElementById) {
    for (var i=0; i<12; i++) {
      anotherCard(i);
      newCard(i);
    }
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function newCard(table) {
  var numArray = [];
  for(var i=0 ; i<24 ; i++){
    numArray.push(i);  
  } 
  var randomEmpty = shuffle(numArray).slice(0,11);
  for (var i=0; i<randomEmpty.length; i++) {
    document.getElementById("table" + table + "square"+randomEmpty[i]).className = "empty";
  }
  
  for(var j=0 ; j<24 ; j++){
    setSquare(j, table);
  }

}

function setSquare(thisSquare, table){
  var currentSquare = "table" + table + "square" + thisSquare;
  var colPlace = new Array(0,0,1,1,2,2,3,3,0,0,1,1,2,2,3,3,0,0,1,1,2,2,3,3);
  var estiloIndex = colPlace[thisSquare];

  var isEmtpy = (document.getElementById(currentSquare).className == "empty");
  if (!isEmtpy) {
    var newSong = getNewSong(estiloIndex);

    do {
      newSong = getNewSong(estiloIndex);
    } while(usedSongs[newSong.id]);
    
    usedSongs[newSong.id] = true;
    document.getElementById(currentSquare).innerHTML = newSong.cancion;    
  }
}

function getNewSong(estiloIndex) {
  var estiloArray = [];
  switch(estiloIndex) {
    case 0:
      estiloArray = bailanta;
      break;
    case 1:
      estiloArray = popLatino;
      break;
    case 2:
      estiloArray = rockInt;
      break;
    case 3:
      estiloArray = rockNacional;
      break;
  }

  var randomIndex = Math.floor(Math.random() * estiloArray.length);
  return estiloArray[randomIndex];  
}

function anotherCard(table) {
  for (var i = 1; i < usedSongs.length; i++) {
    usedSongs[i] = false;
  };

  for (var i=0; i<24; i++) {
    document.getElementById("table" + table + "square" + i).className = "";
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}