import {HomeComponent} from "./pages/home/home.component";
import {MarketComponent} from "./pages/market/market.component";
import {PJMComponent} from "./pages/pjm/pjm.component";
import {MicrogridComponent} from "./pages/microgrid/microgrid.component";
import {ResourcedetailsComponent} from "./pages/resourcedetails/resourcedetails.component";
import {StudycasecontrolComponent} from "./pages/studycasecontrol/studycasecontrol.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'market',
        component: MarketComponent
    },
    {
        path: 'pjm',
        component: PJMComponent
    },
    {
        path: 'microgrid',
        component: MicrogridComponent
    },
    {
        path: 'studycasecontrol',
        component: StudycasecontrolComponent
    },
     {
        path: 'resourcedetails',
        component: ResourcedetailsComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
];