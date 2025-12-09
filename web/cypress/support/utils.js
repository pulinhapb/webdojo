export function getDataHoje() {
  const hoje = new Date();

  // Obtém o dia, mês e ano
  const dia = String(hoje.getDate()).padStart(2, '0'); // Garante que o dia tenha 2 dígitos
  const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // getMonth() começa do 0, por isso adicionamos 1
  const ano = hoje.getFullYear();

  // Retorna a data no formato dd/mm/aaaa
  return `${dia}/${mes}/${ano}`;
}