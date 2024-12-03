import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
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
  component: any;

  intialListOfTopics: Array<Topic> = [
    {
      "topicId": 101,
      "title": "Two pointers pattern",
      "shortDescription": "Two pointers pattern provides value at first and last index. The index positions will change based on condition.",
      "description": `Provided a sorted array in ascending order. Initialize two indices, one pointing the first element in the array and another to the last element. 
      Find sum of elements for both pointers. Move the left pointer to right if the sum is less than target sum. 
      Simillarly move the right pointer to left if the sum is greater than the target sum.`,
      "examples": [
        {
          'exampleName': 'Find the indices of two elements which sum equal to a target sum',
          'projectId': 'vitejs-vite-vuzidy',
          'fileName': 'src/twoPointersPattern.js'
        }, {
          'exampleName': 'Example 2',
          'projectId': '',
          'fileName': ''
        }, {
          'exampleName': 'Example 3',
          'projectId': '',
          'fileName': ''
        }
      ],
      "type":"dsa"
    },
    {
      "topicId": 100,
      "title": "Prefix and Suffix Sum Pattern",
      "shortDescription": "Prefix and suffix sum provides the arrays having sum at each index in forward anf backward direction",
      "description": `This represent a pattern to derive an array of elements with 
      summation data at each index equals to sum of current value and previous value.`,
      "examples": [
        {
          'exampleName': 'Prefix Sum Pattern',
          'projectId': 'vitejs-vite-vuzidy',
          'fileName': 'src/prefixSuffixSum.js'
        }, {
          'exampleName': 'Suffix Sum Pattern',
          'projectId': 'vitejs-vite-vuzidy',
          'fileName': 'src/prefixSuffixSum.js'
        }, {
          'exampleName': 'Equilibrium Index',
          'projectId': 'vitejs-vite-vuzidy',
          'fileName': 'src/equilibriumIndex.js'
        }, {
          'exampleName': 'Example 3',
          'projectId': '',
          'fileName': ''
        }
      ],
      "type": "dsa"
    }
  ].sort((a,b) => a.topicId - b.topicId);

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
