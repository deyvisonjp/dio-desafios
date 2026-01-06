namespace DioDesafioProjetoHospedagem.Models;
public class Pessoa
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Sobrenome { get; set; }

    public Pessoa(string Nome)
    {
        Id = Guid.NewGuid();
        Nome  = this.Nome;
    }
}


