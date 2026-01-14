-- 1 - Buscar o nome e ano dos filmes
SELECT nome, ano
FROM Filmes f 

-- 2 - Buscar o nome e ano dos filmes, ordenados por ordem crescente pelo ano
SELECT f.Nome, f.Ano , f.Duracao 
FROM Filmes f
ORDER By ano

-- 3 - Buscar pelo filme de volta para o futuro, trazendo o nome, ano e a duração
SELECT f.Nome, f.Ano , f.Duracao 
FROM Filmes f
WHERE f.Nome  = 'De volta para o futuro'
ORDER By ano

-- 4 - Buscar os filmes lançados em 1997
SELECT f.Nome, f.Ano , f.Duracao 
FROM Filmes f
WHERE f.Ano  = 1997

-- 5 - Buscar os filmes lançados APÓS o ano 2000
SELECT f.Nome, f.Ano , f.Duracao 
FROM Filmes f
WHERE f.Ano > 2000

-- 6 - Buscar os filmes com a duracao maior que 100 e menor que 150, ordenando pela duracao em ordem crescente
SELECT f.Nome, f.Ano, f.Duracao
FROM Filmes f
WHERE f.Duracao > 100 AND f.Duracao < 150
ORDER BY f.Duracao ASC;

-- 7 - Buscar a quantidade de filmes lançadas no ano, agrupando por ano, ordenando pela quantidade em ordem decrescente
SELECT f.Ano, COUNT(*) AS QuantidadeFilmes
FROM Filmes f
GROUP BY f.Ano
ORDER BY QuantidadeFilmes DESC;

-- 8 - Buscar os Atores do gênero masculino, retornando o PrimeiroNome, UltimoNome
SELECT a.PrimeiroNome, a.UltimoNome
FROM Atores a
WHERE a.Genero = 'M';

-- 9 - Buscar os Atores do gênero feminino, retornando o PrimeiroNome, UltimoNome, e ordenando pelo PrimeiroNome
SELECT a.PrimeiroNome, a.UltimoNome
FROM Atores a
WHERE a.Genero = 'F'
ORDER BY a.PrimeiroNome ASC;

-- 10 - Buscar o nome do filme e o gênero
SELECT f.Nome AS Filme, g.Genero
FROM Filmes f
JOIN FilmesGenero fg ON f.Id = fg.IdFilme
JOIN Generos g ON fg.IdGenero = g.Id;

-- 11 - Buscar o nome do filme e o gênero do tipo "Mistério"
SELECT f.Nome AS Filme, g.Genero
FROM Filmes f
JOIN FilmesGenero fg ON f.Id = fg.IdFilme
JOIN Generos g ON fg.IdGenero = g.Id
WHERE g.Genero = 'Mistério';

-- 12 - Buscar o nome do filme e os atores, trazendo o PrimeiroNome, UltimoNome e seu Papel
SELECT f.Nome AS Filme, a.PrimeiroNome, a.UltimoNome, ef.Papel
FROM Filmes f
JOIN ElencoFilme ef ON f.Id = ef.IdFilme
JOIN Atores a ON ef.IdAtor = a.Id;
