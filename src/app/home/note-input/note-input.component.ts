import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss'],
})
export class NoteInputComponent implements OnInit {
  @ViewChild('noteRead', { static: false })
  noteRead: any;
  @ViewChild('noteWrite', { static: false })
  noteWrite: any;

  isReadOnly: boolean = true;
  card2: boolean = false;
  controlClickEvent: boolean = false;

  ngOnInit(): void {}

  toggle() {
    this.isReadOnly = true;
    this.card2 = false;
  }

  controlClickEventHandler() {
    console.log('toggleTOGGLE');
    this.controlClickEvent = false;
  }

  toggleReadOnly() {
    console.log('toggleReadOnly');
    this.controlClickEvent = true;
    this.isReadOnly = false;
    this.card2 = true;
  }
}
