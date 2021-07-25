import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>site novo</td>
            <td>R$120,00</td>
            <td>Trabalho</td>
            <td>25/07/2021</td>
          </tr>
          <tr>
            <td>site novo</td>
            <td>R$120,00</td>
            <td>Trabalho</td>
            <td>25/07/2021</td>
          </tr>
          <tr>
            <td>site novo</td>
            <td>R$120,00</td>
            <td>Trabalho</td>
            <td>25/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}