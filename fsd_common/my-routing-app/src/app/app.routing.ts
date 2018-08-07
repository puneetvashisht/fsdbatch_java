import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { ProfileComponent } from './components/profile.component';
import { AlwaysAuthGuard } from './services/alwaysauthguard.service';
import { ContactComponent } from './components/contact.component';
import { ContactResolve } from './services/contact.resolve';




const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AlwaysAuthGuard]},
    { path: 'contacts/:id', component: ContactComponent, resolve:{
        contact: ContactResolve
    }},
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);