/**
 * Dados de Rotas - Objeto Global
 * Contém todas as rotas disponíveis para cálculo de emissões
 */

const ROUTES_DATA = {
    transportation: [
        {
            id: 'car',
            name: 'Carro (média)',
            description: 'Automóvel convencional com gasolina',
            category: 'transportation',
            factor: 0.192
        },
        {
            id: 'car_electric',
            name: 'Carro Elétrico',
            description: 'Veículo 100% elétrico recarregável',
            category: 'transportation',
            factor: 0.05
        },
        {
            id: 'motorcycle',
            name: 'Moto/Scooter',
            description: 'Motocicleta ou scooter',
            category: 'transportation',
            factor: 0.071
        },
        {
            id: 'bus',
            name: 'Ônibus',
            description: 'Transporte público coletivo',
            category: 'transportation',
            factor: 0.089
        },
        {
            id: 'train',
            name: 'Trem',
            description: 'Transporte ferroviário',
            category: 'transportation',
            factor: 0.041
        },
        {
            id: 'flight_short',
            name: 'Avião (voo curto)',
            description: 'Voos domésticos ou de curta distância',
            category: 'transportation',
            factor: 0.255
        },
        {
            id: 'flight_long',
            name: 'Avião (voo longo)',
            description: 'Voos internacionais ou de longa distância',
            category: 'transportation',
            factor: 0.195
        }
    ],
    energy: [
        {
            id: 'electricity',
            name: 'Eletricidade (média)',
            description: 'Consumo geral de eletricidade da rede',
            category: 'energy',
            factor: 0.42
        },
        {
            id: 'electricity_renewable',
            name: 'Eletricidade (renovável)',
            description: 'Eletricidade de fontes renováveis',
            category: 'energy',
            factor: 0.05
        },
        {
            id: 'natural_gas',
            name: 'Gás Natural',
            description: 'Gás natural para aquecimento/cozinha',
            category: 'energy',
            factor: 0.204
        },
        {
            id: 'coal',
            name: 'Carvão',
            description: 'Energia gerada a partir de carvão',
            category: 'energy',
            factor: 0.995
        },
        {
            id: 'heating_oil',
            name: 'Óleo de Aquecimento',
            description: 'Óleo combustível para aquecimento',
            category: 'energy',
            factor: 0.267
        }
    ],
    food: [
        {
            id: 'beef',
            name: 'Carne Vermelha (Bife)',
            description: 'Carne de vaca produzida com alto impacto ambiental',
            category: 'food',
            factor: 27
        },
        {
            id: 'chicken',
            name: 'Frango',
            description: 'Carne de frango produzida com menor impacto',
            category: 'food',
            factor: 6.9
        },
        {
            id: 'fish',
            name: 'Peixe',
            description: 'Peixe de água doce ou salgada',
            category: 'food',
            factor: 5
        },
        {
            id: 'dairy',
            name: 'Produtos Lácteos (Queijo)',
            description: 'Queijo, manteiga e derivados de leite',
            category: 'food',
            factor: 23.5
        },
        {
            id: 'vegetables',
            name: 'Vegetais (média)',
            description: 'Alface, tomate, cenoura, etc.',
            category: 'food',
            factor: 2
        },
        {
            id: 'fruits',
            name: 'Frutas (média)',
            description: 'Maçã, banana, laranja, etc.',
            category: 'food',
            factor: 1.5
        },
        {
            id: 'grains',
            name: 'Grãos/Cereais',
            description: 'Arroz, trigo, milho, etc.',
            category: 'food',
            factor: 1.5
        }
    ]
};

/**
 * Função auxiliar para obter rotas por categoria
 * @param {string} category - Categoria (transportation, energy, food)
 * @returns {Array} Array de rotas da categoria
 */
function getRoutesByCategory(category) {
    return ROUTES_DATA[category] || [];
}

/**
 * Função auxiliar para obter uma rota específica pelo ID
 * @param {string} routeId - ID da rota
 * @returns {Object} Objeto da rota ou null
 */
function getRouteById(routeId) {
    for (const category in ROUTES_DATA) {
        const route = ROUTES_DATA[category].find(r => r.id === routeId);
        if (route) return route;
    }
    return null;
}

/**
 * Função auxiliar para obter o fator de CO2 de uma rota
 * @param {string} routeId - ID da rota
 * @returns {number} Fator de CO2
 */
function getCO2Factor(routeId) {
    const route = getRouteById(routeId);
    return route ? route.factor : 0;
}
