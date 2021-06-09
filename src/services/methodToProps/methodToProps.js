const methodToPropsPlanet = (data) => {
    return {
        getData: data.getPlanet,
        getImg: data.getPlanetImg
    }
}

const methodToPropsPerson = (data) => {
    return {
        getData: data.getPerson,
        getImg: data.getPersonImg
    }
}

const methodToPropsStarship = (data) => {
    return {
        getData: data.getStarship,
        getImg: data.getStarshipImg
    }
}

const methodToPropsPersonList = (data) => {
    return {
        getData: data.getPersons
    }
}

const methodToPropsStarshipList = (data) => {
    return {
        getData: data.getStarships
    }
}


const methodToPropsPlanetsList = (data) => {
    return {
        getData: data.getPlanets
    }
}

export {
    methodToPropsPlanetsList,
    methodToPropsPlanet,
    methodToPropsPersonList,
    methodToPropsStarshipList,
    methodToPropsPerson,
    methodToPropsStarship
}