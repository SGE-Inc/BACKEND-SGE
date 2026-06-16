import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SGE - API",
      version: "1.0.0",
      description: "API do Sistema de Gestão Escolar",
      contact: {
        name: "Suporte SGE",
        email: "suporte@sge.ao",
      },
    },
    servers: [
      { url: "/api", description: "Servidor local" },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "sge_token",
        },
      },
      schemas: {
        AdminRegister: {
          type: "object",
          required: ["nome", "email", "senha"],
          properties: {
            nome: {
              type: "string",
              description: "Nome completo do administrador",
              example: "João Admin",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email do administrador (usado para login)",
              example: "admin@escola.com",
            },
            senha: {
              type: "string",
              format: "password",
              minLength: 6,
              description: "Senha do administrador",
              example: "123456",
            },
          },
        },
        AdminLogin: {
          type: "object",
          required: ["email", "senha"],
          properties: {
            email: {
              type: "string",
              format: "email",
              description: "Email do administrador",
              example: "admin@escola.com",
            },
            senha: {
              type: "string",
              format: "password",
              description: "Senha do administrador",
              example: "123456",
            },
          },
        },
        AuthUserResponse: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              description: "ID do utilizador",
              example: "550e8400-e29b-41d4-a716-446655440000",
            },
            nome: {
              type: "string",
              description: "Nome do utilizador",
              example: "João Admin",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email do utilizador",
              example: "admin@escola.com",
            },
            role: {
              type: "string",
              description: "Role do utilizador",
              example: "admin",
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            statusCode: {
              type: "integer",
              description: "Código de erro HTTP",
              example: 400,
            },
            message: {
              type: "string",
              description: "Mensagem de erro",
              example: "Dados inválidos",
            },
          },
        },
        CreateProfessor: {
          type: "object",
          required: ["nome", "email", "senha", "cargo"],
          properties: {
            nome: {
              type: "string",
              description: "Nome completo do professor",
              example: "Carlos Professor",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email do professor (usado para login)",
              example: "professor@escola.com",
            },
            senha: {
              type: "string",
              format: "password",
              minLength: 6,
              description: "Senha do professor",
              example: "123456",
            },
            cargo: {
              type: "string",
              description: "Cargo ou especialidade do professor",
              example: "Docente de Matemática",
            },
            contacto: {
              type: "string",
              description: "Número de telefone do professor",
              example: "912345678",
            },
          },
        },
        UpdateProfessor: {
          type: "object",
          properties: {
            nome: {
              type: "string",
              description: "Nome completo do professor",
              example: "Carlos Professor",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email do professor",
              example: "professor@escola.com",
            },
            cargo: {
              type: "string",
              description: "Cargo ou especialidade do professor",
              example: "Docente de Matemática",
            },
            contacto: {
              type: "string",
              description: "Número de telefone do professor",
              example: "912345678",
            },
          },
        },
        ProfessorResponse: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              description: "ID do registo de professor",
              example: "550e8400-e29b-41d4-a716-446655440001",
            },
            nome: {
              type: "string",
              description: "Nome do professor",
              example: "Carlos Professor",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email do professor",
              example: "professor@escola.com",
            },
            cargo: {
              type: "string",
              description: "Cargo do professor",
              example: "Docente de Matemática",
            },
            contacto: {
              type: "string",
              nullable: true,
              description: "Contacto telefónico",
              example: "912345678",
            },
            status: {
              type: "string",
              description: "Estado da conta",
              enum: ["ativo", "inativo", "pendente", "transferido"],
              example: "ativo",
            },
          },
        },
        CreateCurso: {
          type: "object",
          required: ["nome", "sigla"],
          properties: {
            nome: { type: "string", description: "Nome do curso", example: "Informática" },
            sigla: { type: "string", description: "Sigla do curso", example: "IN" },
          },
        },
        UpdateCurso: {
          type: "object",
          properties: {
            nome: { type: "string" },
            sigla: { type: "string" },
          },
        },
        CursoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string", example: "Informática" },
            sigla: { type: "string", example: "IN" },
            numTurmas: { type: "integer", example: 5 },
            numDisciplinas: { type: "integer", example: 12 },
          },
        },
        CreateTurma: {
          type: "object",
          required: ["nome", "curso", "classe", "vagas", "turno", "anoLectivo"],
          properties: {
            nome: { type: "string", description: "Nome da turma (ex: IN10A)", example: "IN10A" },
            curso: { type: "string", format: "uuid", description: "ID do curso" },
            classe: { type: "string", description: "Classe (ex: 10, 11, 12)", example: "10" },
            vagas: { type: "integer", description: "Número de vagas", example: 35 },
            turno: { type: "string", description: "Turno (Manhã/Tarde/Noite)", example: "Manhã" },
            anoLectivo: { type: "string", description: "Ano lectivo", example: "2026" },
          },
        },
        UpdateTurma: {
          type: "object",
          properties: {
            nome: { type: "string", description: "Nome da turma", example: "IN10A" },
            classe: { type: "string", description: "Classe", example: "10" },
            vagas: { type: "integer", description: "Número de vagas", example: 35 },
            turno: { type: "string", description: "Turno", example: "Manhã" },
          },
        },
        TurmaResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string", example: "IN10A" },
            cursoId: { type: "string", format: "uuid" },
            cursoNome: { type: "string", example: "Informática" },
            cursoSigla: { type: "string", example: "IN" },
            classe: { type: "string", example: "10" },
            vagas: { type: "integer", example: 35 },
            turno: { type: "string", example: "Manhã" },
            anoLectivo: { type: "string", example: "2026" },
            numEstudantes: { type: "integer", example: 28 },
          },
        },
        EstudanteResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            userId: { type: "string", format: "uuid" },
            nome: { type: "string", example: "João Silva" },
            email: { type: "string", format: "email" },
            numeroProcesso: { type: "string", example: "2024001" },
            status: { type: "string", example: "ativo" },
          },
        },
        CreateDisciplina: {
          type: "object",
          required: ["nome", "sigla", "curso", "classe", "cargaHoraria"],
          properties: {
            nome: { type: "string", description: "Nome da disciplina", example: "Programação I" },
            sigla: { type: "string", description: "Sigla", example: "PROG I" },
            curso: { type: "string", format: "uuid", description: "ID do curso" },
            classe: { type: "string", description: "Classe", example: "10" },
            cargaHoraria: { type: "integer", description: "Carga horária semanal", example: 4 },
            cor: { type: "string", description: "Cor para identificação", example: "#FF5733" },
          },
        },
        UpdateDisciplina: {
          type: "object",
          properties: {
            nome: { type: "string" },
            sigla: { type: "string" },
            classe: { type: "string" },
            cargaHoraria: { type: "integer" },
            cor: { type: "string" },
          },
        },
        DisciplinaResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string", example: "Programação I" },
            sigla: { type: "string", example: "PROG I" },
            cursoId: { type: "string", format: "uuid" },
            cursoNome: { type: "string", example: "Informática" },
            classe: { type: "string", example: "10" },
            cargaHoraria: { type: "integer", example: 4 },
            cor: { type: "string", nullable: true, example: "#FF5733" },
          },
        },
        UpdateInstituicao: {
          type: "object",
          required: ["nome", "sigla"],
          properties: {
            nome: { type: "string", description: "Nome da instituição", example: "Escola Secundária..." },
            sigla: { type: "string", description: "Sigla", example: "ES" },
            endereco: { type: "string", example: "Rua Principal, 123" },
            telefone: { type: "string", example: "912345678" },
            email: { type: "string", format: "email", example: "info@escola.com" },
            website: { type: "string", example: "https://escola.com" },
            diretor: { type: "string", example: "Dr. João" },
          },
        },
        InstituicaoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            sigla: { type: "string" },
            endereco: { type: "string", nullable: true },
            telefone: { type: "string", nullable: true },
            email: { type: "string", nullable: true },
            website: { type: "string", nullable: true },
            diretor: { type: "string", nullable: true },
            logotipo: { type: "string", nullable: true },
          },
        },
        CreateAnoLectivo: {
          type: "object",
          required: ["ano", "dataInicio", "dataFim"],
          properties: {
            ano: { type: "string", description: "Ano lectivo", example: "2026" },
            dataInicio: { type: "string", format: "date", example: "2026-02-01" },
            dataFim: { type: "string", format: "date", example: "2026-11-30" },
          },
        },
        UpdateAnoLectivo: {
          type: "object",
          properties: {
            ano: { type: "string" },
            dataInicio: { type: "string", format: "date" },
            dataFim: { type: "string", format: "date" },
          },
        },
        AnoLectivoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            ano: { type: "string", example: "2026" },
            dataInicio: { type: "string", format: "date-time" },
            dataFim: { type: "string", format: "date-time" },
            activo: { type: "boolean", example: true },
          },
        },
        RegisterAluno: {
          type: "object",
          required: ["nome", "dataNascimento", "tipoIdentificacao", "numeroIdentificacao", "numeroProcesso", "ultimaClasseFrequentada", "classe", "curso", "telefone"],
          properties: {
            nome: { type: "string", description: "Nome completo do aluno", example: "João Silva" },
            dataNascimento: { type: "string", format: "date", description: "Data de nascimento", example: "2008-05-15" },
            tipoIdentificacao: { type: "string", enum: ["BI", "PASSAPORTE"], description: "Tipo de identificação" },
            numeroIdentificacao: { type: "string", description: "Nº do documento", example: "021528943LA053" },
            numeroProcesso: { type: "string", description: "Nº de processo do aluno", example: "80727" },
            ultimaClasseFrequentada: { type: "string", description: "Última classe frequentada", example: "9ª Classe" },
            classe: { type: "string", description: "Classe a frequentar", example: "10ª Classe" },
            curso: { type: "string", description: "Nome ou sigla do curso", example: "Informática" },
            telefone: { type: "string", description: "Telefone para contacto", example: "912345678" },
            email: { type: "string", format: "email", description: "Email (opcional)", example: "aluno@email.com" },
          },
        },
        AlunoRegisteredResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            utilizador: { type: "string", example: "80727-021528943LA053" },
            senha: { type: "string", example: "A3F2C8D1" },
            message: { type: "string" },
          },
        },
        AlunoLogin: {
          type: "object",
          required: ["utilizador", "senha"],
          properties: {
            utilizador: { type: "string", description: "Nome de utilizador", example: "80727-021528943LA053" },
            senha: { type: "string", format: "password", description: "Senha", example: "A3F2C8D1" },
          },
        },
        AlunoSession: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            utilizador: { type: "string" },
            role: { type: "string", example: "aluno" },
          },
        },
        AlunoMeResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            userId: { type: "string", format: "uuid" },
            nome: { type: "string" },
            email: { type: "string", nullable: true },
            telefone: { type: "string" },
            utilizador: { type: "string" },
            dataNascimento: { type: "string", format: "date-time" },
            tipoIdentificacao: { type: "string" },
            numeroIdentificacao: { type: "string" },
            numeroProcesso: { type: "string" },
            ultimaClasseFrequentada: { type: "string" },
            classe: { type: "string", nullable: true },
            curso: { type: "string", nullable: true },
            turmaId: { type: "string", nullable: true },
          },
        },
        ResetSenha: {
          type: "object",
          required: ["senhaActual", "novaSenha"],
          properties: {
            senhaActual: { type: "string", format: "password", description: "Senha actual" },
            novaSenha: { type: "string", format: "password", minLength: 6, description: "Nova senha (mín. 6 caracteres)" },
          },
        },
        AdminMeResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            email: { type: "string" },
            role: { type: "string", example: "admin" },
          },
        },
        DashboardStats: {
          type: "object",
          properties: {
            totalEstudantes: { type: "integer", example: 1248 },
            estudantesActivos: { type: "integer", example: 1190 },
            estudantesInactivos: { type: "integer", example: 58 },
            totalProfessores: { type: "integer", example: 64 },
            professoresActivos: { type: "integer", example: 60 },
            professoresLicenca: { type: "integer", example: 4 },
            totalTurmas: { type: "integer", example: 38 },
            taxaAprovacao: { type: "integer", example: 78 },
            anoLectivo: { type: "string", example: "2025-2026" },
          },
        },
        CursoDistribuicao: {
          type: "object",
          properties: {
            curso: { type: "string" },
            abrev: { type: "string" },
            total: { type: "integer" },
          },
        },
        MediaDisciplina: {
          type: "object",
          properties: {
            disciplina: { type: "string" },
            abrev: { type: "string" },
            media: { type: "number" },
            positivas: { type: "integer" },
          },
        },
        AuditLog: {
          type: "object",
          properties: {
            id: { type: "string" },
            tipo: { type: "string" },
            descricao: { type: "string" },
            utilizador: { type: "string" },
            role: { type: "string" },
            data: { type: "string" },
            hora: { type: "string" },
          },
        },
        EventoAcademico: {
          type: "object",
          properties: {
            id: { type: "string" },
            titulo: { type: "string" },
            data: { type: "string", format: "date" },
            tipo: { type: "string" },
          },
        },
        CreateEstudante: {
          type: "object",
          required: ["nome", "dataNascimento", "tipoIdentificacao", "numeroIdentificacao", "numeroProcesso", "curso"],
          properties: {
            nome: { type: "string", description: "Nome completo do aluno" },
            dataNascimento: { type: "string", format: "date" },
            tipoIdentificacao: { type: "string", enum: ["BI", "PASSAPORTE"] },
            numeroIdentificacao: { type: "string" },
            numeroProcesso: { type: "string", description: "Nº de processo único" },
            turmaId: { type: "string", format: "uuid" },
            curso: { type: "string" },
            classe: { type: "string" },
            genero: { type: "string", enum: ["Masculino", "Feminino"] },
            turno: { type: "string" },
            telefone: { type: "string" },
            email: { type: "string", format: "email" },
            encarregadoNome: { type: "string" },
            encarregadoParentesco: { type: "string" },
            encarregadoTelefone: { type: "string" },
            nomePai: { type: "string" },
            nomeMae: { type: "string" },
          },
        },
        EstudanteDetailResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            userId: { type: "string", format: "uuid" },
            nome: { type: "string" },
            email: { type: "string", nullable: true },
            telefone: { type: "string", nullable: true },
            numeroProcesso: { type: "string" },
            turma: { type: "string", nullable: true },
            turmaId: { type: "string", nullable: true },
            curso: { type: "string", nullable: true },
            classe: { type: "string", nullable: true },
            dataNascimento: { type: "string", format: "date-time" },
            tipoIdentificacao: { type: "string" },
            numeroIdentificacao: { type: "string" },
            genero: { type: "string", nullable: true },
            turno: { type: "string", nullable: true },
            estadoCivil: { type: "string", nullable: true },
            nomePai: { type: "string", nullable: true },
            nomeMae: { type: "string", nullable: true },
            encarregadoNome: { type: "string", nullable: true },
            encarregadoParentesco: { type: "string", nullable: true },
            encarregadoTelefone: { type: "string", nullable: true },
            status: { type: "string" },
          },
        },
        EstudanteListResponse: {
          type: "object",
          properties: {
            data: { type: "array", items: { $ref: "#/components/schemas/EstudanteDetailResponse" } },
            pagination: {
              type: "object",
              properties: {
                page: { type: "integer" },
                limit: { type: "integer" },
                total: { type: "integer" },
                totalPages: { type: "integer" },
              },
            },
          },
        },
        TransferirEstudante: {
          type: "object",
          required: ["novaTurmaId"],
          properties: {
            novaTurmaId: { type: "string", format: "uuid" },
            motivo: { type: "string" },
          },
        },
        ChangeEstudanteStatus: {
          type: "object",
          required: ["status"],
          properties: {
            status: { type: "string", enum: ["ATIVO", "INATIVO", "TRANSFERIDO"] },
            motivo: { type: "string" },
          },
        },
        CreateExame: {
          type: "object",
          required: ["disciplinaId", "turmaId", "data", "hora", "sala", "tipo", "trimestre", "curso"],
          properties: {
            disciplinaId: { type: "string", format: "uuid" },
            turmaId: { type: "string", format: "uuid" },
            data: { type: "string", format: "date", example: "2026-06-12" },
            hora: { type: "string", example: "08:00" },
            sala: { type: "string", example: "Sala 101" },
            tipo: { type: "string", enum: ["1ª PROVA", "2ª PROVA", "EXAME FINAL", "RECURSO", "EXAME DE ADMISSÃO"] },
            trimestre: { type: "string", enum: ["I TRIMESTRE", "II TRIMESTRE", "III TRIMESTRE"] },
            curso: { type: "string" },
            observacoes: { type: "string" },
          },
        },
        ExameResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            disciplina: { type: "string" },
            disciplinaId: { type: "string" },
            turma: { type: "string" },
            turmaId: { type: "string" },
            data: { type: "string", format: "date" },
            hora: { type: "string" },
            sala: { type: "string" },
            tipo: { type: "string" },
            trimestre: { type: "string" },
            estado: { type: "string" },
            curso: { type: "string" },
            observacoes: { type: "string", nullable: true },
            resultados: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  alunoId: { type: "string" },
                  alunoNome: { type: "string" },
                  nota: { type: "number" },
                },
              },
            },
          },
        },
        ChangeExameEstado: {
          type: "object",
          required: ["estado"],
          properties: {
            estado: { type: "string", enum: ["AGENDADO", "REALIZADO", "CANCELADO"] },
          },
        },
        LancarResultados: {
          type: "object",
          required: ["resultados"],
          properties: {
            resultados: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  alunoId: { type: "string", format: "uuid" },
                  nota: { type: "number", minimum: 0, maximum: 20 },
                },
              },
            },
          },
        },
        CreateEpocaExame: {
          type: "object",
          required: ["label", "trimestre", "dataInicio", "dataFim", "tipo"],
          properties: {
            label: { type: "string", example: "1ª Prova dos Professores" },
            trimestre: { type: "string" },
            dataInicio: { type: "string", format: "date" },
            dataFim: { type: "string", format: "date" },
            tipo: { type: "string" },
          },
        },
        EpocaExameResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            label: { type: "string" },
            trimestre: { type: "string" },
            dataInicio: { type: "string", format: "date-time" },
            dataFim: { type: "string", format: "date-time" },
            tipo: { type: "string" },
          },
        },
        AuditoriaLogResponse: {
          type: "object",
          properties: {
            data: { type: "array", items: { $ref: "#/components/schemas/AuditLog" } },
            pagination: {
              type: "object",
              properties: {
                page: { type: "integer" },
                limit: { type: "integer" },
                total: { type: "integer" },
                totalPages: { type: "integer" },
              },
            },
          },
        },
        CreateCargo: {
          type: "object",
          required: ["nome", "tipo"],
          properties: {
            nome: { type: "string" },
            descricao: { type: "string" },
            tipo: { type: "string", enum: ["academico", "administrativo", "suporte"] },
          },
        },
        CargoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            descricao: { type: "string", nullable: true },
            tipo: { type: "string" },
            membros: { type: "integer", example: 0 },
          },
        },
        PermissaoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            modulo: { type: "string" },
            descricao: { type: "string", nullable: true },
            admin: { type: "boolean" },
            professor: { type: "boolean" },
            aluno: { type: "boolean" },
          },
        },
        UpdatePermissoes: {
          type: "object",
          required: ["permissoes"],
          properties: {
            permissoes: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  modulo: { type: "string" },
                  admin: { type: "boolean" },
                  professor: { type: "boolean" },
                  aluno: { type: "boolean" },
                },
              },
            },
          },
        },
        TrimestreResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            anoLectivo: { type: "string" },
            dataInicio: { type: "string", format: "date" },
            dataFim: { type: "string", format: "date" },
          },
        },
        DefineTrimestres: {
          type: "object",
          required: ["anoLectivo", "trimestres"],
          properties: {
            anoLectivo: { type: "string" },
            trimestres: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  nome: { type: "string" },
                  dataInicio: { type: "string", format: "date" },
                  dataFim: { type: "string", format: "date" },
                },
              },
              minItems: 3,
              maxItems: 3,
            },
          },
        },
        ParametroAvaliacaoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            sigla: { type: "string" },
            descricao: { type: "string", nullable: true },
            peso: { type: "integer" },
            ordem: { type: "integer" },
          },
        },
        UpdateParametrosAvaliacao: {
          type: "object",
          required: ["parametros"],
          properties: {
            parametros: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string", format: "uuid" },
                  nome: { type: "string" },
                  sigla: { type: "string" },
                  descricao: { type: "string" },
                  peso: { type: "integer", minimum: 0, maximum: 100 },
                  ordem: { type: "integer" },
                },
              },
            },
          },
        },
        CreateAdminUtilizador: {
          type: "object",
          required: ["nome", "email", "username", "senha"],
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            username: { type: "string" },
            cargo: { type: "string" },
            role: { type: "string", enum: ["admin", "superadmin"], default: "admin" },
            senha: { type: "string", format: "password", minLength: 6 },
          },
        },
        AdminUtilizadorResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            email: { type: "string" },
            username: { type: "string" },
            cargo: { type: "string", nullable: true },
            role: { type: "string" },
            ativo: { type: "boolean" },
            ultimoAcesso: { type: "string", nullable: true },
          },
        },
        ToggleAdminUtilizadorStatus: {
          type: "object",
          required: ["ativo"],
          properties: {
            ativo: { type: "boolean" },
          },
        },
        RelatorioCursoResponse: {
          type: "object",
          properties: {
            curso: { type: "string" },
            total: { type: "integer" },
          },
        },
        RelatorioAprovacaoResponse: {
          type: "object",
          properties: {
            turma: { type: "string" },
            totalEstudantes: { type: "integer" },
            aprovados: { type: "integer" },
            taxaAprovacao: { type: "integer" },
          },
        },
        RelatorioDesempenhoResponse: {
          type: "object",
          properties: {
            disciplina: { type: "string" },
            sigla: { type: "string" },
            media: { type: "number" },
            positivas: { type: "integer" },
          },
        },
        RelatorioCargaHorariaResponse: {
          type: "object",
          properties: {
            nome: { type: "string" },
            cargo: { type: "string" },
            disciplinas: { type: "integer" },
            cargaHorariaTotal: { type: "integer" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
