import { Injectable } from "@angular/core";
import { Livro } from "./livro";


interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({providedIn: "root"})
export class ControleLivrosService {
  
  baseURL = "http://localhost:3030/livros";

  constructor() {}
  
  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(this.baseURL);
    const respostaJson: LivroMongo[] = await resposta.json();
    
    return respostaJson.map((livro: LivroMongo) => ({
      codigo: livro._id ?? '',
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    }));
  }
  
  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    const resposta = await fetch(this.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(livroMongo),
    });
    return resposta.ok;
  }

  async excluir(codigo: string) {
    const resposta = await fetch(`${this.baseURL}/${codigo}`, {
      method: "DELETE"
    });
    return resposta.ok;
  }
}
