import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'side-nav',component:SideNavComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'income',component:IncomeComponent},
  {path:'expense',component:ExpenseComponent},
  {path:'todo',component:TodoComponent},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }

// BudgetPlannerModule and Its Routing (budget-planner.module.ts, budget-planner-routing.module.ts)

// budget-planner-routing.module.ts:

// Defines routes for components within the BudgetPlannerModule.
// Routes include:
// /login, /side-nav, /dashboard, /income, /expense, /todo, /history, /profile: Each path loads the corresponding component.
// When the user navigates to any of these routes, Angular will replace the <router-outlet> in app.component.html with the requested component.
