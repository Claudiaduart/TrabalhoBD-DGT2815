import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public livros: Array<Livro> = [];
  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
  }

  async ngOnInit()
  {
      await this.servLivros.obterLivros()
        .then((livros: Livro[]) => {
          this.livros = livros;
        });
  }

  async excluir(id: string) {
    await this.servLivros.excluir(id)
    .then((resultado: boolean) => {
      if (resultado) {
        this.servLivros.obterLivros()
          .then((livros: Livro[]) => {
            this.livros = livros;
          });
      }
    });
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}