import { Routes } from '@angular/router';
import { UserrComponent } from './userr/userr.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
        {path:'create', component:UserrComponent},
        {path:'Edit', component:EditComponent},
        {path:'List', component:ListComponent}

];
