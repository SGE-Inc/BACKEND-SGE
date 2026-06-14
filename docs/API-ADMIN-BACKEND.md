# Funcionalidades do Backend — Módulo Admin (Express)

Este documento lista todas as funcionalidades que o backend Express deve fornecer para o módulo de administração do SGE. Cada secção descreve os endpoints, dados esperados e regras de negócio.

---

## 1. Autenticação e Autorização

### 1.1 Login
- **POST** `/api/auth/login`
- Recebe: `{ id, password }` (id pode ser nº de processo, email ou username)
- Valida credenciais e retorna JWT + dados do utilizador
- Regras:
  - Três roles: `admin`, `professor`, `aluno`
  - Admin tem dois níveis: `superadmin` (acesso total) e `admin` (acesso restrito)
  - Password deve ter no mínimo 6 caracteres
  - Bloquear conta após 5 tentativas falhadas (opcional)

### 1.2 Logout
- **POST** `/api/auth/logout`
- Invalida o token JWT

### 1.3 Recuperar Senha
- **POST** `/api/auth/recuperar-senha`
- Recebe: `{ email }`
- Envia email com link para redefinição

### 1.4 Alterar Senha
- **PUT** `/api/auth/alterar-senha`
- Recebe: `{ senhaAtual, novaSenha }`
- Regra: nova senha deve ser diferente da atual

### 1.5 Verificar Token
- **GET** `/api/auth/verificar`
- Retorna dados do utilizador autenticado a partir do token

---

## 2. Dashboard (Admin)

### 2.1 Estatísticas Gerais
- **GET** `/api/admin/dashboard/stats`
- Retorna:
  ```json
  {
    "totalEstudantes": 1248,
    "estudantesActivos": 1190,
    "estudantesInactivos": 58,
    "totalProfessores": 64,
    "professoresActivos": 60,
    "professoresLicenca": 4,
    "totalTurmas": 38,
    "taxaAprovacao": 78,
    "anoLectivo": "2025-2026"
  }
  ```

### 2.2 Distribuição por Curso
- **GET** `/api/admin/dashboard/distribuicao-cursos`
- Retorna: lista de cursos com total de estudantes por curso

### 2.3 Evolução de Matrículas
- **GET** `/api/admin/dashboard/evolucao-matriculas?ano=2026`
- Retorna: matrículas por mês, com comparação por ano

### 2.4 Média por Disciplina
- **GET** `/api/admin/dashboard/media-disciplinas`
- Retorna: lista de disciplinas com média geral e percentagem de positivas

### 2.5 Logs de Actividade (Últimos)
- **GET** `/api/admin/dashboard/ultimos-logs?limite=8`
- Retorna: últimas N actividades no sistema

### 2.6 Calendário Académico (Próximos Eventos)
- **GET** `/api/admin/dashboard/proximos-eventos`
- Retorna: eventos académicos ordenados por data

---

## 3. Gestão de Professores

### 3.1 Listar Professores
- **GET** `/api/admin/professores?curso={curso}&page=1&limit=20`
- Retorna lista paginada de professores
- Filtros opcionais: `curso`, `status`, `disciplina`, `turma`, `search` (nome/email)

### 3.2 Obter Professor por ID
- **GET** `/api/admin/professores/:id`
- Retorna dados completos do professor

### 3.3 Criar Professor
- **POST** `/api/admin/professores`
- Recebe:
  ```json
  {
    "nome": "string",
    "email": "string",
    "senha": "string (mín 6 caracteres)",
    "contacto": "string",
    "disciplinas": ["string"],
    "turmas": ["string"],
    "curso": "Informática | Electrónica"
  }
  ```
- Regras:
  - Email deve ser único no sistema
  - Status inicial é "activo"
  - Gera data de admissão automaticamente
  - Normaliza nome para maiúsculas

### 3.4 Actualizar Professor
- **PUT** `/api/admin/professores/:id`
- Recebe mesmos campos que criação (excepto senha, opcional)

### 3.5 Remover Professor
- **DELETE** `/api/admin/professores/:id`
- Regra: não permitir remover professor com turmas activas atribuídas

### 3.6 Alternar Estado do Professor
- **PATCH** `/api/admin/professores/:id/estado`
- Ciclo: activo → inactivo → activo (ou activo → licença → activo)
- Recebe: `{ "status": "activo" | "inactivo" | "licenca" }`

