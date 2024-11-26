import { Component } from '@angular/core';
@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent {
  showFiller = false;
  component: any;

  assignComponent(componentName: string){
    switch(componentName){
        case 'DynamicImportComponent':
          import('../dynamic-import/dynamic-import.component').then(component =>{
            this.component = component.DynamicImportComponent;
          })
        break;
        default:
          break;
    }
   
  }
}
