import { StatusCodes } from "http-status-codes";
import { TListProfessorDisciplinasUseCase, TListMateriaisUseCase, TCreateMaterialUseCase, TUpdateMaterialUseCase, TDeleteMaterialUseCase, TListAvisosUseCase, TCreateAvisoUseCase, TDeleteAvisoUseCase, TListAlunosDisciplinaUseCase } from "../domain/IProfessorDisciplina";

export const ListProfessorDisciplinasUseCase: TListProfessorDisciplinasUseCase = (ResponseProvider, listDisciplinas) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const disciplinas = await listDisciplinas(professorId);
    return ResponseProvider(StatusCodes.OK, "Disciplinas do professor", disciplinas);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListMateriaisUseCase: TListMateriaisUseCase = (ResponseProvider, listMateriais) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const materiais = await listMateriais(req.params.disciplinaId as string, professorId);
    return ResponseProvider(StatusCodes.OK, "Materiais da disciplina", materiais);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateMaterialUseCase: TCreateMaterialUseCase = (ResponseProvider, createMaterial) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const professor = await findProfessorIdByUserId(professorId);
    const material = await createMaterial({ ...req.body, professorId: professor });
    return ResponseProvider(StatusCodes.CREATED, "Material criado com sucesso", material);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const UpdateMaterialUseCase: TUpdateMaterialUseCase = (ResponseProvider, updateMaterial) => async (req) => {
  try {
    const updated = await updateMaterial(req.params.id as string, req.body);
    return ResponseProvider(StatusCodes.OK, "Material actualizado", updated);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteMaterialUseCase: TDeleteMaterialUseCase = (ResponseProvider, deleteMaterial) => async (req) => {
  try {
    await deleteMaterial(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Material removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListAvisosUseCase: TListAvisosUseCase = (ResponseProvider, listAvisos) => async (req) => {
  try {
    const professorId = (req as any).user?.sub;
    if (!professorId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const avisos = await listAvisos(req.params.disciplinaId as string, professorId);
    return ResponseProvider(StatusCodes.OK, "Avisos da disciplina", avisos);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const CreateAvisoUseCase: TCreateAvisoUseCase = (ResponseProvider, createAviso) => async (req) => {
  try {
    const userId = (req as any).user?.sub;
    if (!userId) return ResponseProvider(StatusCodes.UNAUTHORIZED, "Não autenticado", null);
    const professorId = await findProfessorIdByUserId(userId);
    const aviso = await createAviso({ ...req.body, professorId });
    return ResponseProvider(StatusCodes.CREATED, "Aviso criado com sucesso", aviso);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const DeleteAvisoUseCase: TDeleteAvisoUseCase = (ResponseProvider, deleteAviso) => async (req) => {
  try {
    await deleteAviso(req.params.id as string);
    return ResponseProvider(StatusCodes.OK, "Aviso removido com sucesso", null);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

export const ListAlunosDisciplinaUseCase: TListAlunosDisciplinaUseCase = (ResponseProvider, listAlunos) => async (req) => {
  try {
    const alunos = await listAlunos(req.params.disciplinaId as string);
    return ResponseProvider(StatusCodes.OK, "Alunos da disciplina", alunos);
  } catch (error: any) {
    return ResponseProvider(StatusCodes.BAD_REQUEST, error.message, null);
  }
};

async function findProfessorIdByUserId(userId: string): Promise<string> {
  const { PrismaProvider } = await import("@/main/providers/PrismaProvider");
  const professor = await PrismaProvider.professor.findUnique({ where: { userId } });
  if (!professor) throw new Error("Professor não encontrado");
  return professor.id;
}
