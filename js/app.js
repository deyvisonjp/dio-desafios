/**
 * Aplicação Principal
 * Inicializa e gerencia todos os eventos da calculadora
 */

// Estado global da aplicação
let appState = {
    currentCategory: 'transportation',
    selectedRoute: null,
    lastResult: null
};

/**
 * Inicializa a aplicação
 */
function initializeApp() {
    setupEventListeners();
    loadInitialData();
    console.log('🌍 Calculadora de Pegada de Carbono iniciada com sucesso!');
}

/**
 * Configura todos os ouvintes de eventos
 */
function setupEventListeners() {
    // Botões de categoria
    addEventListenerAll('.category-btn', 'click', handleCategoryChange);

    // Formulário de cálculo
    addEventListener('#calculatorForm', 'submit', handleFormSubmit);

    // Botão de nova calculadora
    addEventListener('#newCalcBtn', 'click', handleNewCalculation);

    // Select de rotas
    addEventListener('#routeSelect', 'change', handleRouteChange);
}

/**
 * Carrega dados iniciais
 */
function loadInitialData() {
    // Popula o select com as rotas iniciais (transporte)
    populateRouteSelect('transportation');
    updateFormLabels('transportation');
    setActiveCategory('transportation');
}

/**
 * Manipulador para mudança de categoria
 * @param {Event} event - Evento de clique
 */
function handleCategoryChange(event) {
    const category = event.target.getAttribute('data-category');
    
    if (category) {
        appState.currentCategory = category;
        setActiveCategory(category);
        populateRouteSelect(category);
        updateFormLabels(category);
        clearForm();
        
        console.log(`📊 Categoria alterada para: ${category}`);
    }
}

/**
 * Manipulador para mudança de rota
 * @param {Event} event - Evento de mudança
 */
function handleRouteChange(event) {
    appState.selectedRoute = event.target.value;
    console.log(`🛣️ Rota selecionada: ${appState.selectedRoute}`);
}

/**
 * Manipulador para envio do formulário
 * @param {Event} event - Evento de envio
 */
function handleFormSubmit(event) {
    event.preventDefault();

    // Obtém valores do formulário
    const routeId = getValue('#routeSelect');
    const value = parseFloat(getValue('#valueInput'));
    const frequency = parseInt(getValue('#frequencySelect'));

    console.log(`📋 Dados do formulário:`, {
        routeId,
        value,
        frequency
    });

    // Valida os dados
    if (!routeId || !value) {
        showError('Por favor, preencha todos os campos obrigatórios');
        return;
    }

    // Realiza o cálculo
    const result = performCalculation({
        value: value,
        routeId: routeId,
        frequency: frequency
    });

    if (result.success) {
        appState.lastResult = result;
        displayResult(result);
        console.log('✅ Cálculo realizado com sucesso:', result.data);
    } else {
        showError(result.error);
        console.error('❌ Erro no cálculo:', result.error);
    }
}

/**
 * Manipulador para nova calculadora
 */
function handleNewCalculation() {
    hideResult();
    clearForm();
    appState.selectedRoute = null;
    appState.lastResult = null;
    console.log('🔄 Calculadora resetada');
}

/**
 * Função auxiliar para testar o calculador
 * Útil para testes em console
 */
window.testCalculator = function() {
    console.log('🧪 Iniciando testes...');
    
    // Teste 1: Carro 100km
    const test1 = performCalculation({
        value: 100,
        routeId: 'car',
        frequency: 1
    });
    console.log('Teste 1 (Carro 100km):', test1);
    
    // Teste 2: Eletricidade 500kWh por mês
    const test2 = performCalculation({
        value: 500,
        routeId: 'electricity',
        frequency: 30
    });
    console.log('Teste 2 (Eletricidade 500kWh/mês):', test2);
    
    // Teste 3: Carne vermelha 10kg
    const test3 = performCalculation({
        value: 10,
        routeId: 'beef',
        frequency: 1
    });
    console.log('Teste 3 (Carne vermelha 10kg):', test3);
    
    console.log('✅ Testes concluídos!');
};

/**
 * Função para obter as rotas disponíveis
 * Útil para consulta em console
 */
window.getAvailableRoutes = function(category = null) {
    if (category) {
        return getRoutesByCategory(category);
    }
    return ROUTES_DATA;
};

/**
 * Função para obter a configuração de CO2
 * Útil para consulta em console
 */
window.getCO2Config = function() {
    return CO2_CONFIG;
};

// Inicializa a aplicação quando o DOM está pronto
document.addEventListener('DOMContentLoaded', initializeApp);

// Log de inicialização
console.log('%c🌍 Calculadora de Pegada de Carbono', 'color: green; font-size: 16px; font-weight: bold;');
console.log('%cComandos úteis:', 'color: blue; font-weight: bold;');
console.log('%c- testCalculator() - Executa testes de exemplo', 'color: gray;');
console.log('%c- getAvailableRoutes() - Lista todas as rotas', 'color: gray;');
console.log('%c- getCO2Config() - Mostra configurações de CO2', 'color: gray;');
