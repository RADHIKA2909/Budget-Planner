import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  monthSelected:boolean=false;
  constructor(public fb: FormBuilder,public router:Router) { 
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
    //'default': ensuring the month name appears in the appropriate language for the user's region,
    // { month: 'long' }): This tells the method to extract only the month part of the date, and to format it as the full name of the month (e.g., "January", "February", etc.). { month: 'short' }) will make "Jan", "Feb" etc.
  }
  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    });
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value
    this.monthSelected=true;
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth()) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomesForMonth(): any[] {
    switch (this.selectedMonth) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      default:
        return [];
    }
  }

  // We'll push user's entered data in the income data of that specific month
  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncomes.push(newIncome);
          break;
        case 'February':
          this.februaryIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' }); 
      // patchValue() updates these form fields with '', just reset() will fill it will null and we won't get any placeholders after saving. If we don't even write this.incomeForm.reset() then also its fine since patchValue() is already resetting as required but its a good habit to reset() after submitting form so that's why added.
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
