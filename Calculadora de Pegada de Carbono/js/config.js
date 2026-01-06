/**
 * Configuração Global - Constantes de CO2
 * Define os índices de emissão de CO2 para diferentes categorias
 */

const CO2_CONFIG = {
    transportation: {
        car: {
            name: 'Carro (média)',
            unit: 'km',
            factor: 0.192 // kg CO2 por km
        },
        car_electric: {
            name: 'Carro Elétrico',
            unit: 'km',
            factor: 0.05 // kg CO2 por km
        },
        motorcycle: {
            name: 'Moto/Scooter',
            unit: 'km',
            factor: 0.071 // kg CO2 por km
        },
        bus: {
            name: 'Ônibus',
            unit: 'km',
            factor: 0.089 // kg CO2 por km
        },
        train: {
            name: 'Trem',
            unit: 'km',
            factor: 0.041 // kg CO2 por km
        },
        flight_short: {
            name: 'Avião (voo curto)',
            unit: 'km',
            factor: 0.255 // kg CO2 por km
        },
        flight_long: {
            name: 'Avião (voo longo)',
            unit: 'km',
            factor: 0.195 // kg CO2 por km
        }
    },
    energy: {
        electricity: {
            name: 'Eletricidade (média)',
            unit: 'kWh',
            factor: 0.42 // kg CO2 por kWh
        },
        electricity_renewable: {
            name: 'Eletricidade (renovável)',
            unit: 'kWh',
            factor: 0.05 // kg CO2 por kWh
        },
        natural_gas: {
            name: 'Gás Natural',
            unit: 'kWh',
            factor: 0.204 // kg CO2 por kWh
        },
        coal: {
            name: 'Carvão',
            unit: 'kWh',
            factor: 0.995 // kg CO2 por kWh
        },
        heating_oil: {
            name: 'Óleo de Aquecimento',
            unit: 'kWh',
            factor: 0.267 // kg CO2 por kWh
        }
    },
    food: {
        beef: {
            name: 'Carne Vermelha (Bife)',
            unit: 'kg',
            factor: 27 // kg CO2 por kg
        },
        chicken: {
            name: 'Frango',
            unit: 'kg',
            factor: 6.9 // kg CO2 por kg
        },
        fish: {
            name: 'Peixe',
            unit: 'kg',
            factor: 5 // kg CO2 por kg
        },
        dairy: {
            name: 'Produtos Lácteos (Queijo)',
            unit: 'kg',
            factor: 23.5 // kg CO2 por kg
        },
        vegetables: {
            name: 'Vegetais (média)',
            unit: 'kg',
            factor: 2 // kg CO2 por kg
        },
        fruits: {
            name: 'Frutas (média)',
            unit: 'kg',
            factor: 1.5 // kg CO2 por kg
        },
        grains: {
            name: 'Grãos/Cereais',
            unit: 'kg',
            factor: 1.5 // kg CO2 por kg
        }
    }
};

/**
 * Equivalências para contextualizar as emissões
 */
const CO2_EQUIVALENCIES = {
    tree_planting: 20, // kg CO2 absorvido por uma árvore por ano
    car_kilometer: 0.192, // kg CO2 por km de carro
    flight_hour: 255, // kg CO2 por hora de voo
    household_day: 50, // kg CO2 consumo diário médio de uma casa
};

/**
 * Frases contextualizadas para mostrar ao usuário
 */
const EQUIVALENCE_MESSAGES = {
    getTreeEquivalence: (kg) => {
        const trees = Math.round(kg / CO2_EQUIVALENCIES.tree_planting);
        return `Equivalente a ${trees} árvore${trees !== 1 ? 's' : ''} plantada${trees !== 1 ? 's' : ''} por ano`;
    },
    getCarEquivalence: (kg) => {
        const km = Math.round(kg / CO2_EQUIVALENCIES.car_kilometer);
        return `Equivalente a ${km} km dirigindo um carro`;
    },
    getFlightEquivalence: (kg) => {
        const hours = Math.round(kg / CO2_EQUIVALENCIES.flight_hour);
        return `Equivalente a ${hours} hora${hours !== 1 ? 's' : ''} de voo`;
    },
    getHouseholdEquivalence: (kg) => {
        const days = Math.round(kg / CO2_EQUIVALENCIES.household_day);
        return `Equivalente a ${days} dia${days !== 1 ? 's' : ''} de consumo de uma casa`;
    }
};
