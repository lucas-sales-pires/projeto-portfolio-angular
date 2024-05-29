import { Component, inject, signal } from '@angular/core';

import { interfaceProjetos } from '../../interface/IProjects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjetos = signal<interfaceProjetos[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Calculadora de IMC',
      title: 'Calculadora de IMC',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto foi inspirado em uma ideia que encontrei na internet. Estava buscando por um projeto para praticar minhas habilidades e me deparei com este, que decidi desenvolver no final da tarde para revisitar alguns conceitos básicos de JavaScript, HTML e CSS.</p>',
      links: [
        {
          name: 'Conheça a calculadora IMC',
          href: 'https://lucas-sales-pires.github.io/calculadora-imc/',
        },
      ],
    },
    {
      src: 'assets/img/projects/ppt.png',
      alt: 'Projeto Jokenpô',
      title: 'Jokenpô',
      with: '100px',
      height: '100px',
      description:
        '<p>Este é um jogo simples feito com HTML, CSS e JS, feito principalmente para praticar o JavaScript. Procurei criar um jogo que randomiza a ação da máquina e identifica quando o jogador ganhou e quando a máquina ganhou.</p>',
      links: [
        {
          name: 'Conheça o projeto Jokenpô',
          href: 'https://lucas-sales-pires.github.io/projeto-jokenpo/',
        },
      ],
    },
    {
      src: 'assets/img/projects/megaDaVirada.png',
      alt: 'Projeto Mega da Virada',
      title: 'Mega da Virada',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto começou como uma solução para um problema pessoal. Todos os anos, organizamos um bolão em família. Com a criação deste site estático, consegui simplificar o processo de verificação de todos os bilhetes de uma vez.</p>',
      links: [
        {
          name: 'Conheça o projeto Mega da Virada',
          href: 'https://lucas-sales-pires.github.io/',
        },
      ],
    },
    {
      src: 'assets/img/projects/telecall.png',
      alt: 'Projeto Telecall',
      title: 'Telecall',
      with: '100px',
      height: '100px',
      description:
        '<p>Neste sistema, existem recursos completos de CRUD, controle de tempo do usuário logado, gerenciamento de perfil com foto, backups do banco de dados e geração de listas PDF com informações de usuários. O usuário master tem acesso a funcionalidades adicionais.</p>',
      links: [
        {
          name: 'Conheça o projeto Telecall',
          href: 'https://github.com/lucas-sales-pires/projeto-telecall',
        },
      ],
    },
    {
      src: 'assets/img/projects/quiz.png',
      alt: 'Projeto Quiz',
      title: 'Quiz',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto é um jogo que fiz no formato de quiz para estudar sobre as matérias que eu estava estudando no semestre da faculdade. Nele, tenho os temas JavaScript, Python, PHP, DER, MER, SQL.</p>',
      links: [
        {
          name: 'Conheça o projeto Quiz',
          href: 'https://lucas-sales-pires.github.io/projeto-quiz/',
        },
      ],
    },
    {
      src: 'assets/img/projects/valueware.png',
      alt: 'Projeto Valueware',
      title: 'ValueWare',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto foi um desafio front end, que o objetivo principal foi testar meus conhecimentos no front-end, sobre uma empresa que trabalha com saúde e educação.</p>',
      links: [
        {
          name: 'Conheça o projeto ValueWare',
          href: 'https://lucas-sales-pires.github.io/projeto-valueWare/',
        },
      ],
    },
    {
      src: 'assets/img/projects/skillhub.png',
      alt: 'Projeto Skillhub',
      title: 'SkillHub',
      with: '100px',
      height: '100px',
      description:
        '<p>Skillhub, é um projeto feito utilizando Dart e Flutter, O objetivo do aplicativo é dar as pessoas mais uma forma de conhecimento, feito para o projeto da  3º semestre da faculdade. O projeto ainda está em desenvolvimento.</p>',
      links: [
        {
          name: 'Conheça o aplicativo SkillHub',
          href: 'https://github.com/lucas-sales-pires/SkillHub/raw/main/app-debug.apk',
        },
      ],
    },
    {
      src: 'assets/img/projects/API.png',
      alt: 'Projeto Api Completa',
      title: 'Api Completa',
      with: '100px',
      height: '100px',
      description:
        '<p>Este é um projeto de API REST completa desenvolvida com Node.js, TypeScript e MongoDB, seguindo os princípios SOLID e utilizando o padrão de arquitetura MVC.</p>',
      links: [
        {
          name: 'Conheça o projeto Api Completa',
          href: 'https://projeto-api-completa.onrender.com/usuarios', 
        },
      ],
    }
  ]);

  public openDialog(data: interfaceProjetos) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
