export interface CardContatoAtendimento {
  id: number;
  nome: string;
  mensagens: string[];
  telefone: string;
}

export interface DadosContatoAtendimento {
  dados: CardContatoAtendimento;
  abrirChat: (id: number) => void;
}
