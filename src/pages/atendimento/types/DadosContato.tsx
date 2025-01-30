export interface DetailsContato {
  id: number;
  nome: string;
  mensagens: string[];
  telefone: number;
}

export interface Dados {
  dados: DetailsContato;
  fecharChat: (data: null) => void;
}
