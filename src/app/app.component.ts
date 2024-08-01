import { NgFor, NgIf } from '@angular/common';
import { asNativeElements, Component, Host, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { style } from '@angular/animations';
import { Element } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';

  constructor() {
  }

  time: number = 60;
  word ="GoodLuck!";
  point: number = 0;
  check: string  ="";
  p = 0;


  alphabet_row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  alphabet_row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  alphabet_row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  randomWord = ["apple", "banana", "cat", "dog", "elephant", "flower", "guitar", "house", "ice", "jacket",
    "kite", "lion", "mountain", "notebook", "orange", "pizza", "queen", "rainbow", "sun", "tree",
    "umbrella", "violin", "water", "xylophone", "yacht", "zebra", "angry", "beautiful", "calm", "dangerous",
    "easy", "fast", "great", "happy", "interesting", "joyful", "kind", "loud", "mysterious", "nervous",
    "old", "peaceful", "quiet", "rude", "smart", "tiny", "ugly", "vast", "wise", "young",
    "admire", "believe", "create", "dance", "eat", "fly", "grow", "help", "imagine", "jump",
    "know", "learn", "move", "notice", "open", "play", "read", "sing", "talk", "understand",
    "visit", "walk", "write", "agree", "bake", "call", "dream", "explore", "fix", "guess",
    "hurry", "invite", "laugh", "master", "need", "organize", "plan", "relax", "save", "teach",
    "use", "watch", "x-ray", "yawn", "zoom", "quickly", "softly", "honestly", "gently", "proudly"];

    startGame() {
      // let result = this.time == 0 ? "Lose Game" : "Win Game"
  
      setInterval(()=> {
        if (this.time !=0) {
          this.time--;
          // this.point = this.time;
        }
      },1000)
    }

    // changeWord() {
    //   setInterval(()=> {
    //     if (this.time != 0) {
    //       let randomIndex = Math.floor(Math.random() * this.randomWord.length);
    //       this.word = this.randomWord[randomIndex];
    //       console.log(`Time from interval 1: ${this.time}`);
    //     } else {
    //       alert("Time Out!")
    //     }
    //   },3000)
    // }  

    changeWord() {
      let randomIndex = Math.floor(Math.random() * this.randomWord.length);
      this.word = this.randomWord[randomIndex];
    //  return this.randomWord[randomIndex];
    }

    // playGame() {
    //   this.startGame();
    //   this.changeWord();
    // }

    clearInput() {
      let a =""
      this.check = a.trim();
    }
      
    @HostListener('document: keydown',['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      let key = event.key;
    // if (key == event.key) {
    //    đổi màu phím khi đánh chữ

    //    console.log("Phim:"+ key);
    // } 

    if (key ==" "){
      if (this.check.trim() == this.word && this.time != 0) {
        this.point++;
        this.point = this.point;
      } else if (this.point != 0 && this.time != 0) {
          this.point--;
          this.point = this.point;
      }
        this.changeWord();
        this.clearInput();
    }
    
  }
  

}

