import { Component } from '@angular/core';
interface Karta {
  ikonka: string;
  otoceno: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Router';

  karticky: Karta[] = [
    {ikonka: 'EminemJeShit', otoceno: false},
    {ikonka: 'TrappyPotter', otoceno: false},
    {ikonka: 'FreeMarika', otoceno: false},
    {ikonka: 'VrtSeK**vo', otoceno: false},
    {ikonka: 'Cyril Baroko', otoceno: false},
    {ikonka: 'Rapublika', otoceno: false},
    {ikonka: 'LSD Badboy Berlin', otoceno: false},
    {ikonka: 'Kamehamea', otoceno: false},
  ];

    dupCards = [];

  savedCard: Karta | null = null;
   begin = false;
   input: number;
   matched = 0;

  otocit(clicknutaKarticka: Karta): void {
    if (clicknutaKarticka.otoceno === true) {
      return;
    }
    if (this.savedCard === null) {
      clicknutaKarticka.otoceno = true;
      this.savedCard = clicknutaKarticka;
    } else {
      if (this.savedCard !== clicknutaKarticka) {
        clicknutaKarticka.otoceno = true;
        if (clicknutaKarticka.ikonka !== this.savedCard.ikonka) {
          const savedCard = this.savedCard;
          setTimeout(() => {
            savedCard.otoceno = false;
            clicknutaKarticka.otoceno = false;
          }, 1000);
        }
        if (clicknutaKarticka.ikonka === this.savedCard.ikonka && this.savedCard.otoceno === true && clicknutaKarticka.otoceno === true) {
              this.matched++;
              if (this.matched % this.input === 0) {
                  // tslint:disable-next-line:prefer-for-of
                  for (let i = 0; i < this.karticky.length; i++) {
                      this.karticky[i].otoceno = false;
                  }
                  this.matched = 0;
                  this.begin = false;
              }
          }
        this.savedCard = null;
      }
    }
  }

duplikator(): Karta[] {
    this.karticky.length = this.input;
    for (let i = 0; i < this.input; i++) {
        this.dupCards[i] = this.karticky[i];
        this.karticky[this.karticky.length] = {...this.dupCards[i]};
      }
    return this.karticky;
  }

michacka(karticky) {
    // tslint:disable-next-line:one-variable-per-declaration
    let currentIndex = karticky.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = karticky[currentIndex];
        karticky[currentIndex] = karticky[randomIndex];
        karticky[randomIndex] = temporaryValue;
    }
    return karticky;
}

poslitotam(): void {
    this.begin = true;
    if (this.begin) {
        this.duplikator();
        this.michacka(this.karticky);
        }
    }
}
