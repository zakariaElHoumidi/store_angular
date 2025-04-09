import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/iproduct';
import { CardComponent } from "../../components/card/card.component";
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchProductPipe } from '../../pipes/search-product.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, InputIconModule, IconFieldModule, InputTextModule, FormsModule, SearchProductPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  private readonly _productService: ProductService = inject(ProductService);

  products: IProduct[] = [];
  searchKey: string = '';

  getAllProducts(): void {
    this._productService.getProducts().subscribe(next => this.products = next);
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
