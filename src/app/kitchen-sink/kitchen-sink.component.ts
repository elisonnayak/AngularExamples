import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
interface Topic {
  topicId: number,
  title: string,
  description: string,
  examples: Array<{exampleName: string,exampleId: string}>,
  type: string
}
@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KitchenSinkComponent{

  constructor(public viewContainerRef: ViewContainerRef){}

  @ViewChild('dynamicComponentTemplate', {read: ViewContainerRef})
  private dynamicComponentTemplate!: ViewContainerRef;

  showFiller = false;
  component: any;

  intialListOfTopics: Array<Topic> = [
    {
      "topicId": 100,
      "title": "Dynamic import",
      "description": "Dynamic import helps to load some components dynamically. This is a way to lazy load a component.",
      "examples": [
        {
          'exampleName': 'Dynamic Import',
          'exampleId': ''

        }, {
          'exampleName': 'Example 2',
          'exampleId': ''

        }, {
          'exampleName': 'Example 3',
          'exampleId': ''

        }
      ],
      "type":"angular"
    },
    {
      "topicId": 101,
      "title": "Prefix Sum Pattern",
      "description": `This represent a pattern to derive an array of elements with 
      summation data at each index equals to sum of current value and previous value.`,
      "examples": [
        {
          'exampleName': 'Prefix Sum Pattern',
          'exampleId': 'vitejs-vite-vuzidy'

        }, {
          'exampleName': 'Example 2',
          'exampleId': ''

        }, {
          'exampleName': 'Example 3',
          'exampleId': ''

        }
      ],
      "type": "dsa"
    }
  ];

  listOfTopics: Array<Topic> = [...this.intialListOfTopics];

  async openTopic(selectedTopicId: number){
    let selectedTopic = this.intialListOfTopics.find((topic: Topic) => topic.topicId === selectedTopicId);
    const { DynamicImportComponent } = await import('../dynamic-import/dynamic-import.component');
    this.dynamicComponentTemplate.remove();
    let dynamicComponent = this.dynamicComponentTemplate.createComponent(DynamicImportComponent);
    dynamicComponent.instance.selectedTopic = selectedTopic;
  }

  selectedTech(event: any){
    this.listOfTopics = this.intialListOfTopics.filter(topic => topic.type === event.value.toLowerCase());
    if(this.listOfTopics.length == 0){
      this.listOfTopics = [...this.intialListOfTopics];
    }
  }
}
