export class Livro {
    codigo: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor() {
        this.codigo = "";
        this.codEditora = 0;
        this.titulo = "";
        this.resumo = "";
        this.autores = [];
    }
}

