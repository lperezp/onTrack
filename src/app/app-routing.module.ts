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
  },
  { path: 'fallo', loadChildren: './fallo/fallo.module#FalloPageModule' },
  { path: 'survey-fallo', loadChildren: './survey-fallo/survey-fallo.module#SurveyFalloPageModule' },
  { path: 'survey-check', loadChildren: './survey-check/survey-check.module#SurveyCheckPageModule' },
  { path: 'ewo', loadChildren: './ewo/ewo.module#EwoPageModule' },
  { path: 'datos-cliente', loadChildren: './datos-cliente/datos-cliente.module#DatosClientePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
