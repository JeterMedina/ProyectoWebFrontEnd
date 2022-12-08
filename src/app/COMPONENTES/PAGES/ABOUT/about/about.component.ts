import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ProductoService } from 'src/service/productos.service';
import {} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ProductList=null;

  productForm = new FormGroup({
    Marca: new FormControl(''),
    Modelo: new FormControl(''),
    Anio: new FormControl(''),
    NoCuerdas: new FormControl(''),
    Num_Serie: new FormControl('')
  });

  constructor(private ProductSvc:ProductoService) {

    }
   
  ngOnInit(): void {
    this.MostrarTodos();
  }

  MostrarTodos(){
    this.ProductSvc.getAll().subscribe((result:any)=>
      this.ProductList=result);
    console.log(this.ProductList);
  }

  Agregar(): void{
    this.ProductSvc.agregar(this.productForm.value).subscribe(() => {
      this.MostrarTodos();
     // this.productForm.reset('');
    })
  }

  Eliminar(Id_Productos:any):void{
    console.log(Id_Productos)
      this.ProductSvc.eliminar(Id_Productos).subscribe(() => {
        this.MostrarTodos();
      },(error) => {
        console.error(error);
    })
  }

}