### 3.7 Atribuir Disciplinas/Turmas
- **POST** `/api/admin/professores/:id/atribuicoes`
- Recebe: `{ disciplinas: [], turmas: [] }`
- Regra: validar se o professor já tem outras atribuições no mesmo horário

### 3.8 Importar Professores (CSV)
- **POST** `/api/admin/professores/importar`
- Recebe: ficheiro CSV (multipart/form-data)
- Colunas esperadas: `nome, email, contacto, curso`
- Regra: valida duplicados e retorna relatório de importação

### 3.9 Exportar Professores (CSV)
- **GET** `/api/admin/professores/exportar?curso={curso}`
- Retorna ficheiro CSV com todos os professores do filtro aplicado

---

## 4. Gestão de Estudantes

### 4.1 Listar Estudantes
- **GET** `/api/admin/estudantes?curso={curso}&page=1&limit=20`
- Retorna lista paginada
- Filtros: `curso`, `turma`, `status`, `anoClasse`, `search` (nome/processo/email)

### 4.2 Obter Estudante por ID
- **GET** `/api/admin/estudantes/:id`
- Retorna dados completos (incluindo encarregado, documento, dados académicos)

### 4.3 Obter Estudante por Nº Processo
- **GET** `/api/admin/estudantes/processo/:numeroProcesso`
- Útil para busca rápida

### 4.4 Matricular (Criar Estudante)
- **POST** `/api/admin/estudantes`
- Recebe:
  ```json
  {
    "nome": "string",
    "numeroProcesso": "string (único)",
    "turma": "string",
    "contacto": "string",
    "email": "string",
    "documento": { "tipo": "BI | Passaporte", "numero": "string" },
    "encarregado": { "nome": "string", "contacto": "string", "parentesco": "string" },
    "dataNascimento": "string (dd/mm/aaaa)",
    "genero": "Masculino | Feminino",
    "endereco": "string",
    "curso": "Informática | Electrónica"
  }
  ```
- Regras:
  - `numeroProcesso` deve ser único (gerado automaticamente se não fornecido)
  - Turma deve existir no curso especificado
  - Ano/classe é derivado da turma automaticamente
  - Status inicial é "activo"
  - Data de matrícula é a data actual

### 4.5 Actualizar Estudante
- **PUT** `/api/admin/estudantes/:id`
- Permite alterar todos os campos incluindo transferência de turma

### 4.6 Transferir Estudante
- **POST** `/api/admin/estudantes/:id/transferir`
- Recebe: `{ novaTurma: "string", motivo: "string" }`
- Regras:
  - Mantém histórico da turma anterior
  - Actualiza ano/classe se necessário
  - Regista no log de auditoria

### 4.7 Remover Estudante
- **DELETE** `/api/admin/estudantes/:id`
- Regra: soft delete (marcar como inactivo, não apagar fisicamente)

### 4.8 Desactivar/Anular Matrícula
- **PATCH** `/api/admin/estudantes/:id/estado`
- Recebe: `{ status: "activo" | "inactivo" | "transferido", motivo: "string" }`

### 4.9 Histórico Académico do Estudante
- **GET** `/api/admin/estudantes/:id/historico`
- Retorna:
  - Notas por disciplina e trimestre
  - Médias anuais
  - Histórico de turmas
  - Histórico de transferências

### 4.10 Importar Estudantes (CSV)
- **POST** `/api/admin/estudantes/importar`
- Recebe ficheiro CSV
- Colunas: `nome, processo, turma, contacto, email, curso`

### 4.11 Exportar Estudantes (CSV)
- **GET** `/api/admin/estudantes/exportar?curso={curso}&turma={turma}`
- Retorna CSV filtrado

---

## 5. Gestão de Exames

### 5.1 Listar Exames
- **GET** `/api/admin/exames?curso={curso}&page=1&limit=20`
- Retorna lista paginada
- Filtros: `curso`, `turma`, `estado`, `trimestre`, `tipo`, `search` (disciplina/turma/sala)

### 5.2 Obter Exame por ID
- **GET** `/api/admin/exames/:id`

