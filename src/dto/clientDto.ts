
// posso utilizar uma interface para não ter que passar vários parâmetros

export interface CreateClienteDTO {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
  telefone1: string;
}
