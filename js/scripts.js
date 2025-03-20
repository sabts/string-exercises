//1️.Camila está revisando nombres en una lista. Si un nombre tiene más de 6 caracteres, debe marcarlo como "Nombre largo". Si tiene 6 o menos, lo marcará como "Nombre corto". Crea una función que reciba un nombre y determine su clasificación.
const nameLengthDetector = name => {
  if (name.length > 6) {
    console.log("Nombre largo");
  } else {
    console.log("Nombre corto");
  }
};
nameLengthDetector("Ana");
nameLengthDetector("Pringles");

//2️. Bego está escribiendo un email, pero quiere asegurarse de que el texto termina en un punto. Crea una función que reciba una frase y determine si acaba con "." ("Formato correcto") o no ("Falta el punto final").
const begoEndingTextEmail = emailText => {
  if (emailText.endsWith(".")) {
    console.log("Formato correcto");
  } else {
    console.log("Falta el punto final");
  }
};
begoEndingTextEmail("S.0.S");
begoEndingTextEmail("S0S.");

//3️. Sabrina está verificando contraseñas. Si la contraseña tiene más de 8 caracteres y empieza con un número, será válida. Si no cumple estas condiciones, será inválida. Crea una función que reciba una contraseña y determine si es segura.
const sabrinaVerifyPassword = correctPassword => {
  const number = "0123456789";
  if (
    number.includes(correctPassword.charAt(0)) &&
    correctPassword.length > 8
  ) {
    console.log("Contraseña correcta");
  } else {
    console.log(
      "Contraseña insegura. Debe tener más de 8 caracteres y comenzar con un número"
    );
  }
};
sabrinaVerifyPassword("hallelujah");
sabrinaVerifyPassword("100hallelujah");

//4️. Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.
const macarenaGrammarCorrector = text => {
  if (text.charAt(0) === text.charAt(0).toUpperCase() && text.endsWith(".")) {
    console.log("Frase correcta");
  } else {
    console.log("frase incorrecta");
  }
};
macarenaGrammarCorrector(
  "Macarena es una buena persona que cuida de los animales"
);
macarenaGrammarCorrector(
  "macarena es una buena persona que cuida de los animales"
);
macarenaGrammarCorrector(
  "macarena es una buena persona que cuida de los animales."
);
macarenaGrammarCorrector(
  "Macarena es una buena persona que cuida de los animales."
);

//5. Abby encontró un mensaje pintado en la pared con dos palabras. Si ambas palabras tienen la misma cantidad de letras, lo tomará como una pista. Si no, lo ignorará. Crea una función que reciba dos palabras y determine si el mensaje es importante.
const abbySecretMessege = (wallCode1, wallCode2) => {
  if (wallCode1.length === wallCode2.length) {
    console.log("Es importante");
  } else {
    console.log("No es importante");
  }
};
abbySecretMessege("zombies", "muertos");
abbySecretMessege("xoxo", "gossip Girl");

//6. Camila quiere asegurarse de que un número de teléfono tiene el formato correcto. Debe tener exactamente 9 caracteres. Crea una función que reciba un número como string y determine si es válido o no.
const camilaPhoneNumber = phoneNumber => {
  const number = "0123456789";
  if (number.includes(phoneNumber.charAt(0)) && phoneNumber.length === 9) {
    console.log("Número válido");
  } else {
    console.log("Número inválido");
  }
};
camilaPhoneNumber("123456789");
camilaPhoneNumber("a23456789");
camilaPhoneNumber("12345678");

//7️. Bego está eligiendo un dominio para su nueva web. Si la web termina en ".com", se usará para negocios. Si termina en ".org", será para una organización. Si no es ninguno de estos, el dominio no es válido. Crea una función que reciba un dominio y determine su clasificación.
const begoWebSite = websiteName => {
  if (websiteName.endsWith(".com")) {
    console.log("Bego tiene un dominio de negocio");
  } else if (websiteName.endsWith(".org")) {
    console.log("Bego tiene un dominio de organización");
  } else {
    console.log("Dominio no válido");
  }
};
begoWebSite("begoweb.com");
begoWebSite("begoweb.net");
begoWebSite("begoweb.org");

