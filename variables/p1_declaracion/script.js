// Dato no declarado
10
// Este número no está siendo almacenado en ninguna variable, por lo tanto, se "pierde" después de ser utilizado.
// Aunque se imprima con console.log(), no hay forma de reutilizarlo directamente sin volver a escribir el número.
console.log(20000000000100003)
console.log(2000000000010003)

// Esto no es eficiente, especialmente si el número es muy grande o si se necesita reutilizarlo varias veces,
// ya que podría cometerse un error al escribirlo de nuevo.

// Por esta razón, lo recomendable es almacenar el valor en una variable con un nombre descriptivo.
// Las variables ocupan espacio en memoria durante la ejecución del programa (o durante su alcance).
var numero = 1124

// Para declarar una variable hay multiples palabras claves que delimitan las caracteristicas y usos que se le puede
// dar a la variable, en este caso se implemento la palabra clave var
// otras son: let, const
let numero2 = 1123
const numero3 = 1124

// Como podras ver estas tienen diferentes caracteristicas las cuales destacan primero el nombre y despues los valores que estas almacenan
// 
