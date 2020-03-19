import { Routes } from '@angular/router'
import { RaceListComponent } from './components/race-list/race-list.component'
import { RaceComponent } from './components/race/race.component'
import { RaceCreateComponent } from './components/race-create/race-create.component'
import { PoneyCreateComponent } from './components/poney-create/poney-create.component'

export const APP_ROUTES: Routes = [
    {
        path: 'race-list',
        component: RaceListComponent
    },
    {
        path: 'race/:id',
        component: RaceComponent
    },
    {
        path: 'race-create',
        component: RaceCreateComponent,
    },
    {
        path: 'poney-create',
        component: PoneyCreateComponent
    },
    {
        path: '**',
        redirectTo: 'race-list'
    }
]