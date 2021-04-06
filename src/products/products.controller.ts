import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { ProductsService } from './products.service';


interface ProductDto {
    id: string,
    name: string
}

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}
    
    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getDetail(@Param() param) {
        console.log(param);
        return this.productService.getProducts().filter(p => p.id == param.id);
    }

    @Post()
    createProduct(@Body() product: ProductDto) {
        this.productService.createProduct(product)
    }

    @Put()
    updateProduct(@Body() product: ProductDto) {
        this.productService.updateProduct(product)
    }

    @Delete()
    deleteProduct(@Body() product: ProductDto) {
        this.productService.deleteProduct(product.id)
    }
    
}