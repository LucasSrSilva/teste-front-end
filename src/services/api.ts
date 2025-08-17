export const api = {
    async get(path: string) {
        const response = await fetch(`/api${path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        if(!response.ok) {
                throw new Error(`Erro ao buscar: ${response.statusText}`)
            }
            const data = response.json()
        return data;
    }
}