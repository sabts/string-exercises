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
    correctPassword.length >= 8) {
    console.log("Contraseña correcta");
  } else {
    console.log(
      "Contraseña insegura. Debe tener más de 8 caracteres y comenzar con un número");
  }
};
sabrinaVerifyPassword('hallelujah')
sabrinaVerifyPassword('100hallelujah')

// Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.
const macarenaGrammarCorrector = text => {
    if(text.charAt(0)===text.charAt(0).toUpperCase() && text.endsWith(".")) {
        console.log('Frase correcta')
    } else {
        console.log('frase incorrecta')}
}
macarenaGrammarCorrector('Macarena es una buena persona que cuida de los animales')
macarenaGrammarCorrector('macarena es una buena persona que cuida de los animales')
macarenaGrammarCorrector('macarena es una buena persona que cuida de los animales.')
macarenaGrammarCorrector('Macarena es una buena persona que cuida de los animales.')

//Abby encontró un mensaje pintado en la pared con dos palabras. Si ambas palabras tienen la misma cantidad de letras, lo tomará como una pista. Si no, lo ignorará. Crea una función que reciba dos palabras y determine si el mensaje es importante.
const abbySecretMessege = (wallCode1, wallCode2) => {
    if(wallCode1.length === wallCode2.length) {console.log('Es importante')} else{
        console.log('No es importante')
    }
}
abbySecretMessege('zombies','muertos')
abbySecretMessege('xoxo','gossip Girl')

// Camila quiere asegurarse de que un número de teléfono tiene el formato correcto. Debe tener exactamente 9 caracteres. Crea una función que reciba un número como string y determine si es válido o no.
const camilaPhoneNumber = phoneNumber => {
    const number = '0123456789'
    if(number.includes(phoneNumber.charAt(0)) && phoneNumber.length === 9){console.log('Número válido')

    } else {
        console.log('Número inválido')
    }
}
camilaPhoneNumber("123456789")
camilaPhoneNumber("a23456789")
camilaPhoneNumber("12345678")

//Bego está eligiendo un dominio para su nueva web. Si la web termina en ".com", se usará para negocios. Si termina en ".org", será para una organización. Si no es ninguno de estos, el dominio no es válido. Crea una función que reciba un dominio y determine su clasificación.
const begoWebSite = websiteName => {
    if(websiteName.endsWith('.com')){console.log('Bego tiene un dominio de negocio')
    }  else if(websiteName.endsWith('.org')){console.log('Bego tiene un dominio de organización')} else {console.log('Dominio no válido')}
}
begoWebSite('begoweb.com')
begoWebSite('begoweb.net')
begoWebSite('begoweb.org')

//Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.
const sabrinaZwordList = wordWithZ => {
    if(wordWithZ.toLowerCase().includes('z')) {console.log('Palabra especial')} else {console.log('Palabra común')}
}
sabrinaZwordList('Zapatero')
sabrinaZwordList('zombie')
sabrinaZwordList('reciclar')