import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  imports: [FormsModule],
  templateUrl: './agregar-producto.component.html',
})
export class AgregarProductoComponent {
  //creamos la variable de tipo producto para enviarla al metodo guardar producto
  producto: Producto = new Producto();

  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  //metodo para cuando envie el submit del formulario
  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next: (datosProducto) => {
        this.irListaProductos();
      },
      error: (error: any) => {
        console.log('Error: ', error);
      },
    });
  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }
}
