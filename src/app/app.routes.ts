import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

export const routes: Routes = [
    {path:'productos', component: ProductoListaComponent},
    {path:'', redirectTo: 'productos', pathMatch:'full'},
    {path:'agregar-producto', component: AgregarProductoComponent},
    {path:'editar-producto/:id', component: EditarProductoComponent}
];
