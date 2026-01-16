function identificarBandeira(numeroCartao) {
  const num = numeroCartao.replace(/\D/g, "");

  if (/^4/.test(num)) {
    return "Visa";
  } else if (/^5[1-5]/.test(num) || /^2(2[2-9][1-9]|[3-6][0-9]{2}|7[01][0-9]|720)/.test(num)) {
    return "Mastercard";
  } else if (/^3[47]/.test(num)) {
    return "American Express";
  } else if (/^6(?:011|5)/.test(num)) {
    return "Discover";
  } else if (/^(4011|438935|457631|457632|504175|5067|5090|627780|636297|636369)/.test(num)) {
    return "Elo";
  } else if (/^(606282|3841)/.test(num)) {
    return "Hipercard";
  } else {
    return "Bandeira não identificada";
  }
}

// Algoritmo de Luhn
function validarLuhn(numeroCartao) {
  const num = numeroCartao.replace(/\D/g, "");
  let soma = 0;
  let alternar = false;

  for (let i = num.length - 1; i >= 0; i--) {
    let n = parseInt(num[i], 10);

    if (alternar) {
      n *= 2;
      if (n > 9) n -= 9;
    }

    soma += n;
    alternar = !alternar;
  }

  return (soma % 10 === 0);
}

function validarCartao() {
  const numero = document.getElementById("numeroCartao").value;
  const bandeira = identificarBandeira(numero);
  const valido = validarLuhn(numero);

  document.getElementById("resultado").innerText =
    `Bandeira: ${bandeira} | Cartão válido: ${valido ? "Sim" : "Não"}`;
}