//8. Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.
const sabrinaZwordList = wordWithZ => {
  if (wordWithZ.toLowerCase().includes("z")) {
    console.log("Palabra especial");
  } else {
    console.log("Palabra común");
  }
};
sabrinaZwordList("Zapatero");
sabrinaZwordList("zombie");
sabrinaZwordList("reciclar");

//9. Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.
const macarenaPriorityUrgentMessage = messages => {
  if (messages.toLowerCase().includes("urgente")) {
    console.log("Prioridad alta: mensaje urgente");
  } else {
    console.log("prioridad baja: mensaje normal");
  }
};
macarenaPriorityUrgentMessage("asunto:ejercicios con strings");
macarenaPriorityUrgentMessage("asunto Urgente:ejercicios con strings");

//10. Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.
const abbyNoteCode = code => {
  if (code.length === 4 && code % 2 === 0) {
    console.log("posible código");
  } else {
    console.log("como este ejercicio, el código no sirve");
  }
};
abbyNoteCode("2222");
abbyNoteCode("222");
abbyNoteCode("2223");

//11. Camila está revisando invitaciones para un evento. Si el nombre del invitado empieza con "A", "E", "I", "O" o "U", se le asignará una mesa especial. Si empieza con otra letra, se le asignará una mesa normal. Crea una función que reciba un nombre y determine su ubicación.
const camilaInvitationtable = guestName => {
  const vowels = "AEIOU";
  if (vowels.includes(guestName.charAt(0))) {
    console.log("Ubicación:mesa especial");
  } else {
    console.log("Ubicación:mesa normal");
  }
};
camilaInvitationtable("Alejandro");
camilaInvitationtable("Roberto");

//12. Bego está verificando si un texto contiene lenguaje ofensivo. Si un mensaje contiene la palabra "tonto" o "feo", se marcará como inapropiado. Si no, será aceptado. Crea una función que reciba un mensaje y determine su categoría.
const begomessagefilter = message => {
  if (
    message.toLowerCase().includes("tonto") ||
    message.toLowerCase().includes("feo")
  ) {
    console.log("mensaje inapropiado");
  } else {
    console.log("se ve el mensaje");
  }
};
begomessagefilter("eres Tonto como una Piedra");
begomessagefilter("Vivan los churros y el chocolate!");

//13. Sabrina quiere imprimir etiquetas con iniciales. Crea una función que reciba un nombre y un apellido y devuelva sus iniciales en mayúsculas, separadas por un punto.
const initialLabels = (name, lastname) => {
  const nameInitial = name.charAt(0).toUpperCase();
  const lastnameInitial = lastname.charAt(0).toUpperCase();
  console.log(nameInitial + "." + lastnameInitial);
};
initialLabels("sabrina", "taraschi");
initialLabels("taylor", "swift");

//14. Macarena está diseñando una campaña publicitaria. Si el título del anuncio tiene más de 20 caracteres, lo reducirá. Si tiene 20 o menos, lo usará tal cual. Crea una función que reciba un título y determine si debe ajustarse.
const advertisingCampaignTitle = campaingTitle => {
  if (campaingTitle.length <= 20) {
    console.log(campaingTitle);
  } else {
    console.log(campaingTitle.substring(0, 20) + "...");
  }
};
advertisingCampaignTitle("Perfoming live! In Madrid. The short n` Sweet Tour");
advertisingCampaignTitle("short n` Sweet");

//15. Abby encontró una radio funcionando con interferencias. Si la señal incluye la palabra "ayuda" o "suministros", significa que alguien está pidiendo asistencia. Si no contiene estas palabras, lo ignorará. Crea una función que reciba un mensaje de radio y determine si Abby debe responder.
const radioInterfaceCode = radioCode => {
  if (
    radioCode.toLowerCase().includes("ayuda") ||
    radioCode.toLowerCase().includes("suministros")
  ) {
    console.log("mensaje de ayuda");
  } else {
    console.log("ignorar");
  }
};
radioInterfaceCode("Ayuda! ya no quiero pensar más");
radioInterfaceCode("ya llegaron los ZOMBIES!");

