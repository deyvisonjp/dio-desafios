namespace DioDesafioProjetoHospedagem.Models;
public class Suite
{
    public Guid Id { get; set; }
    public string TipoSuite { get; set; }
    public int Capacidade { get; set; }
    public decimal ValorDiaria { get; set; }

    public Suite(string TipoSuite, int Capacidade, decimal ValorDiaria)
    {
        Id = Guid.NewGuid();
        this.TipoSuite = TipoSuite;
        this.Capacidade = Capacidade;
        this.ValorDiaria = ValorDiaria;
    }
}
