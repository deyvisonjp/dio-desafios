/**
 * Manipulação do DOM - Funções Globais
 * Contém todas as funções para manipular a interface do usuário
 */

/**
 * Seleciona um elemento do DOM
 * @param {string} selector - Seletor CSS
 * @returns {Element} Elemento encontrado
 */
function select(selector) {
    return document.querySelector(selector);
}

/**
 * Seleciona múltiplos elementos do DOM
 * @param {string} selector - Seletor CSS
 * @returns {NodeList} Lista de elementos
 */
function selectAll(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Popula o select de rotas baseado na categoria
 * @param {string} category - Categoria selecionada
 */
function populateRouteSelect(category) {
    const routeSelect = select('#routeSelect');
    const routes = getRoutesByCategory(category);

    // Limpa as opções anteriores
    routeSelect.innerHTML = '<option value="">-- Selecione uma opção --</option>';

    // Adiciona novas opções
    routes.forEach(route => {
        const option = document.createElement('option');
        option.value = route.id;
        option.textContent = route.name;
        option.dataset.factor = route.factor;
        routeSelect.appendChild(option);
    });
}

/**
 * Atualiza os labels do formulário baseado na categoria
 * @param {string} category - Categoria selecionada
 */
function updateFormLabels(category) {
    const routeLabel = select('#routeLabel');
    const valueLabel = select('#valueLabel');

    const labels = {
        transportation: {
            route: 'Selecione o Meio de Transporte:',
            value: 'Distância (km):'
        },
        energy: {
            route: 'Selecione a Fonte de Energia:',
            value: 'Consumo (kWh):'
        },
        food: {
            route: 'Selecione o Alimento:',
            value: 'Quantidade (kg):'
        }
    };

    const categoryLabels = labels[category] || labels.transportation;
    routeLabel.textContent = categoryLabels.route;
    valueLabel.textContent = categoryLabels.value;
}

/**
 * Define a categoria ativa
 * @param {string} category - Categoria a ativar
 */
function setActiveCategory(category) {
    selectAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = select(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

/**
 * Exibe o cartão de resultados
 * @param {Object} resultData - Dados do resultado
 */
function displayResult(resultData) {
    const resultsCard = select('#resultsCard');
    const resultValue = select('#resultValue');
    const resultEquivalence = select('#resultEquivalence');
    const calculatorCard = select('.calculator-card');

    if (resultData && resultData.success) {
        const data = resultData.data;
        resultValue.textContent = data.totalEmission.toFixed(2);
        resultEquivalence.textContent = data.equivalence;
        resultsCard.style.display = 'block';
        calculatorCard.style.display = 'none';
    }
}

/**
 * Oculta o cartão de resultados e mostra o calculador
 */
function hideResult() {
    const resultsCard = select('#resultsCard');
    const calculatorCard = select('.calculator-card');
    resultsCard.style.display = 'none';
    calculatorCard.style.display = 'block';
}

/**
 * Limpa o formulário
 */
function clearForm() {
    const form = select('#calculatorForm');
    if (form) {
        form.reset();
    }
    select('#valueInput').focus();
}

/**
 * Mostra um alerta de erro
 * @param {string} message - Mensagem de erro
 */
function showError(message) {
    alert(`❌ Erro: ${message}`);
}

/**
 * Mostra um alerta de sucesso
 * @param {string} message - Mensagem de sucesso
 */
function showSuccess(message) {
    alert(`✅ ${message}`);
}

/**
 * Habilita ou desabilita um elemento
 * @param {string} selector - Seletor do elemento
 * @param {boolean} disabled - Se deve desabilitar
 */
function setElementDisabled(selector, disabled) {
    const element = select(selector);
    if (element) {
        element.disabled = disabled;
    }
}

/**
 * Adiciona uma classe a um elemento
 * @param {string} selector - Seletor do elemento
 * @param {string} className - Nome da classe
 */
function addClass(selector, className) {
    const element = select(selector);
    if (element) {
        element.classList.add(className);
    }
}

/**
 * Remove uma classe de um elemento
 * @param {string} selector - Seletor do elemento
 * @param {string} className - Nome da classe
 */
function removeClass(selector, className) {
    const element = select(selector);
    if (element) {
        element.classList.remove(className);
    }
}

/**
 * Define o conteúdo de texto de um elemento
 * @param {string} selector - Seletor do elemento
 * @param {string} text - Texto a definir
 */
function setText(selector, text) {
    const element = select(selector);
    if (element) {
        element.textContent = text;
    }
}

/**
 * Obtém o valor de um input/select
 * @param {string} selector - Seletor do elemento
 * @returns {string|number} Valor do elemento
 */
function getValue(selector) {
    const element = select(selector);
    return element ? element.value : null;
}

/**
 * Define o valor de um input/select
 * @param {string} selector - Seletor do elemento
 * @param {string|number} value - Valor a definir
 */
function setValue(selector, value) {
    const element = select(selector);
    if (element) {
        element.value = value;
    }
}

/**
 * Adiciona um ouvinte de evento a um elemento
 * @param {string} selector - Seletor do elemento
 * @param {string} event - Tipo de evento
 * @param {Function} handler - Função a executar
 */
function addEventListener(selector, event, handler) {
    const element = select(selector);
    if (element) {
        element.addEventListener(event, handler);
    }
}

/**
 * Adiciona ouvintes de eventos a múltiplos elementos
 * @param {string} selector - Seletor dos elementos
 * @param {string} event - Tipo de evento
 * @param {Function} handler - Função a executar
 */
function addEventListenerAll(selector, event, handler) {
    selectAll(selector).forEach(element => {
        element.addEventListener(event, handler);
    });
}

/**
 * Anima um elemento
 * @param {string} selector - Seletor do elemento
 * @param {string} animationName - Nome da animação CSS
 */
function animateElement(selector, animationName) {
    const element = select(selector);
    if (element) {
        element.style.animation = `${animationName} 0.3s ease-in-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    }
}

/**
 * Alterna o estado de exibição de um elemento (display)
 * @param {string} selector - Seletor do elemento
 */
function toggleDisplay(selector) {
    const element = select(selector);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

/**
 * Define estilos inline para um elemento
 * @param {string} selector - Seletor do elemento
 * @param {Object} styles - Objeto com estilos CSS
 */
function setStyles(selector, styles) {
    const element = select(selector);
    if (element) {
        Object.keys(styles).forEach(key => {
            element.style[key] = styles[key];
        });
    }
}

/**
 * Obtém o valor de um atributo data
 * @param {string} selector - Seletor do elemento
 * @param {string} attribute - Nome do atributo data
 * @returns {string} Valor do atributo
 */
function getDataAttribute(selector, attribute) {
    const element = select(selector);
    return element ? element.dataset[attribute] : null;
}