### 5.3 Agendar Exame
- **POST** `/api/admin/exames`
- Recebe:
  ```json
  {
    "disciplina": "string",
    "turma": "string",
    "data": "string (YYYY-MM-DD)",
    "hora": "string (HH:MM)",
    "sala": "string",
    "tipo": "1ª PROVA | 2ª PROVA | EXAME FINAL | RECURSO | EXAME DE ADMISSÃO",
    "trimestre": "I TRIMESTRE | II TRIMESTRE | III TRIMESTRE",
    "curso": "Informática | Electrónica",
    "observacoes": "string (opcional)"
  }
  ```
- Regras:
  - Validar se a sala está disponível no horário pretendido
  - Validar se a turma não tem outro exame na mesma data/hora
  - Estado inicial é "agendado"

### 5.4 Actualizar Exame
- **PUT** `/api/admin/exames/:id`

### 5.5 Remover Exame
- **DELETE** `/api/admin/exames/:id`
- Regra: não permitir remover exame já realizado

### 5.6 Alterar Estado
- **PATCH** `/api/admin/exames/:id/estado`
- Ciclo: agendado → realizado → cancelado → agendado
- Recebe: `{ estado: "agendado" | "realizado" | "cancelado" }`

### 5.7 Lançar Resultados (Notas)
- **POST** `/api/admin/exames/:id/resultados`
- Recebe:
  ```json
  {
    "resultados": [
      { "estudanteId": "string", "nota": 0-20 }
    ]
  }
  ```
- Regras:
  - Nota deve ser entre 0 e 20 (com intervalo de 0.5)
  - Apenas permitido se exame estiver no estado "realizado"
  - Cada estudante só pode ter uma nota por exame

### 5.8 Obter Resultados de um Exame
- **GET** `/api/admin/exames/:id/resultados`
- Retorna lista de estudantes com notas

### 5.9 Obter Calendário de Exames
- **GET** `/api/admin/exames/calendario?curso={curso}&trimestre={trimestre}`
- Retorna exames agrupados por data para visualização em calendário

### 5.10 Histórico de Exames
- **GET** `/api/admin/exames/historico?curso={curso}&ano={ano}`
- Retorna exames de anos anteriores

### 5.11 Épocas de Exame
- **GET** `/api/admin/exames/epocas`
- Retorna lista de épocas de exame definidas no calendário académico

- **POST** `/api/admin/exames/epocas`
- Recebe:
  ```json
  {
    "label": "string",
    "trimestre": "I TRIMESTRE | II TRIMESTRE | III TRIMESTRE",
    "dataInicio": "string (YYYY-MM-DD)",
    "dataFim": "string (YYYY-MM-DD)",
    "tipo": "1ª PROVA | 2ª PROVA | EXAME FINAL | RECURSO | EXAME DE ADMISSÃO"
  }
  ```

---

## 6. Gestão de Turmas

### 6.1 Listar Turmas
- **GET** `/api/admin/turmas?curso={curso}`
- Retorna: lista de turmas com curso, classe, vagas, nº estudantes

### 6.2 Criar Turma
- **POST** `/api/admin/turmas`
- Recebe: `{ nome, curso, classe, vagas }`
- Regras:
  - Nome da turma deve ser único no curso (ex: "IN10A" só pode existir uma)
  - Padrão: sigla do curso + classe + letra (ex: IN10A, EL11B)

### 6.3 Actualizar Turma
- **PUT** `/api/admin/turmas/:id`

### 6.4 Remover Turma
- **DELETE** `/api/admin/turmas/:id`
- Regra: não permitir remover turma com estudantes activos

### 6.5 Estudantes por Turma
- **GET** `/api/admin/turmas/:id/estudantes`
- Retorna lista de estudantes da turma

---

## 7. Gestão de Disciplinas

### 7.1 Listar Disciplinas
- **GET** `/api/admin/disciplinas?curso={curso}&classe={classe}`
- Retorna lista de disciplinas com curso, classe, carga horária

### 7.2 Criar Disciplina
- **POST** `/api/admin/disciplinas`
- Recebe: `{ nome, curso, classe, cargaHoraria }`
- Regras:
  - Combinação nome + curso + classe deve ser única
  - cargaHoraria em horas semanais

### 7.3 Actualizar Disciplina
- **PUT** `/api/admin/disciplinas/:id`

### 7.4 Remover Disciplina
- **DELETE** `/api/admin/disciplinas/:id`
- Regra: não permitir remover disciplina com professores atribuídos ou notas lançadas

---

## 8. Configurações da Instituição

### 8.1 Obter Dados da Instituição
- **GET** `/api/admin/configuracoes/instituicao`

