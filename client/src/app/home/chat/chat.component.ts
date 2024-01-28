import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatSectionComponent } from './chat-section/chat-section.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatSectionComponent  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  ngOnInit() { 
    this.scrollToBottom();
}

ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}
}
