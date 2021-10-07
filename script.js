// fetch('https://swapi.dev/api/films/')
//     .then(res => res.json())
//     .then(json => console.log(json))

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
        console.log(objEpi)
        for (let i = 0; i < episodio.length; i++) {
            let valorEpi = i + 1
            // console.log(valorEpi)
            let urlEpi = await fetch(`https://swapi.dev/api/films/${valorEpi}`)
            let response = await urlEpi.json()
            // console.log(urlEpi)
            pelis.push(response.title)
            fechas.push(parseFloat(response.release_date.slice(0, 4)))
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
    new Chartist.Line('.ct-chart', data, options);

}) //res=argumento que paso para devolverme el return de la función

