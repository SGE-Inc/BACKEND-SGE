
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model ProfessorDisciplina
 * 
 */
export type ProfessorDisciplina = $Result.DefaultSelection<Prisma.$ProfessorDisciplinaPayload>
/**
 * Model Instituicao
 * 
 */
export type Instituicao = $Result.DefaultSelection<Prisma.$InstituicaoPayload>
/**
 * Model AnoLectivo
 * 
 */
export type AnoLectivo = $Result.DefaultSelection<Prisma.$AnoLectivoPayload>
/**
 * Model Configuracao
 * 
 */
export type Configuracao = $Result.DefaultSelection<Prisma.$ConfiguracaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ALUNO: 'ALUNO',
  PROFESSOR: 'PROFESSOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  PENDENTE: 'PENDENTE',
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  TRANSFERIDO: 'TRANSFERIDO'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professorDisciplina`: Exposes CRUD operations for the **ProfessorDisciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessorDisciplinas
    * const professorDisciplinas = await prisma.professorDisciplina.findMany()
    * ```
    */
  get professorDisciplina(): Prisma.ProfessorDisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instituicao`: Exposes CRUD operations for the **Instituicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instituicaos
    * const instituicaos = await prisma.instituicao.findMany()
    * ```
    */
  get instituicao(): Prisma.InstituicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anoLectivo`: Exposes CRUD operations for the **AnoLectivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnoLectivos
    * const anoLectivos = await prisma.anoLectivo.findMany()
    * ```
    */
  get anoLectivo(): Prisma.AnoLectivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracao`: Exposes CRUD operations for the **Configuracao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracaos
    * const configuracaos = await prisma.configuracao.findMany()
    * ```
    */
  get configuracao(): Prisma.ConfiguracaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Professor: 'Professor',
    Aluno: 'Aluno',
    Curso: 'Curso',
    Turma: 'Turma',
    Disciplina: 'Disciplina',
    ProfessorDisciplina: 'ProfessorDisciplina',
    Instituicao: 'Instituicao',
    AnoLectivo: 'AnoLectivo',
    Configuracao: 'Configuracao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "professor" | "aluno" | "curso" | "turma" | "disciplina" | "professorDisciplina" | "instituicao" | "anoLectivo" | "configuracao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      ProfessorDisciplina: {
        payload: Prisma.$ProfessorDisciplinaPayload<ExtArgs>
        fields: Prisma.ProfessorDisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorDisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorDisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>
          }
          findFirst: {
            args: Prisma.ProfessorDisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorDisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>
          }
          findMany: {
            args: Prisma.ProfessorDisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>[]
          }
          create: {
            args: Prisma.ProfessorDisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>
          }
          createMany: {
            args: Prisma.ProfessorDisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorDisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>
          }
          update: {
            args: Prisma.ProfessorDisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorDisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorDisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorDisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorDisciplinaPayload>
          }
          aggregate: {
            args: Prisma.ProfessorDisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessorDisciplina>
          }
          groupBy: {
            args: Prisma.ProfessorDisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorDisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorDisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorDisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Instituicao: {
        payload: Prisma.$InstituicaoPayload<ExtArgs>
        fields: Prisma.InstituicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstituicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstituicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findFirst: {
            args: Prisma.InstituicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstituicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findMany: {
            args: Prisma.InstituicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          create: {
            args: Prisma.InstituicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          createMany: {
            args: Prisma.InstituicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstituicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          delete: {
            args: Prisma.InstituicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          update: {
            args: Prisma.InstituicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          deleteMany: {
            args: Prisma.InstituicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstituicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstituicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          upsert: {
            args: Prisma.InstituicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          aggregate: {
            args: Prisma.InstituicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstituicao>
          }
          groupBy: {
            args: Prisma.InstituicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstituicaoCountArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoCountAggregateOutputType> | number
          }
        }
      }
      AnoLectivo: {
        payload: Prisma.$AnoLectivoPayload<ExtArgs>
        fields: Prisma.AnoLectivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnoLectivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnoLectivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>
          }
          findFirst: {
            args: Prisma.AnoLectivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnoLectivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>
          }
          findMany: {
            args: Prisma.AnoLectivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>[]
          }
          create: {
            args: Prisma.AnoLectivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>
          }
          createMany: {
            args: Prisma.AnoLectivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnoLectivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>[]
          }
          delete: {
            args: Prisma.AnoLectivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>
          }
          update: {
            args: Prisma.AnoLectivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>
          }
          deleteMany: {
            args: Prisma.AnoLectivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnoLectivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnoLectivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>[]
          }
          upsert: {
            args: Prisma.AnoLectivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnoLectivoPayload>
          }
          aggregate: {
            args: Prisma.AnoLectivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnoLectivo>
          }
          groupBy: {
            args: Prisma.AnoLectivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnoLectivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnoLectivoCountArgs<ExtArgs>
            result: $Utils.Optional<AnoLectivoCountAggregateOutputType> | number
          }
        }
      }
      Configuracao: {
        payload: Prisma.$ConfiguracaoPayload<ExtArgs>
        fields: Prisma.ConfiguracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          findMany: {
            args: Prisma.ConfiguracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          create: {
            args: Prisma.ConfiguracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          createMany: {
            args: Prisma.ConfiguracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          update: {
            args: Prisma.ConfiguracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfiguracaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>[]
          }
          upsert: {
            args: Prisma.ConfiguracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracaoPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracao>
          }
          groupBy: {
            args: Prisma.ConfiguracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracaoCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    professor?: ProfessorOmit
    aluno?: AlunoOmit
    curso?: CursoOmit
    turma?: TurmaOmit
    disciplina?: DisciplinaOmit
    professorDisciplina?: ProfessorDisciplinaOmit
    instituicao?: InstituicaoOmit
    anoLectivo?: AnoLectivoOmit
    configuracao?: ConfiguracaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    instituicoes: number
    anosLectivos: number
    configuracoes: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicoes?: boolean | AdminCountOutputTypeCountInstituicoesArgs
    anosLectivos?: boolean | AdminCountOutputTypeCountAnosLectivosArgs
    configuracoes?: boolean | AdminCountOutputTypeCountConfiguracoesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountInstituicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstituicaoWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountAnosLectivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnoLectivoWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountConfiguracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    disciplinas: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | ProfessorCountOutputTypeCountDisciplinasArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorDisciplinaWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    turmas: number
    disciplinas: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | CursoCountOutputTypeCountTurmasArgs
    disciplinas?: boolean | CursoCountOutputTypeCountDisciplinasArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountTurmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    alunos: number
    professores: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | TurmaCountOutputTypeCountAlunosArgs
    professores?: boolean | TurmaCountOutputTypeCountProfessoresArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountProfessoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorDisciplinaWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    professores: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professores?: boolean | DisciplinaCountOutputTypeCountProfessoresArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountProfessoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorDisciplinaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    numeroUtilizador: string | null
    senhaHash: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    numeroUtilizador: string | null
    senhaHash: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    numeroUtilizador: number
    senhaHash: number
    role: number
    status: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    numeroUtilizador?: true
    senhaHash?: true
    role?: true
    status?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    numeroUtilizador?: true
    senhaHash?: true
    role?: true
    status?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    numeroUtilizador?: true
    senhaHash?: true
    role?: true
    status?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nome: string
    email: string | null
    telefone: string | null
    numeroUtilizador: string | null
    senhaHash: string
    role: $Enums.Role
    status: $Enums.UserStatus
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    numeroUtilizador?: boolean
    senhaHash?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | User$adminArgs<ExtArgs>
    professor?: boolean | User$professorArgs<ExtArgs>
    aluno?: boolean | User$alunoArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    numeroUtilizador?: boolean
    senhaHash?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    numeroUtilizador?: boolean
    senhaHash?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    numeroUtilizador?: boolean
    senhaHash?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "numeroUtilizador" | "senhaHash" | "role" | "status" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | User$adminArgs<ExtArgs>
    professor?: boolean | User$professorArgs<ExtArgs>
    aluno?: boolean | User$alunoArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      professor: Prisma.$ProfessorPayload<ExtArgs> | null
      aluno: Prisma.$AlunoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string | null
      telefone: string | null
      numeroUtilizador: string | null
      senhaHash: string
      role: $Enums.Role
      status: $Enums.UserStatus
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professor<T extends User$professorArgs<ExtArgs> = {}>(args?: Subset<T, User$professorArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aluno<T extends User$alunoArgs<ExtArgs> = {}>(args?: Subset<T, User$alunoArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly telefone: FieldRef<"User", 'String'>
    readonly numeroUtilizador: FieldRef<"User", 'String'>
    readonly senhaHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.professor
   */
  export type User$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    where?: ProfessorWhereInput
  }

  /**
   * User.aluno
   */
  export type User$alunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instituicoes?: boolean | Admin$instituicoesArgs<ExtArgs>
    anosLectivos?: boolean | Admin$anosLectivosArgs<ExtArgs>
    configuracoes?: boolean | Admin$configuracoesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instituicoes?: boolean | Admin$instituicoesArgs<ExtArgs>
    anosLectivos?: boolean | Admin$anosLectivosArgs<ExtArgs>
    configuracoes?: boolean | Admin$configuracoesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      instituicoes: Prisma.$InstituicaoPayload<ExtArgs>[]
      anosLectivos: Prisma.$AnoLectivoPayload<ExtArgs>[]
      configuracoes: Prisma.$ConfiguracaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instituicoes<T extends Admin$instituicoesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$instituicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anosLectivos<T extends Admin$anosLectivosArgs<ExtArgs> = {}>(args?: Subset<T, Admin$anosLectivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuracoes<T extends Admin$configuracoesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$configuracoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.instituicoes
   */
  export type Admin$instituicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    where?: InstituicaoWhereInput
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    cursor?: InstituicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Admin.anosLectivos
   */
  export type Admin$anosLectivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    where?: AnoLectivoWhereInput
    orderBy?: AnoLectivoOrderByWithRelationInput | AnoLectivoOrderByWithRelationInput[]
    cursor?: AnoLectivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnoLectivoScalarFieldEnum | AnoLectivoScalarFieldEnum[]
  }

  /**
   * Admin.configuracoes
   */
  export type Admin$configuracoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    where?: ConfiguracaoWhereInput
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    cursor?: ConfiguracaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cargo: string | null
    contacto: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cargo: string | null
    contacto: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    userId: number
    cargo: number
    contacto: number
    _all: number
  }


  export type ProfessorMinAggregateInputType = {
    id?: true
    userId?: true
    cargo?: true
    contacto?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    userId?: true
    cargo?: true
    contacto?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    userId?: true
    cargo?: true
    contacto?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: string
    userId: string
    cargo: string
    contacto: string | null
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cargo?: boolean
    contacto?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disciplinas?: boolean | Professor$disciplinasArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cargo?: boolean
    contacto?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cargo?: boolean
    contacto?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id?: boolean
    userId?: boolean
    cargo?: boolean
    contacto?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cargo" | "contacto", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disciplinas?: boolean | Professor$disciplinasArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      disciplinas: Prisma.$ProfessorDisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cargo: string
      contacto: string | null
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id`
     * const professorWithIdOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplinas<T extends Professor$disciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Professor$disciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'String'>
    readonly userId: FieldRef<"Professor", 'String'>
    readonly cargo: FieldRef<"Professor", 'String'>
    readonly contacto: FieldRef<"Professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.disciplinas
   */
  export type Professor$disciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    where?: ProfessorDisciplinaWhereInput
    orderBy?: ProfessorDisciplinaOrderByWithRelationInput | ProfessorDisciplinaOrderByWithRelationInput[]
    cursor?: ProfessorDisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorDisciplinaScalarFieldEnum | ProfessorDisciplinaScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dataNascimento: Date | null
    tipoIdentificacao: string | null
    numeroIdentificacao: string | null
    numeroProcesso: string | null
    turmaId: string | null
    curso: string | null
    classe: string | null
    turno: string | null
    genero: string | null
    estadoCivil: string | null
    nomePai: string | null
    nomeMae: string | null
    naturalidade: string | null
    provincia: string | null
    municipio: string | null
    comuna: string | null
    encarregadoNome: string | null
    encarregadoParentesco: string | null
    encarregadoGenero: string | null
    encarregadoDataNascimento: Date | null
    encarregadoTelefone: string | null
    encarregadoEmail: string | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dataNascimento: Date | null
    tipoIdentificacao: string | null
    numeroIdentificacao: string | null
    numeroProcesso: string | null
    turmaId: string | null
    curso: string | null
    classe: string | null
    turno: string | null
    genero: string | null
    estadoCivil: string | null
    nomePai: string | null
    nomeMae: string | null
    naturalidade: string | null
    provincia: string | null
    municipio: string | null
    comuna: string | null
    encarregadoNome: string | null
    encarregadoParentesco: string | null
    encarregadoGenero: string | null
    encarregadoDataNascimento: Date | null
    encarregadoTelefone: string | null
    encarregadoEmail: string | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    userId: number
    dataNascimento: number
    tipoIdentificacao: number
    numeroIdentificacao: number
    numeroProcesso: number
    turmaId: number
    curso: number
    classe: number
    turno: number
    genero: number
    estadoCivil: number
    nomePai: number
    nomeMae: number
    naturalidade: number
    provincia: number
    municipio: number
    comuna: number
    encarregadoNome: number
    encarregadoParentesco: number
    encarregadoGenero: number
    encarregadoDataNascimento: number
    encarregadoTelefone: number
    encarregadoEmail: number
    _all: number
  }


  export type AlunoMinAggregateInputType = {
    id?: true
    userId?: true
    dataNascimento?: true
    tipoIdentificacao?: true
    numeroIdentificacao?: true
    numeroProcesso?: true
    turmaId?: true
    curso?: true
    classe?: true
    turno?: true
    genero?: true
    estadoCivil?: true
    nomePai?: true
    nomeMae?: true
    naturalidade?: true
    provincia?: true
    municipio?: true
    comuna?: true
    encarregadoNome?: true
    encarregadoParentesco?: true
    encarregadoGenero?: true
    encarregadoDataNascimento?: true
    encarregadoTelefone?: true
    encarregadoEmail?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    userId?: true
    dataNascimento?: true
    tipoIdentificacao?: true
    numeroIdentificacao?: true
    numeroProcesso?: true
    turmaId?: true
    curso?: true
    classe?: true
    turno?: true
    genero?: true
    estadoCivil?: true
    nomePai?: true
    nomeMae?: true
    naturalidade?: true
    provincia?: true
    municipio?: true
    comuna?: true
    encarregadoNome?: true
    encarregadoParentesco?: true
    encarregadoGenero?: true
    encarregadoDataNascimento?: true
    encarregadoTelefone?: true
    encarregadoEmail?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    userId?: true
    dataNascimento?: true
    tipoIdentificacao?: true
    numeroIdentificacao?: true
    numeroProcesso?: true
    turmaId?: true
    curso?: true
    classe?: true
    turno?: true
    genero?: true
    estadoCivil?: true
    nomePai?: true
    nomeMae?: true
    naturalidade?: true
    provincia?: true
    municipio?: true
    comuna?: true
    encarregadoNome?: true
    encarregadoParentesco?: true
    encarregadoGenero?: true
    encarregadoDataNascimento?: true
    encarregadoTelefone?: true
    encarregadoEmail?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: string
    userId: string
    dataNascimento: Date
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    turmaId: string | null
    curso: string | null
    classe: string | null
    turno: string | null
    genero: string | null
    estadoCivil: string | null
    nomePai: string | null
    nomeMae: string | null
    naturalidade: string | null
    provincia: string | null
    municipio: string | null
    comuna: string | null
    encarregadoNome: string | null
    encarregadoParentesco: string | null
    encarregadoGenero: string | null
    encarregadoDataNascimento: Date | null
    encarregadoTelefone: string | null
    encarregadoEmail: string | null
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dataNascimento?: boolean
    tipoIdentificacao?: boolean
    numeroIdentificacao?: boolean
    numeroProcesso?: boolean
    turmaId?: boolean
    curso?: boolean
    classe?: boolean
    turno?: boolean
    genero?: boolean
    estadoCivil?: boolean
    nomePai?: boolean
    nomeMae?: boolean
    naturalidade?: boolean
    provincia?: boolean
    municipio?: boolean
    comuna?: boolean
    encarregadoNome?: boolean
    encarregadoParentesco?: boolean
    encarregadoGenero?: boolean
    encarregadoDataNascimento?: boolean
    encarregadoTelefone?: boolean
    encarregadoEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dataNascimento?: boolean
    tipoIdentificacao?: boolean
    numeroIdentificacao?: boolean
    numeroProcesso?: boolean
    turmaId?: boolean
    curso?: boolean
    classe?: boolean
    turno?: boolean
    genero?: boolean
    estadoCivil?: boolean
    nomePai?: boolean
    nomeMae?: boolean
    naturalidade?: boolean
    provincia?: boolean
    municipio?: boolean
    comuna?: boolean
    encarregadoNome?: boolean
    encarregadoParentesco?: boolean
    encarregadoGenero?: boolean
    encarregadoDataNascimento?: boolean
    encarregadoTelefone?: boolean
    encarregadoEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dataNascimento?: boolean
    tipoIdentificacao?: boolean
    numeroIdentificacao?: boolean
    numeroProcesso?: boolean
    turmaId?: boolean
    curso?: boolean
    classe?: boolean
    turno?: boolean
    genero?: boolean
    estadoCivil?: boolean
    nomePai?: boolean
    nomeMae?: boolean
    naturalidade?: boolean
    provincia?: boolean
    municipio?: boolean
    comuna?: boolean
    encarregadoNome?: boolean
    encarregadoParentesco?: boolean
    encarregadoGenero?: boolean
    encarregadoDataNascimento?: boolean
    encarregadoTelefone?: boolean
    encarregadoEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id?: boolean
    userId?: boolean
    dataNascimento?: boolean
    tipoIdentificacao?: boolean
    numeroIdentificacao?: boolean
    numeroProcesso?: boolean
    turmaId?: boolean
    curso?: boolean
    classe?: boolean
    turno?: boolean
    genero?: boolean
    estadoCivil?: boolean
    nomePai?: boolean
    nomeMae?: boolean
    naturalidade?: boolean
    provincia?: boolean
    municipio?: boolean
    comuna?: boolean
    encarregadoNome?: boolean
    encarregadoParentesco?: boolean
    encarregadoGenero?: boolean
    encarregadoDataNascimento?: boolean
    encarregadoTelefone?: boolean
    encarregadoEmail?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dataNascimento" | "tipoIdentificacao" | "numeroIdentificacao" | "numeroProcesso" | "turmaId" | "curso" | "classe" | "turno" | "genero" | "estadoCivil" | "nomePai" | "nomeMae" | "naturalidade" | "provincia" | "municipio" | "comuna" | "encarregadoNome" | "encarregadoParentesco" | "encarregadoGenero" | "encarregadoDataNascimento" | "encarregadoTelefone" | "encarregadoEmail", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }
  export type AlunoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }
  export type AlunoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    turma?: boolean | Aluno$turmaArgs<ExtArgs>
  }

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      turma: Prisma.$TurmaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dataNascimento: Date
      tipoIdentificacao: string
      numeroIdentificacao: string
      numeroProcesso: string
      turmaId: string | null
      curso: string | null
      classe: string | null
      turno: string | null
      genero: string | null
      estadoCivil: string | null
      nomePai: string | null
      nomeMae: string | null
      naturalidade: string | null
      provincia: string | null
      municipio: string | null
      comuna: string | null
      encarregadoNome: string | null
      encarregadoParentesco: string | null
      encarregadoGenero: string | null
      encarregadoDataNascimento: Date | null
      encarregadoTelefone: string | null
      encarregadoEmail: string | null
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunos and returns the data saved in the database.
     * @param {AlunoCreateManyAndReturnArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunos and only return the `id`
     * const alunoWithIdOnly = await prisma.aluno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos and returns the data updated in the database.
     * @param {AlunoUpdateManyAndReturnArgs} args - Arguments to update many Alunos.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alunos and only return the `id`
     * const alunoWithIdOnly = await prisma.aluno.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlunoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turma<T extends Aluno$turmaArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$turmaArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'String'>
    readonly userId: FieldRef<"Aluno", 'String'>
    readonly dataNascimento: FieldRef<"Aluno", 'DateTime'>
    readonly tipoIdentificacao: FieldRef<"Aluno", 'String'>
    readonly numeroIdentificacao: FieldRef<"Aluno", 'String'>
    readonly numeroProcesso: FieldRef<"Aluno", 'String'>
    readonly turmaId: FieldRef<"Aluno", 'String'>
    readonly curso: FieldRef<"Aluno", 'String'>
    readonly classe: FieldRef<"Aluno", 'String'>
    readonly turno: FieldRef<"Aluno", 'String'>
    readonly genero: FieldRef<"Aluno", 'String'>
    readonly estadoCivil: FieldRef<"Aluno", 'String'>
    readonly nomePai: FieldRef<"Aluno", 'String'>
    readonly nomeMae: FieldRef<"Aluno", 'String'>
    readonly naturalidade: FieldRef<"Aluno", 'String'>
    readonly provincia: FieldRef<"Aluno", 'String'>
    readonly municipio: FieldRef<"Aluno", 'String'>
    readonly comuna: FieldRef<"Aluno", 'String'>
    readonly encarregadoNome: FieldRef<"Aluno", 'String'>
    readonly encarregadoParentesco: FieldRef<"Aluno", 'String'>
    readonly encarregadoGenero: FieldRef<"Aluno", 'String'>
    readonly encarregadoDataNascimento: FieldRef<"Aluno", 'DateTime'>
    readonly encarregadoTelefone: FieldRef<"Aluno", 'String'>
    readonly encarregadoEmail: FieldRef<"Aluno", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno createManyAndReturn
   */
  export type AlunoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno updateManyAndReturn
   */
  export type AlunoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.turma
   */
  export type Aluno$turmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
  }

  export type CursoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    nome: number
    sigla: number
    _all: number
  }


  export type CursoMinAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: string
    nome: string
    sigla: string
    _count: CursoCountAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    disciplinas?: boolean | Curso$disciplinasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    id?: boolean
    nome?: boolean
    sigla?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sigla", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turmas?: boolean | Curso$turmasArgs<ExtArgs>
    disciplinas?: boolean | Curso$disciplinasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      turmas: Prisma.$TurmaPayload<ExtArgs>[]
      disciplinas: Prisma.$DisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sigla: string
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turmas<T extends Curso$turmasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$turmasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disciplinas<T extends Curso$disciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$disciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'String'>
    readonly nome: FieldRef<"Curso", 'String'>
    readonly sigla: FieldRef<"Curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.turmas
   */
  export type Curso$turmasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    cursor?: TurmaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Curso.disciplinas
   */
  export type Curso$disciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    cursor?: DisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaAvgAggregateOutputType = {
    vagas: number | null
  }

  export type TurmaSumAggregateOutputType = {
    vagas: number | null
  }

  export type TurmaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cursoId: string | null
    classe: string | null
    vagas: number | null
    turno: string | null
    anoLectivo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cursoId: string | null
    classe: string | null
    vagas: number | null
    turno: string | null
    anoLectivo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    cursoId: number
    classe: number
    vagas: number
    turno: number
    anoLectivo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TurmaAvgAggregateInputType = {
    vagas?: true
  }

  export type TurmaSumAggregateInputType = {
    vagas?: true
  }

  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    classe?: true
    vagas?: true
    turno?: true
    anoLectivo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    classe?: true
    vagas?: true
    turno?: true
    anoLectivo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    cursoId?: true
    classe?: true
    vagas?: true
    turno?: true
    anoLectivo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurmaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurmaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _avg?: TurmaAvgAggregateInputType
    _sum?: TurmaSumAggregateInputType
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: string
    nome: string
    cursoId: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt: Date
    updatedAt: Date
    _count: TurmaCountAggregateOutputType | null
    _avg: TurmaAvgAggregateOutputType | null
    _sum: TurmaSumAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    classe?: boolean
    vagas?: boolean
    turno?: boolean
    anoLectivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    professores?: boolean | Turma$professoresArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    classe?: boolean
    vagas?: boolean
    turno?: boolean
    anoLectivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    classe?: boolean
    vagas?: boolean
    turno?: boolean
    anoLectivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>

  export type TurmaSelectScalar = {
    id?: boolean
    nome?: boolean
    cursoId?: boolean
    classe?: boolean
    vagas?: boolean
    turno?: boolean
    anoLectivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cursoId" | "classe" | "vagas" | "turno" | "anoLectivo" | "createdAt" | "updatedAt", ExtArgs["result"]["turma"]>
  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    professores?: boolean | Turma$professoresArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type TurmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      alunos: Prisma.$AlunoPayload<ExtArgs>[]
      professores: Prisma.$ProfessorDisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cursoId: string
      classe: string
      vagas: number
      turno: string
      anoLectivo: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turmas and returns the data saved in the database.
     * @param {TurmaCreateManyAndReturnArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turmas and only return the `id`
     * const turmaWithIdOnly = await prisma.turma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurmaCreateManyAndReturnArgs>(args?: SelectSubset<T, TurmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas and returns the data updated in the database.
     * @param {TurmaUpdateManyAndReturnArgs} args - Arguments to update many Turmas.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turmas and only return the `id`
     * const turmaWithIdOnly = await prisma.turma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TurmaUpdateManyAndReturnArgs>(args: SelectSubset<T, TurmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alunos<T extends Turma$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Turma$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professores<T extends Turma$professoresArgs<ExtArgs> = {}>(args?: Subset<T, Turma$professoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turma model
   */
  interface TurmaFieldRefs {
    readonly id: FieldRef<"Turma", 'String'>
    readonly nome: FieldRef<"Turma", 'String'>
    readonly cursoId: FieldRef<"Turma", 'String'>
    readonly classe: FieldRef<"Turma", 'String'>
    readonly vagas: FieldRef<"Turma", 'Int'>
    readonly turno: FieldRef<"Turma", 'String'>
    readonly anoLectivo: FieldRef<"Turma", 'String'>
    readonly createdAt: FieldRef<"Turma", 'DateTime'>
    readonly updatedAt: FieldRef<"Turma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma createManyAndReturn
   */
  export type TurmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
  }

  /**
   * Turma updateManyAndReturn
   */
  export type TurmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to delete.
     */
    limit?: number
  }

  /**
   * Turma.alunos
   */
  export type Turma$alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Turma.professores
   */
  export type Turma$professoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    where?: ProfessorDisciplinaWhereInput
    orderBy?: ProfessorDisciplinaOrderByWithRelationInput | ProfessorDisciplinaOrderByWithRelationInput[]
    cursor?: ProfessorDisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorDisciplinaScalarFieldEnum | ProfessorDisciplinaScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    cargaHoraria: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    cargaHoraria: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
    cursoId: string | null
    classe: string | null
    cargaHoraria: number | null
    cor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
    cursoId: string | null
    classe: string | null
    cargaHoraria: number | null
    cor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisciplinaCountAggregateOutputType = {
    id: number
    nome: number
    sigla: number
    cursoId: number
    classe: number
    cargaHoraria: number
    cor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    cargaHoraria?: true
  }

  export type DisciplinaSumAggregateInputType = {
    cargaHoraria?: true
  }

  export type DisciplinaMinAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    cursoId?: true
    classe?: true
    cargaHoraria?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    cursoId?: true
    classe?: true
    cargaHoraria?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisciplinaCountAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    cursoId?: true
    classe?: true
    cargaHoraria?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    id: string
    nome: string
    sigla: string
    cursoId: string
    classe: string
    cargaHoraria: number
    cor: string | null
    createdAt: Date
    updatedAt: Date
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    cursoId?: boolean
    classe?: boolean
    cargaHoraria?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professores?: boolean | Disciplina$professoresArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    cursoId?: boolean
    classe?: boolean
    cargaHoraria?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    cursoId?: boolean
    classe?: boolean
    cargaHoraria?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectScalar = {
    id?: boolean
    nome?: boolean
    sigla?: boolean
    cursoId?: boolean
    classe?: boolean
    cargaHoraria?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sigla" | "cursoId" | "classe" | "cargaHoraria" | "cor" | "createdAt" | "updatedAt", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professores?: boolean | Disciplina$professoresArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      professores: Prisma.$ProfessorDisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sigla: string
      cursoId: string
      classe: string
      cargaHoraria: number
      cor: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {DisciplinaCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas and returns the data updated in the database.
     * @param {DisciplinaUpdateManyAndReturnArgs} args - Arguments to update many Disciplinas.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplinas and only return the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professores<T extends Disciplina$professoresArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$professoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly id: FieldRef<"Disciplina", 'String'>
    readonly nome: FieldRef<"Disciplina", 'String'>
    readonly sigla: FieldRef<"Disciplina", 'String'>
    readonly cursoId: FieldRef<"Disciplina", 'String'>
    readonly classe: FieldRef<"Disciplina", 'String'>
    readonly cargaHoraria: FieldRef<"Disciplina", 'Int'>
    readonly cor: FieldRef<"Disciplina", 'String'>
    readonly createdAt: FieldRef<"Disciplina", 'DateTime'>
    readonly updatedAt: FieldRef<"Disciplina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina createManyAndReturn
   */
  export type DisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina updateManyAndReturn
   */
  export type DisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina.professores
   */
  export type Disciplina$professoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    where?: ProfessorDisciplinaWhereInput
    orderBy?: ProfessorDisciplinaOrderByWithRelationInput | ProfessorDisciplinaOrderByWithRelationInput[]
    cursor?: ProfessorDisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorDisciplinaScalarFieldEnum | ProfessorDisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model ProfessorDisciplina
   */

  export type AggregateProfessorDisciplina = {
    _count: ProfessorDisciplinaCountAggregateOutputType | null
    _min: ProfessorDisciplinaMinAggregateOutputType | null
    _max: ProfessorDisciplinaMaxAggregateOutputType | null
  }

  export type ProfessorDisciplinaMinAggregateOutputType = {
    professorId: string | null
    disciplinaId: string | null
    turmaId: string | null
  }

  export type ProfessorDisciplinaMaxAggregateOutputType = {
    professorId: string | null
    disciplinaId: string | null
    turmaId: string | null
  }

  export type ProfessorDisciplinaCountAggregateOutputType = {
    professorId: number
    disciplinaId: number
    turmaId: number
    _all: number
  }


  export type ProfessorDisciplinaMinAggregateInputType = {
    professorId?: true
    disciplinaId?: true
    turmaId?: true
  }

  export type ProfessorDisciplinaMaxAggregateInputType = {
    professorId?: true
    disciplinaId?: true
    turmaId?: true
  }

  export type ProfessorDisciplinaCountAggregateInputType = {
    professorId?: true
    disciplinaId?: true
    turmaId?: true
    _all?: true
  }

  export type ProfessorDisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessorDisciplina to aggregate.
     */
    where?: ProfessorDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorDisciplinas to fetch.
     */
    orderBy?: ProfessorDisciplinaOrderByWithRelationInput | ProfessorDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessorDisciplinas
    **/
    _count?: true | ProfessorDisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorDisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorDisciplinaMaxAggregateInputType
  }

  export type GetProfessorDisciplinaAggregateType<T extends ProfessorDisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessorDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessorDisciplina[P]>
      : GetScalarType<T[P], AggregateProfessorDisciplina[P]>
  }




  export type ProfessorDisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorDisciplinaWhereInput
    orderBy?: ProfessorDisciplinaOrderByWithAggregationInput | ProfessorDisciplinaOrderByWithAggregationInput[]
    by: ProfessorDisciplinaScalarFieldEnum[] | ProfessorDisciplinaScalarFieldEnum
    having?: ProfessorDisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorDisciplinaCountAggregateInputType | true
    _min?: ProfessorDisciplinaMinAggregateInputType
    _max?: ProfessorDisciplinaMaxAggregateInputType
  }

  export type ProfessorDisciplinaGroupByOutputType = {
    professorId: string
    disciplinaId: string
    turmaId: string
    _count: ProfessorDisciplinaCountAggregateOutputType | null
    _min: ProfessorDisciplinaMinAggregateOutputType | null
    _max: ProfessorDisciplinaMaxAggregateOutputType | null
  }

  type GetProfessorDisciplinaGroupByPayload<T extends ProfessorDisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorDisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorDisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorDisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorDisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorDisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    disciplinaId?: boolean
    turmaId?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorDisciplina"]>

  export type ProfessorDisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    disciplinaId?: boolean
    turmaId?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorDisciplina"]>

  export type ProfessorDisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    disciplinaId?: boolean
    turmaId?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorDisciplina"]>

  export type ProfessorDisciplinaSelectScalar = {
    professorId?: boolean
    disciplinaId?: boolean
    turmaId?: boolean
  }

  export type ProfessorDisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"professorId" | "disciplinaId" | "turmaId", ExtArgs["result"]["professorDisciplina"]>
  export type ProfessorDisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }
  export type ProfessorDisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }
  export type ProfessorDisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
  }

  export type $ProfessorDisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessorDisciplina"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
      turma: Prisma.$TurmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      professorId: string
      disciplinaId: string
      turmaId: string
    }, ExtArgs["result"]["professorDisciplina"]>
    composites: {}
  }

  type ProfessorDisciplinaGetPayload<S extends boolean | null | undefined | ProfessorDisciplinaDefaultArgs> = $Result.GetResult<Prisma.$ProfessorDisciplinaPayload, S>

  type ProfessorDisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorDisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorDisciplinaCountAggregateInputType | true
    }

  export interface ProfessorDisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessorDisciplina'], meta: { name: 'ProfessorDisciplina' } }
    /**
     * Find zero or one ProfessorDisciplina that matches the filter.
     * @param {ProfessorDisciplinaFindUniqueArgs} args - Arguments to find a ProfessorDisciplina
     * @example
     * // Get one ProfessorDisciplina
     * const professorDisciplina = await prisma.professorDisciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorDisciplinaFindUniqueArgs>(args: SelectSubset<T, ProfessorDisciplinaFindUniqueArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessorDisciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorDisciplinaFindUniqueOrThrowArgs} args - Arguments to find a ProfessorDisciplina
     * @example
     * // Get one ProfessorDisciplina
     * const professorDisciplina = await prisma.professorDisciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorDisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorDisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessorDisciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorDisciplinaFindFirstArgs} args - Arguments to find a ProfessorDisciplina
     * @example
     * // Get one ProfessorDisciplina
     * const professorDisciplina = await prisma.professorDisciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorDisciplinaFindFirstArgs>(args?: SelectSubset<T, ProfessorDisciplinaFindFirstArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessorDisciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorDisciplinaFindFirstOrThrowArgs} args - Arguments to find a ProfessorDisciplina
     * @example
     * // Get one ProfessorDisciplina
     * const professorDisciplina = await prisma.professorDisciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorDisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorDisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessorDisciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorDisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessorDisciplinas
     * const professorDisciplinas = await prisma.professorDisciplina.findMany()
     * 
     * // Get first 10 ProfessorDisciplinas
     * const professorDisciplinas = await prisma.professorDisciplina.findMany({ take: 10 })
     * 
     * // Only select the `professorId`
     * const professorDisciplinaWithProfessorIdOnly = await prisma.professorDisciplina.findMany({ select: { professorId: true } })
     * 
     */
    findMany<T extends ProfessorDisciplinaFindManyArgs>(args?: SelectSubset<T, ProfessorDisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessorDisciplina.
     * @param {ProfessorDisciplinaCreateArgs} args - Arguments to create a ProfessorDisciplina.
     * @example
     * // Create one ProfessorDisciplina
     * const ProfessorDisciplina = await prisma.professorDisciplina.create({
     *   data: {
     *     // ... data to create a ProfessorDisciplina
     *   }
     * })
     * 
     */
    create<T extends ProfessorDisciplinaCreateArgs>(args: SelectSubset<T, ProfessorDisciplinaCreateArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessorDisciplinas.
     * @param {ProfessorDisciplinaCreateManyArgs} args - Arguments to create many ProfessorDisciplinas.
     * @example
     * // Create many ProfessorDisciplinas
     * const professorDisciplina = await prisma.professorDisciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorDisciplinaCreateManyArgs>(args?: SelectSubset<T, ProfessorDisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessorDisciplinas and returns the data saved in the database.
     * @param {ProfessorDisciplinaCreateManyAndReturnArgs} args - Arguments to create many ProfessorDisciplinas.
     * @example
     * // Create many ProfessorDisciplinas
     * const professorDisciplina = await prisma.professorDisciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessorDisciplinas and only return the `professorId`
     * const professorDisciplinaWithProfessorIdOnly = await prisma.professorDisciplina.createManyAndReturn({
     *   select: { professorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorDisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorDisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessorDisciplina.
     * @param {ProfessorDisciplinaDeleteArgs} args - Arguments to delete one ProfessorDisciplina.
     * @example
     * // Delete one ProfessorDisciplina
     * const ProfessorDisciplina = await prisma.professorDisciplina.delete({
     *   where: {
     *     // ... filter to delete one ProfessorDisciplina
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDisciplinaDeleteArgs>(args: SelectSubset<T, ProfessorDisciplinaDeleteArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessorDisciplina.
     * @param {ProfessorDisciplinaUpdateArgs} args - Arguments to update one ProfessorDisciplina.
     * @example
     * // Update one ProfessorDisciplina
     * const professorDisciplina = await prisma.professorDisciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorDisciplinaUpdateArgs>(args: SelectSubset<T, ProfessorDisciplinaUpdateArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessorDisciplinas.
     * @param {ProfessorDisciplinaDeleteManyArgs} args - Arguments to filter ProfessorDisciplinas to delete.
     * @example
     * // Delete a few ProfessorDisciplinas
     * const { count } = await prisma.professorDisciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDisciplinaDeleteManyArgs>(args?: SelectSubset<T, ProfessorDisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessorDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorDisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessorDisciplinas
     * const professorDisciplina = await prisma.professorDisciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorDisciplinaUpdateManyArgs>(args: SelectSubset<T, ProfessorDisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessorDisciplinas and returns the data updated in the database.
     * @param {ProfessorDisciplinaUpdateManyAndReturnArgs} args - Arguments to update many ProfessorDisciplinas.
     * @example
     * // Update many ProfessorDisciplinas
     * const professorDisciplina = await prisma.professorDisciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessorDisciplinas and only return the `professorId`
     * const professorDisciplinaWithProfessorIdOnly = await prisma.professorDisciplina.updateManyAndReturn({
     *   select: { professorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorDisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorDisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessorDisciplina.
     * @param {ProfessorDisciplinaUpsertArgs} args - Arguments to update or create a ProfessorDisciplina.
     * @example
     * // Update or create a ProfessorDisciplina
     * const professorDisciplina = await prisma.professorDisciplina.upsert({
     *   create: {
     *     // ... data to create a ProfessorDisciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessorDisciplina we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorDisciplinaUpsertArgs>(args: SelectSubset<T, ProfessorDisciplinaUpsertArgs<ExtArgs>>): Prisma__ProfessorDisciplinaClient<$Result.GetResult<Prisma.$ProfessorDisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessorDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorDisciplinaCountArgs} args - Arguments to filter ProfessorDisciplinas to count.
     * @example
     * // Count the number of ProfessorDisciplinas
     * const count = await prisma.professorDisciplina.count({
     *   where: {
     *     // ... the filter for the ProfessorDisciplinas we want to count
     *   }
     * })
    **/
    count<T extends ProfessorDisciplinaCountArgs>(
      args?: Subset<T, ProfessorDisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorDisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessorDisciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorDisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessorDisciplinaAggregateArgs>(args: Subset<T, ProfessorDisciplinaAggregateArgs>): Prisma.PrismaPromise<GetProfessorDisciplinaAggregateType<T>>

    /**
     * Group by ProfessorDisciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorDisciplinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessorDisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorDisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorDisciplinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessorDisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessorDisciplina model
   */
  readonly fields: ProfessorDisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessorDisciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorDisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfessorDisciplina model
   */
  interface ProfessorDisciplinaFieldRefs {
    readonly professorId: FieldRef<"ProfessorDisciplina", 'String'>
    readonly disciplinaId: FieldRef<"ProfessorDisciplina", 'String'>
    readonly turmaId: FieldRef<"ProfessorDisciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProfessorDisciplina findUnique
   */
  export type ProfessorDisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorDisciplina to fetch.
     */
    where: ProfessorDisciplinaWhereUniqueInput
  }

  /**
   * ProfessorDisciplina findUniqueOrThrow
   */
  export type ProfessorDisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorDisciplina to fetch.
     */
    where: ProfessorDisciplinaWhereUniqueInput
  }

  /**
   * ProfessorDisciplina findFirst
   */
  export type ProfessorDisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorDisciplina to fetch.
     */
    where?: ProfessorDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorDisciplinas to fetch.
     */
    orderBy?: ProfessorDisciplinaOrderByWithRelationInput | ProfessorDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessorDisciplinas.
     */
    cursor?: ProfessorDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessorDisciplinas.
     */
    distinct?: ProfessorDisciplinaScalarFieldEnum | ProfessorDisciplinaScalarFieldEnum[]
  }

  /**
   * ProfessorDisciplina findFirstOrThrow
   */
  export type ProfessorDisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorDisciplina to fetch.
     */
    where?: ProfessorDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorDisciplinas to fetch.
     */
    orderBy?: ProfessorDisciplinaOrderByWithRelationInput | ProfessorDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessorDisciplinas.
     */
    cursor?: ProfessorDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessorDisciplinas.
     */
    distinct?: ProfessorDisciplinaScalarFieldEnum | ProfessorDisciplinaScalarFieldEnum[]
  }

  /**
   * ProfessorDisciplina findMany
   */
  export type ProfessorDisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorDisciplinas to fetch.
     */
    where?: ProfessorDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorDisciplinas to fetch.
     */
    orderBy?: ProfessorDisciplinaOrderByWithRelationInput | ProfessorDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessorDisciplinas.
     */
    cursor?: ProfessorDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessorDisciplinas.
     */
    distinct?: ProfessorDisciplinaScalarFieldEnum | ProfessorDisciplinaScalarFieldEnum[]
  }

  /**
   * ProfessorDisciplina create
   */
  export type ProfessorDisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessorDisciplina.
     */
    data: XOR<ProfessorDisciplinaCreateInput, ProfessorDisciplinaUncheckedCreateInput>
  }

  /**
   * ProfessorDisciplina createMany
   */
  export type ProfessorDisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessorDisciplinas.
     */
    data: ProfessorDisciplinaCreateManyInput | ProfessorDisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessorDisciplina createManyAndReturn
   */
  export type ProfessorDisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessorDisciplinas.
     */
    data: ProfessorDisciplinaCreateManyInput | ProfessorDisciplinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessorDisciplina update
   */
  export type ProfessorDisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessorDisciplina.
     */
    data: XOR<ProfessorDisciplinaUpdateInput, ProfessorDisciplinaUncheckedUpdateInput>
    /**
     * Choose, which ProfessorDisciplina to update.
     */
    where: ProfessorDisciplinaWhereUniqueInput
  }

  /**
   * ProfessorDisciplina updateMany
   */
  export type ProfessorDisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessorDisciplinas.
     */
    data: XOR<ProfessorDisciplinaUpdateManyMutationInput, ProfessorDisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which ProfessorDisciplinas to update
     */
    where?: ProfessorDisciplinaWhereInput
    /**
     * Limit how many ProfessorDisciplinas to update.
     */
    limit?: number
  }

  /**
   * ProfessorDisciplina updateManyAndReturn
   */
  export type ProfessorDisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update ProfessorDisciplinas.
     */
    data: XOR<ProfessorDisciplinaUpdateManyMutationInput, ProfessorDisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which ProfessorDisciplinas to update
     */
    where?: ProfessorDisciplinaWhereInput
    /**
     * Limit how many ProfessorDisciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessorDisciplina upsert
   */
  export type ProfessorDisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessorDisciplina to update in case it exists.
     */
    where: ProfessorDisciplinaWhereUniqueInput
    /**
     * In case the ProfessorDisciplina found by the `where` argument doesn't exist, create a new ProfessorDisciplina with this data.
     */
    create: XOR<ProfessorDisciplinaCreateInput, ProfessorDisciplinaUncheckedCreateInput>
    /**
     * In case the ProfessorDisciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorDisciplinaUpdateInput, ProfessorDisciplinaUncheckedUpdateInput>
  }

  /**
   * ProfessorDisciplina delete
   */
  export type ProfessorDisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
    /**
     * Filter which ProfessorDisciplina to delete.
     */
    where: ProfessorDisciplinaWhereUniqueInput
  }

  /**
   * ProfessorDisciplina deleteMany
   */
  export type ProfessorDisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessorDisciplinas to delete
     */
    where?: ProfessorDisciplinaWhereInput
    /**
     * Limit how many ProfessorDisciplinas to delete.
     */
    limit?: number
  }

  /**
   * ProfessorDisciplina without action
   */
  export type ProfessorDisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorDisciplina
     */
    select?: ProfessorDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorDisciplina
     */
    omit?: ProfessorDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorDisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Instituicao
   */

  export type AggregateInstituicao = {
    _count: InstituicaoCountAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  export type InstituicaoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    website: string | null
    diretor: string | null
    logotipo: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstituicaoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sigla: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    website: string | null
    diretor: string | null
    logotipo: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstituicaoCountAggregateOutputType = {
    id: number
    nome: number
    sigla: number
    endereco: number
    telefone: number
    email: number
    website: number
    diretor: number
    logotipo: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstituicaoMinAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    endereco?: true
    telefone?: true
    email?: true
    website?: true
    diretor?: true
    logotipo?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstituicaoMaxAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    endereco?: true
    telefone?: true
    email?: true
    website?: true
    diretor?: true
    logotipo?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstituicaoCountAggregateInputType = {
    id?: true
    nome?: true
    sigla?: true
    endereco?: true
    telefone?: true
    email?: true
    website?: true
    diretor?: true
    logotipo?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstituicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicao to aggregate.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instituicaos
    **/
    _count?: true | InstituicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstituicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstituicaoMaxAggregateInputType
  }

  export type GetInstituicaoAggregateType<T extends InstituicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInstituicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstituicao[P]>
      : GetScalarType<T[P], AggregateInstituicao[P]>
  }




  export type InstituicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstituicaoWhereInput
    orderBy?: InstituicaoOrderByWithAggregationInput | InstituicaoOrderByWithAggregationInput[]
    by: InstituicaoScalarFieldEnum[] | InstituicaoScalarFieldEnum
    having?: InstituicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstituicaoCountAggregateInputType | true
    _min?: InstituicaoMinAggregateInputType
    _max?: InstituicaoMaxAggregateInputType
  }

  export type InstituicaoGroupByOutputType = {
    id: string
    nome: string
    sigla: string
    endereco: string | null
    telefone: string | null
    email: string | null
    website: string | null
    diretor: string | null
    logotipo: string | null
    adminId: string
    createdAt: Date
    updatedAt: Date
    _count: InstituicaoCountAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  type GetInstituicaoGroupByPayload<T extends InstituicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstituicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstituicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
            : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
        }
      >
    >


  export type InstituicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    website?: boolean
    diretor?: boolean
    logotipo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    website?: boolean
    diretor?: boolean
    logotipo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sigla?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    website?: boolean
    diretor?: boolean
    logotipo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectScalar = {
    id?: boolean
    nome?: boolean
    sigla?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    website?: boolean
    diretor?: boolean
    logotipo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstituicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sigla" | "endereco" | "telefone" | "email" | "website" | "diretor" | "logotipo" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["instituicao"]>
  export type InstituicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type InstituicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type InstituicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $InstituicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instituicao"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sigla: string
      endereco: string | null
      telefone: string | null
      email: string | null
      website: string | null
      diretor: string | null
      logotipo: string | null
      adminId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instituicao"]>
    composites: {}
  }

  type InstituicaoGetPayload<S extends boolean | null | undefined | InstituicaoDefaultArgs> = $Result.GetResult<Prisma.$InstituicaoPayload, S>

  type InstituicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstituicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstituicaoCountAggregateInputType | true
    }

  export interface InstituicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instituicao'], meta: { name: 'Instituicao' } }
    /**
     * Find zero or one Instituicao that matches the filter.
     * @param {InstituicaoFindUniqueArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstituicaoFindUniqueArgs>(args: SelectSubset<T, InstituicaoFindUniqueArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instituicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstituicaoFindUniqueOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstituicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InstituicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstituicaoFindFirstArgs>(args?: SelectSubset<T, InstituicaoFindFirstArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstituicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InstituicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instituicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instituicaos
     * const instituicaos = await prisma.instituicao.findMany()
     * 
     * // Get first 10 Instituicaos
     * const instituicaos = await prisma.instituicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instituicaoWithIdOnly = await prisma.instituicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstituicaoFindManyArgs>(args?: SelectSubset<T, InstituicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instituicao.
     * @param {InstituicaoCreateArgs} args - Arguments to create a Instituicao.
     * @example
     * // Create one Instituicao
     * const Instituicao = await prisma.instituicao.create({
     *   data: {
     *     // ... data to create a Instituicao
     *   }
     * })
     * 
     */
    create<T extends InstituicaoCreateArgs>(args: SelectSubset<T, InstituicaoCreateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instituicaos.
     * @param {InstituicaoCreateManyArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstituicaoCreateManyArgs>(args?: SelectSubset<T, InstituicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instituicaos and returns the data saved in the database.
     * @param {InstituicaoCreateManyAndReturnArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instituicaos and only return the `id`
     * const instituicaoWithIdOnly = await prisma.instituicao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstituicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InstituicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instituicao.
     * @param {InstituicaoDeleteArgs} args - Arguments to delete one Instituicao.
     * @example
     * // Delete one Instituicao
     * const Instituicao = await prisma.instituicao.delete({
     *   where: {
     *     // ... filter to delete one Instituicao
     *   }
     * })
     * 
     */
    delete<T extends InstituicaoDeleteArgs>(args: SelectSubset<T, InstituicaoDeleteArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instituicao.
     * @param {InstituicaoUpdateArgs} args - Arguments to update one Instituicao.
     * @example
     * // Update one Instituicao
     * const instituicao = await prisma.instituicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstituicaoUpdateArgs>(args: SelectSubset<T, InstituicaoUpdateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instituicaos.
     * @param {InstituicaoDeleteManyArgs} args - Arguments to filter Instituicaos to delete.
     * @example
     * // Delete a few Instituicaos
     * const { count } = await prisma.instituicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstituicaoDeleteManyArgs>(args?: SelectSubset<T, InstituicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstituicaoUpdateManyArgs>(args: SelectSubset<T, InstituicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos and returns the data updated in the database.
     * @param {InstituicaoUpdateManyAndReturnArgs} args - Arguments to update many Instituicaos.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instituicaos and only return the `id`
     * const instituicaoWithIdOnly = await prisma.instituicao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstituicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InstituicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instituicao.
     * @param {InstituicaoUpsertArgs} args - Arguments to update or create a Instituicao.
     * @example
     * // Update or create a Instituicao
     * const instituicao = await prisma.instituicao.upsert({
     *   create: {
     *     // ... data to create a Instituicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instituicao we want to update
     *   }
     * })
     */
    upsert<T extends InstituicaoUpsertArgs>(args: SelectSubset<T, InstituicaoUpsertArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoCountArgs} args - Arguments to filter Instituicaos to count.
     * @example
     * // Count the number of Instituicaos
     * const count = await prisma.instituicao.count({
     *   where: {
     *     // ... the filter for the Instituicaos we want to count
     *   }
     * })
    **/
    count<T extends InstituicaoCountArgs>(
      args?: Subset<T, InstituicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstituicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstituicaoAggregateArgs>(args: Subset<T, InstituicaoAggregateArgs>): Prisma.PrismaPromise<GetInstituicaoAggregateType<T>>

    /**
     * Group by Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstituicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstituicaoGroupByArgs['orderBy'] }
        : { orderBy?: InstituicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstituicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstituicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instituicao model
   */
  readonly fields: InstituicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instituicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstituicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instituicao model
   */
  interface InstituicaoFieldRefs {
    readonly id: FieldRef<"Instituicao", 'String'>
    readonly nome: FieldRef<"Instituicao", 'String'>
    readonly sigla: FieldRef<"Instituicao", 'String'>
    readonly endereco: FieldRef<"Instituicao", 'String'>
    readonly telefone: FieldRef<"Instituicao", 'String'>
    readonly email: FieldRef<"Instituicao", 'String'>
    readonly website: FieldRef<"Instituicao", 'String'>
    readonly diretor: FieldRef<"Instituicao", 'String'>
    readonly logotipo: FieldRef<"Instituicao", 'String'>
    readonly adminId: FieldRef<"Instituicao", 'String'>
    readonly createdAt: FieldRef<"Instituicao", 'DateTime'>
    readonly updatedAt: FieldRef<"Instituicao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Instituicao findUnique
   */
  export type InstituicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findUniqueOrThrow
   */
  export type InstituicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findFirst
   */
  export type InstituicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findFirstOrThrow
   */
  export type InstituicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findMany
   */
  export type InstituicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicaos to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao create
   */
  export type InstituicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Instituicao.
     */
    data: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
  }

  /**
   * Instituicao createMany
   */
  export type InstituicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao createManyAndReturn
   */
  export type InstituicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instituicao update
   */
  export type InstituicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Instituicao.
     */
    data: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
    /**
     * Choose, which Instituicao to update.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao updateMany
   */
  export type InstituicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao updateManyAndReturn
   */
  export type InstituicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instituicao upsert
   */
  export type InstituicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Instituicao to update in case it exists.
     */
    where: InstituicaoWhereUniqueInput
    /**
     * In case the Instituicao found by the `where` argument doesn't exist, create a new Instituicao with this data.
     */
    create: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
    /**
     * In case the Instituicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
  }

  /**
   * Instituicao delete
   */
  export type InstituicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter which Instituicao to delete.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao deleteMany
   */
  export type InstituicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicaos to delete
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to delete.
     */
    limit?: number
  }

  /**
   * Instituicao without action
   */
  export type InstituicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
  }


  /**
   * Model AnoLectivo
   */

  export type AggregateAnoLectivo = {
    _count: AnoLectivoCountAggregateOutputType | null
    _min: AnoLectivoMinAggregateOutputType | null
    _max: AnoLectivoMaxAggregateOutputType | null
  }

  export type AnoLectivoMinAggregateOutputType = {
    id: string | null
    ano: string | null
    dataInicio: Date | null
    dataFim: Date | null
    activo: boolean | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnoLectivoMaxAggregateOutputType = {
    id: string | null
    ano: string | null
    dataInicio: Date | null
    dataFim: Date | null
    activo: boolean | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnoLectivoCountAggregateOutputType = {
    id: number
    ano: number
    dataInicio: number
    dataFim: number
    activo: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnoLectivoMinAggregateInputType = {
    id?: true
    ano?: true
    dataInicio?: true
    dataFim?: true
    activo?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnoLectivoMaxAggregateInputType = {
    id?: true
    ano?: true
    dataInicio?: true
    dataFim?: true
    activo?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnoLectivoCountAggregateInputType = {
    id?: true
    ano?: true
    dataInicio?: true
    dataFim?: true
    activo?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnoLectivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnoLectivo to aggregate.
     */
    where?: AnoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnoLectivos to fetch.
     */
    orderBy?: AnoLectivoOrderByWithRelationInput | AnoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnoLectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnoLectivos
    **/
    _count?: true | AnoLectivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnoLectivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnoLectivoMaxAggregateInputType
  }

  export type GetAnoLectivoAggregateType<T extends AnoLectivoAggregateArgs> = {
        [P in keyof T & keyof AggregateAnoLectivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnoLectivo[P]>
      : GetScalarType<T[P], AggregateAnoLectivo[P]>
  }




  export type AnoLectivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnoLectivoWhereInput
    orderBy?: AnoLectivoOrderByWithAggregationInput | AnoLectivoOrderByWithAggregationInput[]
    by: AnoLectivoScalarFieldEnum[] | AnoLectivoScalarFieldEnum
    having?: AnoLectivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnoLectivoCountAggregateInputType | true
    _min?: AnoLectivoMinAggregateInputType
    _max?: AnoLectivoMaxAggregateInputType
  }

  export type AnoLectivoGroupByOutputType = {
    id: string
    ano: string
    dataInicio: Date
    dataFim: Date
    activo: boolean
    adminId: string
    createdAt: Date
    updatedAt: Date
    _count: AnoLectivoCountAggregateOutputType | null
    _min: AnoLectivoMinAggregateOutputType | null
    _max: AnoLectivoMaxAggregateOutputType | null
  }

  type GetAnoLectivoGroupByPayload<T extends AnoLectivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnoLectivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnoLectivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnoLectivoGroupByOutputType[P]>
            : GetScalarType<T[P], AnoLectivoGroupByOutputType[P]>
        }
      >
    >


  export type AnoLectivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ano?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    activo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anoLectivo"]>

  export type AnoLectivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ano?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    activo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anoLectivo"]>

  export type AnoLectivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ano?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    activo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anoLectivo"]>

  export type AnoLectivoSelectScalar = {
    id?: boolean
    ano?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    activo?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnoLectivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ano" | "dataInicio" | "dataFim" | "activo" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["anoLectivo"]>
  export type AnoLectivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type AnoLectivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type AnoLectivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $AnoLectivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnoLectivo"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ano: string
      dataInicio: Date
      dataFim: Date
      activo: boolean
      adminId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["anoLectivo"]>
    composites: {}
  }

  type AnoLectivoGetPayload<S extends boolean | null | undefined | AnoLectivoDefaultArgs> = $Result.GetResult<Prisma.$AnoLectivoPayload, S>

  type AnoLectivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnoLectivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnoLectivoCountAggregateInputType | true
    }

  export interface AnoLectivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnoLectivo'], meta: { name: 'AnoLectivo' } }
    /**
     * Find zero or one AnoLectivo that matches the filter.
     * @param {AnoLectivoFindUniqueArgs} args - Arguments to find a AnoLectivo
     * @example
     * // Get one AnoLectivo
     * const anoLectivo = await prisma.anoLectivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnoLectivoFindUniqueArgs>(args: SelectSubset<T, AnoLectivoFindUniqueArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnoLectivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnoLectivoFindUniqueOrThrowArgs} args - Arguments to find a AnoLectivo
     * @example
     * // Get one AnoLectivo
     * const anoLectivo = await prisma.anoLectivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnoLectivoFindUniqueOrThrowArgs>(args: SelectSubset<T, AnoLectivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnoLectivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnoLectivoFindFirstArgs} args - Arguments to find a AnoLectivo
     * @example
     * // Get one AnoLectivo
     * const anoLectivo = await prisma.anoLectivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnoLectivoFindFirstArgs>(args?: SelectSubset<T, AnoLectivoFindFirstArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnoLectivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnoLectivoFindFirstOrThrowArgs} args - Arguments to find a AnoLectivo
     * @example
     * // Get one AnoLectivo
     * const anoLectivo = await prisma.anoLectivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnoLectivoFindFirstOrThrowArgs>(args?: SelectSubset<T, AnoLectivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnoLectivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnoLectivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnoLectivos
     * const anoLectivos = await prisma.anoLectivo.findMany()
     * 
     * // Get first 10 AnoLectivos
     * const anoLectivos = await prisma.anoLectivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anoLectivoWithIdOnly = await prisma.anoLectivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnoLectivoFindManyArgs>(args?: SelectSubset<T, AnoLectivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnoLectivo.
     * @param {AnoLectivoCreateArgs} args - Arguments to create a AnoLectivo.
     * @example
     * // Create one AnoLectivo
     * const AnoLectivo = await prisma.anoLectivo.create({
     *   data: {
     *     // ... data to create a AnoLectivo
     *   }
     * })
     * 
     */
    create<T extends AnoLectivoCreateArgs>(args: SelectSubset<T, AnoLectivoCreateArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnoLectivos.
     * @param {AnoLectivoCreateManyArgs} args - Arguments to create many AnoLectivos.
     * @example
     * // Create many AnoLectivos
     * const anoLectivo = await prisma.anoLectivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnoLectivoCreateManyArgs>(args?: SelectSubset<T, AnoLectivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnoLectivos and returns the data saved in the database.
     * @param {AnoLectivoCreateManyAndReturnArgs} args - Arguments to create many AnoLectivos.
     * @example
     * // Create many AnoLectivos
     * const anoLectivo = await prisma.anoLectivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnoLectivos and only return the `id`
     * const anoLectivoWithIdOnly = await prisma.anoLectivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnoLectivoCreateManyAndReturnArgs>(args?: SelectSubset<T, AnoLectivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnoLectivo.
     * @param {AnoLectivoDeleteArgs} args - Arguments to delete one AnoLectivo.
     * @example
     * // Delete one AnoLectivo
     * const AnoLectivo = await prisma.anoLectivo.delete({
     *   where: {
     *     // ... filter to delete one AnoLectivo
     *   }
     * })
     * 
     */
    delete<T extends AnoLectivoDeleteArgs>(args: SelectSubset<T, AnoLectivoDeleteArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnoLectivo.
     * @param {AnoLectivoUpdateArgs} args - Arguments to update one AnoLectivo.
     * @example
     * // Update one AnoLectivo
     * const anoLectivo = await prisma.anoLectivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnoLectivoUpdateArgs>(args: SelectSubset<T, AnoLectivoUpdateArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnoLectivos.
     * @param {AnoLectivoDeleteManyArgs} args - Arguments to filter AnoLectivos to delete.
     * @example
     * // Delete a few AnoLectivos
     * const { count } = await prisma.anoLectivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnoLectivoDeleteManyArgs>(args?: SelectSubset<T, AnoLectivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnoLectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnoLectivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnoLectivos
     * const anoLectivo = await prisma.anoLectivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnoLectivoUpdateManyArgs>(args: SelectSubset<T, AnoLectivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnoLectivos and returns the data updated in the database.
     * @param {AnoLectivoUpdateManyAndReturnArgs} args - Arguments to update many AnoLectivos.
     * @example
     * // Update many AnoLectivos
     * const anoLectivo = await prisma.anoLectivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnoLectivos and only return the `id`
     * const anoLectivoWithIdOnly = await prisma.anoLectivo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnoLectivoUpdateManyAndReturnArgs>(args: SelectSubset<T, AnoLectivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnoLectivo.
     * @param {AnoLectivoUpsertArgs} args - Arguments to update or create a AnoLectivo.
     * @example
     * // Update or create a AnoLectivo
     * const anoLectivo = await prisma.anoLectivo.upsert({
     *   create: {
     *     // ... data to create a AnoLectivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnoLectivo we want to update
     *   }
     * })
     */
    upsert<T extends AnoLectivoUpsertArgs>(args: SelectSubset<T, AnoLectivoUpsertArgs<ExtArgs>>): Prisma__AnoLectivoClient<$Result.GetResult<Prisma.$AnoLectivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnoLectivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnoLectivoCountArgs} args - Arguments to filter AnoLectivos to count.
     * @example
     * // Count the number of AnoLectivos
     * const count = await prisma.anoLectivo.count({
     *   where: {
     *     // ... the filter for the AnoLectivos we want to count
     *   }
     * })
    **/
    count<T extends AnoLectivoCountArgs>(
      args?: Subset<T, AnoLectivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnoLectivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnoLectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnoLectivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnoLectivoAggregateArgs>(args: Subset<T, AnoLectivoAggregateArgs>): Prisma.PrismaPromise<GetAnoLectivoAggregateType<T>>

    /**
     * Group by AnoLectivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnoLectivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnoLectivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnoLectivoGroupByArgs['orderBy'] }
        : { orderBy?: AnoLectivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnoLectivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnoLectivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnoLectivo model
   */
  readonly fields: AnoLectivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnoLectivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnoLectivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnoLectivo model
   */
  interface AnoLectivoFieldRefs {
    readonly id: FieldRef<"AnoLectivo", 'String'>
    readonly ano: FieldRef<"AnoLectivo", 'String'>
    readonly dataInicio: FieldRef<"AnoLectivo", 'DateTime'>
    readonly dataFim: FieldRef<"AnoLectivo", 'DateTime'>
    readonly activo: FieldRef<"AnoLectivo", 'Boolean'>
    readonly adminId: FieldRef<"AnoLectivo", 'String'>
    readonly createdAt: FieldRef<"AnoLectivo", 'DateTime'>
    readonly updatedAt: FieldRef<"AnoLectivo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnoLectivo findUnique
   */
  export type AnoLectivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which AnoLectivo to fetch.
     */
    where: AnoLectivoWhereUniqueInput
  }

  /**
   * AnoLectivo findUniqueOrThrow
   */
  export type AnoLectivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which AnoLectivo to fetch.
     */
    where: AnoLectivoWhereUniqueInput
  }

  /**
   * AnoLectivo findFirst
   */
  export type AnoLectivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which AnoLectivo to fetch.
     */
    where?: AnoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnoLectivos to fetch.
     */
    orderBy?: AnoLectivoOrderByWithRelationInput | AnoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnoLectivos.
     */
    cursor?: AnoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnoLectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnoLectivos.
     */
    distinct?: AnoLectivoScalarFieldEnum | AnoLectivoScalarFieldEnum[]
  }

  /**
   * AnoLectivo findFirstOrThrow
   */
  export type AnoLectivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which AnoLectivo to fetch.
     */
    where?: AnoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnoLectivos to fetch.
     */
    orderBy?: AnoLectivoOrderByWithRelationInput | AnoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnoLectivos.
     */
    cursor?: AnoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnoLectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnoLectivos.
     */
    distinct?: AnoLectivoScalarFieldEnum | AnoLectivoScalarFieldEnum[]
  }

  /**
   * AnoLectivo findMany
   */
  export type AnoLectivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * Filter, which AnoLectivos to fetch.
     */
    where?: AnoLectivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnoLectivos to fetch.
     */
    orderBy?: AnoLectivoOrderByWithRelationInput | AnoLectivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnoLectivos.
     */
    cursor?: AnoLectivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnoLectivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnoLectivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnoLectivos.
     */
    distinct?: AnoLectivoScalarFieldEnum | AnoLectivoScalarFieldEnum[]
  }

  /**
   * AnoLectivo create
   */
  export type AnoLectivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * The data needed to create a AnoLectivo.
     */
    data: XOR<AnoLectivoCreateInput, AnoLectivoUncheckedCreateInput>
  }

  /**
   * AnoLectivo createMany
   */
  export type AnoLectivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnoLectivos.
     */
    data: AnoLectivoCreateManyInput | AnoLectivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnoLectivo createManyAndReturn
   */
  export type AnoLectivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * The data used to create many AnoLectivos.
     */
    data: AnoLectivoCreateManyInput | AnoLectivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnoLectivo update
   */
  export type AnoLectivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * The data needed to update a AnoLectivo.
     */
    data: XOR<AnoLectivoUpdateInput, AnoLectivoUncheckedUpdateInput>
    /**
     * Choose, which AnoLectivo to update.
     */
    where: AnoLectivoWhereUniqueInput
  }

  /**
   * AnoLectivo updateMany
   */
  export type AnoLectivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnoLectivos.
     */
    data: XOR<AnoLectivoUpdateManyMutationInput, AnoLectivoUncheckedUpdateManyInput>
    /**
     * Filter which AnoLectivos to update
     */
    where?: AnoLectivoWhereInput
    /**
     * Limit how many AnoLectivos to update.
     */
    limit?: number
  }

  /**
   * AnoLectivo updateManyAndReturn
   */
  export type AnoLectivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * The data used to update AnoLectivos.
     */
    data: XOR<AnoLectivoUpdateManyMutationInput, AnoLectivoUncheckedUpdateManyInput>
    /**
     * Filter which AnoLectivos to update
     */
    where?: AnoLectivoWhereInput
    /**
     * Limit how many AnoLectivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnoLectivo upsert
   */
  export type AnoLectivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * The filter to search for the AnoLectivo to update in case it exists.
     */
    where: AnoLectivoWhereUniqueInput
    /**
     * In case the AnoLectivo found by the `where` argument doesn't exist, create a new AnoLectivo with this data.
     */
    create: XOR<AnoLectivoCreateInput, AnoLectivoUncheckedCreateInput>
    /**
     * In case the AnoLectivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnoLectivoUpdateInput, AnoLectivoUncheckedUpdateInput>
  }

  /**
   * AnoLectivo delete
   */
  export type AnoLectivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
    /**
     * Filter which AnoLectivo to delete.
     */
    where: AnoLectivoWhereUniqueInput
  }

  /**
   * AnoLectivo deleteMany
   */
  export type AnoLectivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnoLectivos to delete
     */
    where?: AnoLectivoWhereInput
    /**
     * Limit how many AnoLectivos to delete.
     */
    limit?: number
  }

  /**
   * AnoLectivo without action
   */
  export type AnoLectivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnoLectivo
     */
    select?: AnoLectivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnoLectivo
     */
    omit?: AnoLectivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnoLectivoInclude<ExtArgs> | null
  }


  /**
   * Model Configuracao
   */

  export type AggregateConfiguracao = {
    _count: ConfiguracaoCountAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  export type ConfiguracaoMinAggregateOutputType = {
    id: string | null
    chave: string | null
    valor: string | null
    adminId: string | null
    updatedAt: Date | null
  }

  export type ConfiguracaoMaxAggregateOutputType = {
    id: string | null
    chave: string | null
    valor: string | null
    adminId: string | null
    updatedAt: Date | null
  }

  export type ConfiguracaoCountAggregateOutputType = {
    id: number
    chave: number
    valor: number
    adminId: number
    updatedAt: number
    _all: number
  }


  export type ConfiguracaoMinAggregateInputType = {
    id?: true
    chave?: true
    valor?: true
    adminId?: true
    updatedAt?: true
  }

  export type ConfiguracaoMaxAggregateInputType = {
    id?: true
    chave?: true
    valor?: true
    adminId?: true
    updatedAt?: true
  }

  export type ConfiguracaoCountAggregateInputType = {
    id?: true
    chave?: true
    valor?: true
    adminId?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfiguracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracao to aggregate.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configuracaos
    **/
    _count?: true | ConfiguracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type GetConfiguracaoAggregateType<T extends ConfiguracaoAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracao[P]>
      : GetScalarType<T[P], AggregateConfiguracao[P]>
  }




  export type ConfiguracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracaoWhereInput
    orderBy?: ConfiguracaoOrderByWithAggregationInput | ConfiguracaoOrderByWithAggregationInput[]
    by: ConfiguracaoScalarFieldEnum[] | ConfiguracaoScalarFieldEnum
    having?: ConfiguracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracaoCountAggregateInputType | true
    _min?: ConfiguracaoMinAggregateInputType
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type ConfiguracaoGroupByOutputType = {
    id: string
    chave: string
    valor: string
    adminId: string
    updatedAt: Date
    _count: ConfiguracaoCountAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  type GetConfiguracaoGroupByPayload<T extends ConfiguracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chave?: boolean
    valor?: boolean
    adminId?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chave?: boolean
    valor?: boolean
    adminId?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chave?: boolean
    valor?: boolean
    adminId?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracao"]>

  export type ConfiguracaoSelectScalar = {
    id?: boolean
    chave?: boolean
    valor?: boolean
    adminId?: boolean
    updatedAt?: boolean
  }

  export type ConfiguracaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chave" | "valor" | "adminId" | "updatedAt", ExtArgs["result"]["configuracao"]>
  export type ConfiguracaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type ConfiguracaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type ConfiguracaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $ConfiguracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuracao"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chave: string
      valor: string
      adminId: string
      updatedAt: Date
    }, ExtArgs["result"]["configuracao"]>
    composites: {}
  }

  type ConfiguracaoGetPayload<S extends boolean | null | undefined | ConfiguracaoDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracaoPayload, S>

  type ConfiguracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracaoCountAggregateInputType | true
    }

  export interface ConfiguracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuracao'], meta: { name: 'Configuracao' } }
    /**
     * Find zero or one Configuracao that matches the filter.
     * @param {ConfiguracaoFindUniqueArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracaoFindUniqueArgs>(args: SelectSubset<T, ConfiguracaoFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracaoFindUniqueOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindFirstArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracaoFindFirstArgs>(args?: SelectSubset<T, ConfiguracaoFindFirstArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindFirstOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracaos
     * const configuracaos = await prisma.configuracao.findMany()
     * 
     * // Get first 10 Configuracaos
     * const configuracaos = await prisma.configuracao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfiguracaoFindManyArgs>(args?: SelectSubset<T, ConfiguracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracao.
     * @param {ConfiguracaoCreateArgs} args - Arguments to create a Configuracao.
     * @example
     * // Create one Configuracao
     * const Configuracao = await prisma.configuracao.create({
     *   data: {
     *     // ... data to create a Configuracao
     *   }
     * })
     * 
     */
    create<T extends ConfiguracaoCreateArgs>(args: SelectSubset<T, ConfiguracaoCreateArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracaos.
     * @param {ConfiguracaoCreateManyArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracaoCreateManyArgs>(args?: SelectSubset<T, ConfiguracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracaos and returns the data saved in the database.
     * @param {ConfiguracaoCreateManyAndReturnArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracao.
     * @param {ConfiguracaoDeleteArgs} args - Arguments to delete one Configuracao.
     * @example
     * // Delete one Configuracao
     * const Configuracao = await prisma.configuracao.delete({
     *   where: {
     *     // ... filter to delete one Configuracao
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracaoDeleteArgs>(args: SelectSubset<T, ConfiguracaoDeleteArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracao.
     * @param {ConfiguracaoUpdateArgs} args - Arguments to update one Configuracao.
     * @example
     * // Update one Configuracao
     * const configuracao = await prisma.configuracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracaoUpdateArgs>(args: SelectSubset<T, ConfiguracaoUpdateArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracaos.
     * @param {ConfiguracaoDeleteManyArgs} args - Arguments to filter Configuracaos to delete.
     * @example
     * // Delete a few Configuracaos
     * const { count } = await prisma.configuracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracaoDeleteManyArgs>(args?: SelectSubset<T, ConfiguracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracaoUpdateManyArgs>(args: SelectSubset<T, ConfiguracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos and returns the data updated in the database.
     * @param {ConfiguracaoUpdateManyAndReturnArgs} args - Arguments to update many Configuracaos.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfiguracaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfiguracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracao.
     * @param {ConfiguracaoUpsertArgs} args - Arguments to update or create a Configuracao.
     * @example
     * // Update or create a Configuracao
     * const configuracao = await prisma.configuracao.upsert({
     *   create: {
     *     // ... data to create a Configuracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracao we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracaoUpsertArgs>(args: SelectSubset<T, ConfiguracaoUpsertArgs<ExtArgs>>): Prisma__ConfiguracaoClient<$Result.GetResult<Prisma.$ConfiguracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoCountArgs} args - Arguments to filter Configuracaos to count.
     * @example
     * // Count the number of Configuracaos
     * const count = await prisma.configuracao.count({
     *   where: {
     *     // ... the filter for the Configuracaos we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracaoCountArgs>(
      args?: Subset<T, ConfiguracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfiguracaoAggregateArgs>(args: Subset<T, ConfiguracaoAggregateArgs>): Prisma.PrismaPromise<GetConfiguracaoAggregateType<T>>

    /**
     * Group by Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfiguracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracaoGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfiguracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuracao model
   */
  readonly fields: ConfiguracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuracao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Configuracao model
   */
  interface ConfiguracaoFieldRefs {
    readonly id: FieldRef<"Configuracao", 'String'>
    readonly chave: FieldRef<"Configuracao", 'String'>
    readonly valor: FieldRef<"Configuracao", 'String'>
    readonly adminId: FieldRef<"Configuracao", 'String'>
    readonly updatedAt: FieldRef<"Configuracao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Configuracao findUnique
   */
  export type ConfiguracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao findUniqueOrThrow
   */
  export type ConfiguracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao findFirst
   */
  export type ConfiguracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao findFirstOrThrow
   */
  export type ConfiguracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracao to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao findMany
   */
  export type ConfiguracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * Filter, which Configuracaos to fetch.
     */
    where?: ConfiguracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configuracaos to fetch.
     */
    orderBy?: ConfiguracaoOrderByWithRelationInput | ConfiguracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configuracaos.
     */
    cursor?: ConfiguracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * Configuracao create
   */
  export type ConfiguracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Configuracao.
     */
    data: XOR<ConfiguracaoCreateInput, ConfiguracaoUncheckedCreateInput>
  }

  /**
   * Configuracao createMany
   */
  export type ConfiguracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configuracaos.
     */
    data: ConfiguracaoCreateManyInput | ConfiguracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuracao createManyAndReturn
   */
  export type ConfiguracaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data used to create many Configuracaos.
     */
    data: ConfiguracaoCreateManyInput | ConfiguracaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Configuracao update
   */
  export type ConfiguracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Configuracao.
     */
    data: XOR<ConfiguracaoUpdateInput, ConfiguracaoUncheckedUpdateInput>
    /**
     * Choose, which Configuracao to update.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao updateMany
   */
  export type ConfiguracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configuracaos.
     */
    data: XOR<ConfiguracaoUpdateManyMutationInput, ConfiguracaoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracaos to update
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to update.
     */
    limit?: number
  }

  /**
   * Configuracao updateManyAndReturn
   */
  export type ConfiguracaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * The data used to update Configuracaos.
     */
    data: XOR<ConfiguracaoUpdateManyMutationInput, ConfiguracaoUncheckedUpdateManyInput>
    /**
     * Filter which Configuracaos to update
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Configuracao upsert
   */
  export type ConfiguracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Configuracao to update in case it exists.
     */
    where: ConfiguracaoWhereUniqueInput
    /**
     * In case the Configuracao found by the `where` argument doesn't exist, create a new Configuracao with this data.
     */
    create: XOR<ConfiguracaoCreateInput, ConfiguracaoUncheckedCreateInput>
    /**
     * In case the Configuracao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracaoUpdateInput, ConfiguracaoUncheckedUpdateInput>
  }

  /**
   * Configuracao delete
   */
  export type ConfiguracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
    /**
     * Filter which Configuracao to delete.
     */
    where: ConfiguracaoWhereUniqueInput
  }

  /**
   * Configuracao deleteMany
   */
  export type ConfiguracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuracaos to delete
     */
    where?: ConfiguracaoWhereInput
    /**
     * Limit how many Configuracaos to delete.
     */
    limit?: number
  }

  /**
   * Configuracao without action
   */
  export type ConfiguracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuracao
     */
    select?: ConfiguracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuracao
     */
    omit?: ConfiguracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    numeroUtilizador: 'numeroUtilizador',
    senhaHash: 'senhaHash',
    role: 'role',
    status: 'status',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cargo: 'cargo',
    contacto: 'contacto'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dataNascimento: 'dataNascimento',
    tipoIdentificacao: 'tipoIdentificacao',
    numeroIdentificacao: 'numeroIdentificacao',
    numeroProcesso: 'numeroProcesso',
    turmaId: 'turmaId',
    curso: 'curso',
    classe: 'classe',
    turno: 'turno',
    genero: 'genero',
    estadoCivil: 'estadoCivil',
    nomePai: 'nomePai',
    nomeMae: 'nomeMae',
    naturalidade: 'naturalidade',
    provincia: 'provincia',
    municipio: 'municipio',
    comuna: 'comuna',
    encarregadoNome: 'encarregadoNome',
    encarregadoParentesco: 'encarregadoParentesco',
    encarregadoGenero: 'encarregadoGenero',
    encarregadoDataNascimento: 'encarregadoDataNascimento',
    encarregadoTelefone: 'encarregadoTelefone',
    encarregadoEmail: 'encarregadoEmail'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sigla: 'sigla'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cursoId: 'cursoId',
    classe: 'classe',
    vagas: 'vagas',
    turno: 'turno',
    anoLectivo: 'anoLectivo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sigla: 'sigla',
    cursoId: 'cursoId',
    classe: 'classe',
    cargaHoraria: 'cargaHoraria',
    cor: 'cor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const ProfessorDisciplinaScalarFieldEnum: {
    professorId: 'professorId',
    disciplinaId: 'disciplinaId',
    turmaId: 'turmaId'
  };

  export type ProfessorDisciplinaScalarFieldEnum = (typeof ProfessorDisciplinaScalarFieldEnum)[keyof typeof ProfessorDisciplinaScalarFieldEnum]


  export const InstituicaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sigla: 'sigla',
    endereco: 'endereco',
    telefone: 'telefone',
    email: 'email',
    website: 'website',
    diretor: 'diretor',
    logotipo: 'logotipo',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstituicaoScalarFieldEnum = (typeof InstituicaoScalarFieldEnum)[keyof typeof InstituicaoScalarFieldEnum]


  export const AnoLectivoScalarFieldEnum: {
    id: 'id',
    ano: 'ano',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    activo: 'activo',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnoLectivoScalarFieldEnum = (typeof AnoLectivoScalarFieldEnum)[keyof typeof AnoLectivoScalarFieldEnum]


  export const ConfiguracaoScalarFieldEnum: {
    id: 'id',
    chave: 'chave',
    valor: 'valor',
    adminId: 'adminId',
    updatedAt: 'updatedAt'
  };

  export type ConfiguracaoScalarFieldEnum = (typeof ConfiguracaoScalarFieldEnum)[keyof typeof ConfiguracaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    telefone?: StringNullableFilter<"User"> | string | null
    numeroUtilizador?: StringNullableFilter<"User"> | string | null
    senhaHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    aluno?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    numeroUtilizador?: SortOrderInput | SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    professor?: ProfessorOrderByWithRelationInput
    aluno?: AlunoOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    numeroUtilizador?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    telefone?: StringNullableFilter<"User"> | string | null
    senhaHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    aluno?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
  }, "id" | "email" | "numeroUtilizador">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    numeroUtilizador?: SortOrderInput | SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"User"> | string | null
    numeroUtilizador?: StringNullableWithAggregatesFilter<"User"> | string | null
    senhaHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    instituicoes?: InstituicaoListRelationFilter
    anosLectivos?: AnoLectivoListRelationFilter
    configuracoes?: ConfiguracaoListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    instituicoes?: InstituicaoOrderByRelationAggregateInput
    anosLectivos?: AnoLectivoOrderByRelationAggregateInput
    configuracoes?: ConfiguracaoOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    instituicoes?: InstituicaoListRelationFilter
    anosLectivos?: AnoLectivoListRelationFilter
    configuracoes?: ConfiguracaoListRelationFilter
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: StringFilter<"Professor"> | string
    userId?: StringFilter<"Professor"> | string
    cargo?: StringFilter<"Professor"> | string
    contacto?: StringNullableFilter<"Professor"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    disciplinas?: ProfessorDisciplinaListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cargo?: SortOrder
    contacto?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    disciplinas?: ProfessorDisciplinaOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    cargo?: StringFilter<"Professor"> | string
    contacto?: StringNullableFilter<"Professor"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    disciplinas?: ProfessorDisciplinaListRelationFilter
  }, "id" | "userId">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cargo?: SortOrder
    contacto?: SortOrderInput | SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Professor"> | string
    userId?: StringWithAggregatesFilter<"Professor"> | string
    cargo?: StringWithAggregatesFilter<"Professor"> | string
    contacto?: StringNullableWithAggregatesFilter<"Professor"> | string | null
  }

  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: StringFilter<"Aluno"> | string
    userId?: StringFilter<"Aluno"> | string
    dataNascimento?: DateTimeFilter<"Aluno"> | Date | string
    tipoIdentificacao?: StringFilter<"Aluno"> | string
    numeroIdentificacao?: StringFilter<"Aluno"> | string
    numeroProcesso?: StringFilter<"Aluno"> | string
    turmaId?: StringNullableFilter<"Aluno"> | string | null
    curso?: StringNullableFilter<"Aluno"> | string | null
    classe?: StringNullableFilter<"Aluno"> | string | null
    turno?: StringNullableFilter<"Aluno"> | string | null
    genero?: StringNullableFilter<"Aluno"> | string | null
    estadoCivil?: StringNullableFilter<"Aluno"> | string | null
    nomePai?: StringNullableFilter<"Aluno"> | string | null
    nomeMae?: StringNullableFilter<"Aluno"> | string | null
    naturalidade?: StringNullableFilter<"Aluno"> | string | null
    provincia?: StringNullableFilter<"Aluno"> | string | null
    municipio?: StringNullableFilter<"Aluno"> | string | null
    comuna?: StringNullableFilter<"Aluno"> | string | null
    encarregadoNome?: StringNullableFilter<"Aluno"> | string | null
    encarregadoParentesco?: StringNullableFilter<"Aluno"> | string | null
    encarregadoGenero?: StringNullableFilter<"Aluno"> | string | null
    encarregadoDataNascimento?: DateTimeNullableFilter<"Aluno"> | Date | string | null
    encarregadoTelefone?: StringNullableFilter<"Aluno"> | string | null
    encarregadoEmail?: StringNullableFilter<"Aluno"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    turma?: XOR<TurmaNullableScalarRelationFilter, TurmaWhereInput> | null
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dataNascimento?: SortOrder
    tipoIdentificacao?: SortOrder
    numeroIdentificacao?: SortOrder
    numeroProcesso?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    curso?: SortOrderInput | SortOrder
    classe?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    estadoCivil?: SortOrderInput | SortOrder
    nomePai?: SortOrderInput | SortOrder
    nomeMae?: SortOrderInput | SortOrder
    naturalidade?: SortOrderInput | SortOrder
    provincia?: SortOrderInput | SortOrder
    municipio?: SortOrderInput | SortOrder
    comuna?: SortOrderInput | SortOrder
    encarregadoNome?: SortOrderInput | SortOrder
    encarregadoParentesco?: SortOrderInput | SortOrder
    encarregadoGenero?: SortOrderInput | SortOrder
    encarregadoDataNascimento?: SortOrderInput | SortOrder
    encarregadoTelefone?: SortOrderInput | SortOrder
    encarregadoEmail?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    numeroProcesso?: string
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    dataNascimento?: DateTimeFilter<"Aluno"> | Date | string
    tipoIdentificacao?: StringFilter<"Aluno"> | string
    numeroIdentificacao?: StringFilter<"Aluno"> | string
    turmaId?: StringNullableFilter<"Aluno"> | string | null
    curso?: StringNullableFilter<"Aluno"> | string | null
    classe?: StringNullableFilter<"Aluno"> | string | null
    turno?: StringNullableFilter<"Aluno"> | string | null
    genero?: StringNullableFilter<"Aluno"> | string | null
    estadoCivil?: StringNullableFilter<"Aluno"> | string | null
    nomePai?: StringNullableFilter<"Aluno"> | string | null
    nomeMae?: StringNullableFilter<"Aluno"> | string | null
    naturalidade?: StringNullableFilter<"Aluno"> | string | null
    provincia?: StringNullableFilter<"Aluno"> | string | null
    municipio?: StringNullableFilter<"Aluno"> | string | null
    comuna?: StringNullableFilter<"Aluno"> | string | null
    encarregadoNome?: StringNullableFilter<"Aluno"> | string | null
    encarregadoParentesco?: StringNullableFilter<"Aluno"> | string | null
    encarregadoGenero?: StringNullableFilter<"Aluno"> | string | null
    encarregadoDataNascimento?: DateTimeNullableFilter<"Aluno"> | Date | string | null
    encarregadoTelefone?: StringNullableFilter<"Aluno"> | string | null
    encarregadoEmail?: StringNullableFilter<"Aluno"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    turma?: XOR<TurmaNullableScalarRelationFilter, TurmaWhereInput> | null
  }, "id" | "userId" | "numeroProcesso">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dataNascimento?: SortOrder
    tipoIdentificacao?: SortOrder
    numeroIdentificacao?: SortOrder
    numeroProcesso?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    curso?: SortOrderInput | SortOrder
    classe?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    estadoCivil?: SortOrderInput | SortOrder
    nomePai?: SortOrderInput | SortOrder
    nomeMae?: SortOrderInput | SortOrder
    naturalidade?: SortOrderInput | SortOrder
    provincia?: SortOrderInput | SortOrder
    municipio?: SortOrderInput | SortOrder
    comuna?: SortOrderInput | SortOrder
    encarregadoNome?: SortOrderInput | SortOrder
    encarregadoParentesco?: SortOrderInput | SortOrder
    encarregadoGenero?: SortOrderInput | SortOrder
    encarregadoDataNascimento?: SortOrderInput | SortOrder
    encarregadoTelefone?: SortOrderInput | SortOrder
    encarregadoEmail?: SortOrderInput | SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aluno"> | string
    userId?: StringWithAggregatesFilter<"Aluno"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
    tipoIdentificacao?: StringWithAggregatesFilter<"Aluno"> | string
    numeroIdentificacao?: StringWithAggregatesFilter<"Aluno"> | string
    numeroProcesso?: StringWithAggregatesFilter<"Aluno"> | string
    turmaId?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    curso?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    classe?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    turno?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    genero?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    estadoCivil?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    nomePai?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    nomeMae?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    naturalidade?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    provincia?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    municipio?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    comuna?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    encarregadoNome?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    encarregadoParentesco?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    encarregadoGenero?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    encarregadoDataNascimento?: DateTimeNullableWithAggregatesFilter<"Aluno"> | Date | string | null
    encarregadoTelefone?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    encarregadoEmail?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: StringFilter<"Curso"> | string
    nome?: StringFilter<"Curso"> | string
    sigla?: StringFilter<"Curso"> | string
    turmas?: TurmaListRelationFilter
    disciplinas?: DisciplinaListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    turmas?: TurmaOrderByRelationAggregateInput
    disciplinas?: DisciplinaOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nome?: StringFilter<"Curso"> | string
    sigla?: StringFilter<"Curso"> | string
    turmas?: TurmaListRelationFilter
    disciplinas?: DisciplinaListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Curso"> | string
    nome?: StringWithAggregatesFilter<"Curso"> | string
    sigla?: StringWithAggregatesFilter<"Curso"> | string
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    id?: StringFilter<"Turma"> | string
    nome?: StringFilter<"Turma"> | string
    cursoId?: StringFilter<"Turma"> | string
    classe?: StringFilter<"Turma"> | string
    vagas?: IntFilter<"Turma"> | number
    turno?: StringFilter<"Turma"> | string
    anoLectivo?: StringFilter<"Turma"> | string
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    updatedAt?: DateTimeFilter<"Turma"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    alunos?: AlunoListRelationFilter
    professores?: ProfessorDisciplinaListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    vagas?: SortOrder
    turno?: SortOrder
    anoLectivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curso?: CursoOrderByWithRelationInput
    alunos?: AlunoOrderByRelationAggregateInput
    professores?: ProfessorDisciplinaOrderByRelationAggregateInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome_cursoId?: TurmaNomeCursoIdCompoundUniqueInput
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome?: StringFilter<"Turma"> | string
    cursoId?: StringFilter<"Turma"> | string
    classe?: StringFilter<"Turma"> | string
    vagas?: IntFilter<"Turma"> | number
    turno?: StringFilter<"Turma"> | string
    anoLectivo?: StringFilter<"Turma"> | string
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    updatedAt?: DateTimeFilter<"Turma"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    alunos?: AlunoListRelationFilter
    professores?: ProfessorDisciplinaListRelationFilter
  }, "id" | "nome_cursoId">

  export type TurmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    vagas?: SortOrder
    turno?: SortOrder
    anoLectivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _avg?: TurmaAvgOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
    _sum?: TurmaSumOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turma"> | string
    nome?: StringWithAggregatesFilter<"Turma"> | string
    cursoId?: StringWithAggregatesFilter<"Turma"> | string
    classe?: StringWithAggregatesFilter<"Turma"> | string
    vagas?: IntWithAggregatesFilter<"Turma"> | number
    turno?: StringWithAggregatesFilter<"Turma"> | string
    anoLectivo?: StringWithAggregatesFilter<"Turma"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Turma"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Turma"> | Date | string
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    id?: StringFilter<"Disciplina"> | string
    nome?: StringFilter<"Disciplina"> | string
    sigla?: StringFilter<"Disciplina"> | string
    cursoId?: StringFilter<"Disciplina"> | string
    classe?: StringFilter<"Disciplina"> | string
    cargaHoraria?: IntFilter<"Disciplina"> | number
    cor?: StringNullableFilter<"Disciplina"> | string | null
    createdAt?: DateTimeFilter<"Disciplina"> | Date | string
    updatedAt?: DateTimeFilter<"Disciplina"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professores?: ProfessorDisciplinaListRelationFilter
  }

  export type DisciplinaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    cargaHoraria?: SortOrder
    cor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curso?: CursoOrderByWithRelationInput
    professores?: ProfessorDisciplinaOrderByRelationAggregateInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome_cursoId_classe?: DisciplinaNomeCursoIdClasseCompoundUniqueInput
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    nome?: StringFilter<"Disciplina"> | string
    sigla?: StringFilter<"Disciplina"> | string
    cursoId?: StringFilter<"Disciplina"> | string
    classe?: StringFilter<"Disciplina"> | string
    cargaHoraria?: IntFilter<"Disciplina"> | number
    cor?: StringNullableFilter<"Disciplina"> | string | null
    createdAt?: DateTimeFilter<"Disciplina"> | Date | string
    updatedAt?: DateTimeFilter<"Disciplina"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professores?: ProfessorDisciplinaListRelationFilter
  }, "id" | "nome_cursoId_classe">

  export type DisciplinaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    cargaHoraria?: SortOrder
    cor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _avg?: DisciplinaAvgOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
    _sum?: DisciplinaSumOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disciplina"> | string
    nome?: StringWithAggregatesFilter<"Disciplina"> | string
    sigla?: StringWithAggregatesFilter<"Disciplina"> | string
    cursoId?: StringWithAggregatesFilter<"Disciplina"> | string
    classe?: StringWithAggregatesFilter<"Disciplina"> | string
    cargaHoraria?: IntWithAggregatesFilter<"Disciplina"> | number
    cor?: StringNullableWithAggregatesFilter<"Disciplina"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Disciplina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Disciplina"> | Date | string
  }

  export type ProfessorDisciplinaWhereInput = {
    AND?: ProfessorDisciplinaWhereInput | ProfessorDisciplinaWhereInput[]
    OR?: ProfessorDisciplinaWhereInput[]
    NOT?: ProfessorDisciplinaWhereInput | ProfessorDisciplinaWhereInput[]
    professorId?: StringFilter<"ProfessorDisciplina"> | string
    disciplinaId?: StringFilter<"ProfessorDisciplina"> | string
    turmaId?: StringFilter<"ProfessorDisciplina"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }

  export type ProfessorDisciplinaOrderByWithRelationInput = {
    professorId?: SortOrder
    disciplinaId?: SortOrder
    turmaId?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    disciplina?: DisciplinaOrderByWithRelationInput
    turma?: TurmaOrderByWithRelationInput
  }

  export type ProfessorDisciplinaWhereUniqueInput = Prisma.AtLeast<{
    professorId_disciplinaId_turmaId?: ProfessorDisciplinaProfessorIdDisciplinaIdTurmaIdCompoundUniqueInput
    AND?: ProfessorDisciplinaWhereInput | ProfessorDisciplinaWhereInput[]
    OR?: ProfessorDisciplinaWhereInput[]
    NOT?: ProfessorDisciplinaWhereInput | ProfessorDisciplinaWhereInput[]
    professorId?: StringFilter<"ProfessorDisciplina"> | string
    disciplinaId?: StringFilter<"ProfessorDisciplina"> | string
    turmaId?: StringFilter<"ProfessorDisciplina"> | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
  }, "professorId_disciplinaId_turmaId">

  export type ProfessorDisciplinaOrderByWithAggregationInput = {
    professorId?: SortOrder
    disciplinaId?: SortOrder
    turmaId?: SortOrder
    _count?: ProfessorDisciplinaCountOrderByAggregateInput
    _max?: ProfessorDisciplinaMaxOrderByAggregateInput
    _min?: ProfessorDisciplinaMinOrderByAggregateInput
  }

  export type ProfessorDisciplinaScalarWhereWithAggregatesInput = {
    AND?: ProfessorDisciplinaScalarWhereWithAggregatesInput | ProfessorDisciplinaScalarWhereWithAggregatesInput[]
    OR?: ProfessorDisciplinaScalarWhereWithAggregatesInput[]
    NOT?: ProfessorDisciplinaScalarWhereWithAggregatesInput | ProfessorDisciplinaScalarWhereWithAggregatesInput[]
    professorId?: StringWithAggregatesFilter<"ProfessorDisciplina"> | string
    disciplinaId?: StringWithAggregatesFilter<"ProfessorDisciplina"> | string
    turmaId?: StringWithAggregatesFilter<"ProfessorDisciplina"> | string
  }

  export type InstituicaoWhereInput = {
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    id?: StringFilter<"Instituicao"> | string
    nome?: StringFilter<"Instituicao"> | string
    sigla?: StringFilter<"Instituicao"> | string
    endereco?: StringNullableFilter<"Instituicao"> | string | null
    telefone?: StringNullableFilter<"Instituicao"> | string | null
    email?: StringNullableFilter<"Instituicao"> | string | null
    website?: StringNullableFilter<"Instituicao"> | string | null
    diretor?: StringNullableFilter<"Instituicao"> | string | null
    logotipo?: StringNullableFilter<"Instituicao"> | string | null
    adminId?: StringFilter<"Instituicao"> | string
    createdAt?: DateTimeFilter<"Instituicao"> | Date | string
    updatedAt?: DateTimeFilter<"Instituicao"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type InstituicaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    diretor?: SortOrderInput | SortOrder
    logotipo?: SortOrderInput | SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
  }

  export type InstituicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    nome?: StringFilter<"Instituicao"> | string
    sigla?: StringFilter<"Instituicao"> | string
    endereco?: StringNullableFilter<"Instituicao"> | string | null
    telefone?: StringNullableFilter<"Instituicao"> | string | null
    email?: StringNullableFilter<"Instituicao"> | string | null
    website?: StringNullableFilter<"Instituicao"> | string | null
    diretor?: StringNullableFilter<"Instituicao"> | string | null
    logotipo?: StringNullableFilter<"Instituicao"> | string | null
    adminId?: StringFilter<"Instituicao"> | string
    createdAt?: DateTimeFilter<"Instituicao"> | Date | string
    updatedAt?: DateTimeFilter<"Instituicao"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id">

  export type InstituicaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    diretor?: SortOrderInput | SortOrder
    logotipo?: SortOrderInput | SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstituicaoCountOrderByAggregateInput
    _max?: InstituicaoMaxOrderByAggregateInput
    _min?: InstituicaoMinOrderByAggregateInput
  }

  export type InstituicaoScalarWhereWithAggregatesInput = {
    AND?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    OR?: InstituicaoScalarWhereWithAggregatesInput[]
    NOT?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instituicao"> | string
    nome?: StringWithAggregatesFilter<"Instituicao"> | string
    sigla?: StringWithAggregatesFilter<"Instituicao"> | string
    endereco?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    email?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    website?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    diretor?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    logotipo?: StringNullableWithAggregatesFilter<"Instituicao"> | string | null
    adminId?: StringWithAggregatesFilter<"Instituicao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Instituicao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Instituicao"> | Date | string
  }

  export type AnoLectivoWhereInput = {
    AND?: AnoLectivoWhereInput | AnoLectivoWhereInput[]
    OR?: AnoLectivoWhereInput[]
    NOT?: AnoLectivoWhereInput | AnoLectivoWhereInput[]
    id?: StringFilter<"AnoLectivo"> | string
    ano?: StringFilter<"AnoLectivo"> | string
    dataInicio?: DateTimeFilter<"AnoLectivo"> | Date | string
    dataFim?: DateTimeFilter<"AnoLectivo"> | Date | string
    activo?: BoolFilter<"AnoLectivo"> | boolean
    adminId?: StringFilter<"AnoLectivo"> | string
    createdAt?: DateTimeFilter<"AnoLectivo"> | Date | string
    updatedAt?: DateTimeFilter<"AnoLectivo"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type AnoLectivoOrderByWithRelationInput = {
    id?: SortOrder
    ano?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    activo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
  }

  export type AnoLectivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ano?: string
    AND?: AnoLectivoWhereInput | AnoLectivoWhereInput[]
    OR?: AnoLectivoWhereInput[]
    NOT?: AnoLectivoWhereInput | AnoLectivoWhereInput[]
    dataInicio?: DateTimeFilter<"AnoLectivo"> | Date | string
    dataFim?: DateTimeFilter<"AnoLectivo"> | Date | string
    activo?: BoolFilter<"AnoLectivo"> | boolean
    adminId?: StringFilter<"AnoLectivo"> | string
    createdAt?: DateTimeFilter<"AnoLectivo"> | Date | string
    updatedAt?: DateTimeFilter<"AnoLectivo"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id" | "ano">

  export type AnoLectivoOrderByWithAggregationInput = {
    id?: SortOrder
    ano?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    activo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnoLectivoCountOrderByAggregateInput
    _max?: AnoLectivoMaxOrderByAggregateInput
    _min?: AnoLectivoMinOrderByAggregateInput
  }

  export type AnoLectivoScalarWhereWithAggregatesInput = {
    AND?: AnoLectivoScalarWhereWithAggregatesInput | AnoLectivoScalarWhereWithAggregatesInput[]
    OR?: AnoLectivoScalarWhereWithAggregatesInput[]
    NOT?: AnoLectivoScalarWhereWithAggregatesInput | AnoLectivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnoLectivo"> | string
    ano?: StringWithAggregatesFilter<"AnoLectivo"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"AnoLectivo"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"AnoLectivo"> | Date | string
    activo?: BoolWithAggregatesFilter<"AnoLectivo"> | boolean
    adminId?: StringWithAggregatesFilter<"AnoLectivo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnoLectivo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnoLectivo"> | Date | string
  }

  export type ConfiguracaoWhereInput = {
    AND?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    OR?: ConfiguracaoWhereInput[]
    NOT?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    id?: StringFilter<"Configuracao"> | string
    chave?: StringFilter<"Configuracao"> | string
    valor?: StringFilter<"Configuracao"> | string
    adminId?: StringFilter<"Configuracao"> | string
    updatedAt?: DateTimeFilter<"Configuracao"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type ConfiguracaoOrderByWithRelationInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    adminId?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
  }

  export type ConfiguracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chave?: string
    AND?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    OR?: ConfiguracaoWhereInput[]
    NOT?: ConfiguracaoWhereInput | ConfiguracaoWhereInput[]
    valor?: StringFilter<"Configuracao"> | string
    adminId?: StringFilter<"Configuracao"> | string
    updatedAt?: DateTimeFilter<"Configuracao"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id" | "chave">

  export type ConfiguracaoOrderByWithAggregationInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    adminId?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfiguracaoCountOrderByAggregateInput
    _max?: ConfiguracaoMaxOrderByAggregateInput
    _min?: ConfiguracaoMinOrderByAggregateInput
  }

  export type ConfiguracaoScalarWhereWithAggregatesInput = {
    AND?: ConfiguracaoScalarWhereWithAggregatesInput | ConfiguracaoScalarWhereWithAggregatesInput[]
    OR?: ConfiguracaoScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracaoScalarWhereWithAggregatesInput | ConfiguracaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Configuracao"> | string
    chave?: StringWithAggregatesFilter<"Configuracao"> | string
    valor?: StringWithAggregatesFilter<"Configuracao"> | string
    adminId?: StringWithAggregatesFilter<"Configuracao"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Configuracao"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    professor?: ProfessorCreateNestedOneWithoutUserInput
    aluno?: AlunoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUserInput
    aluno?: AlunoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    professor?: ProfessorUpdateOneWithoutUserNestedInput
    aluno?: AlunoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUserNestedInput
    aluno?: AlunoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutAdminInput
    instituicoes?: InstituicaoCreateNestedManyWithoutAdminInput
    anosLectivos?: AnoLectivoCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
    instituicoes?: InstituicaoUncheckedCreateNestedManyWithoutAdminInput
    anosLectivos?: AnoLectivoUncheckedCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
    instituicoes?: InstituicaoUpdateManyWithoutAdminNestedInput
    anosLectivos?: AnoLectivoUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instituicoes?: InstituicaoUncheckedUpdateManyWithoutAdminNestedInput
    anosLectivos?: AnoLectivoUncheckedUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateInput = {
    id?: string
    cargo: string
    contacto?: string | null
    user: UserCreateNestedOneWithoutProfessorInput
    disciplinas?: ProfessorDisciplinaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id?: string
    userId: string
    cargo: string
    contacto?: string | null
    disciplinas?: ProfessorDisciplinaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfessorNestedInput
    disciplinas?: ProfessorDisciplinaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    disciplinas?: ProfessorDisciplinaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id?: string
    userId: string
    cargo: string
    contacto?: string | null
  }

  export type ProfessorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlunoCreateInput = {
    id?: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
    user: UserCreateNestedOneWithoutAlunoInput
    turma?: TurmaCreateNestedOneWithoutAlunosInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: string
    userId: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    turmaId?: string | null
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
  }

  export type AlunoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAlunoNestedInput
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlunoCreateManyInput = {
    id?: string
    userId: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    turmaId?: string | null
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
  }

  export type AlunoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CursoCreateInput = {
    id?: string
    nome: string
    sigla: string
    turmas?: TurmaCreateNestedManyWithoutCursoInput
    disciplinas?: DisciplinaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: string
    nome: string
    sigla: string
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
    disciplinas?: DisciplinaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: string
    nome: string
    sigla: string
  }

  export type CursoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateInput = {
    id?: string
    nome: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
    professores?: ProfessorDisciplinaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    id?: string
    nome: string
    cursoId: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
    professores?: ProfessorDisciplinaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
    professores?: ProfessorDisciplinaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
    professores?: ProfessorDisciplinaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    id?: string
    nome: string
    cursoId: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurmaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinaCreateInput = {
    id?: string
    nome: string
    sigla: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutDisciplinasInput
    professores?: ProfessorDisciplinaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    id?: string
    nome: string
    sigla: string
    cursoId: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutDisciplinasNestedInput
    professores?: ProfessorDisciplinaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateManyInput = {
    id?: string
    nome: string
    sigla: string
    cursoId: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplinaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorDisciplinaCreateInput = {
    professor: ProfessorCreateNestedOneWithoutDisciplinasInput
    disciplina: DisciplinaCreateNestedOneWithoutProfessoresInput
    turma: TurmaCreateNestedOneWithoutProfessoresInput
  }

  export type ProfessorDisciplinaUncheckedCreateInput = {
    professorId: string
    disciplinaId: string
    turmaId: string
  }

  export type ProfessorDisciplinaUpdateInput = {
    professor?: ProfessorUpdateOneRequiredWithoutDisciplinasNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutProfessoresNestedInput
    turma?: TurmaUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type ProfessorDisciplinaUncheckedUpdateInput = {
    professorId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: StringFieldUpdateOperationsInput | string
    turmaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorDisciplinaCreateManyInput = {
    professorId: string
    disciplinaId: string
    turmaId: string
  }

  export type ProfessorDisciplinaUpdateManyMutationInput = {

  }

  export type ProfessorDisciplinaUncheckedUpdateManyInput = {
    professorId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: StringFieldUpdateOperationsInput | string
    turmaId?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoCreateInput = {
    id?: string
    nome: string
    sigla: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    website?: string | null
    diretor?: string | null
    logotipo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutInstituicoesInput
  }

  export type InstituicaoUncheckedCreateInput = {
    id?: string
    nome: string
    sigla: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    website?: string | null
    diretor?: string | null
    logotipo?: string | null
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstituicaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    logotipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutInstituicoesNestedInput
  }

  export type InstituicaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    logotipo?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstituicaoCreateManyInput = {
    id?: string
    nome: string
    sigla: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    website?: string | null
    diretor?: string | null
    logotipo?: string | null
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstituicaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    logotipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstituicaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    logotipo?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnoLectivoCreateInput = {
    id?: string
    ano: string
    dataInicio: Date | string
    dataFim: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutAnosLectivosInput
  }

  export type AnoLectivoUncheckedCreateInput = {
    id?: string
    ano: string
    dataInicio: Date | string
    dataFim: Date | string
    activo?: boolean
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnoLectivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutAnosLectivosNestedInput
  }

  export type AnoLectivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnoLectivoCreateManyInput = {
    id?: string
    ano: string
    dataInicio: Date | string
    dataFim: Date | string
    activo?: boolean
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnoLectivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnoLectivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoCreateInput = {
    id?: string
    chave: string
    valor: string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutConfiguracoesInput
  }

  export type ConfiguracaoUncheckedCreateInput = {
    id?: string
    chave: string
    valor: string
    adminId: string
    updatedAt?: Date | string
  }

  export type ConfiguracaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutConfiguracoesNestedInput
  }

  export type ConfiguracaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoCreateManyInput = {
    id?: string
    chave: string
    valor: string
    adminId: string
    updatedAt?: Date | string
  }

  export type ConfiguracaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type ProfessorNullableScalarRelationFilter = {
    is?: ProfessorWhereInput | null
    isNot?: ProfessorWhereInput | null
  }

  export type AlunoNullableScalarRelationFilter = {
    is?: AlunoWhereInput | null
    isNot?: AlunoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    numeroUtilizador?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    numeroUtilizador?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    numeroUtilizador?: SortOrder
    senhaHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InstituicaoListRelationFilter = {
    every?: InstituicaoWhereInput
    some?: InstituicaoWhereInput
    none?: InstituicaoWhereInput
  }

  export type AnoLectivoListRelationFilter = {
    every?: AnoLectivoWhereInput
    some?: AnoLectivoWhereInput
    none?: AnoLectivoWhereInput
  }

  export type ConfiguracaoListRelationFilter = {
    every?: ConfiguracaoWhereInput
    some?: ConfiguracaoWhereInput
    none?: ConfiguracaoWhereInput
  }

  export type InstituicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnoLectivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConfiguracaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfessorDisciplinaListRelationFilter = {
    every?: ProfessorDisciplinaWhereInput
    some?: ProfessorDisciplinaWhereInput
    none?: ProfessorDisciplinaWhereInput
  }

  export type ProfessorDisciplinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cargo?: SortOrder
    contacto?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cargo?: SortOrder
    contacto?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cargo?: SortOrder
    contacto?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TurmaNullableScalarRelationFilter = {
    is?: TurmaWhereInput | null
    isNot?: TurmaWhereInput | null
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dataNascimento?: SortOrder
    tipoIdentificacao?: SortOrder
    numeroIdentificacao?: SortOrder
    numeroProcesso?: SortOrder
    turmaId?: SortOrder
    curso?: SortOrder
    classe?: SortOrder
    turno?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    nomePai?: SortOrder
    nomeMae?: SortOrder
    naturalidade?: SortOrder
    provincia?: SortOrder
    municipio?: SortOrder
    comuna?: SortOrder
    encarregadoNome?: SortOrder
    encarregadoParentesco?: SortOrder
    encarregadoGenero?: SortOrder
    encarregadoDataNascimento?: SortOrder
    encarregadoTelefone?: SortOrder
    encarregadoEmail?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dataNascimento?: SortOrder
    tipoIdentificacao?: SortOrder
    numeroIdentificacao?: SortOrder
    numeroProcesso?: SortOrder
    turmaId?: SortOrder
    curso?: SortOrder
    classe?: SortOrder
    turno?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    nomePai?: SortOrder
    nomeMae?: SortOrder
    naturalidade?: SortOrder
    provincia?: SortOrder
    municipio?: SortOrder
    comuna?: SortOrder
    encarregadoNome?: SortOrder
    encarregadoParentesco?: SortOrder
    encarregadoGenero?: SortOrder
    encarregadoDataNascimento?: SortOrder
    encarregadoTelefone?: SortOrder
    encarregadoEmail?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dataNascimento?: SortOrder
    tipoIdentificacao?: SortOrder
    numeroIdentificacao?: SortOrder
    numeroProcesso?: SortOrder
    turmaId?: SortOrder
    curso?: SortOrder
    classe?: SortOrder
    turno?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    nomePai?: SortOrder
    nomeMae?: SortOrder
    naturalidade?: SortOrder
    provincia?: SortOrder
    municipio?: SortOrder
    comuna?: SortOrder
    encarregadoNome?: SortOrder
    encarregadoParentesco?: SortOrder
    encarregadoGenero?: SortOrder
    encarregadoDataNascimento?: SortOrder
    encarregadoTelefone?: SortOrder
    encarregadoEmail?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TurmaListRelationFilter = {
    every?: TurmaWhereInput
    some?: TurmaWhereInput
    none?: TurmaWhereInput
  }

  export type DisciplinaListRelationFilter = {
    every?: DisciplinaWhereInput
    some?: DisciplinaWhereInput
    none?: DisciplinaWhereInput
  }

  export type TurmaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type AlunoListRelationFilter = {
    every?: AlunoWhereInput
    some?: AlunoWhereInput
    none?: AlunoWhereInput
  }

  export type AlunoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurmaNomeCursoIdCompoundUniqueInput = {
    nome: string
    cursoId: string
  }

  export type TurmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    vagas?: SortOrder
    turno?: SortOrder
    anoLectivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurmaAvgOrderByAggregateInput = {
    vagas?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    vagas?: SortOrder
    turno?: SortOrder
    anoLectivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    vagas?: SortOrder
    turno?: SortOrder
    anoLectivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurmaSumOrderByAggregateInput = {
    vagas?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DisciplinaNomeCursoIdClasseCompoundUniqueInput = {
    nome: string
    cursoId: string
    classe: string
  }

  export type DisciplinaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    cargaHoraria?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplinaAvgOrderByAggregateInput = {
    cargaHoraria?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    cargaHoraria?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    cursoId?: SortOrder
    classe?: SortOrder
    cargaHoraria?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplinaSumOrderByAggregateInput = {
    cargaHoraria?: SortOrder
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type DisciplinaScalarRelationFilter = {
    is?: DisciplinaWhereInput
    isNot?: DisciplinaWhereInput
  }

  export type TurmaScalarRelationFilter = {
    is?: TurmaWhereInput
    isNot?: TurmaWhereInput
  }

  export type ProfessorDisciplinaProfessorIdDisciplinaIdTurmaIdCompoundUniqueInput = {
    professorId: string
    disciplinaId: string
    turmaId: string
  }

  export type ProfessorDisciplinaCountOrderByAggregateInput = {
    professorId?: SortOrder
    disciplinaId?: SortOrder
    turmaId?: SortOrder
  }

  export type ProfessorDisciplinaMaxOrderByAggregateInput = {
    professorId?: SortOrder
    disciplinaId?: SortOrder
    turmaId?: SortOrder
  }

  export type ProfessorDisciplinaMinOrderByAggregateInput = {
    professorId?: SortOrder
    disciplinaId?: SortOrder
    turmaId?: SortOrder
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type InstituicaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    diretor?: SortOrder
    logotipo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstituicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    diretor?: SortOrder
    logotipo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstituicaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sigla?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    diretor?: SortOrder
    logotipo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnoLectivoCountOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    activo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnoLectivoMaxOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    activo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnoLectivoMinOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    activo?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConfiguracaoCountOrderByAggregateInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    adminId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    adminId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfiguracaoMinOrderByAggregateInput = {
    id?: SortOrder
    chave?: SortOrder
    valor?: SortOrder
    adminId?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput
    connect?: ProfessorWhereUniqueInput
  }

  export type AlunoCreateNestedOneWithoutUserInput = {
    create?: XOR<AlunoCreateWithoutUserInput, AlunoUncheckedCreateWithoutUserInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUserInput
    connect?: AlunoWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type ProfessorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput
    connect?: ProfessorWhereUniqueInput
  }

  export type AlunoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AlunoCreateWithoutUserInput, AlunoUncheckedCreateWithoutUserInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUserInput
    connect?: AlunoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ProfessorUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput
    upsert?: ProfessorUpsertWithoutUserInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUserInput, ProfessorUpdateWithoutUserInput>, ProfessorUncheckedUpdateWithoutUserInput>
  }

  export type AlunoUpdateOneWithoutUserNestedInput = {
    create?: XOR<AlunoCreateWithoutUserInput, AlunoUncheckedCreateWithoutUserInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUserInput
    upsert?: AlunoUpsertWithoutUserInput
    disconnect?: AlunoWhereInput | boolean
    delete?: AlunoWhereInput | boolean
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutUserInput, AlunoUpdateWithoutUserInput>, AlunoUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ProfessorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUserInput
    upsert?: ProfessorUpsertWithoutUserInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUserInput, ProfessorUpdateWithoutUserInput>, ProfessorUncheckedUpdateWithoutUserInput>
  }

  export type AlunoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AlunoCreateWithoutUserInput, AlunoUncheckedCreateWithoutUserInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutUserInput
    upsert?: AlunoUpsertWithoutUserInput
    disconnect?: AlunoWhereInput | boolean
    delete?: AlunoWhereInput | boolean
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutUserInput, AlunoUpdateWithoutUserInput>, AlunoUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type InstituicaoCreateNestedManyWithoutAdminInput = {
    create?: XOR<InstituicaoCreateWithoutAdminInput, InstituicaoUncheckedCreateWithoutAdminInput> | InstituicaoCreateWithoutAdminInput[] | InstituicaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: InstituicaoCreateOrConnectWithoutAdminInput | InstituicaoCreateOrConnectWithoutAdminInput[]
    createMany?: InstituicaoCreateManyAdminInputEnvelope
    connect?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
  }

  export type AnoLectivoCreateNestedManyWithoutAdminInput = {
    create?: XOR<AnoLectivoCreateWithoutAdminInput, AnoLectivoUncheckedCreateWithoutAdminInput> | AnoLectivoCreateWithoutAdminInput[] | AnoLectivoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnoLectivoCreateOrConnectWithoutAdminInput | AnoLectivoCreateOrConnectWithoutAdminInput[]
    createMany?: AnoLectivoCreateManyAdminInputEnvelope
    connect?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
  }

  export type ConfiguracaoCreateNestedManyWithoutAdminInput = {
    create?: XOR<ConfiguracaoCreateWithoutAdminInput, ConfiguracaoUncheckedCreateWithoutAdminInput> | ConfiguracaoCreateWithoutAdminInput[] | ConfiguracaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ConfiguracaoCreateOrConnectWithoutAdminInput | ConfiguracaoCreateOrConnectWithoutAdminInput[]
    createMany?: ConfiguracaoCreateManyAdminInputEnvelope
    connect?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
  }

  export type InstituicaoUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<InstituicaoCreateWithoutAdminInput, InstituicaoUncheckedCreateWithoutAdminInput> | InstituicaoCreateWithoutAdminInput[] | InstituicaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: InstituicaoCreateOrConnectWithoutAdminInput | InstituicaoCreateOrConnectWithoutAdminInput[]
    createMany?: InstituicaoCreateManyAdminInputEnvelope
    connect?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
  }

  export type AnoLectivoUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AnoLectivoCreateWithoutAdminInput, AnoLectivoUncheckedCreateWithoutAdminInput> | AnoLectivoCreateWithoutAdminInput[] | AnoLectivoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnoLectivoCreateOrConnectWithoutAdminInput | AnoLectivoCreateOrConnectWithoutAdminInput[]
    createMany?: AnoLectivoCreateManyAdminInputEnvelope
    connect?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
  }

  export type ConfiguracaoUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ConfiguracaoCreateWithoutAdminInput, ConfiguracaoUncheckedCreateWithoutAdminInput> | ConfiguracaoCreateWithoutAdminInput[] | ConfiguracaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ConfiguracaoCreateOrConnectWithoutAdminInput | ConfiguracaoCreateOrConnectWithoutAdminInput[]
    createMany?: ConfiguracaoCreateManyAdminInputEnvelope
    connect?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type InstituicaoUpdateManyWithoutAdminNestedInput = {
    create?: XOR<InstituicaoCreateWithoutAdminInput, InstituicaoUncheckedCreateWithoutAdminInput> | InstituicaoCreateWithoutAdminInput[] | InstituicaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: InstituicaoCreateOrConnectWithoutAdminInput | InstituicaoCreateOrConnectWithoutAdminInput[]
    upsert?: InstituicaoUpsertWithWhereUniqueWithoutAdminInput | InstituicaoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: InstituicaoCreateManyAdminInputEnvelope
    set?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    disconnect?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    delete?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    connect?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    update?: InstituicaoUpdateWithWhereUniqueWithoutAdminInput | InstituicaoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: InstituicaoUpdateManyWithWhereWithoutAdminInput | InstituicaoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: InstituicaoScalarWhereInput | InstituicaoScalarWhereInput[]
  }

  export type AnoLectivoUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AnoLectivoCreateWithoutAdminInput, AnoLectivoUncheckedCreateWithoutAdminInput> | AnoLectivoCreateWithoutAdminInput[] | AnoLectivoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnoLectivoCreateOrConnectWithoutAdminInput | AnoLectivoCreateOrConnectWithoutAdminInput[]
    upsert?: AnoLectivoUpsertWithWhereUniqueWithoutAdminInput | AnoLectivoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AnoLectivoCreateManyAdminInputEnvelope
    set?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    disconnect?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    delete?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    connect?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    update?: AnoLectivoUpdateWithWhereUniqueWithoutAdminInput | AnoLectivoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AnoLectivoUpdateManyWithWhereWithoutAdminInput | AnoLectivoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AnoLectivoScalarWhereInput | AnoLectivoScalarWhereInput[]
  }

  export type ConfiguracaoUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ConfiguracaoCreateWithoutAdminInput, ConfiguracaoUncheckedCreateWithoutAdminInput> | ConfiguracaoCreateWithoutAdminInput[] | ConfiguracaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ConfiguracaoCreateOrConnectWithoutAdminInput | ConfiguracaoCreateOrConnectWithoutAdminInput[]
    upsert?: ConfiguracaoUpsertWithWhereUniqueWithoutAdminInput | ConfiguracaoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ConfiguracaoCreateManyAdminInputEnvelope
    set?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    disconnect?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    delete?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    connect?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    update?: ConfiguracaoUpdateWithWhereUniqueWithoutAdminInput | ConfiguracaoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ConfiguracaoUpdateManyWithWhereWithoutAdminInput | ConfiguracaoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ConfiguracaoScalarWhereInput | ConfiguracaoScalarWhereInput[]
  }

  export type InstituicaoUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<InstituicaoCreateWithoutAdminInput, InstituicaoUncheckedCreateWithoutAdminInput> | InstituicaoCreateWithoutAdminInput[] | InstituicaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: InstituicaoCreateOrConnectWithoutAdminInput | InstituicaoCreateOrConnectWithoutAdminInput[]
    upsert?: InstituicaoUpsertWithWhereUniqueWithoutAdminInput | InstituicaoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: InstituicaoCreateManyAdminInputEnvelope
    set?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    disconnect?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    delete?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    connect?: InstituicaoWhereUniqueInput | InstituicaoWhereUniqueInput[]
    update?: InstituicaoUpdateWithWhereUniqueWithoutAdminInput | InstituicaoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: InstituicaoUpdateManyWithWhereWithoutAdminInput | InstituicaoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: InstituicaoScalarWhereInput | InstituicaoScalarWhereInput[]
  }

  export type AnoLectivoUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AnoLectivoCreateWithoutAdminInput, AnoLectivoUncheckedCreateWithoutAdminInput> | AnoLectivoCreateWithoutAdminInput[] | AnoLectivoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AnoLectivoCreateOrConnectWithoutAdminInput | AnoLectivoCreateOrConnectWithoutAdminInput[]
    upsert?: AnoLectivoUpsertWithWhereUniqueWithoutAdminInput | AnoLectivoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AnoLectivoCreateManyAdminInputEnvelope
    set?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    disconnect?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    delete?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    connect?: AnoLectivoWhereUniqueInput | AnoLectivoWhereUniqueInput[]
    update?: AnoLectivoUpdateWithWhereUniqueWithoutAdminInput | AnoLectivoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AnoLectivoUpdateManyWithWhereWithoutAdminInput | AnoLectivoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AnoLectivoScalarWhereInput | AnoLectivoScalarWhereInput[]
  }

  export type ConfiguracaoUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ConfiguracaoCreateWithoutAdminInput, ConfiguracaoUncheckedCreateWithoutAdminInput> | ConfiguracaoCreateWithoutAdminInput[] | ConfiguracaoUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ConfiguracaoCreateOrConnectWithoutAdminInput | ConfiguracaoCreateOrConnectWithoutAdminInput[]
    upsert?: ConfiguracaoUpsertWithWhereUniqueWithoutAdminInput | ConfiguracaoUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ConfiguracaoCreateManyAdminInputEnvelope
    set?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    disconnect?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    delete?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    connect?: ConfiguracaoWhereUniqueInput | ConfiguracaoWhereUniqueInput[]
    update?: ConfiguracaoUpdateWithWhereUniqueWithoutAdminInput | ConfiguracaoUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ConfiguracaoUpdateManyWithWhereWithoutAdminInput | ConfiguracaoUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ConfiguracaoScalarWhereInput | ConfiguracaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfessorInput = {
    create?: XOR<UserCreateWithoutProfessorInput, UserUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessorInput
    connect?: UserWhereUniqueInput
  }

  export type ProfessorDisciplinaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutProfessorInput, ProfessorDisciplinaUncheckedCreateWithoutProfessorInput> | ProfessorDisciplinaCreateWithoutProfessorInput[] | ProfessorDisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutProfessorInput | ProfessorDisciplinaCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfessorDisciplinaCreateManyProfessorInputEnvelope
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
  }

  export type ProfessorDisciplinaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutProfessorInput, ProfessorDisciplinaUncheckedCreateWithoutProfessorInput> | ProfessorDisciplinaCreateWithoutProfessorInput[] | ProfessorDisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutProfessorInput | ProfessorDisciplinaCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfessorDisciplinaCreateManyProfessorInputEnvelope
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProfessorNestedInput = {
    create?: XOR<UserCreateWithoutProfessorInput, UserUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessorInput
    upsert?: UserUpsertWithoutProfessorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessorInput, UserUpdateWithoutProfessorInput>, UserUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfessorDisciplinaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutProfessorInput, ProfessorDisciplinaUncheckedCreateWithoutProfessorInput> | ProfessorDisciplinaCreateWithoutProfessorInput[] | ProfessorDisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutProfessorInput | ProfessorDisciplinaCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfessorDisciplinaUpsertWithWhereUniqueWithoutProfessorInput | ProfessorDisciplinaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfessorDisciplinaCreateManyProfessorInputEnvelope
    set?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    disconnect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    delete?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    update?: ProfessorDisciplinaUpdateWithWhereUniqueWithoutProfessorInput | ProfessorDisciplinaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfessorDisciplinaUpdateManyWithWhereWithoutProfessorInput | ProfessorDisciplinaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
  }

  export type ProfessorDisciplinaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutProfessorInput, ProfessorDisciplinaUncheckedCreateWithoutProfessorInput> | ProfessorDisciplinaCreateWithoutProfessorInput[] | ProfessorDisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutProfessorInput | ProfessorDisciplinaCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfessorDisciplinaUpsertWithWhereUniqueWithoutProfessorInput | ProfessorDisciplinaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfessorDisciplinaCreateManyProfessorInputEnvelope
    set?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    disconnect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    delete?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    update?: ProfessorDisciplinaUpdateWithWhereUniqueWithoutProfessorInput | ProfessorDisciplinaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfessorDisciplinaUpdateManyWithWhereWithoutProfessorInput | ProfessorDisciplinaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAlunoInput = {
    create?: XOR<UserCreateWithoutAlunoInput, UserUncheckedCreateWithoutAlunoInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlunoInput
    connect?: UserWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutAlunosInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    connect?: TurmaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAlunoNestedInput = {
    create?: XOR<UserCreateWithoutAlunoInput, UserUncheckedCreateWithoutAlunoInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlunoInput
    upsert?: UserUpsertWithoutAlunoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlunoInput, UserUpdateWithoutAlunoInput>, UserUncheckedUpdateWithoutAlunoInput>
  }

  export type TurmaUpdateOneWithoutAlunosNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    upsert?: TurmaUpsertWithoutAlunosInput
    disconnect?: TurmaWhereInput | boolean
    delete?: TurmaWhereInput | boolean
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutAlunosInput, TurmaUpdateWithoutAlunosInput>, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type TurmaCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type DisciplinaCreateNestedManyWithoutCursoInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type TurmaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
  }

  export type DisciplinaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type TurmaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type DisciplinaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutCursoInput | DisciplinaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutCursoInput | DisciplinaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutCursoInput | DisciplinaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type TurmaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput> | TurmaCreateWithoutCursoInput[] | TurmaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: TurmaCreateOrConnectWithoutCursoInput | TurmaCreateOrConnectWithoutCursoInput[]
    upsert?: TurmaUpsertWithWhereUniqueWithoutCursoInput | TurmaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: TurmaCreateManyCursoInputEnvelope
    set?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    disconnect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    delete?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    connect?: TurmaWhereUniqueInput | TurmaWhereUniqueInput[]
    update?: TurmaUpdateWithWhereUniqueWithoutCursoInput | TurmaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: TurmaUpdateManyWithWhereWithoutCursoInput | TurmaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
  }

  export type DisciplinaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutCursoInput | DisciplinaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutCursoInput | DisciplinaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutCursoInput | DisciplinaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutTurmasInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    connect?: CursoWhereUniqueInput
  }

  export type AlunoCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type ProfessorDisciplinaCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutTurmaInput, ProfessorDisciplinaUncheckedCreateWithoutTurmaInput> | ProfessorDisciplinaCreateWithoutTurmaInput[] | ProfessorDisciplinaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutTurmaInput | ProfessorDisciplinaCreateOrConnectWithoutTurmaInput[]
    createMany?: ProfessorDisciplinaCreateManyTurmaInputEnvelope
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
  }

  export type AlunoUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type ProfessorDisciplinaUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutTurmaInput, ProfessorDisciplinaUncheckedCreateWithoutTurmaInput> | ProfessorDisciplinaCreateWithoutTurmaInput[] | ProfessorDisciplinaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutTurmaInput | ProfessorDisciplinaCreateOrConnectWithoutTurmaInput[]
    createMany?: ProfessorDisciplinaCreateManyTurmaInputEnvelope
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CursoUpdateOneRequiredWithoutTurmasNestedInput = {
    create?: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutTurmasInput
    upsert?: CursoUpsertWithoutTurmasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutTurmasInput, CursoUpdateWithoutTurmasInput>, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type AlunoUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutTurmaInput | AlunoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutTurmaInput | AlunoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutTurmaInput | AlunoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type ProfessorDisciplinaUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutTurmaInput, ProfessorDisciplinaUncheckedCreateWithoutTurmaInput> | ProfessorDisciplinaCreateWithoutTurmaInput[] | ProfessorDisciplinaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutTurmaInput | ProfessorDisciplinaCreateOrConnectWithoutTurmaInput[]
    upsert?: ProfessorDisciplinaUpsertWithWhereUniqueWithoutTurmaInput | ProfessorDisciplinaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ProfessorDisciplinaCreateManyTurmaInputEnvelope
    set?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    disconnect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    delete?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    update?: ProfessorDisciplinaUpdateWithWhereUniqueWithoutTurmaInput | ProfessorDisciplinaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ProfessorDisciplinaUpdateManyWithWhereWithoutTurmaInput | ProfessorDisciplinaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
  }

  export type AlunoUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutTurmaInput | AlunoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutTurmaInput | AlunoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutTurmaInput | AlunoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type ProfessorDisciplinaUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutTurmaInput, ProfessorDisciplinaUncheckedCreateWithoutTurmaInput> | ProfessorDisciplinaCreateWithoutTurmaInput[] | ProfessorDisciplinaUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutTurmaInput | ProfessorDisciplinaCreateOrConnectWithoutTurmaInput[]
    upsert?: ProfessorDisciplinaUpsertWithWhereUniqueWithoutTurmaInput | ProfessorDisciplinaUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ProfessorDisciplinaCreateManyTurmaInputEnvelope
    set?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    disconnect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    delete?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    update?: ProfessorDisciplinaUpdateWithWhereUniqueWithoutTurmaInput | ProfessorDisciplinaUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ProfessorDisciplinaUpdateManyWithWhereWithoutTurmaInput | ProfessorDisciplinaUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutDisciplinasInput = {
    create?: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutDisciplinasInput
    connect?: CursoWhereUniqueInput
  }

  export type ProfessorDisciplinaCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput> | ProfessorDisciplinaCreateWithoutDisciplinaInput[] | ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput | ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ProfessorDisciplinaCreateManyDisciplinaInputEnvelope
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
  }

  export type ProfessorDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput> | ProfessorDisciplinaCreateWithoutDisciplinaInput[] | ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput | ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: ProfessorDisciplinaCreateManyDisciplinaInputEnvelope
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
  }

  export type CursoUpdateOneRequiredWithoutDisciplinasNestedInput = {
    create?: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutDisciplinasInput
    upsert?: CursoUpsertWithoutDisciplinasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutDisciplinasInput, CursoUpdateWithoutDisciplinasInput>, CursoUncheckedUpdateWithoutDisciplinasInput>
  }

  export type ProfessorDisciplinaUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput> | ProfessorDisciplinaCreateWithoutDisciplinaInput[] | ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput | ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ProfessorDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput | ProfessorDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ProfessorDisciplinaCreateManyDisciplinaInputEnvelope
    set?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    disconnect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    delete?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    update?: ProfessorDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput | ProfessorDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ProfessorDisciplinaUpdateManyWithWhereWithoutDisciplinaInput | ProfessorDisciplinaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
  }

  export type ProfessorDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<ProfessorDisciplinaCreateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput> | ProfessorDisciplinaCreateWithoutDisciplinaInput[] | ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput | ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: ProfessorDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput | ProfessorDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: ProfessorDisciplinaCreateManyDisciplinaInputEnvelope
    set?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    disconnect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    delete?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    connect?: ProfessorDisciplinaWhereUniqueInput | ProfessorDisciplinaWhereUniqueInput[]
    update?: ProfessorDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput | ProfessorDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: ProfessorDisciplinaUpdateManyWithWhereWithoutDisciplinaInput | ProfessorDisciplinaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutDisciplinasInput = {
    create?: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisciplinasInput
    connect?: ProfessorWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutProfessoresInput = {
    create?: XOR<DisciplinaCreateWithoutProfessoresInput, DisciplinaUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfessoresInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type TurmaCreateNestedOneWithoutProfessoresInput = {
    create?: XOR<TurmaCreateWithoutProfessoresInput, TurmaUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessoresInput
    connect?: TurmaWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutDisciplinasNestedInput = {
    create?: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisciplinasInput
    upsert?: ProfessorUpsertWithoutDisciplinasInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutDisciplinasInput, ProfessorUpdateWithoutDisciplinasInput>, ProfessorUncheckedUpdateWithoutDisciplinasInput>
  }

  export type DisciplinaUpdateOneRequiredWithoutProfessoresNestedInput = {
    create?: XOR<DisciplinaCreateWithoutProfessoresInput, DisciplinaUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfessoresInput
    upsert?: DisciplinaUpsertWithoutProfessoresInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutProfessoresInput, DisciplinaUpdateWithoutProfessoresInput>, DisciplinaUncheckedUpdateWithoutProfessoresInput>
  }

  export type TurmaUpdateOneRequiredWithoutProfessoresNestedInput = {
    create?: XOR<TurmaCreateWithoutProfessoresInput, TurmaUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutProfessoresInput
    upsert?: TurmaUpsertWithoutProfessoresInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutProfessoresInput, TurmaUpdateWithoutProfessoresInput>, TurmaUncheckedUpdateWithoutProfessoresInput>
  }

  export type AdminCreateNestedOneWithoutInstituicoesInput = {
    create?: XOR<AdminCreateWithoutInstituicoesInput, AdminUncheckedCreateWithoutInstituicoesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutInstituicoesInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutInstituicoesNestedInput = {
    create?: XOR<AdminCreateWithoutInstituicoesInput, AdminUncheckedCreateWithoutInstituicoesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutInstituicoesInput
    upsert?: AdminUpsertWithoutInstituicoesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutInstituicoesInput, AdminUpdateWithoutInstituicoesInput>, AdminUncheckedUpdateWithoutInstituicoesInput>
  }

  export type AdminCreateNestedOneWithoutAnosLectivosInput = {
    create?: XOR<AdminCreateWithoutAnosLectivosInput, AdminUncheckedCreateWithoutAnosLectivosInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAnosLectivosInput
    connect?: AdminWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AdminUpdateOneRequiredWithoutAnosLectivosNestedInput = {
    create?: XOR<AdminCreateWithoutAnosLectivosInput, AdminUncheckedCreateWithoutAnosLectivosInput>
    connectOrCreate?: AdminCreateOrConnectWithoutAnosLectivosInput
    upsert?: AdminUpsertWithoutAnosLectivosInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutAnosLectivosInput, AdminUpdateWithoutAnosLectivosInput>, AdminUncheckedUpdateWithoutAnosLectivosInput>
  }

  export type AdminCreateNestedOneWithoutConfiguracoesInput = {
    create?: XOR<AdminCreateWithoutConfiguracoesInput, AdminUncheckedCreateWithoutConfiguracoesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutConfiguracoesInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutConfiguracoesNestedInput = {
    create?: XOR<AdminCreateWithoutConfiguracoesInput, AdminUncheckedCreateWithoutConfiguracoesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutConfiguracoesInput
    upsert?: AdminUpsertWithoutConfiguracoesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutConfiguracoesInput, AdminUpdateWithoutConfiguracoesInput>, AdminUncheckedUpdateWithoutConfiguracoesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    instituicoes?: InstituicaoCreateNestedManyWithoutAdminInput
    anosLectivos?: AnoLectivoCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    instituicoes?: InstituicaoUncheckedCreateNestedManyWithoutAdminInput
    anosLectivos?: AnoLectivoUncheckedCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type ProfessorCreateWithoutUserInput = {
    id?: string
    cargo: string
    contacto?: string | null
    disciplinas?: ProfessorDisciplinaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutUserInput = {
    id?: string
    cargo: string
    contacto?: string | null
    disciplinas?: ProfessorDisciplinaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutUserInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
  }

  export type AlunoCreateWithoutUserInput = {
    id?: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
    turma?: TurmaCreateNestedOneWithoutAlunosInput
  }

  export type AlunoUncheckedCreateWithoutUserInput = {
    id?: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    turmaId?: string | null
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
  }

  export type AlunoCreateOrConnectWithoutUserInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutUserInput, AlunoUncheckedCreateWithoutUserInput>
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instituicoes?: InstituicaoUpdateManyWithoutAdminNestedInput
    anosLectivos?: AnoLectivoUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instituicoes?: InstituicaoUncheckedUpdateManyWithoutAdminNestedInput
    anosLectivos?: AnoLectivoUncheckedUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProfessorUpsertWithoutUserInput = {
    update: XOR<ProfessorUpdateWithoutUserInput, ProfessorUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessorCreateWithoutUserInput, ProfessorUncheckedCreateWithoutUserInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutUserInput, ProfessorUncheckedUpdateWithoutUserInput>
  }

  export type ProfessorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    disciplinas?: ProfessorDisciplinaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    disciplinas?: ProfessorDisciplinaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type AlunoUpsertWithoutUserInput = {
    update: XOR<AlunoUpdateWithoutUserInput, AlunoUncheckedUpdateWithoutUserInput>
    create: XOR<AlunoCreateWithoutUserInput, AlunoUncheckedCreateWithoutUserInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutUserInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutUserInput, AlunoUncheckedUpdateWithoutUserInput>
  }

  export type AlunoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    turma?: TurmaUpdateOneWithoutAlunosNestedInput
  }

  export type AlunoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: ProfessorCreateNestedOneWithoutUserInput
    aluno?: AlunoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: ProfessorUncheckedCreateNestedOneWithoutUserInput
    aluno?: AlunoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type InstituicaoCreateWithoutAdminInput = {
    id?: string
    nome: string
    sigla: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    website?: string | null
    diretor?: string | null
    logotipo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstituicaoUncheckedCreateWithoutAdminInput = {
    id?: string
    nome: string
    sigla: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    website?: string | null
    diretor?: string | null
    logotipo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstituicaoCreateOrConnectWithoutAdminInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutAdminInput, InstituicaoUncheckedCreateWithoutAdminInput>
  }

  export type InstituicaoCreateManyAdminInputEnvelope = {
    data: InstituicaoCreateManyAdminInput | InstituicaoCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AnoLectivoCreateWithoutAdminInput = {
    id?: string
    ano: string
    dataInicio: Date | string
    dataFim: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnoLectivoUncheckedCreateWithoutAdminInput = {
    id?: string
    ano: string
    dataInicio: Date | string
    dataFim: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnoLectivoCreateOrConnectWithoutAdminInput = {
    where: AnoLectivoWhereUniqueInput
    create: XOR<AnoLectivoCreateWithoutAdminInput, AnoLectivoUncheckedCreateWithoutAdminInput>
  }

  export type AnoLectivoCreateManyAdminInputEnvelope = {
    data: AnoLectivoCreateManyAdminInput | AnoLectivoCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ConfiguracaoCreateWithoutAdminInput = {
    id?: string
    chave: string
    valor: string
    updatedAt?: Date | string
  }

  export type ConfiguracaoUncheckedCreateWithoutAdminInput = {
    id?: string
    chave: string
    valor: string
    updatedAt?: Date | string
  }

  export type ConfiguracaoCreateOrConnectWithoutAdminInput = {
    where: ConfiguracaoWhereUniqueInput
    create: XOR<ConfiguracaoCreateWithoutAdminInput, ConfiguracaoUncheckedCreateWithoutAdminInput>
  }

  export type ConfiguracaoCreateManyAdminInputEnvelope = {
    data: ConfiguracaoCreateManyAdminInput | ConfiguracaoCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneWithoutUserNestedInput
    aluno?: AlunoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUncheckedUpdateOneWithoutUserNestedInput
    aluno?: AlunoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InstituicaoUpsertWithWhereUniqueWithoutAdminInput = {
    where: InstituicaoWhereUniqueInput
    update: XOR<InstituicaoUpdateWithoutAdminInput, InstituicaoUncheckedUpdateWithoutAdminInput>
    create: XOR<InstituicaoCreateWithoutAdminInput, InstituicaoUncheckedCreateWithoutAdminInput>
  }

  export type InstituicaoUpdateWithWhereUniqueWithoutAdminInput = {
    where: InstituicaoWhereUniqueInput
    data: XOR<InstituicaoUpdateWithoutAdminInput, InstituicaoUncheckedUpdateWithoutAdminInput>
  }

  export type InstituicaoUpdateManyWithWhereWithoutAdminInput = {
    where: InstituicaoScalarWhereInput
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyWithoutAdminInput>
  }

  export type InstituicaoScalarWhereInput = {
    AND?: InstituicaoScalarWhereInput | InstituicaoScalarWhereInput[]
    OR?: InstituicaoScalarWhereInput[]
    NOT?: InstituicaoScalarWhereInput | InstituicaoScalarWhereInput[]
    id?: StringFilter<"Instituicao"> | string
    nome?: StringFilter<"Instituicao"> | string
    sigla?: StringFilter<"Instituicao"> | string
    endereco?: StringNullableFilter<"Instituicao"> | string | null
    telefone?: StringNullableFilter<"Instituicao"> | string | null
    email?: StringNullableFilter<"Instituicao"> | string | null
    website?: StringNullableFilter<"Instituicao"> | string | null
    diretor?: StringNullableFilter<"Instituicao"> | string | null
    logotipo?: StringNullableFilter<"Instituicao"> | string | null
    adminId?: StringFilter<"Instituicao"> | string
    createdAt?: DateTimeFilter<"Instituicao"> | Date | string
    updatedAt?: DateTimeFilter<"Instituicao"> | Date | string
  }

  export type AnoLectivoUpsertWithWhereUniqueWithoutAdminInput = {
    where: AnoLectivoWhereUniqueInput
    update: XOR<AnoLectivoUpdateWithoutAdminInput, AnoLectivoUncheckedUpdateWithoutAdminInput>
    create: XOR<AnoLectivoCreateWithoutAdminInput, AnoLectivoUncheckedCreateWithoutAdminInput>
  }

  export type AnoLectivoUpdateWithWhereUniqueWithoutAdminInput = {
    where: AnoLectivoWhereUniqueInput
    data: XOR<AnoLectivoUpdateWithoutAdminInput, AnoLectivoUncheckedUpdateWithoutAdminInput>
  }

  export type AnoLectivoUpdateManyWithWhereWithoutAdminInput = {
    where: AnoLectivoScalarWhereInput
    data: XOR<AnoLectivoUpdateManyMutationInput, AnoLectivoUncheckedUpdateManyWithoutAdminInput>
  }

  export type AnoLectivoScalarWhereInput = {
    AND?: AnoLectivoScalarWhereInput | AnoLectivoScalarWhereInput[]
    OR?: AnoLectivoScalarWhereInput[]
    NOT?: AnoLectivoScalarWhereInput | AnoLectivoScalarWhereInput[]
    id?: StringFilter<"AnoLectivo"> | string
    ano?: StringFilter<"AnoLectivo"> | string
    dataInicio?: DateTimeFilter<"AnoLectivo"> | Date | string
    dataFim?: DateTimeFilter<"AnoLectivo"> | Date | string
    activo?: BoolFilter<"AnoLectivo"> | boolean
    adminId?: StringFilter<"AnoLectivo"> | string
    createdAt?: DateTimeFilter<"AnoLectivo"> | Date | string
    updatedAt?: DateTimeFilter<"AnoLectivo"> | Date | string
  }

  export type ConfiguracaoUpsertWithWhereUniqueWithoutAdminInput = {
    where: ConfiguracaoWhereUniqueInput
    update: XOR<ConfiguracaoUpdateWithoutAdminInput, ConfiguracaoUncheckedUpdateWithoutAdminInput>
    create: XOR<ConfiguracaoCreateWithoutAdminInput, ConfiguracaoUncheckedCreateWithoutAdminInput>
  }

  export type ConfiguracaoUpdateWithWhereUniqueWithoutAdminInput = {
    where: ConfiguracaoWhereUniqueInput
    data: XOR<ConfiguracaoUpdateWithoutAdminInput, ConfiguracaoUncheckedUpdateWithoutAdminInput>
  }

  export type ConfiguracaoUpdateManyWithWhereWithoutAdminInput = {
    where: ConfiguracaoScalarWhereInput
    data: XOR<ConfiguracaoUpdateManyMutationInput, ConfiguracaoUncheckedUpdateManyWithoutAdminInput>
  }

  export type ConfiguracaoScalarWhereInput = {
    AND?: ConfiguracaoScalarWhereInput | ConfiguracaoScalarWhereInput[]
    OR?: ConfiguracaoScalarWhereInput[]
    NOT?: ConfiguracaoScalarWhereInput | ConfiguracaoScalarWhereInput[]
    id?: StringFilter<"Configuracao"> | string
    chave?: StringFilter<"Configuracao"> | string
    valor?: StringFilter<"Configuracao"> | string
    adminId?: StringFilter<"Configuracao"> | string
    updatedAt?: DateTimeFilter<"Configuracao"> | Date | string
  }

  export type UserCreateWithoutProfessorInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    aluno?: AlunoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessorInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    aluno?: AlunoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessorInput, UserUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorDisciplinaCreateWithoutProfessorInput = {
    disciplina: DisciplinaCreateNestedOneWithoutProfessoresInput
    turma: TurmaCreateNestedOneWithoutProfessoresInput
  }

  export type ProfessorDisciplinaUncheckedCreateWithoutProfessorInput = {
    disciplinaId: string
    turmaId: string
  }

  export type ProfessorDisciplinaCreateOrConnectWithoutProfessorInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    create: XOR<ProfessorDisciplinaCreateWithoutProfessorInput, ProfessorDisciplinaUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorDisciplinaCreateManyProfessorInputEnvelope = {
    data: ProfessorDisciplinaCreateManyProfessorInput | ProfessorDisciplinaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfessorInput = {
    update: XOR<UserUpdateWithoutProfessorInput, UserUncheckedUpdateWithoutProfessorInput>
    create: XOR<UserCreateWithoutProfessorInput, UserUncheckedCreateWithoutProfessorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessorInput, UserUncheckedUpdateWithoutProfessorInput>
  }

  export type UserUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    aluno?: AlunoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    aluno?: AlunoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProfessorDisciplinaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    update: XOR<ProfessorDisciplinaUpdateWithoutProfessorInput, ProfessorDisciplinaUncheckedUpdateWithoutProfessorInput>
    create: XOR<ProfessorDisciplinaCreateWithoutProfessorInput, ProfessorDisciplinaUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorDisciplinaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    data: XOR<ProfessorDisciplinaUpdateWithoutProfessorInput, ProfessorDisciplinaUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfessorDisciplinaUpdateManyWithWhereWithoutProfessorInput = {
    where: ProfessorDisciplinaScalarWhereInput
    data: XOR<ProfessorDisciplinaUpdateManyMutationInput, ProfessorDisciplinaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfessorDisciplinaScalarWhereInput = {
    AND?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
    OR?: ProfessorDisciplinaScalarWhereInput[]
    NOT?: ProfessorDisciplinaScalarWhereInput | ProfessorDisciplinaScalarWhereInput[]
    professorId?: StringFilter<"ProfessorDisciplina"> | string
    disciplinaId?: StringFilter<"ProfessorDisciplina"> | string
    turmaId?: StringFilter<"ProfessorDisciplina"> | string
  }

  export type UserCreateWithoutAlunoInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    professor?: ProfessorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlunoInput = {
    id?: string
    nome: string
    email?: string | null
    telefone?: string | null
    numeroUtilizador?: string | null
    senhaHash: string
    role: $Enums.Role
    status?: $Enums.UserStatus
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlunoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlunoInput, UserUncheckedCreateWithoutAlunoInput>
  }

  export type TurmaCreateWithoutAlunosInput = {
    id?: string
    nome: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    professores?: ProfessorDisciplinaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutAlunosInput = {
    id?: string
    nome: string
    cursoId: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorDisciplinaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type UserUpsertWithoutAlunoInput = {
    update: XOR<UserUpdateWithoutAlunoInput, UserUncheckedUpdateWithoutAlunoInput>
    create: XOR<UserCreateWithoutAlunoInput, UserUncheckedCreateWithoutAlunoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlunoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlunoInput, UserUncheckedUpdateWithoutAlunoInput>
  }

  export type UserUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    professor?: ProfessorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    numeroUtilizador?: NullableStringFieldUpdateOperationsInput | string | null
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TurmaUpsertWithoutAlunosInput = {
    update: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutAlunosInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type TurmaUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    professores?: ProfessorDisciplinaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorDisciplinaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateWithoutCursoInput = {
    id?: string
    nome: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
    professores?: ProfessorDisciplinaCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutCursoInput = {
    id?: string
    nome: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
    professores?: ProfessorDisciplinaUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaCreateManyCursoInputEnvelope = {
    data: TurmaCreateManyCursoInput | TurmaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type DisciplinaCreateWithoutCursoInput = {
    id?: string
    nome: string
    sigla: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorDisciplinaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutCursoInput = {
    id?: string
    nome: string
    sigla: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorDisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutCursoInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput>
  }

  export type DisciplinaCreateManyCursoInputEnvelope = {
    data: DisciplinaCreateManyCursoInput | DisciplinaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    update: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
    create: XOR<TurmaCreateWithoutCursoInput, TurmaUncheckedCreateWithoutCursoInput>
  }

  export type TurmaUpdateWithWhereUniqueWithoutCursoInput = {
    where: TurmaWhereUniqueInput
    data: XOR<TurmaUpdateWithoutCursoInput, TurmaUncheckedUpdateWithoutCursoInput>
  }

  export type TurmaUpdateManyWithWhereWithoutCursoInput = {
    where: TurmaScalarWhereInput
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyWithoutCursoInput>
  }

  export type TurmaScalarWhereInput = {
    AND?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    OR?: TurmaScalarWhereInput[]
    NOT?: TurmaScalarWhereInput | TurmaScalarWhereInput[]
    id?: StringFilter<"Turma"> | string
    nome?: StringFilter<"Turma"> | string
    cursoId?: StringFilter<"Turma"> | string
    classe?: StringFilter<"Turma"> | string
    vagas?: IntFilter<"Turma"> | number
    turno?: StringFilter<"Turma"> | string
    anoLectivo?: StringFilter<"Turma"> | string
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    updatedAt?: DateTimeFilter<"Turma"> | Date | string
  }

  export type DisciplinaUpsertWithWhereUniqueWithoutCursoInput = {
    where: DisciplinaWhereUniqueInput
    update: XOR<DisciplinaUpdateWithoutCursoInput, DisciplinaUncheckedUpdateWithoutCursoInput>
    create: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput>
  }

  export type DisciplinaUpdateWithWhereUniqueWithoutCursoInput = {
    where: DisciplinaWhereUniqueInput
    data: XOR<DisciplinaUpdateWithoutCursoInput, DisciplinaUncheckedUpdateWithoutCursoInput>
  }

  export type DisciplinaUpdateManyWithWhereWithoutCursoInput = {
    where: DisciplinaScalarWhereInput
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyWithoutCursoInput>
  }

  export type DisciplinaScalarWhereInput = {
    AND?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
    OR?: DisciplinaScalarWhereInput[]
    NOT?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
    id?: StringFilter<"Disciplina"> | string
    nome?: StringFilter<"Disciplina"> | string
    sigla?: StringFilter<"Disciplina"> | string
    cursoId?: StringFilter<"Disciplina"> | string
    classe?: StringFilter<"Disciplina"> | string
    cargaHoraria?: IntFilter<"Disciplina"> | number
    cor?: StringNullableFilter<"Disciplina"> | string | null
    createdAt?: DateTimeFilter<"Disciplina"> | Date | string
    updatedAt?: DateTimeFilter<"Disciplina"> | Date | string
  }

  export type CursoCreateWithoutTurmasInput = {
    id?: string
    nome: string
    sigla: string
    disciplinas?: DisciplinaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutTurmasInput = {
    id?: string
    nome: string
    sigla: string
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutTurmasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
  }

  export type AlunoCreateWithoutTurmaInput = {
    id?: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
    user: UserCreateNestedOneWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutTurmaInput = {
    id?: string
    userId: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
  }

  export type AlunoCreateOrConnectWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoCreateManyTurmaInputEnvelope = {
    data: AlunoCreateManyTurmaInput | AlunoCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorDisciplinaCreateWithoutTurmaInput = {
    professor: ProfessorCreateNestedOneWithoutDisciplinasInput
    disciplina: DisciplinaCreateNestedOneWithoutProfessoresInput
  }

  export type ProfessorDisciplinaUncheckedCreateWithoutTurmaInput = {
    professorId: string
    disciplinaId: string
  }

  export type ProfessorDisciplinaCreateOrConnectWithoutTurmaInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    create: XOR<ProfessorDisciplinaCreateWithoutTurmaInput, ProfessorDisciplinaUncheckedCreateWithoutTurmaInput>
  }

  export type ProfessorDisciplinaCreateManyTurmaInputEnvelope = {
    data: ProfessorDisciplinaCreateManyTurmaInput | ProfessorDisciplinaCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutTurmasInput = {
    update: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
    create: XOR<CursoCreateWithoutTurmasInput, CursoUncheckedCreateWithoutTurmasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutTurmasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutTurmasInput, CursoUncheckedUpdateWithoutTurmasInput>
  }

  export type CursoUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    disciplinas?: DisciplinaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type AlunoUpsertWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
  }

  export type AlunoUpdateManyWithWhereWithoutTurmaInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutTurmaInput>
  }

  export type AlunoScalarWhereInput = {
    AND?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    OR?: AlunoScalarWhereInput[]
    NOT?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    id?: StringFilter<"Aluno"> | string
    userId?: StringFilter<"Aluno"> | string
    dataNascimento?: DateTimeFilter<"Aluno"> | Date | string
    tipoIdentificacao?: StringFilter<"Aluno"> | string
    numeroIdentificacao?: StringFilter<"Aluno"> | string
    numeroProcesso?: StringFilter<"Aluno"> | string
    turmaId?: StringNullableFilter<"Aluno"> | string | null
    curso?: StringNullableFilter<"Aluno"> | string | null
    classe?: StringNullableFilter<"Aluno"> | string | null
    turno?: StringNullableFilter<"Aluno"> | string | null
    genero?: StringNullableFilter<"Aluno"> | string | null
    estadoCivil?: StringNullableFilter<"Aluno"> | string | null
    nomePai?: StringNullableFilter<"Aluno"> | string | null
    nomeMae?: StringNullableFilter<"Aluno"> | string | null
    naturalidade?: StringNullableFilter<"Aluno"> | string | null
    provincia?: StringNullableFilter<"Aluno"> | string | null
    municipio?: StringNullableFilter<"Aluno"> | string | null
    comuna?: StringNullableFilter<"Aluno"> | string | null
    encarregadoNome?: StringNullableFilter<"Aluno"> | string | null
    encarregadoParentesco?: StringNullableFilter<"Aluno"> | string | null
    encarregadoGenero?: StringNullableFilter<"Aluno"> | string | null
    encarregadoDataNascimento?: DateTimeNullableFilter<"Aluno"> | Date | string | null
    encarregadoTelefone?: StringNullableFilter<"Aluno"> | string | null
    encarregadoEmail?: StringNullableFilter<"Aluno"> | string | null
  }

  export type ProfessorDisciplinaUpsertWithWhereUniqueWithoutTurmaInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    update: XOR<ProfessorDisciplinaUpdateWithoutTurmaInput, ProfessorDisciplinaUncheckedUpdateWithoutTurmaInput>
    create: XOR<ProfessorDisciplinaCreateWithoutTurmaInput, ProfessorDisciplinaUncheckedCreateWithoutTurmaInput>
  }

  export type ProfessorDisciplinaUpdateWithWhereUniqueWithoutTurmaInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    data: XOR<ProfessorDisciplinaUpdateWithoutTurmaInput, ProfessorDisciplinaUncheckedUpdateWithoutTurmaInput>
  }

  export type ProfessorDisciplinaUpdateManyWithWhereWithoutTurmaInput = {
    where: ProfessorDisciplinaScalarWhereInput
    data: XOR<ProfessorDisciplinaUpdateManyMutationInput, ProfessorDisciplinaUncheckedUpdateManyWithoutTurmaInput>
  }

  export type CursoCreateWithoutDisciplinasInput = {
    id?: string
    nome: string
    sigla: string
    turmas?: TurmaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutDisciplinasInput = {
    id?: string
    nome: string
    sigla: string
    turmas?: TurmaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutDisciplinasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
  }

  export type ProfessorDisciplinaCreateWithoutDisciplinaInput = {
    professor: ProfessorCreateNestedOneWithoutDisciplinasInput
    turma: TurmaCreateNestedOneWithoutProfessoresInput
  }

  export type ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput = {
    professorId: string
    turmaId: string
  }

  export type ProfessorDisciplinaCreateOrConnectWithoutDisciplinaInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    create: XOR<ProfessorDisciplinaCreateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput>
  }

  export type ProfessorDisciplinaCreateManyDisciplinaInputEnvelope = {
    data: ProfessorDisciplinaCreateManyDisciplinaInput | ProfessorDisciplinaCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithoutDisciplinasInput = {
    update: XOR<CursoUpdateWithoutDisciplinasInput, CursoUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutDisciplinasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutDisciplinasInput, CursoUncheckedUpdateWithoutDisciplinasInput>
  }

  export type CursoUpdateWithoutDisciplinasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutDisciplinasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    turmas?: TurmaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type ProfessorDisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    update: XOR<ProfessorDisciplinaUpdateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<ProfessorDisciplinaCreateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedCreateWithoutDisciplinaInput>
  }

  export type ProfessorDisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: ProfessorDisciplinaWhereUniqueInput
    data: XOR<ProfessorDisciplinaUpdateWithoutDisciplinaInput, ProfessorDisciplinaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type ProfessorDisciplinaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: ProfessorDisciplinaScalarWhereInput
    data: XOR<ProfessorDisciplinaUpdateManyMutationInput, ProfessorDisciplinaUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type ProfessorCreateWithoutDisciplinasInput = {
    id?: string
    cargo: string
    contacto?: string | null
    user: UserCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutDisciplinasInput = {
    id?: string
    userId: string
    cargo: string
    contacto?: string | null
  }

  export type ProfessorCreateOrConnectWithoutDisciplinasInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
  }

  export type DisciplinaCreateWithoutProfessoresInput = {
    id?: string
    nome: string
    sigla: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutDisciplinasInput
  }

  export type DisciplinaUncheckedCreateWithoutProfessoresInput = {
    id?: string
    nome: string
    sigla: string
    cursoId: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplinaCreateOrConnectWithoutProfessoresInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutProfessoresInput, DisciplinaUncheckedCreateWithoutProfessoresInput>
  }

  export type TurmaCreateWithoutProfessoresInput = {
    id?: string
    nome: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutTurmasInput
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutProfessoresInput = {
    id?: string
    nome: string
    cursoId: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutProfessoresInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutProfessoresInput, TurmaUncheckedCreateWithoutProfessoresInput>
  }

  export type ProfessorUpsertWithoutDisciplinasInput = {
    update: XOR<ProfessorUpdateWithoutDisciplinasInput, ProfessorUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutDisciplinasInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutDisciplinasInput, ProfessorUncheckedUpdateWithoutDisciplinasInput>
  }

  export type ProfessorUpdateWithoutDisciplinasInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutDisciplinasInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DisciplinaUpsertWithoutProfessoresInput = {
    update: XOR<DisciplinaUpdateWithoutProfessoresInput, DisciplinaUncheckedUpdateWithoutProfessoresInput>
    create: XOR<DisciplinaCreateWithoutProfessoresInput, DisciplinaUncheckedCreateWithoutProfessoresInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutProfessoresInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutProfessoresInput, DisciplinaUncheckedUpdateWithoutProfessoresInput>
  }

  export type DisciplinaUpdateWithoutProfessoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutDisciplinasNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutProfessoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUpsertWithoutProfessoresInput = {
    update: XOR<TurmaUpdateWithoutProfessoresInput, TurmaUncheckedUpdateWithoutProfessoresInput>
    create: XOR<TurmaCreateWithoutProfessoresInput, TurmaUncheckedCreateWithoutProfessoresInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutProfessoresInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutProfessoresInput, TurmaUncheckedUpdateWithoutProfessoresInput>
  }

  export type TurmaUpdateWithoutProfessoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutTurmasNestedInput
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutProfessoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cursoId?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type AdminCreateWithoutInstituicoesInput = {
    id?: string
    user: UserCreateNestedOneWithoutAdminInput
    anosLectivos?: AnoLectivoCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutInstituicoesInput = {
    id?: string
    userId: string
    anosLectivos?: AnoLectivoUncheckedCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutInstituicoesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutInstituicoesInput, AdminUncheckedCreateWithoutInstituicoesInput>
  }

  export type AdminUpsertWithoutInstituicoesInput = {
    update: XOR<AdminUpdateWithoutInstituicoesInput, AdminUncheckedUpdateWithoutInstituicoesInput>
    create: XOR<AdminCreateWithoutInstituicoesInput, AdminUncheckedCreateWithoutInstituicoesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutInstituicoesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutInstituicoesInput, AdminUncheckedUpdateWithoutInstituicoesInput>
  }

  export type AdminUpdateWithoutInstituicoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
    anosLectivos?: AnoLectivoUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutInstituicoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    anosLectivos?: AnoLectivoUncheckedUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutAnosLectivosInput = {
    id?: string
    user: UserCreateNestedOneWithoutAdminInput
    instituicoes?: InstituicaoCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutAnosLectivosInput = {
    id?: string
    userId: string
    instituicoes?: InstituicaoUncheckedCreateNestedManyWithoutAdminInput
    configuracoes?: ConfiguracaoUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutAnosLectivosInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutAnosLectivosInput, AdminUncheckedCreateWithoutAnosLectivosInput>
  }

  export type AdminUpsertWithoutAnosLectivosInput = {
    update: XOR<AdminUpdateWithoutAnosLectivosInput, AdminUncheckedUpdateWithoutAnosLectivosInput>
    create: XOR<AdminCreateWithoutAnosLectivosInput, AdminUncheckedCreateWithoutAnosLectivosInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutAnosLectivosInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutAnosLectivosInput, AdminUncheckedUpdateWithoutAnosLectivosInput>
  }

  export type AdminUpdateWithoutAnosLectivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
    instituicoes?: InstituicaoUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutAnosLectivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instituicoes?: InstituicaoUncheckedUpdateManyWithoutAdminNestedInput
    configuracoes?: ConfiguracaoUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutConfiguracoesInput = {
    id?: string
    user: UserCreateNestedOneWithoutAdminInput
    instituicoes?: InstituicaoCreateNestedManyWithoutAdminInput
    anosLectivos?: AnoLectivoCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutConfiguracoesInput = {
    id?: string
    userId: string
    instituicoes?: InstituicaoUncheckedCreateNestedManyWithoutAdminInput
    anosLectivos?: AnoLectivoUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutConfiguracoesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutConfiguracoesInput, AdminUncheckedCreateWithoutConfiguracoesInput>
  }

  export type AdminUpsertWithoutConfiguracoesInput = {
    update: XOR<AdminUpdateWithoutConfiguracoesInput, AdminUncheckedUpdateWithoutConfiguracoesInput>
    create: XOR<AdminCreateWithoutConfiguracoesInput, AdminUncheckedCreateWithoutConfiguracoesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutConfiguracoesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutConfiguracoesInput, AdminUncheckedUpdateWithoutConfiguracoesInput>
  }

  export type AdminUpdateWithoutConfiguracoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
    instituicoes?: InstituicaoUpdateManyWithoutAdminNestedInput
    anosLectivos?: AnoLectivoUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutConfiguracoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instituicoes?: InstituicaoUncheckedUpdateManyWithoutAdminNestedInput
    anosLectivos?: AnoLectivoUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type InstituicaoCreateManyAdminInput = {
    id?: string
    nome: string
    sigla: string
    endereco?: string | null
    telefone?: string | null
    email?: string | null
    website?: string | null
    diretor?: string | null
    logotipo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnoLectivoCreateManyAdminInput = {
    id?: string
    ano: string
    dataInicio: Date | string
    dataFim: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfiguracaoCreateManyAdminInput = {
    id?: string
    chave: string
    valor: string
    updatedAt?: Date | string
  }

  export type InstituicaoUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    logotipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstituicaoUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    logotipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstituicaoUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    diretor?: NullableStringFieldUpdateOperationsInput | string | null
    logotipo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnoLectivoUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnoLectivoUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnoLectivoUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    ano?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfiguracaoUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    chave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorDisciplinaCreateManyProfessorInput = {
    disciplinaId: string
    turmaId: string
  }

  export type ProfessorDisciplinaUpdateWithoutProfessorInput = {
    disciplina?: DisciplinaUpdateOneRequiredWithoutProfessoresNestedInput
    turma?: TurmaUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type ProfessorDisciplinaUncheckedUpdateWithoutProfessorInput = {
    disciplinaId?: StringFieldUpdateOperationsInput | string
    turmaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorDisciplinaUncheckedUpdateManyWithoutProfessorInput = {
    disciplinaId?: StringFieldUpdateOperationsInput | string
    turmaId?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateManyCursoInput = {
    id?: string
    nome: string
    classe: string
    vagas: number
    turno: string
    anoLectivo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplinaCreateManyCursoInput = {
    id?: string
    nome: string
    sigla: string
    classe: string
    cargaHoraria: number
    cor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurmaUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
    professores?: ProfessorDisciplinaUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
    professores?: ProfessorDisciplinaUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateManyWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    vagas?: IntFieldUpdateOperationsInput | number
    turno?: StringFieldUpdateOperationsInput | string
    anoLectivo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinaUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorDisciplinaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorDisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateManyWithoutCursoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sigla?: StringFieldUpdateOperationsInput | string
    classe?: StringFieldUpdateOperationsInput | string
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoCreateManyTurmaInput = {
    id?: string
    userId: string
    dataNascimento: Date | string
    tipoIdentificacao: string
    numeroIdentificacao: string
    numeroProcesso: string
    curso?: string | null
    classe?: string | null
    turno?: string | null
    genero?: string | null
    estadoCivil?: string | null
    nomePai?: string | null
    nomeMae?: string | null
    naturalidade?: string | null
    provincia?: string | null
    municipio?: string | null
    comuna?: string | null
    encarregadoNome?: string | null
    encarregadoParentesco?: string | null
    encarregadoGenero?: string | null
    encarregadoDataNascimento?: Date | string | null
    encarregadoTelefone?: string | null
    encarregadoEmail?: string | null
  }

  export type ProfessorDisciplinaCreateManyTurmaInput = {
    professorId: string
    disciplinaId: string
  }

  export type AlunoUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlunoUncheckedUpdateManyWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroIdentificacao?: StringFieldUpdateOperationsInput | string
    numeroProcesso?: StringFieldUpdateOperationsInput | string
    curso?: NullableStringFieldUpdateOperationsInput | string | null
    classe?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    estadoCivil?: NullableStringFieldUpdateOperationsInput | string | null
    nomePai?: NullableStringFieldUpdateOperationsInput | string | null
    nomeMae?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: NullableStringFieldUpdateOperationsInput | string | null
    comuna?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoNome?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoParentesco?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoGenero?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoDataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    encarregadoTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    encarregadoEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfessorDisciplinaUpdateWithoutTurmaInput = {
    professor?: ProfessorUpdateOneRequiredWithoutDisciplinasNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type ProfessorDisciplinaUncheckedUpdateWithoutTurmaInput = {
    professorId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorDisciplinaUncheckedUpdateManyWithoutTurmaInput = {
    professorId?: StringFieldUpdateOperationsInput | string
    disciplinaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorDisciplinaCreateManyDisciplinaInput = {
    professorId: string
    turmaId: string
  }

  export type ProfessorDisciplinaUpdateWithoutDisciplinaInput = {
    professor?: ProfessorUpdateOneRequiredWithoutDisciplinasNestedInput
    turma?: TurmaUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type ProfessorDisciplinaUncheckedUpdateWithoutDisciplinaInput = {
    professorId?: StringFieldUpdateOperationsInput | string
    turmaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorDisciplinaUncheckedUpdateManyWithoutDisciplinaInput = {
    professorId?: StringFieldUpdateOperationsInput | string
    turmaId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}