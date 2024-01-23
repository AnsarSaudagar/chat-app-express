import { Component } from '@angular/core';
import { AllChatsComponent } from './all-chats/all-chats.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AllChatsComponent, ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
