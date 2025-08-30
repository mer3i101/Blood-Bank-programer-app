import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'volanteer',
    loadChildren: () => import('./volanteer/volanteer.module').then( m => m.VolanteerPageModule)
  },
  {
    path: 'blood-rig',
    loadChildren: () => import('./blood-rig/blood-rig.module').then( m => m.BloodRigPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'index-home',
    loadChildren: () => import('./index-home/index-home.module').then( m => m.IndexHomePageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
    
  },
  {
    path: '',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'manegerpage',
    loadChildren: () => import('./manegerpage/manegerpage.module').then( m => m.ManegerpagePageModule)
  },
  {
    path: 'succ',
    loadChildren: () => import('./succ/succ.module').then( m => m.SuccPageModule)
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
  {
    path: 'edit-employee/:id',
    loadChildren: () => import('./edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./signup2/signup2.module').then( m => m.Signup2PageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'hosp',
    loadChildren: () => import('./hosp/hosp.module').then( m => m.HospPageModule)
  },
  {
    path: 'succ1',
    loadChildren: () => import('./succ1/succ1.module').then( m => m.Succ1PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'end',
    loadChildren: () => import('./end/end.module').then( m => m.EndPageModule)
  },
  
   
  
  
  
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ,TranslateModule.forRoot(),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
