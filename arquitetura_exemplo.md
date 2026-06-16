├── .github
│   └── workflows
│       └── CI_TESTING_AND_STYLE_CHECK.yml
├── .husky
│   └── pre-commit
├── assets
│   └── hexagonal_draw.png
├── prisma
│   └── schema.prisma
├── src
│   ├── core
│   │   └── User
│   │       ├── application
│   │       │   ├── UseCases
│   │       │   │   ├── UserGetProfileUserCase.ts
│   │       │   │   ├── UserLoginUserCase.ts
│   │       │   │   └── UserRegisterUserCase.ts
│   │       │   └── repositoryImplementations
│   │       │       ├── FindUser.ts
│   │       │       └── SaveUser.ts
│   │       ├── domain
│   │       │   ├── IUser.ts
│   │       │   ├── IUserApplicationImplementations.ts
│   │       │   ├── IUserApplicationUserCases.ts
│   │       │   └── IUserRepository.ts
│   │       └── infraestructure
│   │           ├── DTOs
│   │           │   ├── UserLoginDto.ts
│   │           │   └── UserRegisterDto.ts
│   │           ├── containers
│   │           │   ├── UserCasesContainer.ts
│   │           │   └── UserRespositorysContainer.ts
│   │           ├── repositorys
│   │           │   └── PrismaUserRepository.ts
│   │           └── strategys
│   │               └── UserJwt.ts
│   ├── main
│   │   ├── providers
│   │   │   ├── Routes
│   │   │   │   └── User.routes.ts
│   │   │   ├── ApplicationProvider.ts
│   │   │   ├── ErrorHandlerProvider.ts
│   │   │   ├── LocalsProvider.ts
│   │   │   ├── MiddlewaresProvider.ts
│   │   │   ├── PrismaProvider.ts
│   │   │   ├── RedisProvider.ts
│   │   │   └── RouterProvider.ts
│   │   └── env.d.ts
│   ├── shared
│   │   ├── CustomErrors
│   │   │   └── CustomErrors.ts
│   │   ├── PassportProvider
│   │   │   └── infraestructure
│   │   │       └── passportConfig.ts
│   │   ├── Types
│   │   │   ├── IFilter.ts
│   │   │   └── TNullable.ts
│   │   └── providers
│   │       ├── HashProvider
│   │       │   ├── domain
│   │       │   │   └── IHashProvider.ts
│   │       │   └── infraestructure
│   │       │       └── hashprovider.ts
│   │       ├── JwtProvider
│   │       │   ├── domain
│   │       │   │   └── TJwtProvider.ts
│   │       │   └── infraestructure
│   │       │       └── JwtProvider.ts
│   │       ├── Logger
│   │       │   ├── application
│   │       │   │   └── ConsoleLog.ts
│   │       │   ├── domain
│   │       │   │   └── ILogger.ts
│   │       │   └── infraestructure
│   │       │       └── ConsoleLogger.ts
│   │       └── Response
│   │           ├── domain
│   │           │   └── IResponse.ts
│   │           └── infraestructure
│   │               └── Response.ts
│   └── server.ts
├── tests
│   ├── e2e
│   │   ├── ErrorHandler.test.ts
│   │   └── User.test.ts
│   └── unit
│       ├── core
│       │   └── User
│       │       ├── application
│       │       │   └── UseCase.test.ts
│       │       └── infraestructure
│       │           └── Repository.test.ts
│       ├── shared
│       │   └── Providers
│       │       ├── Logger.test.ts
│       │       └── Response.test.ts
│       ├── database.test.ts
│       ├── server.test.ts
│       └── stopserver.test.ts
├── .editorconfig
├── .env.sample
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── SECURITY.md
├── compose.yml
├── jest.config.ts
├── package-lock.json
├── package.json
└── tsconfig.json