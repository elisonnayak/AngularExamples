import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import allExampleData from '../../assets/data/examples.json'
interface Topic {
  topicId: number,
  title: string,
  description: string,
  shortDescription: string,
  examples: Array<{exampleName: string, projectId: string, fileName: string}>,
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
  hideSpaceholder = false;
  component: any;
  intialListOfTopics: Array<Topic> = allExampleData?.data?.sort((a:any,b:any) => a.topicId - b.topicId);
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
