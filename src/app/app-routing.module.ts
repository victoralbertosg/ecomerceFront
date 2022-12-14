import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:"",
    children:[    
      {
         path:'shop',
         loadChildren:()=>import('./pages/shop/shop.module').then(m=>m.ShopModule) 
      } , 
      {
        path: 'demo',
        loadChildren: () => import('./pages/demo/demo.module').then( m => m.DemoModule)
      },
      {
        path:'static',
        loadChildren:()=>import('./pages/static/static.module').then(m=>m.StaticModule)
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'static/welcome'
      },        
    ]
  },
  {
    path:'**', 
    pathMatch:'full',
    redirectTo:'static/404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
