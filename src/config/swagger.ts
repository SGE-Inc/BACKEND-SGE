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
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
