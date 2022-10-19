import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'



// headers: {
//     'X-RapidAPI-Key': 'fa886cecfcmsh8bed26a3b845cb8p1a4d0ejsnef034b5bbb1e',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fa886cecfcmsh8bed26a3b845cb8p1a4d0ejsnef034b5bbb1e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}