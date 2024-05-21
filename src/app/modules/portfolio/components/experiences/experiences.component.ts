import { Component, signal } from '@angular/core';

// Interface
import { interfaceExperiencias } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<interfaceExperiencias[]>([
    {
      summary: {
        strong: 'Estágiario desenvolvedor',
        p: 'UNISUAM | mar 2024 - Presente',
      },
      text: 'Desde março de 2024, estou aprimorando minhas habilidades práticas através de projetos pessoais e empresariais na Unisuam. Durante este período, tenho explorado diversas tecnologias e ferramentas para desenvolver soluções robustas e inovadoras. Utilizo WordPress para a criação e gestão de sites dinâmicos, enquanto o PHP me permite implementar funcionalidades personalizadas e eficientes no backend. No campo do desenvolvimento mobile, trabalho com Flutter e Dart para construir aplicativos com interfaces atraentes e responsivas. Além disso, uso TypeScript para desenvolver aplicações web escaláveis e bem estruturadas, e SQL para gerenciar e manipular bancos de dados de forma eficaz. Também incorporo o Figma no meu fluxo de trabalho para criar protótipos e designs de UI/UX que aprimoram a experiência do usuário. Essa experiência abrangente tem sido fundamental para meu crescimento como desenvolvedor, permitindo-me contribuir significativamente para os projetos e alcançar resultados expressivos. Utilizamos a métodologia Scrum no nosso dia a dia.</p>'
      
    },

  ]);
}
