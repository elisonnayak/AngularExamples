import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'; 
import { NgxStackblitzModule } from 'ngx-stackblitz';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'app-dynamic-import',
  templateUrl: './dynamic-import.component.html',
  styleUrls: ['./dynamic-import.component.scss'],
  imports: [ CommonModule, MatTabsModule],
  standalone: true
})
export class DynamicImportComponent implements OnInit{
  selectedTopic!: any;
  constructor(private changeDetectorRef: ChangeDetectorRef){}

  async accessExample(projectName: string): Promise<void>{
    await sdk.embedProjectId(
        'embedStackBlitz',
        projectName,
      {
        forceEmbedLayout: true,
        openFile: 'src/counter.js',
        view: 'default',
        hideNavigation: true,
        hideDevTools: true,
        showSidebar: false,
        height: 800
      }
    );
    this.changeDetectorRef.detectChanges();
  }
  
  ngOnInit(): void {
    console.log("selectedTopic", this.selectedTopic);
  }

}
