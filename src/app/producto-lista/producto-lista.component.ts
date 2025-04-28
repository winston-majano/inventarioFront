import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.component.html',
  
})
export class ProductoListaComponent {
  productos: Producto[];

  private productoService = inject(ProductoService);

  ngOnInit(){
    //cargar los productos en la llamada de este metodo
    this.obtenerProductos();
  }

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

}