//16. Camila quiere asegurarse de que los nombres de usuario no contengan espacios. Si un nombre tiene espacios, será inválido. Si no tiene, será aceptado. Crea una función que reciba un nombre de usuario y determine su validez.
const usernameValidityChecker = username => {
  if (username.includes(" ")) {
    console.log("Nombre de usuario inválido");
  } else {
    console.log("Nombre de usuario válido");
  }
};
usernameValidityChecker("s   a   b   r   i   n   a");
usernameValidityChecker("sabrina");

//17. Bego está registrando nuevas cuentas de clientes. Si un correo electrónico contiene "@" y ".", será válido. Si no tiene alguno de estos elementos, será inválido. Crea una función que reciba un email y determine si es correcto.
const emailValidityChecker = electronicMail => {
  if (electronicMail.includes("@") && electronicMail.includes(".")) {
    console.log("Correo electrónico válido");
  } else {
    console.log("Correo electrónico inválido");
  }
};
emailValidityChecker("sabrina@gmailcom");
emailValidityChecker("sabrina@gmail.com");

//19. Macarena está validando números de identificación. Si un número tiene exactamente 8 caracteres y termina en una letra, será válido. Si no cumple estas condiciones, será inválido. Crea una función que reciba un número de identificación y determine si es correcto. SE QUE SIGUE 18 PERO ME DESPUES ME PIERDO CUANDO BUSCO LA REFERENCIA EN EL CLASSROOM
const ValidityidChecker = identification => {
  const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  if (
    identification.length === 8 &&
    alphabet.includes(
      identification.toUpperCase().charAt(identification.length - 1)
    )
  ) {
    console.log("Identificación válida");
  } else {
    console.log("Identificación inválida");
  }
};
ValidityidChecker("1234567A");
ValidityidChecker("12345678a");
ValidityidChecker("123456a8");

//20. Abby encontró una combinación de caja fuerte que parece ser un número de 4 dígitos. Quiere probar combinaciones aleatorias hasta encontrar una que termine en 7. Crea una función que genere un número de 4 dígitos que termine en 7.
const safeBoxCombinationCode = () => {
  const firtsDigits = Math.floor(Math.random() * 10);
  const secondDigits = Math.floor(Math.random() * 10);
  const thirdDigits = Math.floor(Math.random() * 10);
  console.log(`${firtsDigits}${secondDigits}${thirdDigits}7`);
};
safeBoxCombinationCode();

//21. Macarena está seleccionando un color al azar para una promoción. Los colores posibles son "Rojo", "Azul", "Verde" y "Amarillo". Crea una función que devuelva uno de estos colores de forma aleatoria.
const colorRandomPicker = () => {
  randomColor = Math.floor(Math.random() * 4);
  if (randomColor === 1) {
    console.log("Rojo");
  } else if (randomColor === 2) {
    console.log("Azul");
  } else if (random === 3) {
    console.log("Verde");
  } else {
    console.log("Amarillo");
  }
};
colorRandomPicker();

//22. Sabrina quiere generar una combinación de letras para un código de producto. La combinación debe tener 3 letras aleatorias en mayúsculas. Crea una función que genere y muestre esta combinación.
const threeDigitLetterCombination = () => {
  const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const digitOne = Math.floor(Math.random() * 27);
  const digitTwo = Math.floor(Math.random() * 27);
  const digitThree = Math.floor(Math.random() * 27);
  console.log(alphabet.charAt(digitOne) + alphabet.charAt(digitTwo) + alphabet.charAt(digitThree));
}
threeDigitLetterCombination();

