import { Component, OnInit, OnDestroy } from '@angular/core';
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
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 1.5rem 0 2rem;
      min-height: 2.4rem;
      letter-spacing: 0.02em;
    }

    .cursor {
      display: inline-block;
      margin-left: 2px;
      color: #00b7c2;
      font-weight: 300;
    }

    .cursor.blink {
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @media (max-width: 768px) {
      .typing {
        font-size: 1.5rem;
        margin: 1.2rem 0 1.5rem;
      }
    }
  `]
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  fullText = 'Привіт Світ!';
  displayedText = '';
  isTyping = true;
  private index = 0;
  private intervalId: any;

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startTyping() {
    this.intervalId = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.index);
        this.index++;
      } else {
        this.isTyping = false;
        clearInterval(this.intervalId);
      }
    }, 120); // typing speed
  }
}
