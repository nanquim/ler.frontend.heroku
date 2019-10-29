const ENV = process.env.NODE_ENV
const PATH = '/blog'
const API = 'http://ec2-54-226-67-99.compute-1.amazonaws.com:8080/ler.com'

export const GetArtigos = async () => {

    let request = setRequest()
    
    const artigos = await fetch(`${request}`)
                         /*  .then(res => console.log(res)) */
                          .then(res => res.json())
                          .catch(e => console.log(e))
        
    /* console.log('artigos')
    console.log(artigos) */

    return artigos
}

export const GetArtigosId = async (id) => {
    
    let request = setRequest()

    request += '?id=' + id

    const artigo = await fetch(`${request}`).then(res => res.json())
     
    return artigo
}

const setRequest = () => {
    let request = ''
    
    switch(ENV) {
        case 'development':
            request = PATH;
            break;
        case 'production':
            request = API + PATH
            break;
        default:
            console.log('ambiente nao encontrado')
    }
    
    return request;
}
