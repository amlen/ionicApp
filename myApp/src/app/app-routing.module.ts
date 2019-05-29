import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'event-detail/:id', loadChildren: './event-detail/event-detail.module#EventDetailPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'detail-category/:id', loadChildren: './detail-category/detail-category.module#DetailCategoryPageModule' },
  { path: 'add-category', loadChildren: './category/add-category/add-category.module#AddCategoryPageModule' },
  { path: 'update-category/:id', loadChildren: './category/update-category/update-category.module#UpdateCategoryPageModule' },
  // { path: 'delete-category', loadChildren: './category/delete-category/delete-category.module#DeleteCategoryPageModule' },
  { path: 'add-event', loadChildren: './event/add-event/add-event.module#AddEventPageModule' },
  { path: 'update-event/:id', loadChildren: './event/update-event/update-event.module#UpdateEventPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
