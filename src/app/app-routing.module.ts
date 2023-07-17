import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { FormularComponent } from './pages/formular/formular.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'curriculum',
    component: CurriculumComponent
  },
  {
    path:'formular',
    component: FormularComponent
  },
  {
    path:'404',
    component: NotFoundComponent
  },
  {
    path:'**',
    pathMatch: "full",
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
