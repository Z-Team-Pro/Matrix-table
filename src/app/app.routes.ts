import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';

export const masterRoutes:Routes=[
    {path:'Home',component:HomeComponent,runGuardsAndResolvers: 'always'},
    {path:'loading',component:LoadingComponent}

]