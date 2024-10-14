import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo: 'budget-planner/dashboard', pathMatch: 'full'}, // When user navigates to http://localhost:4200, the application will automatically redirect to the Dashboard (/budget-planner/dashboard)
    {path:'budget-planner',loadChildren:()=> import('./budget-planner/budget-planner.module').then(m=> m.BudgetPlannerModule)}
];

// app.routes.ts:
// Defines the application's route configuration.
// The routes array has a lazy-loaded route:
// {path: 'budget-planner', loadChildren: ...}: When the user navigates to /budget-planner, it will dynamically load BudgetPlannerModule using lazy-loading.
// Lazy-loading helps in reducing the initial load time by splitting the application into smaller chunks, loading only what is needed.


