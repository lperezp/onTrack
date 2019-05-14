import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {path: "home",loadChildren: "./home/home.module#HomePageModule"},
  {path: "ots-pendientes", loadChildren:"./ots-pendientes/ots-pendientes.module#OtsPendientesPageModule"},
  { path:"detalle/:services_id",loadChildren:"./detalle-cliente/detalle-cliente.module#DetalleClientePageModule"},
  { path: 'firma', loadChildren: './firma/firma.module#FirmaPageModule' },
  { path: 'surveys', loadChildren: './surveys/surveys.module#SurveysPageModule' },
  { path: 'surveys-detalle/:label', loadChildren: './surveys-detalle/surveys-detalle.module#SurveysDetallePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
