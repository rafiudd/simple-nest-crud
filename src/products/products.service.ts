import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    listProducts = [
        {
            "id": 1,
            "name": "Test"
        },
        {
            "id": 2,
            "name": "Hehe"
        }
    ];
    
    getProducts() {
        return this.listProducts;
    }

    createProduct(products) {
        this.listProducts = [...this.listProducts, {...products}];
    }

    updateProduct(product) {
        this.listProducts = this.listProducts.map((item) => {
            if(item.id == product.id) {
                return {...product};
            }
            return item;
        })
    }

    deleteProduct(id) {
        this.listProducts = this.listProducts.filter(item => item.id != id);
    }
}
