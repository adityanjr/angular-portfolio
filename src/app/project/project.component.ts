import { Component } from '@angular/core';
import { Project } from '../project.service';
import { projects } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projects: Project[] = projects;
}
