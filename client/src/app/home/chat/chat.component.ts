import { Component } from '@angular/core';
import { ChatSectionComponent } from './chat-section/chat-section.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatSectionComponent  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
