const API_KEY = "nmL6ypzTd92Nsc3MbQuZ4Bm7YdidEKob"
const API_URL = "https://api.giphy.com/v1/gifs/"
const ejemplo = "api.giphy.com/v1/gifs/search?api_key=nmL6ypzTd92Nsc3MbQuZ4Bm7YdidEKob&q=monkey&limit=10"

//Creamos la función getGifs que recibe como argumento la categoría. Y como utilizamos el await, ha de ser async.

export const getGifs = async (category) => {

    // Creamos la constante url que va a ser `la url que se va a llamar` en la que vamos a colocar la categoría que vamos a adicionar.
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kODm2kPybJNz81cwtA5bgq6OKOFmTHLE&q=${category}&limit=10`;

    // Para realizar la petición HTTP 
    const resp = await fetch(url);

    // Para desestrucutrar la data (que es un array) de la respuesta de la petición HTTP.
    const { data } = await resp.json();

    // Para extraer cierta información de lo que nos devuelve el API, porque sólo nos interesan las propiedades: id, title y url. Creamos la constante gifs que va a retornar un nuevo objeto con estas propiedaes que se han extraído.
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs;

}