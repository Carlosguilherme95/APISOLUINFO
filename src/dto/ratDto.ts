export interface CreateRatDto {
  cliente_id: number;
  tecnico: string;
  gerente: string;
  dataAtendimento: string; // ou Date, se for tratado como data no backend
  descricao: string;
  assinaturaTecnico: string; // base64
  assinaturaGerente: string; // base64
}
