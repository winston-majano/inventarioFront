import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlBase = 'http://localhost:8081/inventario/productos';
  private clienteHttp = inject(HttpClient);

  //listar los productos
  obtenerProductoLista(): Observable<Producto[]> {
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }

  //agregar un nuevo producto
  agregarProducto(producto: Producto): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, producto);
  }

  //obtener producto por id
  obtenerProdutoPorId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  //metodo de editar producto por id 
  editarproducto(id: number, producto: Producto){
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto);
  }
}
