import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/service/productos.service';
import {} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ProductList: any[]=[];
  constructor(private ProductSvc:ProductoService) {
    this.ProductSvc.getAll().subscribe((result:any)=>{
      this.ProductList=result;
      console.log(result)
    })
   }

  ngOnInit(): void {
  }

}