### 8.2 Actualizar Dados da Instituição
- **PUT** `/api/admin/configuracoes/instituicao`
- Recebe:
  ```json
  {
    "nome": "string",
    "sigla": "string",
    "endereco": "string",
    "telefone": "string",
    "email": "string",
    "website": "string",
    "diretor": "string"
  }
  ```

### 8.3 Upload Logotipo
- **POST** `/api/admin/configuracoes/instituicao/logotipo`
- Recebe: ficheiro de imagem (multipart/form-data)
- Formatos aceites: PNG, JPG, SVG (máx 2MB)

---

## 9. Ano Lectivo

### 9.1 Listar Anos Lectivos
- **GET** `/api/admin/configuracoes/anos-lectivos`

### 9.2 Criar Ano Lectivo
- **POST** `/api/admin/configuracoes/anos-lectivos`
- Recebe: `{ ano, dataInicio, dataFim }`
- Regra: apenas um ano pode estar activo de cada vez

### 9.3 Definir Ano Activo
- **PATCH** `/api/admin/configuracoes/anos-lectivos/:id/activar`
- Desactiva o ano actual e activa o especificado

### 9.4 Actualizar Ano Lectivo
- **PUT** `/api/admin/configuracoes/anos-lectivos/:id`

---

## 10. Trimestres / Períodos

### 10.1 Listar Trimestres
- **GET** `/api/admin/configuracoes/trimestres?anoLectivo={ano}`

### 10.2 Definir Trimestres
- **PUT** `/api/admin/configuracoes/trimestres`
- Recebe: array com 3 trimestres
  ```json
  [
    { "nome": "I Trimestre", "dataInicio": "YYYY-MM-DD", "dataFim": "YYYY-MM-DD" },
    { "nome": "II Trimestre", "dataInicio": "YYYY-MM-DD", "dataFim": "YYYY-MM-DD" },
    { "nome": "III Trimestre", "dataInicio": "YYYY-MM-DD", "dataFim": "YYYY-MM-DD" }
  ]
  ```

---

## 11. Cursos

### 11.1 Listar Cursos
- **GET** `/api/admin/cursos`
- Retorna: cursos com sigla, descrição, status activo/inactivo

### 11.2 Actualizar Curso
- **PUT** `/api/admin/cursos/:id`
- `{ nome, sigla, descricao, ativo }`

---

## 12. Parâmetros de Avaliação

### 12.1 Obter Parâmetros
- **GET** `/api/admin/configuracoes/parametros-avaliacao`

### 12.2 Actualizar Parâmetros
- **PUT** `/api/admin/configuracoes/parametros-avaliacao`
- Recebe:
  ```json
  [
    { "sigla": "PP", "nome": "Prova dos Professores", "peso": 40, "descricao": "..." },
    { "sigla": "PT", "nome": "Prova Trimestral", "peso": 30, "descricao": "..." },
    { "sigla": "MAC", "nome": "Média das Avaliações Contínuas", "peso": 30, "descricao": "..." }
  ]
  ```
- Regra: a soma dos pesos deve ser exactamente 100%

### 12.3 Fórmula de Cálculo
- O backend deve implementar o cálculo da Média Trimestral (MT):
  `MT = (PP × pesoPP + PT × pesoPT + MAC × pesoMAC) / 100`
- Este cálculo é usado nas notas dos estudantes

---

## 13. Gestão de Utilizadores Administrativos

### 13.1 Listar Administradores
- **GET** `/api/admin/utilizadores`

### 13.2 Criar Administrador
- **POST** `/api/admin/utilizadores`
- Recebe: `{ nome, email, username, cargo, senha }`
- Regras:
  - Email e username devem ser únicos
  - Cargo é um dos cargos definidos no sistema
  - Perfil padrão é "admin" (apenas o sistema pode criar "superadmin")

### 13.3 Actualizar Administrador
- **PUT** `/api/admin/utilizadores/:id`

### 13.4 Alternar Estado
- **PATCH** `/api/admin/utilizadores/:id/estado`
- Recebe: `{ ativo: boolean }`

### 13.5 Remover Administrador
- **DELETE** `/api/admin/utilizadores/:id`
- Regra: não permitir remover o último superadmin

---

## 14. Perfis de Acesso / Permissões

### 14.1 Listar Permissões
- **GET** `/api/admin/permissoes`
- Retorna matriz de permissões (módulo × role)

