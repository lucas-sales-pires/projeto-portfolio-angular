import { Component, signal } from '@angular/core';

import { interfaceConhecimentos } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayConhecimento = signal<interfaceConhecimentos[]>([
    {
      src: 'assets/icons/knowledge/php.svg',
      alt: 'Ícone de conhecimento de php',
    },
    {
      src: 'assets/icons/knowledge/wordpress.svg',
      alt: 'Ícone de conhecimento de wordpress',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de nodejs',
    },
    {
      src: 'assets/icons/knowledge/flutter.svg',
      alt: 'Ícone de conhecimento de flutter',
    },

  ]);
}
