//Camila está revisando nombres en una lista. Si un nombre tiene más de 6 caracteres, debe marcarlo como "Nombre largo". Si tiene 6 o menos, lo marcará como "Nombre corto". Crea una función que reciba un nombre y determine su clasificación.
const nameLengthDetector = name => {
  if (name.length > 6) {
    console.log("Nombre largo");
  } else {
    console.log("Nombre corto");
  }
};
nameLengthDetector("Ana");
nameLengthDetector("Pringles");

//Bego está escribiendo un email, pero quiere asegurarse de que el texto termina en un punto. Crea una función que reciba una frase y determine si acaba con "." ("Formato correcto") o no ("Falta el punto final").
const begoEndingTextEmail = emailText => {
  if (emailText.endsWith(".")) {
    console.log("Formato correcto");
  } else {
    console.log("Falta el punto final");
  }
};
begoEndingTextEmail("S.0.S");
begoEndingTextEmail("S0S.");

// Sabrina está verificando contraseñas. Si la contraseña tiene más de 8 caracteres y empieza con un número, será válida. Si no cumple estas condiciones, será inválida. Crea una función que reciba una contraseña y determine si es segura.
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

// Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.
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

//Abby encontró un mensaje pintado en la pared con dos palabras. Si ambas palabras tienen la misma cantidad de letras, lo tomará como una pista. Si no, lo ignorará. Crea una función que reciba dos palabras y determine si el mensaje es importante.
const abbySecretMessege = (wallCode1, wallCode2) => {
  if (wallCode1.length === wallCode2.length) {
    console.log("Es importante");
  } else {
    console.log("No es importante");
  }
};
abbySecretMessege("zombies", "muertos");
abbySecretMessege("xoxo", "gossip Girl");

// Camila quiere asegurarse de que un número de teléfono tiene el formato correcto. Debe tener exactamente 9 caracteres. Crea una función que reciba un número como string y determine si es válido o no.
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

//Bego está eligiendo un dominio para su nueva web. Si la web termina en ".com", se usará para negocios. Si termina en ".org", será para una organización. Si no es ninguno de estos, el dominio no es válido. Crea una función que reciba un dominio y determine su clasificación.
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

//Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.
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

//Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.
const macarenaPriorityUrgentMessage = messages => {
  if (messages.toLowerCase().includes("urgente")) {
    console.log("Prioridad alta: mensaje urgente");
  } else {
    console.log("prioridad baja: mensaje normal");
  }
};
macarenaPriorityUrgentMessage("asunto:ejercicios con strings");
macarenaPriorityUrgentMessage("asunto Urgente:ejercicios con strings");

//Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.
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

//Camila está revisando invitaciones para un evento. Si el nombre del invitado empieza con "A", "E", "I", "O" o "U", se le asignará una mesa especial. Si empieza con otra letra, se le asignará una mesa normal. Crea una función que reciba un nombre y determine su ubicación.
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

//Bego está verificando si un texto contiene lenguaje ofensivo. Si un mensaje contiene la palabra "tonto" o "feo", se marcará como inapropiado. Si no, será aceptado. Crea una función que reciba un mensaje y determine su categoría.
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

//Sabrina quiere imprimir etiquetas con iniciales. Crea una función que reciba un nombre y un apellido y devuelva sus iniciales en mayúsculas, separadas por un punto.
const initialLabels = (name, lastname) => {
  const nameInitial = name.charAt(0).toUpperCase();
  const lastnameInitial = lastname.charAt(0).toUpperCase();
  console.log(nameInitial + "." + lastnameInitial);
};
initialLabels("sabrina", "taraschi");
initialLabels("taylor", "swift");

//Macarena está diseñando una campaña publicitaria. Si el título del anuncio tiene más de 20 caracteres, lo reducirá. Si tiene 20 o menos, lo usará tal cual. Crea una función que reciba un título y determine si debe ajustarse.
const advertisingCampaignTitle = campaingTitle => {
  if (campaingTitle.length <= 20) {
    console.log(campaingTitle);
  } else {
    console.log(campaingTitle.substring(0, 20) + "...");
  }
};
advertisingCampaignTitle("Perfoming live! In Madrid. The short n` Sweet Tour");
advertisingCampaignTitle("short n` Sweet");

//Abby encontró una radio funcionando con interferencias. Si la señal incluye la palabra "ayuda" o "suministros", significa que alguien está pidiendo asistencia. Si no contiene estas palabras, lo ignorará. Crea una función que reciba un mensaje de radio y determine si Abby debe responder.
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

//Camila quiere asegurarse de que los nombres de usuario no contengan espacios. Si un nombre tiene espacios, será inválido. Si no tiene, será aceptado. Crea una función que reciba un nombre de usuario y determine su validez.
const usernameValidityChecker = username => {
  if (username.includes(" ")) {
    console.log("Nombre de usuario inválido");
  } else {
    console.log("Nombre de usuario válido");
  }
};
usernameValidityChecker("s   a   b   r   i   n   a");
usernameValidityChecker("sabrina");

//Bego está registrando nuevas cuentas de clientes. Si un correo electrónico contiene "@" y ".", será válido. Si no tiene alguno de estos elementos, será inválido. Crea una función que reciba un email y determine si es correcto.
const emailValidityChecker = electronicMail => {
  if (electronicMail.includes("@") && electronicMail.includes(".")) {
    console.log("Correo electrónico válido");
  } else {
    console.log("Correo electrónico inválido");
  }
};
emailValidityChecker("sabrina@gmailcom");
emailValidityChecker("sabrina@gmail.com");

//Macarena está validando números de identificación. Si un número tiene exactamente 8 caracteres y termina en una letra, será válido. Si no cumple estas condiciones, será inválido. Crea una función que reciba un número de identificación y determine si es correcto.
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

//Abby encontró una combinación de caja fuerte que parece ser un número de 4 dígitos. Quiere probar combinaciones aleatorias hasta encontrar una que termine en 7. Crea una función que genere un número de 4 dígitos que termine en 7.
const safeBoxCombinationCode = () => {
  const firtsDigits = Math.floor(Math.random() * 10);
  const secondDigits = Math.floor(Math.random() * 10);
  const thirdDigits = Math.floor(Math.random() * 10);
  console.log(`${firtsDigits}${secondDigits}${thirdDigits}7`);
};
safeBoxCombinationCode();

//Macarena está seleccionando un color al azar para una promoción. Los colores posibles son "Rojo", "Azul", "Verde" y "Amarillo". Crea una función que devuelva uno de estos colores de forma aleatoria.
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
