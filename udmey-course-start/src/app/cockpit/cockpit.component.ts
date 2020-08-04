import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName: HTMLInputElement) {
    console.log('i am in Add Server');
    this.serverCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent});
    // this.serverCreated.emit(alert('hi this time'));
  }

  onAddBlueprint() {
    console.log('i am in BluePrint');
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
