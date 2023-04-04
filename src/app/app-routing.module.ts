import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampagnesComponent } from './page/campagnes/campagnes.component';
import { EditCampagnesComponent } from './page/edit-campagnes/edit-campagnes.component';

const routes: Routes = [
	  {
	    path: '',
	    component: CampagnesComponent
	  },
	  {
	    path: 'edit-campagnes/:id',
	    component: EditCampagnesComponent
	  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
