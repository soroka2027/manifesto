import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="typing">
      <span>{{ displayedText }}</span>
      <span class="cursor" [class.blink]="!isTyping">|</span>
    </h1>
  `,
  styles: [`
    .typing {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 600;
      color: #101010;
      margin: 1.2rem 0 1.8rem;
      min-height: 2.2rem;
      letter-spacing: 0.05em;
      text-align: center;
    }

    .cursor {
      display: inline-block;
      margin-left: 2px;
      color: #3CBCE7;
      font-weight: 300;
    }

    .cursor.blink {
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @media (max-width: 960px) {
      .typing {
        font-size: 24px;
        margin: 1rem 0 1.4rem;
      }
    }

    @media (max-width: 480px) {
      .typing {
        font-size: 22px;
      }
    }
  `]
})
export class HelloWorldComponent implements OnInit, OnChanges, OnDestroy {
  @Input() lang: 'uk' | 'en' = 'uk';

  displayedText = '';
  isTyping = true;
  private index = 0;
  private intervalId: any;

  private texts = {
    uk: 'Привіт Світ!',
    en: 'Hello World!'
  };

  ngOnInit() {
    this.restartTyping();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lang'] && !changes['lang'].firstChange) {
      this.restartTyping();
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  private restartTyping() {
    this.clearTimer();
    this.displayedText = '';
    this.index = 0;
    this.isTyping = true;
    this.startTyping();
  }

  private startTyping() {
    const fullText = this.texts[this.lang];
    this.intervalId = setInterval(() => {
      if (this.index < fullText.length) {
        this.displayedText += fullText.charAt(this.index);
        this.index++;
      } else {
        this.isTyping = false;
        this.clearTimer();
      }
    }, 110);
  }

  private clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
