export const logRobo = (
  mensagem: string, 
  tipo: 'INFO' | 'SUCCESS' | 'WARN' | 'ERROR' = 'INFO', 
  dados?: any
) => {
  const timestamp = new Date().toLocaleTimeString();
  
  // 1. Cores padrão por tipo
  const cores = {
    INFO: "#3b82f6",    // Azul
    SUCCESS: "#22c55e", // Verde
    WARN: "#f59e0b",    // Laranja
    ERROR: "#ef4444"    // Vermelho
  };

  // 2. Cores específicas por RAMPA (Fica show no F12!)
  const coresRampas: Record<string, string> = {
    "Rampa 1": "#3b82f6", // azul
    "Rampa 2": "#ef4444", // vermelho
    "Rampa 3": "#94a3b8", // Cinza
  };

  // 3. Lógica para decidir a cor: 
  // Se a mensagem tiver o nome de uma rampa, usa a cor da rampa. 
  // Caso contrário, usa a cor do tipo (INFO, SUCCESS, etc).
  let corFinal = cores[tipo];

  Object.keys(coresRampas).forEach((rampa) => {
    if (mensagem.includes(rampa)) {
      corFinal = coresRampas[rampa];
    }
  });

  console.log(
    `%c[${timestamp}] %c[${tipo}] %c${mensagem}`,
    "color: #71717a; font-size: 10px;", // Timestamp
    `color: ${corFinal}; font-weight: bold; font-size: 10px; border: 1px solid ${corFinal}; padding: 1px 4px; border-radius: 4px;`, // Tag colorida com borda
    `color: ${corFinal === cores[tipo] ? '#ffffff' : corFinal}; font-size: 11px; font-weight: ${corFinal === cores[tipo] ? 'normal' : 'bold'};`, // Mensagem (fica colorida se for rampa)
    dados ? dados : ""
  );
};