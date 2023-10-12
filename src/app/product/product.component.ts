import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:any;
  constructor(private service:ProductService){}
  
  ngOnInit()
  {
    this.service.getAll().subscribe((res)=>{
      console.table(res);
      this.products=res;
    })
  }
  deleteItem(pObj:any){
    this.service.deleteproduct(pObj);
  }

}