//23.Bego está revisando una lista de verbos para una clase de gramática. Necesita clasificar cada verbo según su conjugación. Crea una función que reciba dos verbos en infinitivo y determine si pertenecen a la primera ("-ar"), segunda ("-er") o tercera ("-ir") conjugación. La función deberá imprimir la clasificación de cada verbo.
const  listOfGrammaticalVerbs = (verb) => {
  if(verb.endsWith('ar')){console.log('Primera conjugación')} 
  else if(verb.endsWith('er')){console.log('Segunda conjugación')} 
  else if(verb.endsWith('ir')){console.log('terecera conjugación')}
}
listOfGrammaticalVerbs ('Matar')
listOfGrammaticalVerbs ('Desvivir')
listOfGrammaticalVerbs ('Enloquecer')

//24.Abby encontró una caja cerrada con un código de 5 números. Solo uno de cada 5 intentos abrirá la caja. Crea una función que simule 5 intentos y muestre si en alguno se abre la caja o no.
const codeToOpenTheBox = () =>{
  const fiveDigitsCode = Math.floor(Math.random()*10)
}// I need somebody, HELP! not just anybody, HELP! ou know I need someone, HEEEEEEELP

//25.Camila quiere generar una clave secreta para una nueva cuenta. La clave debe tener un número aleatorio entre 100 y 999 y una letra aleatoria entre "A" y "Z". Crea una función que genere una clave con ese formato.
const SecretCodeForAccount = () => {
  const numberGenerator = Math.floor(Math.random()*900)+ 100;
  const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const randomLetterGenerator = Math.floor(Math.random()*27);
  console.log(numberGenerator + alphabet.charAt(randomLetterGenerator))
}
SecretCodeForAccount()

//26. Macarena quiere jugar al Euromillones, pero como nunca le toca, ha decidido confiar en el destino. Quiere generar 5 números aleatorios entre 1 y 50, asegurándose de que si un número es menor que 10, aparezca con un "0" delante. Por ejemplo, un posible resultado sería: "08 10 33 35 49". Crea una función que genere y muestre esta combinación de números en el formato correcto.
const euromillonesLottery = () => {
  const number1 = Math.floor(Math.random()*50)+1;
  const number2 = Math.floor(Math.random()*50)+1;
  const number3 = Math.floor(Math.random()*50)+1;
  const number4 = Math.floor(Math.random()*50)+1;
  const number5 = Math.floor(Math.random()*50)+1;
  const number1Lowerthan10 = number1 < 10 ?'0'+number1 :number1
  const number2Lowerthan10 = number2 < 10 ?'0'+number2 :number2
  const number3Lowerthan10 = number3 < 10 ?'0'+number3 :number3
  const number4Lowerthan10 = number4 < 10 ?'0'+number4 :number4
  const number5Lowerthan10 = number5 < 10 ?'0'+number5 :number5
  console.log(`${number1Lowerthan10} ${number2Lowerthan10} ${number3Lowerthan10} ${number4Lowerthan10} ${number5Lowerthan10}`)
} 
euromillonesLottery() //Hay alguna forma de hacer este ejercicio pero sin tener que hacer 2000 del mismo const para que funcione? para que no sea tan largo?

//27.Sabrina necesita ocultar parte de un número de tarjeta de crédito. Dado un número de 16 dígitos como string, la función debe reemplazar todos los caracteres excepto los últimos 4 con asteriscos. Por ejemplo, "1234567812345678" debe mostrarse como **********5678.
const hideCardDigitsPrivacy = (creditCardNumber) =>{
  if (creditCardNumber.length === 16){
    console.log("************" + creditCardNumber.substring(12))} 
    else { console.log('Número de tarjeta no válido'); }
}
hideCardDigitsPrivacy('1234567891012145')

//28. Camila quiere dividir frases largas en dos partes. Si una frase tiene más de 20 caracteres, debe dividirla en dos partes: los primeros 10 caracteres y el resto, separados por " - ". Si la frase tiene 20 o menos, se devuelve tal cual. Crea una función que realice esta división.
const longSentenceDivider = (sentence) => {
  if(sentence.length>20){
    console.log(sentence.substring(0,11) +' - '+ sentence.substring(11))} else {console.log(sentence)}
  }
  longSentenceDivider('I just wanted you to know, That this is me trying')
  longSentenceDivider('At least Im trying')