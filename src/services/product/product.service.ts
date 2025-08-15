import { api } from "../api"
import type { Product } from "./product.type";
type ProductsResponse = {
    success: boolean;
    products: Product[];
}

export const getProducts = async () => {
    const result: ProductsResponse = await api.get("/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
    if(!result.success){
        throw new Error("Erro ao buscar produtos")
    }
    return result.products;
}