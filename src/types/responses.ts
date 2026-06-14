export interface AuthUserResponse {
  id: string;
  nome: string;
  email: string;
  role: string;
}

export interface ProfessorResponse {
  id: string;
  nome: string;
  email: string;
  cargo: string;
  contacto: string | null;
  status: string;
}

export interface TurmaResponse {
  id: string;
  nome: string;
  cursoId: string;
  cursoNome: string;
  cursoSigla: string;
  classe: string;
  vagas: number;
  turno: string;
  anoLectivo: string;
  numEstudantes: number;
}

export interface DisciplinaResponse {
  id: string;
  nome: string;
  sigla: string;
  cursoId: string;
  cursoNome: string;
  classe: string;
  cargaHoraria: number;
  cor: string | null;
}

export interface InstituicaoResponse {
  id: string;
  nome: string;
  sigla: string;
  endereco: string | null;
  telefone: string | null;
  email: string | null;
  website: string | null;
  diretor: string | null;
  logotipo: string | null;
}

export interface AnoLectivoResponse {
  id: string;
  ano: string;
  dataInicio: string;
  dataFim: string;
  activo: boolean;
}
