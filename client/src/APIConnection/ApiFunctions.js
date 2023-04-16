
    const baseurl = "http://localhost:3003/api/fortunes";

// read fortunes (GET)
export async function getFortunes() {
    const url = baseurl + "/all";
    // use fetch api, await is needed 
    // turn fetched results to json and feed to results var
    let results = await fetch(url).then(res => res.json())
    return results;
}

// get one random fortune
export async function getRandomFortune() {
    const url = baseurl + "/random";
    // use fetch api, await is needed 
    // turn fetched results to json and feed to results var
    let results = await fetch(url).then(res => res.json())
    return results;
}

// create fortune (POST)
export async function createFortune(fortuneText) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({"fortuneName": fortuneText}),
        headers: {
            'Content-Type': 'application/json'
          },
    }
    const url = baseurl + "/";
    await fetch(url, requestOptions).then(data => console.log(data));

}

//update fortune (PUT)
export async function updateFortune(fortuneId, fortuneText) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({"fortuneName": fortuneText}),
        headers: {
            'Content-Type': 'application/json'
          },
    }
    const url = baseurl + "/" +fortuneId;
    await fetch(url, requestOptions).then(data => console.log(data));
}

// delete fortune (DELETE)
export async function deleteFortune(fortuneId) {
    const requestOptions = {
        method: "DELETE",
    }
    const url = baseurl + "/" + fortuneId;
    await fetch(url, requestOptions).then(data => console.log(data));
}