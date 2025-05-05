import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  private enrutador = inject(Router);

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
    this.guardarProducto();
    
  }

  guardarProducto(){
    this.productoServicio.editarproducto(this.id, this.producto).subscribe({
      next: (datosProducto) => this.irProductoLista(),
      error: (errores)=> console.log(errores)
    });
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos']);
  }
}
