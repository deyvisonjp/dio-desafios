using DioDesafioProjetoHospedagem.Models;
using System.Text;

Console.OutputEncoding = Encoding.UTF8;

List <Pessoa> hospedes = new List<Pessoa> ();

Pessoa p1 = new Pessoa(Nome: "Hospede 1");
Pessoa p2 = new Pessoa(Nome: "Hospede 2");

hospedes.Add (p1);
hospedes.Add (p2);

Suite suite = new Suite
    (TipoSuite: "Premium", Capacidade: 3, ValorDiaria:30);

Reserva reserva = new Reserva(DiasReservados: 10);
reserva.CadastrarSuite(suite);
reserva.CadastrarHospedes(hospedes);

Console.WriteLine($"Hospedes : {reserva.ObterQuantidadeHospedes()}");
Console.WriteLine($"Valor diária : {reserva.CalcularValorDiaria()}");