import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
})
export class CurrencyConverterComponent {
  uzb: number = 0;
  usd: number = 0;
  converterToUsd(){
   this.uzb = this.usd * 12000;
  }
  converterToUzb(){
   this.usd = this.uzb / 12000;
  }
}
