import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

export interface Section {
  name: string;
  updated: Date;
  icon: string;
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  onSelect(name: string) {
    this.selected = name;
    if (name === 'Notes') this.storageService.setTitleName('Keep');
    else this.storageService.setTitleName(name);
  }

  selected: string = 'Notes';

  folders: Section[] = [
    {
      name: 'Notes',
      updated: new Date('1/1/16'),
      icon: 'lightbulb',
    },
    {
      name: 'Reminders',
      updated: new Date('1/17/16'),
      icon: 'notifications',
    },
    {
      name: 'Edit Labels',
      updated: new Date('1/28/16'),
      icon: 'edit',
    },
    {
      name: 'Archive',
      updated: new Date('1/28/16'),
      icon: 'archive',
    },
    {
      name: 'Trash',
      updated: new Date('1/28/16'),
      icon: 'delete',
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
      icon: 'label',
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      icon: 'label',
    },
  ];
}
