import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.component.html',
  
})
export class ProductoListaComponent {
  productos: Producto[];

  private productoService = inject(ProductoService);
  private enrutador = inject(Router);

  ngOnInit(){
    //cargar los productos en la llamada de este metodo
    this.obtenerProductos();
  }

  //metodo para listar los productos 
  private obtenerProductos(): void {
    this.productoService.obtenerProductoLista().subscribe(
      {
        next: (datos) =>{
          this.productos = datos;
        },
        error: (error) => {
          console.error("Error al obtener los datos: ", error);
        }
      }
    );
  }

  //metodo para editar produtos por id 
   editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id])
  }



}
