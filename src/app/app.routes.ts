import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

export const masterRoutes:Routes=[
    {path:'Home',component:HomeComponent,runGuardsAndResolvers: 'always'},

]