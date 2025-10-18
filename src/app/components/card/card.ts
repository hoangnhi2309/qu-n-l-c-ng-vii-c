import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() color: string = ''; // ✅ màu nền tuỳ chọn
}
