const userEndpoint = 'http://localhost:3000/users'

async function queEsFetch(EndpointTest) {

  //dado a que fetch trae una respuesta que solo se consume una vez por sus metodos hay que llamar dos para este ejemplo
  //pero se puede usar uno solo transformando el consumido y almacenado en una variable en otro tipo con JSON.parse(); u otras formas.
  const fetchTest = await fetch(EndpointTest);
  const response = await fetch(EndpointTest);

  const json = await fetchTest.json();

  console.log(`este es el body de una respuesta ya consumida : ${fetchTest.body} esto es el bodyUsed: ${fetchTest.bodyUsed} ` )
  console.log(`este es el body de una respuesta sin consumir : ${response.body} esto es el bodyUsed: ${response.bodyUsed} ` )

  const texto = await response.text();

  console.log("esto es un fetch o almenos es lo que devuelve: "+ fetchTest + " y este es el tipo de dato que trae el fetch : "+ typeof(fetchTest) +
   " esto devuelve hacer un .Json de lo que devuelve el fetch: " + json + " y esto es lo que es esa respuesta: "+ typeof(json) +
  " y esto pasa si le saco .text()"+ texto +" Efectivamente se obtiene en texto el objeto y el tipo es: "+typeof(texto))
}

queEsFetch(userEndpoint)