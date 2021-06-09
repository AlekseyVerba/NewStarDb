export default class getData {
    _urlBase = "https://swapi.dev/api"
    _urlBaseImg = "https://starwars-visualguide.com/assets/img"

    getResource = async (url) => {
        const res = await fetch(`${this._urlBase}${url}`)
        if (!res.ok) {
            throw Error("Неудачный запрос")
        } 
        const body = await res.json()
        return body
    }


    getPlanet = async (id) => {
        const res = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(res)
    }
    getPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet)
    }
    getPlanetImg = (id) => {
        return `${this._urlBaseImg}/planets/${id}.jpg`
    }


    getPersons = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
    }
    getPerson = async (id) => {
        const res = await this.getResource(`/people/${id}`)
        return this._transformPerson(res)
    }
    getPersonImg = (id) => {
        return `${this._urlBaseImg}/characters/${id}.jpg`
    }


    getStarships = async () => {
        const res = await this.getResource(`/starships/`)
        // debugger
        return res.results.map(this._transformPerson)
    }
    getStarship = async (id) => {
        const res = await this.getResource(`/starships/${id}`)
        // debugger
        return this._transformPerson(res)
    }
    getStarshipImg = (id) => {
        // debugger
        return `${this._urlBaseImg}/starships/${id}.jpg`
    }





    extractId = (element) => {
        const idRegExp = /\/([0-9]*)\/$/
        return element.url.match(idRegExp)[1]
        
    }

    _transformPerson = (element) => {
        const getId = this.extractId(element)
        return {
            id: getId,
            name: element.name,
            height: element.height,
            mass: element.mass,
            hairColor: element.hair_color
        }
    }

    _transformPlanet = (element) => {
        const getId = this.extractId(element)
        return {
            id: getId,
            name: element.name,
            diameter: element.diameter,
            population: element.population,
            created: element.created
        }
    }

    _transformStarship = (element) => {
        const getId = this.extractId(element)
        return {
            id: getId,
            name: element.name,
        }
    }
}