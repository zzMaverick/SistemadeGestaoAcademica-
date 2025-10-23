class Aluno{
    constructor(nome,idade,curso,notafinal){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.notafinal = notafinal;
    }
    exibirAtributos(nome,idade,curso,notafinal){
        console.log(nome,idade,curso,notafinal);
    }
    validarCadastro(){
        return this.nome === '' || this.idade === '' || this.curso === '' || this.notafinal === '';
    }
    isAprovado(){
        return this.nota >= 7;
    }
    toString() {
        return `Aluno: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota Final: ${this.notaFinal}`;
    }
}

var cadastrosAlunos = new Array();

function cadastrar(){


    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;
    const notafinal = document.getElementById("notafinal").value;

    const tabela = document.getElementById("tabela");
    const form = document.getElementById("form");
    var  aluno = new Aluno(nome,idade,curso,notafinal);

    if(aluno.validarCadastro()){
        alert("Cadastrado com sucesso!");
        cadastrosAlunos.push(aluno);
        console.log(aluno);

        const linha = document.createElement("tr");
        linha.innerHTML =`
            <td>${nome}</td>
            <td>${idade}</td>
            <td>${curso}</td>
            <td>${notafinal}</td>
            <td><button>editar</button></td>
            <td><button>deletar</button></td>
        `;
        tabela.appendChild(linha);
        form.reset();
    }
    else
    {
        alert("Erro ao cadastrar o cadastro algum campo esta vazio");
    }
}

