import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SxResultComponent } from './sx-result/sx-result.component';
import { SxSearchComponent } from './sx-search/sx-search.component';

const routes: Routes = [
  { path: 'SearchMember', component: SxSearchComponent },
  { path: 'SearchResult', component: SxResultComponent },
  { path: '', component: SxSearchComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
