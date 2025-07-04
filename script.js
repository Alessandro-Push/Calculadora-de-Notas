function calcularNota() {
    const pa1 = parseFloat(document.getElementById("pa1").value) || 0;
    const pa2 = parseFloat(document.getElementById("pa2").value) || 0;
    const pa3 = parseFloat(document.getElementById("pa3").value) || 0;
    const pa4 = parseFloat(document.getElementById("pa4").value) || 0;
    const ei = parseFloat(document.getElementById("ei").value) || 0;
  
    const promedio = (pa1 + pa2 + pa3 + pa4) * 0.15 + ei * 0.4;
    const notaFinal = promedio.toFixed(2);
  
    let mensaje = "";
    let imagen = "";
  
    if (notaFinal >= 19) {
      mensaje = "¡Perfecto, eres una máquina! 💯";
      imagen = "https://i.pinimg.com/736x/54/ad/cc/54adcc217f64bbab869f51dec63a0629.jpg";
    } else if (notaFinal >= 16) {
      mensaje = "¡Muy bien, sigue así! ✨";
      imagen = "https://i.pinimg.com/736x/a2/2f/3a/a22f3aede40e32b0f12b9098c11afd65.jpg";
    } else if (notaFinal >= 13) {
      mensaje = "¡Aprobaste, buen trabajo! 👍";
      imagen = "https://i.pinimg.com/736x/e8/24/eb/e824eb5b02657f2b8334e3448e47d129.jpg";
    } else if (notaFinal >= 11) {
      mensaje = "Qué fue mano!?";
      imagen = "https://i.pinimg.com/736x/9b/65/67/9b656763cec800157003f1658b6a17a1.jpg";
    } else {
      mensaje = "No seas malo ps!💀";
      imagen = "https://i.pinimg.com/736x/ff/2e/02/ff2e0218be0890572cc13596a7e45cbb.jpg";
    }
    

  
    document.getElementById("resultado").innerHTML = `
      <div class="alert alert-info shadow p-4 rounded">
        <h4 class="alert-heading">Tu nota final es: ${notaFinal}</h4>
        <p>${mensaje}</p>
        <img src="${imagen}" alt="Resultado" class="img-fluid rounded" style="max-width: 200px;">
      </div>
    `;
    
    gtag('event', 'click', {
        'event_category': 'calculadora',
        'event_label': 'calcular_nota',
        'value': 1
      });
  }