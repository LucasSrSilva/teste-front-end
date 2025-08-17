const BASE_URL = "https://app.econverse.com.br" 
/*Por ser apenas um teste técnico não adicionei como 
variável de ambiente, para facilitar o inicio do projeto*/

export const api = {
    async get(path: string) {
        try{
            const response = await fetch(`${BASE_URL}${path}`, {
            method: 'GET',
            })
            if(!response.ok) {
                    throw new Error(`Erro ao buscar: ${response.statusText}`)
                }
                const data =await response.json()
                return data;
                
            }catch{
                //como a api está bloqueada pelo cors, a forma mais simples de
                //testar é colocando uma copia do json na pasta public
                const localResponse = await fetch(`/products.json`, {
                method: 'GET',
                })
                if(!localResponse.ok) {
                        throw new Error(`Erro ao buscar: ${localResponse.statusText}`)
                    }
                    const data = await localResponse.json()
                    return data;
        }
    }
}