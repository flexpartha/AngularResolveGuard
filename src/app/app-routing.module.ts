import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FooGuardService } from './foo-guard.service';
import { FooResolveService } from './foo-resolve.service';
import { FormArayComponent } from './form-aray/form-aray.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { MulticheckboxValidationComponent } from './multicheckbox-validation/multicheckbox-validation.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path:'details/:imbdid',component:DetailsComponent,canActivate:[FooGuardService],
    resolve:{
      movie:FooResolveService
    }
  },
  {
    path:'form-array',component:FormArayComponent
  },
  {
    path:'dynamic-validation',component:DynamicValidationComponent
  },
  {
    path:'multicheck-validation',component:MulticheckboxValidationComponent
  },
  {
    path: 'custom-validation', component:CustomValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
