const nomes = ["Amanda", "Sayuri", "Ashley", "luan", "Pedro", "Joao"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
