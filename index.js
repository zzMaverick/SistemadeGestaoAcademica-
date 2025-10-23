class Aluno {
    constructor(nome, idade, curso, notaFinal) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.notaFinal = parseFloat(notaFinal);
    }
    validarCadastro() {
        return !this.nome || !this.idade || !this.curso || isNaN(this.notaFinal);
    }
    isAprovado() {
        return this.notaFinal >= 7;
    }
    toString() {
        return `Aluno: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota Final: ${this.notaFinal}, Status: ${this.isAprovado() ? "Aprovado" : "Reprovado"}`;
    }
}

const cadastrosAlunos = [];
const form = document.getElementById("form");
const tabela = document.querySelector("#tabela tbody");
const botaoCadastrar = document.getElementById("submitBoton");

const adicionarLinhaTabela = (aluno) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.curso}</td>
        <td>${aluno.notaFinal}</td>
        <td>
            <button class="editar">Editar</button>
            <button class="deletar">Deletar</button>
        </td>
    `;
    tabela.appendChild(linha);

    linha.querySelector(".deletar").addEventListener("click", () => {
        const index = cadastrosAlunos.indexOf(aluno);
        if (index > -1) cadastrosAlunos.splice(index, 1);
        linha.remove();
        alert(`Aluno ${aluno.nome} removido!`);
    });

    linha.querySelector(".editar").addEventListener("click", () => {
        document.getElementById("nome").value = aluno.nome;
        document.getElementById("idade").value = aluno.idade;
        document.getElementById("curso").value = aluno.curso;
        document.getElementById("notafinal").value = aluno.notaFinal;
        const index = cadastrosAlunos.indexOf(aluno);
        if (index > -1) cadastrosAlunos.splice(index, 1);
        linha.remove();
        alert(`Editando aluno ${aluno.nome}`);
    });
};

const cadastrar = () => {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;
    const notaFinal = document.getElementById("notafinal").value;

    const aluno = new Aluno(nome, idade, curso, notaFinal);

    if (aluno.validarCadastro()) {
        alert("Erro: algum campo está vazio ou inválido!");
        return;
    }

    cadastrosAlunos.push(aluno);
    adicionarLinhaTabela(aluno);
    form.reset();
    console.log(aluno.toString());
    alert(`Aluno ${aluno.nome} cadastrado com sucesso!`);
};
botaoCadastrar.addEventListener("click", cadastrar);