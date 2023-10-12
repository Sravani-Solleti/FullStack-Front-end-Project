import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  pid:any;
  pname:any;
  pprice:any;
  pimg:any;
  pobj:any;
  constructor(private service:ProductService,private route:Router){}
  adding(){
    this.pobj={
      pid:this.pid,
      pname:this.pname,
      pprice:this.pprice,
      pimg:this.pimg
    }
    this.service.addproduct(this.pobj);
    this.route.navigateByUrl('/product')
  }

}
