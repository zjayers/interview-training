import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],
})
export class AppComponent {
  passwordLength = 1;
  generatedPassword = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangePasswordLength(event: Event) {
    this.passwordLength = parseInt((event.target as HTMLInputElement).value);
  }

  onGeneratePasswordClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvqxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.useNumbers) validChars += numbers;

    if (this.useLetters) validChars += letters;

    if (this.useSymbols) validChars += symbols;

    let generated = '';

    for (let index = 0; index < this.passwordLength; index++) {
      const pick = Math.floor(Math.random() * validChars.length);
      generated += validChars[pick];
    }

    this.generatedPassword = generated;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
}
