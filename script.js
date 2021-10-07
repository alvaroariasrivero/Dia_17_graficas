// fetch('https://swapi.dev/api/films/')
//     .then(res => res.json())
//     .then(json => console.log(json))

async function nombre() {
    try { 
        let response = await fetch('https://swapi.dev/api/films/')
        let data = await response.json()
        let episodio = await data.results
        return episodio

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

nombre().then(res => console.log(res)) //res=argumento que paso para devolverme el return de la función