import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "ots-pendientes",
    loadChildren:
      "./ots-pendientes/ots-pendientes.module#OtsPendientesPageModule"
  },
  {
    path:
      "detalle/:jobs_id/:destination_name/:destination_address/:destination_entity_info/:service_name/:product_name",
    loadChildren:
      "./detalle-cliente/detalle-cliente.module#DetalleClientePageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
