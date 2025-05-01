import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id: number;

  private productoServicio = inject(ProductoService);
  private ruta = inject(ActivatedRoute);

//recuperamos el id cada vez que se ejecute este componente 
  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProdutoPorId(this.id).subscribe({
      next: (datosProducto)=> this.producto = datosProducto,
      error: (errores: any)=> console.log("Error: ", errores)
    })
  }

  //editar un producto 
  onSubmit(){
    
  }
}
