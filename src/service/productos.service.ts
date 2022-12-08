import { Injectable } from "@angular/core";
import{HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class ProductoService{
    //* Se necesita el constructor para que funcione*/

    url = 'http://localhost/conexion/';
    constructor(private http:HttpClient){}
    getAll(){
        return this.http.get(`${this.url}getall.php`);
    }

    agregar(Producto:string){
        return this.http.post(`${this.url}post.php`,JSON.stringify(Producto));
    }

    eliminar(Id_Producto:any){
        return this.http.delete(`${this.url}delete.php/Num_Serie=${Id_Producto}`);
    }

}