import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }

// BudgetPlannerModule and Its Routing (budget-planner.module.ts, budget-planner-routing.module.ts)

// budget-planner.module.ts:

// Defines the BudgetPlannerModule, which will be loaded lazily when the user navigates to /budget-planner.
// Imports CommonModule and BudgetPlannerRoutingModule to set up routing within this module.
