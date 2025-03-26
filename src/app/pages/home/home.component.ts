import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CardComponent } from "../../components/card/card.component";
import { UserService } from '../../services/user.service';
import { IProduct } from '../../interfaces/iproduct';
import { PopularProductPipe } from '../../pipes/popular-product.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, CardComponent, PopularProductPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  private readonly _userService: UserService = inject(UserService)

  images: any[] | undefined;
  smallProducts: IProduct[] = [];
  popularProducts: IProduct[] = [];

  ngOnInit() {
    this.getProducts();

    this.images = [
      {
        itemImageSrc: 'products/prd_1.webp',
        alt: 'Description for Product 1',
        title: 'Product 1'
      },
      {
        itemImageSrc: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
        alt: 'Description for Product 2',
        title: 'Product 2'
      },
      {
        itemImageSrc: 'https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg',
        alt: 'Description for Product 3',
        title: 'Product 3'
      },
      {
        itemImageSrc: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1',
        alt: 'Description for Product 4',
        title: 'Product 4'
      },
    ];
  }

  getProducts(): void {
    this._userService.getProducts().subscribe(data => {
      this.smallProducts = data.products.slice(0, 4);
      this.popularProducts = data.products;
    });
  }
}
