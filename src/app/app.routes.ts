import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

export const routes: Routes = [
    {path:'productos', component: ProductoListaComponent},
    {path:'', redirectTo: 'productos', pathMatch:'full'},
    {path:'agregar-producto', component: AgregarProductoComponent}
];
