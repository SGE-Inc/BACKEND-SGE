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
          required: ["nome", "dataNascimento", "tipoIdentificacao", "numeroIdentificacao", "numeroProcesso", "ultimaClasseFrequentada", "telefone"],
          properties: {
            nome: { type: "string", description: "Nome completo do aluno", example: "João Silva" },
            dataNascimento: { type: "string", format: "date", description: "Data de nascimento", example: "2008-05-15" },
            tipoIdentificacao: { type: "string", enum: ["BI", "PASSAPORTE"], description: "Tipo de identificação" },
            numeroIdentificacao: { type: "string", description: "Nº do documento", example: "021528943LA053" },
            numeroProcesso: { type: "string", description: "Nº de processo do aluno", example: "80727" },
            ultimaClasseFrequentada: { type: "string", description: "Última classe frequentada", example: "9ª Classe" },
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
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
