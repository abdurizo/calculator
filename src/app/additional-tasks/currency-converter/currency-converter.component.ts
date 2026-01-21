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
  eur: number = 0;
  converterToEur(){
   this.uzb = this.eur * 12000;
  }
  converterToUzb(){
   this.eur = this.uzb / 12000;
  }
}
