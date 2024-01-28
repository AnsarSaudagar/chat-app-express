import { Component, OnInit } from '@angular/core';
import { AllChatsComponent } from './all-chats/all-chats.component';
import { ChatComponent } from './chat/chat.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AllChatsComponent, ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {

    
    if(!localStorage.getItem('token')){
      this.router.navigate(['/auth']);
    }
    
    
  }

  
}
