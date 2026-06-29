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
        RegisterDto: {
          type: "object",
          required: ["nome", "senha", "role"],
          properties: {
            nome: { type: "string", description: "Nome completo", example: "João Silva" },
            email: { type: "string", format: "email", description: "Email (opcional, usado para login)", example: "utilizador@escola.com" },
            senha: { type: "string", format: "password", minLength: 6, description: "Senha (mín. 6 caracteres)", example: "123456" },
            role: { type: "string", enum: ["ADMIN", "PROFESSOR", "ALUNO"], description: "Tipo de utilizador", example: "ADMIN" },
            telefone: { type: "string", description: "Telefone (opcional)", example: "912345678" },
          },
        },
        LoginDto: {
          type: "object",
          required: ["identificador", "senha"],
          properties: {
            identificador: { type: "string", description: "Email ou número de utilizador", example: "utilizador@escola.com" },
            senha: { type: "string", format: "password", description: "Senha", example: "123456" },
          },
        },
        AuthResponse: {
          type: "object",
          properties: {
            token: { type: "string", description: "Token JWT", example: "eyJhbGciOiJIUzI1NiIs..." },
            user: {
              type: "object",
              properties: {
                id: { type: "string", format: "uuid" },
                nome: { type: "string" },
                email: { type: "string", nullable: true },
                role: { type: "string" },
              },
            },
          },
        },
        MeResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            email: { type: "string", nullable: true },
            telefone: { type: "string", nullable: true },
            numeroUtilizador: { type: "string", nullable: true },
            role: { type: "string" },
            status: { type: "string" },
            avatar: { type: "string", nullable: true },
            createdAt: { type: "string", format: "date-time" },
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
        ResetSenha: {
          type: "object",
          required: ["senhaActual", "novaSenha"],
          properties: {
            senhaActual: { type: "string", format: "password", description: "Senha actual" },
            novaSenha: { type: "string", format: "password", minLength: 6, description: "Nova senha (mín. 6 caracteres)" },
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

        ProfessorStatsResponse: {
          type: "object",
          properties: {
            totalDisciplinas: { type: "integer", example: 5 },
            totalTurmas: { type: "integer", example: 3 },
            totalMateriais: { type: "integer", example: 12 },
            totalAvisos: { type: "integer", example: 8 },
            totalEstudantes: { type: "integer", example: 90 },
          },
        },
        ProfessorDisciplinaResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            sigla: { type: "string" },
            classe: { type: "string" },
            cargaHoraria: { type: "integer" },
            cor: { type: "string", nullable: true },
            turma: { type: "object", properties: { id: { type: "string" }, nome: { type: "string" } } },
            curso: { type: "object", properties: { id: { type: "string" }, nome: { type: "string" }, sigla: { type: "string" } } },
            totalAlunos: { type: "integer", example: 30 },
          },
        },
        ProfessorEventoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            tipo: { type: "string", example: "exame" },
            titulo: { type: "string" },
            turma: { type: "string" },
            data: { type: "string", format: "date-time" },
            hora: { type: "string" },
            sala: { type: "string" },
          },
        },
        ProfessorHorarioResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            dia: { type: "string", enum: ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"] },
            horaInicio: { type: "string", example: "08:00" },
            horaFim: { type: "string", example: "09:30" },
            sala: { type: "string", nullable: true },
            disciplina: {
              type: "object",
              properties: {
                id: { type: "string" },
                nome: { type: "string" },
                sigla: { type: "string" },
                cor: { type: "string" },
              },
            },
            turma: { type: "object", properties: { id: { type: "string" }, nome: { type: "string" }, classe: { type: "string" } } },
          },
        },
        CreateMaterial: {
          type: "object",
          required: ["titulo", "disciplinaId"],
          properties: {
            titulo: { type: "string" },
            descricao: { type: "string" },
            tipo: { type: "string", default: "pdf" },
            url: { type: "string" },
            ficheiro: { type: "string" },
            tamanho: { type: "integer" },
            visivel: { type: "boolean", default: true },
            disciplinaId: { type: "string", format: "uuid" },
          },
        },
        MaterialResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            titulo: { type: "string" },
            descricao: { type: "string", nullable: true },
            tipo: { type: "string" },
            url: { type: "string", nullable: true },
            ficheiro: { type: "string", nullable: true },
            visivel: { type: "boolean" },
            disciplinaId: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
          },
        },
        CreateAviso: {
          type: "object",
          required: ["texto", "disciplinaId", "autor"],
          properties: {
            texto: { type: "string" },
            disciplinaId: { type: "string", format: "uuid" },
            autor: { type: "string" },
          },
        },
        AvisoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            texto: { type: "string" },
            disciplinaId: { type: "string" },
            autor: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
          },
        },
        ProfessorEstudanteResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            email: { type: "string", nullable: true },
            numeroProcesso: { type: "string" },
            status: { type: "string" },
            turmaId: { type: "string", nullable: true },
            totalFaltas: { type: "integer", example: 0 },
          },
        },
        ProfessorNotaResponse: {
          type: "object",
          properties: {
            exameId: { type: "string", format: "uuid" },
            tipo: { type: "string" },
            trimestre: { type: "string" },
            data: { type: "string", format: "date-time" },
            nota: { type: "number" },
          },
        },
        ProfessorFaltaResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            alunoId: { type: "string" },
            disciplinaId: { type: "string" },
            data: { type: "string", format: "date-time" },
            justificada: { type: "boolean" },
            justificacao: { type: "string", nullable: true },
          },
        },
        AlunoPerfilResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            userId: { type: "string", format: "uuid" },
            nome: { type: "string" },
            email: { type: "string", nullable: true },
            telefone: { type: "string", nullable: true },
            numeroUtilizador: { type: "string", nullable: true },
            status: { type: "string" },
            dataNascimento: { type: "string", format: "date-time" },
            tipoIdentificacao: { type: "string" },
            numeroIdentificacao: { type: "string" },
            numeroProcesso: { type: "string" },
            turmaNome: { type: "string", nullable: true },
            cursoNome: { type: "string", nullable: true },
            classe: { type: "string", nullable: true },
            turno: { type: "string", nullable: true },
            genero: { type: "string", nullable: true },
            estadoCivil: { type: "string", nullable: true },
            nomePai: { type: "string", nullable: true },
            nomeMae: { type: "string", nullable: true },
            naturalidade: { type: "string", nullable: true },
            provincia: { type: "string", nullable: true },
            municipio: { type: "string", nullable: true },
            comuna: { type: "string", nullable: true },
            encarregadoNome: { type: "string", nullable: true },
            encarregadoParentesco: { type: "string", nullable: true },
            encarregadoGenero: { type: "string", nullable: true },
            encarregadoDataNascimento: { type: "string", nullable: true },
            encarregadoTelefone: { type: "string", nullable: true },
            encarregadoEmail: { type: "string", nullable: true },
          },
        },
        AlunoDashboardStats: {
          type: "object",
          properties: {
            totalDisciplinas: { type: "integer", example: 11 },
            totalMateriais: { type: "integer", example: 22 },
            totalExames: { type: "integer", example: 15 },
            turmaNome: { type: "string", nullable: true },
          },
        },
        AlunoRankingResponse: {
          type: "object",
          properties: {
            position: { type: "integer" },
            name: { type: "string" },
            score: { type: "number" },
            isCurrentUser: { type: "boolean" },
          },
        },
        AlunoDisciplinaResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            nome: { type: "string" },
            sigla: { type: "string" },
            cor: { type: "string" },
            professorNome: { type: "string" },
            totalMateriais: { type: "integer" },
          },
        },
        AlunoBoletimResponse: {
          type: "object",
          properties: {
            trimestre: { type: "string" },
            disciplinas: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  n: { type: "integer" },
                  nome: { type: "string" },
                  faltasJ: { type: "integer" },
                  faltasI: { type: "integer" },
                  pp: { type: "number", nullable: true },
                  pt: { type: "number", nullable: true },
                  mt: { type: "number", nullable: true },
                },
              },
            },
            media: { type: "number" },
          },
        },
        AlunoConvocatoriaResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            trimestre: { type: "string" },
            dataEmissao: { type: "string", format: "date-time" },
            dataRealizacao: { type: "string", format: "date-time" },
            hora: { type: "string" },
            sala: { type: "string" },
            agenda: { type: "array", items: { type: "string" } },
          },
        },
        AlunoInformacaoResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            titulo: { type: "string" },
            descricao: { type: "string", nullable: true },
            conteudo: { type: "string" },
            dataPublicacao: { type: "string", format: "date-time" },
            imagemUrl: { type: "string", nullable: true },
            link: { type: "string", nullable: true },
            hasIcon: { type: "boolean" },
          },
        },
        AlunoProvaResponse: {
          type: "object",
          properties: {
            id: { type: "string" },
            data: { type: "string", format: "date-time" },
            hora: { type: "string" },
            sala: { type: "string" },
            tipo: { type: "string" },
            trimestre: { type: "string" },
            disciplina: { type: "string" },
            sigla: { type: "string" },
            estado: { type: "string" },
          },
        },
        AlunoMaterialResponse: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            titulo: { type: "string" },
            descricao: { type: "string", nullable: true },
            tipo: { type: "string" },
            ficheiro: { type: "string", nullable: true },
            tamanho: { type: "integer", nullable: true },
            visivel: { type: "boolean" },
            createdAt: { type: "string", format: "date-time" },
          },
        },
      },
    },
    paths: {
      "/health": {
        get: {
          tags: ["Health"],
          summary: "Verificação de saúde da API",
          responses: {
            200: { description: "API saudável" },
          },
        },
      },


      "/admin/utilizadores": {
        get: {
          tags: ["Admin Utilizadores"],
          summary: "Listar utilizadores",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de utilizadores", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AdminUtilizadorResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Admin Utilizadores"],
          summary: "Criar utilizador",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateAdminUtilizador" } } },
          },
          responses: {
            201: { description: "Utilizador criado com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/utilizadores/{id}": {
        put: {
          tags: ["Admin Utilizadores"],
          summary: "Actualizar utilizador",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/AdminUtilizadorResponse" } } },
          },
          responses: {
            200: { description: "Utilizador actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        patch: {
          tags: ["Admin Utilizadores"],
          summary: "Alternar estado do utilizador",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/ToggleAdminUtilizadorStatus" } } },
          },
          responses: {
            200: { description: "Estado alterado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Admin Utilizadores"],
          summary: "Eliminar utilizador",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Utilizador eliminado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/cargos": {
        get: {
          tags: ["Cargos"],
          summary: "Listar cargos",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de cargos", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/CargoResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Cargos"],
          summary: "Criar cargo",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateCargo" } } },
          },
          responses: {
            201: { description: "Cargo criado com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/cargos/{id}": {
        get: {
          tags: ["Cargos"],
          summary: "Obter cargo por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Dados do cargo", content: { "application/json": { schema: { $ref: "#/components/schemas/CargoResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        put: {
          tags: ["Cargos"],
          summary: "Actualizar cargo",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateCargo" } } },
          },
          responses: {
            200: { description: "Cargo actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Cargos"],
          summary: "Eliminar cargo",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Cargo eliminado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/permissoes": {
        get: {
          tags: ["Permissões"],
          summary: "Listar permissões",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de permissões", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/PermissaoResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/permissoes/meu-perfil": {
        get: {
          tags: ["Permissões"],
          summary: "Obter permissões do utilizador autenticado",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Permissões do utilizador" },
            401: { description: "Não autenticado" },
          },
        },
      },
      "/admin/permissoes/{id}": {
        put: {
          tags: ["Permissões"],
          summary: "Actualizar permissão",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdatePermissoes" } } },
          },
          responses: {
            200: { description: "Permissão actualizada" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/configuracoes/instituicao": {
        get: {
          tags: ["Configurações"],
          summary: "Obter informações da instituição",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Informações da instituição", content: { "application/json": { schema: { $ref: "#/components/schemas/InstituicaoResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        put: {
          tags: ["Configurações"],
          summary: "Actualizar informações da instituição",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateInstituicao" } } },
          },
          responses: {
            200: { description: "Instituição actualizada" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/configuracoes/instituicao/logotipo": {
        post: {
          tags: ["Configurações"],
          summary: "Upload de logotipo da instituição",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "multipart/form-data": { schema: { type: "object", properties: { logotipo: { type: "string", format: "binary" } } } } },
          },
          responses: {
            200: { description: "Logotipo actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/configuracoes/anos-lectivos": {
        get: {
          tags: ["Configurações"],
          summary: "Listar anos lectivos",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de anos lectivos", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AnoLectivoResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Configurações"],
          summary: "Criar ano lectivo",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateAnoLectivo" } } },
          },
          responses: {
            201: { description: "Ano lectivo criado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/configuracoes/anos-lectivos/{id}/activar": {
        patch: {
          tags: ["Configurações"],
          summary: "Activar ano lectivo",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Ano lectivo activado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/configuracoes/anos-lectivos/{id}": {
        put: {
          tags: ["Configurações"],
          summary: "Actualizar ano lectivo",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateAnoLectivo" } } },
          },
          responses: {
            200: { description: "Ano lectivo actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/cursos": {
        get: {
          tags: ["Cursos"],
          summary: "Listar cursos",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de cursos", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/CursoResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Cursos"],
          summary: "Criar curso",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateCurso" } } },
          },
          responses: {
            201: { description: "Curso criado com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/cursos/{id}": {
        get: {
          tags: ["Cursos"],
          summary: "Obter curso por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Dados do curso", content: { "application/json": { schema: { $ref: "#/components/schemas/CursoResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        put: {
          tags: ["Cursos"],
          summary: "Actualizar curso",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateCurso" } } },
          },
          responses: {
            200: { description: "Curso actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Cursos"],
          summary: "Eliminar curso",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Curso eliminado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/disciplinas": {
        get: {
          tags: ["Disciplinas"],
          summary: "Listar disciplinas",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de disciplinas", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/DisciplinaResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Disciplinas"],
          summary: "Criar disciplina",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateDisciplina" } } },
          },
          responses: {
            201: { description: "Disciplina criada com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/disciplinas/{id}": {
        get: {
          tags: ["Disciplinas"],
          summary: "Obter disciplina por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Dados da disciplina", content: { "application/json": { schema: { $ref: "#/components/schemas/DisciplinaResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        put: {
          tags: ["Disciplinas"],
          summary: "Actualizar disciplina",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateDisciplina" } } },
          },
          responses: {
            200: { description: "Disciplina actualizada" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Disciplinas"],
          summary: "Eliminar disciplina",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Disciplina eliminada" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/turmas": {
        get: {
          tags: ["Turmas"],
          summary: "Listar turmas",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de turmas", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/TurmaResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Turmas"],
          summary: "Criar turma",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateTurma" } } },
          },
          responses: {
            201: { description: "Turma criada com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/turmas/{id}": {
        get: {
          tags: ["Turmas"],
          summary: "Obter turma por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Dados da turma", content: { "application/json": { schema: { $ref: "#/components/schemas/TurmaResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        put: {
          tags: ["Turmas"],
          summary: "Actualizar turma",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateTurma" } } },
          },
          responses: {
            200: { description: "Turma actualizada" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Turmas"],
          summary: "Eliminar turma",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Turma eliminada" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/turmas/{id}/estudantes": {
        get: {
          tags: ["Turmas"],
          summary: "Listar estudantes da turma",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Lista de estudantes da turma" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Turma não encontrada" },
          },
        },
      },
      "/admin/professors": {
        get: {
          tags: ["Professores"],
          summary: "Listar professores",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de professores", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Professores"],
          summary: "Criar professor",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateProfessor" } } },
          },
          responses: {
            201: { description: "Professor criado com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/professors/{id}": {
        get: {
          tags: ["Professores"],
          summary: "Obter professor por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Dados do professor", content: { "application/json": { schema: { $ref: "#/components/schemas/ProfessorResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        put: {
          tags: ["Professores"],
          summary: "Actualizar professor",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateProfessor" } } },
          },
          responses: {
            200: { description: "Professor actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Professores"],
          summary: "Eliminar professor",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Professor eliminado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/professors/{id}/status": {
        patch: {
          tags: ["Professores"],
          summary: "Alternar status do professor",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Status alterado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/estudantes": {
        get: {
          tags: ["Estudantes"],
          summary: "Listar estudantes",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "page", in: "query", schema: { type: "integer", default: 1 } },
            { name: "limit", in: "query", schema: { type: "integer", default: 10 } },
            { name: "search", in: "query", schema: { type: "string" } },
            { name: "curso", in: "query", schema: { type: "string" } },
            { name: "turma", in: "query", schema: { type: "string" } },
            { name: "status", in: "query", schema: { type: "string" } },
          ],
          responses: {
            200: { description: "Lista de estudantes", content: { "application/json": { schema: { $ref: "#/components/schemas/EstudanteListResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Estudantes"],
          summary: "Criar estudante",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateEstudante" } } },
          },
          responses: {
            201: { description: "Estudante criado com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/estudantes/{id}": {
        get: {
          tags: ["Estudantes"],
          summary: "Obter estudante por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Dados do estudante", content: { "application/json": { schema: { $ref: "#/components/schemas/EstudanteDetailResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        put: {
          tags: ["Estudantes"],
          summary: "Actualizar estudante",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateEstudante" } } },
          },
          responses: {
            200: { description: "Estudante actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Estudantes"],
          summary: "Eliminar estudante",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Estudante eliminado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/estudantes/processo/{numeroProcesso}": {
        get: {
          tags: ["Estudantes"],
          summary: "Obter estudante por número de processo",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "numeroProcesso", in: "path", required: true, schema: { type: "string" } },
          ],
          responses: {
            200: { description: "Dados do estudante", content: { "application/json": { schema: { $ref: "#/components/schemas/EstudanteDetailResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/estudantes/{id}/estado": {
        patch: {
          tags: ["Estudantes"],
          summary: "Alterar estado do estudante",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/ChangeEstudanteStatus" } } },
          },
          responses: {
            200: { description: "Estado alterado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/estudantes/{id}/transferir": {
        post: {
          tags: ["Estudantes"],
          summary: "Transferir estudante de turma",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/TransferirEstudante" } } },
          },
          responses: {
            200: { description: "Estudante transferido" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/estudantes/{id}/historico": {
        get: {
          tags: ["Estudantes"],
          summary: "Obter histórico do estudante",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Histórico do estudante" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/exames": {
        get: {
          tags: ["Exames"],
          summary: "Listar exames",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "page", in: "query", schema: { type: "integer", default: 1 } },
            { name: "limit", in: "query", schema: { type: "integer", default: 10 } },
            { name: "disciplinaId", in: "query", schema: { type: "string" } },
            { name: "turmaId", in: "query", schema: { type: "string" } },
            { name: "tipo", in: "query", schema: { type: "string" } },
            { name: "trimestre", in: "query", schema: { type: "string" } },
            { name: "estado", in: "query", schema: { type: "string" } },
            { name: "curso", in: "query", schema: { type: "string" } },
          ],
          responses: {
            200: { description: "Lista de exames" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Exames"],
          summary: "Criar exame",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateExame" } } },
          },
          responses: {
            201: { description: "Exame criado com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/exames/{id}": {
        get: {
          tags: ["Exames"],
          summary: "Obter exame por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Dados do exame", content: { "application/json": { schema: { $ref: "#/components/schemas/ExameResponse" } } } },
            401: { description: "Não autenticado" },
            404: { description: "Não encontrado" },
          },
        },
        put: {
          tags: ["Exames"],
          summary: "Actualizar exame",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateExame" } } },
          },
          responses: {
            200: { description: "Exame actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        delete: {
          tags: ["Exames"],
          summary: "Eliminar exame",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Exame eliminado" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/exames/{id}/estado": {
        patch: {
          tags: ["Exames"],
          summary: "Alterar estado do exame",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/ChangeExameEstado" } } },
          },
          responses: {
            200: { description: "Estado alterado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/exames/{id}/resultados": {
        post: {
          tags: ["Exames"],
          summary: "Lançar resultados do exame",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/LancarResultados" } } },
          },
          responses: {
            200: { description: "Resultados lançados" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
        get: {
          tags: ["Exames"],
          summary: "Obter resultados do exame",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Resultados do exame" },
            401: { description: "Não autenticado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/exames/{id}/historico": {
        get: {
          tags: ["Exames"],
          summary: "Obter histórico do exame",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Histórico do exame" },
            401: { description: "Não autenticado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/exames/calendario": {
        get: {
          tags: ["Exames"],
          summary: "Obter calendário de exames",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "turmaId", in: "query", schema: { type: "string" } },
            { name: "disciplinaId", in: "query", schema: { type: "string" } },
            { name: "trimestre", in: "query", schema: { type: "string" } },
          ],
          responses: {
            200: { description: "Calendário de exames" },
            401: { description: "Não autenticado" },
          },
        },
      },
      "/admin/exames/epocas": {
        get: {
          tags: ["Exames"],
          summary: "Listar épocas de exame",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de épocas", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/EpocaExameResponse" } } } } },
            401: { description: "Não autenticado" },
          },
        },
        post: {
          tags: ["Exames"],
          summary: "Criar época de exame",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/CreateEpocaExame" } } },
          },
          responses: {
            201: { description: "Época criada com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/trimestres": {
        get: {
          tags: ["Trimestres"],
          summary: "Listar trimestres",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "anoLectivo", in: "query", schema: { type: "string" } },
          ],
          responses: {
            200: { description: "Lista de trimestres", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/TrimestreResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/trimestres/definir": {
        post: {
          tags: ["Trimestres"],
          summary: "Definir trimestres para um ano lectivo",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/DefineTrimestres" } } },
          },
          responses: {
            201: { description: "Trimestres definidos" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/parametros-avaliacao": {
        get: {
          tags: ["Parâmetros Avaliação"],
          summary: "Listar parâmetros de avaliação",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Lista de parâmetros", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ParametroAvaliacaoResponse" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
        post: {
          tags: ["Parâmetros Avaliação"],
          summary: "Criar ou actualizar parâmetro de avaliação (upsert)",
          security: [{ cookieAuth: [] }],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/ParametroAvaliacaoResponse" } } },
          },
          responses: {
            200: { description: "Parâmetro salvo" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/parametros-avaliacao/{id}": {
        put: {
          tags: ["Parâmetros Avaliação"],
          summary: "Actualizar parâmetro de avaliação",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          requestBody: {
            required: true,
            content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateParametrosAvaliacao" } } },
          },
          responses: {
            200: { description: "Parâmetro actualizado" },
            400: { description: "Dados inválidos" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/auditoria": {
        get: {
          tags: ["Auditoria"],
          summary: "Listar logs de auditoria",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "page", in: "query", schema: { type: "integer", default: 1 } },
            { name: "limit", in: "query", schema: { type: "integer", default: 10 } },
            { name: "tipo", in: "query", schema: { type: "string" } },
            { name: "role", in: "query", schema: { type: "string" } },
            { name: "utilizador", in: "query", schema: { type: "string" } },
            { name: "dataInicio", in: "query", schema: { type: "string", format: "date" } },
            { name: "dataFim", in: "query", schema: { type: "string", format: "date" } },
          ],
          responses: {
            200: { description: "Logs de auditoria", content: { "application/json": { schema: { $ref: "#/components/schemas/AuditoriaLogResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/auditoria/{id}": {
        get: {
          tags: ["Auditoria"],
          summary: "Obter log de auditoria por ID",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
          ],
          responses: {
            200: { description: "Log de auditoria" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
            404: { description: "Não encontrado" },
          },
        },
      },
      "/admin/auditoria/estatisticas": {
        get: {
          tags: ["Auditoria"],
          summary: "Obter estatísticas de auditoria",
          security: [{ cookieAuth: [] }],
          parameters: [
            { name: "periodo", in: "query", schema: { type: "string" } },
          ],
          responses: {
            200: { description: "Estatísticas de auditoria" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/dashboard/stats": {
        get: {
          tags: ["Dashboard"],
          summary: "Obter estatísticas do dashboard",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Estatísticas do dashboard", content: { "application/json": { schema: { $ref: "#/components/schemas/DashboardStats" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/dashboard/distribuicao-cursos": {
        get: {
          tags: ["Dashboard"],
          summary: "Obter distribuição de cursos",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Distribuição de cursos", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/CursoDistribuicao" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/dashboard/evolucao-matriculas": {
        get: {
          tags: ["Dashboard"],
          summary: "Obter evolução de matrículas",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Evolução de matrículas" },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/dashboard/media-disciplinas": {
        get: {
          tags: ["Dashboard"],
          summary: "Obter média por disciplinas",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Média por disciplinas", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/MediaDisciplina" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/dashboard/ultimos-logs": {
        get: {
          tags: ["Dashboard"],
          summary: "Obter últimos logs de auditoria",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Últimos logs", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AuditLog" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/dashboard/proximos-eventos": {
        get: {
          tags: ["Dashboard"],
          summary: "Obter próximos eventos académicos",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Próximos eventos", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/EventoAcademico" } } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/relatorios/estudantes-por-curso": {
        get: {
          tags: ["Relatórios"],
          summary: "Relatório de estudantes por curso",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Relatório de estudantes por curso", content: { "application/json": { schema: { $ref: "#/components/schemas/RelatorioCursoResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/relatorios/aprovacao-por-turma": {
        get: {
          tags: ["Relatórios"],
          summary: "Relatório de aprovação por turma",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Relatório de aprovação por turma", content: { "application/json": { schema: { $ref: "#/components/schemas/RelatorioAprovacaoResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/relatorios/desempenho-disciplinas": {
        get: {
          tags: ["Relatórios"],
          summary: "Relatório de desempenho por disciplina",
          security: [{ cookieAuth: [] }],
          responses: {
            200: { description: "Relatório de desempenho", content: { "application/json": { schema: { $ref: "#/components/schemas/RelatorioDesempenhoResponse" } } } },
            401: { description: "Não autenticado" },
            403: { description: "Acesso negado" },
          },
        },
      },
      "/admin/relatorios/professores-carga-horaria": {
         get: {
           tags: ["Relatórios"],
           summary: "Relatório de carga horária dos professores",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Relatório de carga horária", content: { "application/json": { schema: { $ref: "#/components/schemas/RelatorioCargaHorariaResponse" } } } },
             401: { description: "Não autenticado" },
             403: { description: "Acesso negado" },
           },
         },
       },
        "/auth/register": {
          post: {
            tags: ["Auth"],
            summary: "Registar novo utilizador",
            requestBody: {
              required: true,
              content: { "application/json": { schema: { $ref: "#/components/schemas/RegisterDto" } } },
            },
            responses: {
              201: { description: "Utilizador registado com sucesso" },
              400: { description: "Dados inválidos", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
              409: { description: "Email já registado" },
            },
          },
        },
        "/auth/login": {
          post: {
            tags: ["Auth"],
            summary: "Login (email ou número de utilizador)",
            requestBody: {
              required: true,
              content: { "application/json": { schema: { $ref: "#/components/schemas/LoginDto" } } },
            },
            responses: {
              200: { description: "Login bem-sucedido", content: { "application/json": { schema: { $ref: "#/components/schemas/AuthResponse" } } } },
              401: { description: "Credenciais inválidas", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } },
              403: { description: "Conta desactivada" },
            },
          },
        },
        "/auth/logout": {
          post: {
            tags: ["Auth"],
            summary: "Logout",
            security: [{ cookieAuth: [] }],
            responses: { 200: { description: "Logout bem-sucedido" } },
          },
        },
        "/auth/me": {
          get: {
            tags: ["Auth"],
            summary: "Obter perfil do utilizador autenticado",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Perfil do utilizador", content: { "application/json": { schema: { $ref: "#/components/schemas/MeResponse" } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/auth/reset-senha": {
          put: {
            tags: ["Auth"],
            summary: "Alterar senha",
            security: [{ cookieAuth: [] }],
            requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/ResetSenha" } } } },
            responses: {
              200: { description: "Senha alterada com sucesso" },
              400: { description: "Dados inválidos" },
              401: { description: "Não autenticado" },
            },
          },
        },
       "/professor/dashboard/stats": {
         get: {
           tags: ["Professor Dashboard"],
           summary: "Obter estatísticas do professor",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Estatísticas do professor", content: { "application/json": { schema: { $ref: "#/components/schemas/ProfessorStatsResponse" } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/dashboard/disciplinas": {
         get: {
           tags: ["Professor Dashboard"],
           summary: "Listar disciplinas do professor",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Disciplinas do professor", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorDisciplinaResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/dashboard/proximos-eventos": {
         get: {
           tags: ["Professor Dashboard"],
           summary: "Obter próximos eventos",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Próximos eventos", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorEventoResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/dashboard/horario": {
         get: {
           tags: ["Professor Dashboard"],
           summary: "Obter horário semanal",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Horário semanal", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorHorarioResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/dashboard/turmas": {
         get: {
           tags: ["Professor Dashboard"],
           summary: "Listar turmas do professor",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Turmas do professor", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorDisciplinaResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/disciplinas": {
         get: {
           tags: ["Professor Disciplinas"],
           summary: "Listar disciplinas do professor",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Disciplinas do professor", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorDisciplinaResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/disciplinas/{disciplinaId}/materiais": {
         get: {
           tags: ["Professor Disciplinas"],
           summary: "Listar materiais de uma disciplina",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "disciplinaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Materiais da disciplina", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/MaterialResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/disciplinas/materiais": {
         post: {
           tags: ["Professor Disciplinas"],
           summary: "Criar material didático",
           security: [{ cookieAuth: [] }],
           requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateMaterial" } } } },
           responses: {
             201: { description: "Material criado com sucesso" },
             400: { description: "Dados inválidos" },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/disciplinas/materiais/{id}": {
         put: {
           tags: ["Professor Disciplinas"],
           summary: "Actualizar material didático",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateMaterial" } } } },
           responses: {
             200: { description: "Material actualizado" },
             400: { description: "Dados inválidos" },
             401: { description: "Não autenticado" },
             404: { description: "Não encontrado" },
           },
         },
         delete: {
           tags: ["Professor Disciplinas"],
           summary: "Eliminar material didático",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Material eliminado" },
             401: { description: "Não autenticado" },
             404: { description: "Não encontrado" },
           },
         },
       },
       "/professor/disciplinas/{disciplinaId}/avisos": {
         get: {
           tags: ["Professor Disciplinas"],
           summary: "Listar avisos de uma disciplina",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "disciplinaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Avisos da disciplina", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AvisoResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/disciplinas/avisos": {
         post: {
           tags: ["Professor Disciplinas"],
           summary: "Criar aviso",
           security: [{ cookieAuth: [] }],
           requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateAviso" } } } },
           responses: {
             201: { description: "Aviso criado com sucesso" },
             400: { description: "Dados inválidos" },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/disciplinas/avisos/{id}": {
         delete: {
           tags: ["Professor Disciplinas"],
           summary: "Eliminar aviso",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Aviso eliminado" },
             401: { description: "Não autenticado" },
             404: { description: "Não encontrado" },
           },
         },
       },
       "/professor/disciplinas/{disciplinaId}/alunos": {
         get: {
           tags: ["Professor Disciplinas"],
           summary: "Listar alunos de uma disciplina",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "disciplinaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Alunos da disciplina", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorEstudanteResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/estudantes/turma/{turmaId}": {
         get: {
           tags: ["Professor Estudantes"],
           summary: "Listar estudantes de uma turma",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "turmaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Estudantes da turma", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorEstudanteResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/estudantes/disciplina/{disciplinaId}": {
         get: {
           tags: ["Professor Estudantes"],
           summary: "Listar estudantes de uma disciplina",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "disciplinaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Estudantes da disciplina", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorEstudanteResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/estudantes/{alunoId}/notas/{disciplinaId}": {
         get: {
           tags: ["Professor Estudantes"],
           summary: "Obter notas de um estudante numa disciplina",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "alunoId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
             { name: "disciplinaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Notas do estudante", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorNotaResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/estudantes/{alunoId}/faltas/{disciplinaId}": {
         get: {
           tags: ["Professor Estudantes"],
           summary: "Obter faltas de um estudante numa disciplina",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "alunoId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
             { name: "disciplinaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Faltas do estudante", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorFaltaResponse" } } } } },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/exames": {
         get: {
           tags: ["Professor Exames"],
           summary: "Listar exames do professor",
           security: [{ cookieAuth: [] }],
           responses: {
             200: { description: "Lista de exames" },
             401: { description: "Não autenticado" },
           },
         },
         post: {
           tags: ["Professor Exames"],
           summary: "Criar exame",
           security: [{ cookieAuth: [] }],
           requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateExame" } } } },
           responses: {
             201: { description: "Exame criado com sucesso" },
             400: { description: "Dados inválidos" },
             401: { description: "Não autenticado" },
           },
         },
       },
       "/professor/exames/{id}": {
         get: {
           tags: ["Professor Exames"],
           summary: "Obter exame por ID",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Dados do exame" },
             401: { description: "Não autenticado" },
             404: { description: "Não encontrado" },
           },
         },
         put: {
           tags: ["Professor Exames"],
           summary: "Actualizar exame",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateExame" } } } },
           responses: {
             200: { description: "Exame actualizado" },
             400: { description: "Dados inválidos" },
             401: { description: "Não autenticado" },
             404: { description: "Não encontrado" },
           },
         },
         delete: {
           tags: ["Professor Exames"],
           summary: "Eliminar exame",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Exame eliminado" },
             401: { description: "Não autenticado" },
             404: { description: "Não encontrado" },
           },
         },
       },
       "/professor/exames/{id}/resultados": {
         get: {
           tags: ["Professor Exames"],
           summary: "Obter resultados do exame",
           security: [{ cookieAuth: [] }],
           parameters: [
             { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
           ],
           responses: {
             200: { description: "Resultados do exame" },
             401: { description: "Não autenticado" },
             404: { description: "Não encontrado" },
           },
         },
       },
        "/professor/horario": {
          get: {
            tags: ["Professor Horário"],
            summary: "Obter horário semanal do professor",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Horário semanal", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorHorarioResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/perfil": {
          get: {
            tags: ["Aluno"],
            summary: "Obter perfil completo do aluno",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Perfil do aluno", content: { "application/json": { schema: { $ref: "#/components/schemas/AlunoPerfilResponse" } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/dashboard/stats": {
          get: {
            tags: ["Aluno Dashboard"],
            summary: "Obter estatísticas do aluno",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Estatísticas", content: { "application/json": { schema: { $ref: "#/components/schemas/AlunoDashboardStats" } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/dashboard/ranking": {
          get: {
            tags: ["Aluno Dashboard"],
            summary: "Obter ranking da turma",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "turmaId", in: "query", required: true, schema: { type: "string", format: "uuid" } },
              { name: "trimestre", in: "query", schema: { type: "string" } },
            ],
            responses: {
              200: { description: "Ranking", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AlunoRankingResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/dashboard/melhores-disciplinas": {
          get: {
            tags: ["Aluno Dashboard"],
            summary: "Obter melhores disciplinas do aluno",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Melhores disciplinas" },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/dashboard/distribuicao-notas": {
          get: {
            tags: ["Aluno Dashboard"],
            summary: "Obter distribuição de notas",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Distribuição de notas" },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/turma/disciplinas": {
          get: {
            tags: ["Aluno Turma"],
            summary: "Listar disciplinas da turma",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "turmaId", in: "query", required: true, schema: { type: "string", format: "uuid" } },
            ],
            responses: {
              200: { description: "Disciplinas", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AlunoDisciplinaResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/turma/disciplinas/{disciplinaId}/materiais": {
          get: {
            tags: ["Aluno Turma"],
            summary: "Listar materiais de uma disciplina",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "disciplinaId", in: "path", required: true, schema: { type: "string", format: "uuid" } },
            ],
            responses: {
              200: { description: "Materiais", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AlunoMaterialResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/turma/materiais": {
          post: {
            tags: ["Aluno Turma"],
            summary: "Submeter material",
            security: [{ cookieAuth: [] }],
            requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateMaterial" } } } },
            responses: {
              201: { description: "Material submetido" },
              400: { description: "Dados inválidos" },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/boletins": {
          get: {
            tags: ["Aluno Boletins"],
            summary: "Obter boletins do aluno",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "trimestre", in: "query", schema: { type: "string" } },
            ],
            responses: {
              200: { description: "Boletins", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AlunoBoletimResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/boletins/{trimestre}": {
          get: {
            tags: ["Aluno Boletins"],
            summary: "Obter boletim de um trimestre específico",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "trimestre", in: "path", required: true, schema: { type: "string" } },
            ],
            responses: {
              200: { description: "Boletim do trimestre", content: { "application/json": { schema: { $ref: "#/components/schemas/AlunoBoletimResponse" } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/horario": {
          get: {
            tags: ["Aluno Horário"],
            summary: "Obter horário semanal da turma",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "turmaId", in: "query", required: true, schema: { type: "string", format: "uuid" } },
            ],
            responses: {
              200: { description: "Horário semanal", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/ProfessorHorarioResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/provas/calendario": {
          get: {
            tags: ["Aluno Provas"],
            summary: "Obter calendário de provas",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "trimestre", in: "query", schema: { type: "string" } },
              { name: "calendario", in: "query", schema: { type: "string" } },
            ],
            responses: {
              200: { description: "Calendário de provas", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AlunoProvaResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/provas/epocas": {
          get: {
            tags: ["Aluno Provas"],
            summary: "Listar épocas de prova",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Épocas de prova" },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/convocatorias": {
          get: {
            tags: ["Aluno Convocatórias"],
            summary: "Listar convocatórias do aluno",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Convocatórias", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AlunoConvocatoriaResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/informacoes": {
          get: {
            tags: ["Aluno Informações"],
            summary: "Listar informações/avisos",
            security: [{ cookieAuth: [] }],
            responses: {
              200: { description: "Informações", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/AlunoInformacaoResponse" } } } } },
              401: { description: "Não autenticado" },
            },
          },
        },
        "/aluno/informacoes/{id}": {
          get: {
            tags: ["Aluno Informações"],
            summary: "Obter informação por ID",
            security: [{ cookieAuth: [] }],
            parameters: [
              { name: "id", in: "path", required: true, schema: { type: "string", format: "uuid" } },
            ],
            responses: {
              200: { description: "Informação", content: { "application/json": { schema: { $ref: "#/components/schemas/AlunoInformacaoResponse" } } } },
              404: { description: "Não encontrada" },
              401: { description: "Não autenticado" },
            },
          },
        },
      },
    },
   apis: [],
};

export const swaggerSpec = swaggerJsdoc(options);
