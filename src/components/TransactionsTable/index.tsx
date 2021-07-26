import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {  
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data));
  }, []);

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
            <td className="deposit">R$120,00</td>
            <td>Trabalho</td>
            <td>25/07/2021</td>
          </tr>
          <tr>
            <td>site novo</td>
            <td className="withdraw">- R$120,00</td>
            <td>Trabalho</td>
            <td>25/07/2021</td>
          </tr>          
        </tbody>
      </table>
    </Container>
  )
}