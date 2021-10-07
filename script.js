fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(json => console.log(json))

async function nombre() {
    try { 
        let response = await fetch('https://swapi.dev/api/films/')
        let data = await response.json()
        let episodio = await data.results
        let pelis = []
        let fechas = []
        let objEpi = {
            title: pelis,
            fecha: fechas
        } 
        // console.log(objEpi)
        for (let i = 0; i < episodio.length; i++) {
            let valorEpi = i + 1
            // console.log(valorEpi)
            let urlEpi = await fetch(`https://swapi.dev/api/films/${valorEpi}`)
            let res = await urlEpi.json()
            // console.log(urlEpi)
            pelis.push(res.title)
            fechas.push(parseFloat(res.release_date.slice(0, 4)))
        } 
            return objEpi
        // return impreso
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

nombre().then(res => {
    var data = {
        labels: res.title,
        series: [res.fecha]
    };
    var options = {
        axisY: {
            onlyInteger: true
        }
    };
    new Chartist.Line('#lineas', data, options);

}) //res=argumento que paso para devolverme el return de la función

async function personaje() {
    try {
        let response = await fetch('https://swapi.dev/api/films/')
        let data = await response.json()
        let episodio = await data.results[0].characters
        // console.log(episodio)
        let pelis = []
        let personajes = []
        let objChar = {
            personaje: personajes,
            apariciones: pelis
        }
        for(let i = 0; i < episodio.length; i++) {
            valorPer = i + 1
            // console.log(valorPer)
            let urlChar = await fetch(`https://swapi.dev/api/people/${valorPer}`)
            let res = await urlChar.json()
            // console.log(res.films)
            // console.log(urlChar)
            if(!res.detail) {
                personajes.push(res.name)
                pelis.push(res.films.length)

            }
        }console.log(objChar)
        return objChar
        
    }catch (error) {
    console.log(`ERROR: ${error.stack}`);
    }
}

personaje().then(res => {
    var data = {
        labels: res.personaje,
        series: [res.apariciones]
    }
    var options = {
        axisY: {
            onlyInteger: true
        }
    };
    new Chartist.Bar('#barras', data, options)
})
