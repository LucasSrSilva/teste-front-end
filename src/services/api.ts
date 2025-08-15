const BASE_URL = "https://app.econverse.com.br" 
/*Por ser apenas um teste técnico não adicionei como 
variável de ambiente, para facilitar iniciar o projeto*/
export const api = {
    async get(path: string) {
        const response = await fetch(`${BASE_URL}${path}`)
        if(!response.ok) {
            throw new Error(`Erro ao buscar: ${response.statusText}`)
        }
        return response.json();
    }
}