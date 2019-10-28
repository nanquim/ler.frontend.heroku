/* TODO teste blog */

const API_KEY = 'apiKey=be7e4435c377405eb9afc514c077445f'
//const QUERY_ALL_BR = 'https://newsapi.org/v2/top-headlines?country=br&'
//http://ec2-54-226-67-99.compute-1.amazonaws.com:8080/blog/
const QUERY_ALL_BR = 'https://newsapi.org/v2/top-headlines?language=pt&'

export const GetArtigos = async () => {
    
    const request = QUERY_ALL_BR + API_KEY

    const artigos = await fetch(`${request}`).then(res => res.json())
        
    console.log(artigos.articles)
    return artigos.articles
}
