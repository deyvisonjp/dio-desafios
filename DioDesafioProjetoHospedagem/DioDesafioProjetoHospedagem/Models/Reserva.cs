using System;
using System.Collections.Generic;
using System.Text;

namespace DioDesafioProjetoHospedagem.Models
{
    public class Reserva
    {
        public Guid Id { get; set; }
        public List<Pessoa> Hospede { get; set; }
        public Suite Suite { get; set; }
        public int DiasReservados { get; set; }


        public Reserva(int DiasReservados)
        {
            Id = Guid.NewGuid();
            this.DiasReservados = DiasReservados;
        }

        public void CadastrarHospedes(List<Pessoa> hospedes)
        {
            if (hospedes.Count > Suite.Capacidade)
            {
                Console.WriteLine("Capacidade inferior ao numero de hospedes");
                return;
            }
            Hospede = hospedes;
        }

        public void CadastrarSuite(Suite suite)
        {
            this.Suite = suite; 
        }

        public int ObterQuantidadeHospedes()
        {
            int quantidadeHospedes = Hospede.Count;
            return quantidadeHospedes;
        }


        public decimal CalcularValorDiaria()
        {
            if (Suite == null)
                throw new InvalidOperationException("Suite não definida.");
            if (Suite.ValorDiaria < 0)
                throw new InvalidOperationException("Valor da diária inválido.");
            if (DiasReservados <= 0)
                throw new InvalidOperationException("Dias reservados deve ser maior que zero.");

            int quantidadeDeHospedes = Hospede?.Count ?? 0;
            if (quantidadeDeHospedes <= 0)
                throw new InvalidOperationException("Quantidade de hóspedes deve ser maior que zero.");

            decimal total = quantidadeDeHospedes * Suite.ValorDiaria * DiasReservados;

            decimal fatorDesconto = DiasReservados >= 10 ? 0.90m : 1m;

            return Math.Round(total * fatorDesconto, 2);
        }

    }
}