### 14.2 Actualizar Permissões
- **PUT** `/api/admin/permissoes`
- Recebe: lista completa de permissões
  ```json
  [
    { "modulo": "Dashboard", "admin": true, "professor": true, "aluno": true },
    { "modulo": "Estudantes", "admin": true, "professor": false, "aluno": false }
  ]
  ```

### 14.3 Permissões do Utilizador Corrente
- **GET** `/api/admin/permissoes/meu-perfil`
- Retorna as permissões com base no role do utilizador autenticado

---

## 15. Cargos / Funções

### 15.1 Listar Cargos
- **GET** `/api/admin/cargos`

### 15.2 Criar Cargo
- **POST** `/api/admin/cargos`
- Recebe: `{ nome, descricao, tipo: "academico" | "administrativo" | "suporte" }`

### 15.3 Actualizar Cargo
- **PUT** `/api/admin/cargos/:id`

### 15.4 Remover Cargo
- **DELETE** `/api/admin/cargos/:id`
- Regra: não permitir remover cargo com utilizadores associados

---

## 16. Logs de Auditoria

### 16.1 Listar Logs
- **GET** `/api/admin/auditoria?page=1&limit=20`
- Filtros: `tipo`, `role`, `dataInicio`, `dataFim`, `utilizador`

### 16.2 Obter Log por ID
- **GET** `/api/admin/auditoria/:id`

### 16.3 Estatísticas de Auditoria
- **GET** `/api/admin/auditoria/estatisticas?periodo={periodo}`
- Retorna: total de acções por tipo no período

### 16.4 Registar Log (interno)
- **POST** `/api/admin/auditoria` (apenas para uso interno do sistema)
- O backend deve registar automaticamente logs para:
  - Login/logout de utilizadores
  - Criação/edição/remoção de registos (estudantes, professores, exames)
  - Alterações de configuração
  - Lançamento de notas

---

## 17. Relatórios

### 17.1 Relatório de Estudantes por Curso
- **GET** `/api/admin/relatorios/estudantes-por-curso?anoLectivo={ano}`

### 17.2 Relatório de Aprovação por Turma
- **GET** `/api/admin/relatorios/aprovacao-por-turma?trimestre={trimestre}&anoLectivo={ano}`

### 17.3 Relatório de Desempenho por Disciplina
- **GET** `/api/admin/relatorios/desempenho-disciplinas?curso={curso}&trimestre={trimestre}`

### 17.4 Relatório de Professores por Carga Horária
- **GET** `/api/admin/relatorios/professores-carga-horaria`

### 17.5 Exportar Relatório (PDF/CSV)
- **GET** `/api/admin/relatorios/exportar/:tipoRelatorio?formato=pdf|csv`
- Gera ficheiro para download

---

## 18. Regras Gerais da API

### 18.1 Autenticação
- Todas as rotas (excepto login) exigem token JWT no header `Authorization: Bearer <token>`
- Token expira em 24 horas

### 18.2 Autorização
- Rotas com prefixo `/api/admin/` apenas acessíveis por utilizadores com role `admin` ou `superadmin`
- Algumas rotas específicas apenas para `superadmin` (gestão de utilizadores, permissões)

### 18.3 Paginação
- Padrão: `page=1&limit=20`
- Resposta paginada:
  ```json
  {
    "data": [],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5
    }
  }
  ```

### 18.4 Resposta de Erro
- Padrão:
  ```json
  {
    "error": true,
    "message": "Descrição do erro",
    "code": "ERROR_CODE",
    "details": {}
  }
  ```

### 18.5 Validação
- Validar todos os inputs com middleware de validação
- Usar códigos HTTP apropriados:
  - 200: Sucesso
  - 201: Criado
  - 400: Erro de validação
  - 401: Não autenticado
  - 403: Sem permissão
  - 404: Não encontrado
  - 409: Conflito (duplicado)
  - 500: Erro interno

### 18.6 Soft Delete
- Registos de estudantes, professores e turmas devem usar soft delete (campo `deletedAt` ou `ativo`)
- Dados nunca são apagados fisicamente do banco

### 18.7 Auditoria Automática
- O backend deve registar automaticamente logs de auditoria para:
  - Operações CRUD em todas as entidades principais
  - Login/logout
  - Alteração de permissões
  - Lançamento de notas
  - Transferências de estudantes
