import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server-components';
  serverElements = [{type: 'server', name: 'Test Server', content: 'This is test derver'}];

  onServerAdded(newServer: {serverName: string, serverContent: string}) {
      console.log('i am in OnServerAdded:' + newServer);
      this.serverElements.push({
        type: 'server',
        name: newServer.serverName,
        content: newServer.serverContent
      });
  }
  onBlueprintAdded(newServer: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: newServer.serverName,
      content: newServer.serverContent
    });
  }
}
