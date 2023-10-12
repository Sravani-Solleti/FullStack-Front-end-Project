import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  p:any;

  products:product[]=[
    {
      pid:"01",
    pname:"glamour",
    pprice:"78000",
    pimg:"https://wallpapercave.com/wp/wp6130214.jpg"
    },
    {
      pid:"02",
    pname:"glamourX",
    pprice:"98000",
    pimg:"https://images.carandbike.com/bike-images/colors/hero/glamour-fi/hero-glamour-fi-black-with-sports-red.png?v=1587732790"
    },
    {
      pid:"03",
    pname:"glamourZ",
    pprice:"108000",
    pimg:"https://c.ndtvimg.com/2019-05/hsir2dos_hero-xtreme-200-launch_625x300_01_May_19.jpg"
    },
    {
      pid:"04",
    pname:"glamourS",
    pprice:"58000",
    pimg:"https://bikeadvice.in/wp-content/gallery/glamour/dsc01498.jpg"
    },
    {
      pid:"05",
    pname:"glamourL",
    pprice:"100000",
    pimg:"https://wallpapercave.com/wp/wp6130218.jpg"
    }
  ]
  getAll(){
    return of(this.products);
  }
  addproduct(pObj:any){
this.products.push(pObj);
  }
  deleteproduct(prod:any){
    const ind=this.products.findIndex((obj)=>obj.pid==prod.pid)
    this.products.splice(ind,1);
  }
}
