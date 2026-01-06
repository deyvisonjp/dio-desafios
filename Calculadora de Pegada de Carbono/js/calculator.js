/**
 * Lógica de Cálculos - Funções Globais
 * Contém toda a lógica para calcular emissões de CO2
 */

/**
 * Calcula a emissão total de CO2
 * @param {number} value - Valor base (km, kWh, kg)
 * @param {number} factor - Fator de emissão de CO2
 * @param {number} frequency - Frequência (1, 7, 30, 365)
 * @returns {number} Total de CO2 em kg
 */
function calculateCO2Emission(value, factor, frequency = 1) {
    if (value < 0 || factor < 0 || frequency < 0) {
        throw new Error('Valores não podem ser negativos');
    }
    return value * factor * frequency;
}

/**
 * Calcula a emissão diária de CO2
 * @param {number} totalEmission - Emissão total em kg
 * @param {number} frequency - Frequência (1, 7, 30, 365)
 * @returns {number} Emissão diária em kg
 */
function calculateDailyEmission(totalEmission, frequency = 1) {
    if (frequency === 0) return 0;
    return totalEmission / frequency;
}

/**
 * Calcula a emissão anual de CO2
 * @param {number} totalEmission - Emissão total em kg
 * @param {number} frequency - Frequência (1, 7, 30, 365)
 * @returns {number} Emissão anual em kg
 */
function calculateAnnualEmission(totalEmission, frequency = 1) {
    if (frequency === 1) return totalEmission;
    return totalEmission * (365 / frequency);
}

/**
 * Formata o valor de CO2 para exibição
 * @param {number} kg - Valor em kg
 * @param {number} decimals - Número de casas decimais
 * @returns {string} Valor formatado
 */
function formatCO2Value(kg, decimals = 2) {
    if (kg >= 1000) {
        return (kg / 1000).toFixed(decimals) + ' toneladas';
    }
    return kg.toFixed(decimals) + ' kg';
}

/**
 * Gera uma mensagem de equivalência contextualizada
 * @param {number} kg - Valor em kg de CO2
 * @returns {string} Mensagem de equivalência
 */
function generateEquivalenceMessage(kg) {
    const messages = [];

    // Árvores
    if (kg >= CO2_EQUIVALENCIES.tree_planting) {
        messages.push(EQUIVALENCE_MESSAGES.getTreeEquivalence(kg));
    }

    // Quilômetros de carro
    if (kg >= CO2_EQUIVALENCIES.car_kilometer) {
        messages.push(EQUIVALENCE_MESSAGES.getCarEquivalence(kg));
    }

    // Horas de voo
    if (kg >= CO2_EQUIVALENCIES.flight_hour / 10) {
        messages.push(EQUIVALENCE_MESSAGES.getFlightEquivalence(kg));
    }

    // Dias de casa
    if (kg >= CO2_EQUIVALENCIES.household_day / 10) {
        messages.push(EQUIVALENCE_MESSAGES.getHouseholdEquivalence(kg));
    }

    return messages.length > 0 ? messages.join(' | ') : 'Emissão calculada com sucesso!';
}

/**
 * Valida os dados de entrada
 * @param {number} value - Valor
 * @param {string} routeId - ID da rota
 * @returns {Object} Objeto com validação {isValid: boolean, message: string}
 */
function validateCalculationInput(value, routeId) {
    if (!value || value <= 0) {
        return {
            isValid: false,
            message: 'Informe um valor válido maior que zero'
        };
    }

    if (!routeId) {
        return {
            isValid: false,
            message: 'Selecione uma rota válida'
        };
    }

    const route = getRouteById(routeId);
    if (!route) {
        return {
            isValid: false,
            message: 'Rota não encontrada'
        };
    }

    return {
        isValid: true,
        message: 'Validação bem-sucedida'
    };
}

/**
 * Realiza o cálculo completo de CO2
 * @param {Object} options - Opções do cálculo
 * @param {number} options.value - Valor base
 * @param {string} options.routeId - ID da rota
 * @param {number} options.frequency - Frequência (padrão: 1)
 * @returns {Object} Resultado do cálculo ou erro
 */
function performCalculation(options) {
    const { value, routeId, frequency = 1 } = options;

    // Valida entrada
    const validation = validateCalculationInput(value, routeId);
    if (!validation.isValid) {
        return {
            success: false,
            error: validation.message
        };
    }

    try {
        // Obtém a rota
        const route = getRouteById(routeId);
        
        // Calcula emissões
        const totalEmission = calculateCO2Emission(value, route.factor, frequency);
        const dailyEmission = calculateDailyEmission(totalEmission, frequency);
        const annualEmission = calculateAnnualEmission(totalEmission, frequency);
        const equivalence = generateEquivalenceMessage(totalEmission);

        return {
            success: true,
            data: {
                route: route,
                value: value,
                frequency: frequency,
                totalEmission: totalEmission,
                dailyEmission: dailyEmission,
                annualEmission: annualEmission,
                formattedTotal: formatCO2Value(totalEmission),
                formattedDaily: formatCO2Value(dailyEmission),
                formattedAnnual: formatCO2Value(annualEmission),
                equivalence: equivalence
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Calcula a pegada de carbono para múltiplas atividades
 * @param {Array} activities - Array de atividades com {routeId, value, frequency}
 * @returns {Object} Resultado agregado
 */
function calculateMultipleActivities(activities) {
    let totalCO2 = 0;
    const results = [];
    const errors = [];

    activities.forEach((activity, index) => {
        const result = performCalculation({
            value: activity.value,
            routeId: activity.routeId,
            frequency: activity.frequency || 1
        });

        if (result.success) {
            totalCO2 += result.data.totalEmission;
            results.push(result.data);
        } else {
            errors.push(`Atividade ${index + 1}: ${result.error}`);
        }
    });

    return {
        success: errors.length === 0,
        totalCO2: totalCO2,
        results: results,
        errors: errors,
        equivalence: generateEquivalenceMessage(totalCO2)
    };
}
