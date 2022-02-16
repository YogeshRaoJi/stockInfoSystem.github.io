export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then(m => m.CategoryModule),
    data: { icon: 'category', text: 'Category' }
  },
  {
    path: 'Setting',
    loadChildren: () =>
      import('./category/category.module').then(m => m.CategoryModule),
    data: { icon: 'settings', text: 'Setting' }
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    data: { icon: 'person', text: 'Profile' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'bar_chart', text: 'Charts' }
  },
];
