let BASE_URL = 'https://news.apasni.me/api'

const getAllNews = async () => {
    let res = await fetch(`${BASE_URL}/news`)
    let data = await res.json()
    return data
}
const getAllCategory = async () => {
    let res = await fetch(`${BASE_URL}/category`)
    let data = await res.json()
    return data
}

const getNewsByID = async (id) => {
    let res = await fetch(`${BASE_URL}/news/${id}`)
    let data = await res.json()
    return data

}


const login = async (params) => {
    let res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(params),
    })
    let data = await res.json()
    return data

}