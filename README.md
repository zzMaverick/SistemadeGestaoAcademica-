# Sistema de Gestão Acadêmica

Estudo de Caso Geral: Gerenciamento de Alunos em uma Escola de Programação

## Descrição
Sistema web para gerenciamento de alunos com funcionalidades de cadastro, edição, exclusão e visualização de dados acadêmicos.

## Como usar com Docker

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Executar a aplicação

#### Modo Produção
```bash
# Construir e executar o container
docker-compose up --build

# Ou executar em background
docker-compose up -d --build
```

A aplicação estará disponível em: http://localhost:8080

#### Modo Desenvolvimento
```bash
# Executar com hot-reload para desenvolvimento
docker-compose --profile dev up

# Ou apenas o serviço de desenvolvimento
docker-compose up dev
```

A aplicação de desenvolvimento estará disponível em: http://localhost:3000

### Comandos úteis

```bash
# Parar os containers
docker-compose down

# Ver logs
docker-compose logs

# Reconstruir apenas quando houver mudanças
docker-compose up --build

# Executar comandos dentro do container
docker-compose exec web sh
```

### Estrutura Docker
- **Dockerfile**: Define como construir a imagem da aplicação
- **docker-compose.yml**: Orquestra os serviços e configurações
- **nginx.conf**: Configuração customizada do servidor web
- **.dockerignore**: Arquivos ignorados durante o build

## Funcionalidades
- Cadastro de alunos
- Edição de dados
- Exclusão de registros
- Validação de campos
- Cálculo automático de aprovação (nota >= 7)
