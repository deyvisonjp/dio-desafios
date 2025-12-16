# 🌍 Calculadora de Pegada de Carbono

Uma aplicação web interativa para calcular e visualizar a pegada de carbono de diferentes atividades do dia a dia.

## 📋 Descrição

Esta calculadora permite aos usuários calcular sua contribuição para as emissões de CO₂ através de atividades cotidianas, incluindo:

- **Transporte**: Carro, moto, ônibus, trem, avião
- **Energia**: Eletricidade, gás natural, carvão
- **Alimentação**: Carne, frango, peixe, laticínios, vegetais

## 🎯 Funcionalidades

✅ Interface responsiva e intuitiva  
✅ Cálculo em tempo real de emissões de CO₂  
✅ Múltiplas categorias de atividades  
✅ Equivalências contextualizadas (árvores, km de carro, etc.)  
✅ Ajuste de frequência (uma vez, semanal, mensal, anual)  
✅ Design moderno com gradientes e animações  
✅ Suporte para desktop e mobile  

## 📁 Estrutura do Projeto

```
carbon-calculator/
├── index.html              # Arquivo HTML principal
├── css/
│   └── style.css          # Estilos CSS completos
├── js/
│   ├── config.js          # Constantes e configurações de CO2
│   ├── routes-data.js     # Dados de rotas (objeto global)
│   ├── calculator.js      # Lógica de cálculos
│   ├── ui.js              # Funções de manipulação do DOM
│   └── app.js             # Aplicação principal e inicialização
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir a Aplicação

Simplesmente abra o arquivo `index.html` no navegador.

### 2. Selecionar uma Categoria

Clique em um dos botões de categoria:
- 🚗 **Transporte**
- ⚡ **Energia**
- 🍔 **Alimentação**

### 3. Preencher o Formulário

- **Selecione a Rota/Atividade**: Escolha a opção específica
- **Informe o Valor**: Insira a quantidade (km, kWh, kg)
- **Defina a Frequência**: Escolha com que frequência ocorre a atividade

### 4. Calcular

Clique no botão "Calcular" para obter o resultado.

### 5. Visualizar Resultado

O resultado mostrará:
- Emissão total de CO₂ em kg
- Equivalências contextualizadas
- Opção para nova calculadora

## 📊 Fatores de Emissão Utilizados

### Transporte (kg CO₂/km)
- Carro: 0.192
- Carro Elétrico: 0.05
- Moto/Scooter: 0.071
- Ônibus: 0.089
- Trem: 0.041
- Avião (voo curto): 0.255
- Avião (voo longo): 0.195

### Energia (kg CO₂/kWh)
- Eletricidade (média): 0.42
- Eletricidade (renovável): 0.05
- Gás Natural: 0.204
- Carvão: 0.995
- Óleo de Aquecimento: 0.267

### Alimentação (kg CO₂/kg)
- Carne Vermelha: 27
- Frango: 6.9
- Peixe: 5
- Produtos Lácteos: 23.5
- Vegetais: 2
- Frutas: 1.5
- Grãos/Cereais: 1.5

## 🔧 Desenvolvimento

### Arquivos JavaScript

#### **config.js**
Define as constantes globais de CO₂, fatores de emissão e equivalências.

```javascript
CO2_CONFIG          // Configurações por categoria
CO2_EQUIVALENCIES   // Fatores de comparação
EQUIVALENCE_MESSAGES // Mensagens contextualizadas
```

#### **routes-data.js**
Contém dados de todas as rotas/atividades disponíveis.

```javascript
ROUTES_DATA         // Dados de rotas por categoria
getRoutesByCategory()  // Obter rotas por categoria
getRouteById()         // Obter rota específica
getCO2Factor()         // Obter fator de emissão
```

#### **calculator.js**
Lógica de cálculos de emissões de CO₂.

```javascript
calculateCO2Emission()      // Calcula emissão total
calculateDailyEmission()    // Calcula emissão diária
calculateAnnualEmission()   // Calcula emissão anual
performCalculation()        // Função principal de cálculo
```

#### **ui.js**
Funções para manipulação da interface do usuário.

```javascript
select()              // Seleciona um elemento
populateRouteSelect() // Popula o select de rotas
displayResult()       // Exibe resultado
clearForm()           // Limpa o formulário
```

#### **app.js**
Inicializa a aplicação e gerencia os eventos.

```javascript
initializeApp()       // Inicializa a aplicação
setupEventListeners() // Configura ouvintes
handleFormSubmit()    // Processa o envio do formulário
```

## 📱 Testes

No console do navegador, você pode usar comandos úteis:

```javascript
testCalculator()              // Executa testes de exemplo
getAvailableRoutes()          // Lista todas as rotas
getAvailableRoutes('transportation') // Lista rotas de uma categoria
getCO2Config()                // Mostra configurações de CO₂
```

## 🎨 Customização

### Cores
Edite as variáveis CSS em `style.css`:
```css
--primary-color: #10b981;
--secondary-color: #059669;
--tertiary-color: #34d399;
```

### Fatores de Emissão
Atualize os valores em `config.js` e `routes-data.js`.

### Adicionar Nova Categoria

1. Adicione dados em `routes-data.js`
2. Adicione configuração em `config.js`
3. Atualize labels em `ui.js`
4. Adicione botão em `index.html`

## 📈 Próximas Melhorias

- [ ] Gráficos de comparação entre categorias
- [ ] Salvar histórico de cálculos
- [ ] Compartilhar resultados nas redes sociais
- [ ] Suporte a múltiplos idiomas
- [ ] API de dados em tempo real
- [ ] Progressive Web App (PWA)

## 📚 Referências

- [EPA - Carbon Footprint Calculator](https://www.epa.gov/)
- [Our World in Data - CO2 Emissions](https://ourworldindata.org/)
- [Carbon Trust - Carbon Footprint](https://www.carbontrust.com/)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Autores

Desenvolvido como desafio da DIO (Digital Innovation One).

## 🆘 Suporte

Se encontrar algum problema, abra uma issue no repositório.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do repositório.

---

**Desenvolvido com ❤️ para um futuro mais sustentável** 🌱
