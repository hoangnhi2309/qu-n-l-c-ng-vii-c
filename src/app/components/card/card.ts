import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input() id: string = ''; // ✅ thêm id
  @Input() title: string = '';
  @Input() color: string = '#000';
  @Input() background?: string;

  @Output() cardClick = new EventEmitter<string>(); // ✅ phát id ra
  @Output() delete = new EventEmitter<void>();

  hover: boolean = false;

  onCardClick() {
    this.cardClick.emit(this.id);
  }
}
