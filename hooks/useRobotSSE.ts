import { useEffect, useState } from 'react'
import { logRobo } from '@/app/robo/logEvents' 


interface RobotData {
  power?: boolean;
  emergency?: boolean;
  isHome?: boolean;
  isSleep?: boolean;
  activePgm?: number | null; 
  pgm1?: boolean;            
  pgm2?: boolean;            
  pgm3?: boolean;            
  status?: number;           
  mode?: string;             
  load?: string;             
  temp?: string;             
  oee?: string;              
  peçasProduzidas?: number;
  falhas?: number;
  status_robo?: string;      
  timestamp?: string;        
  raw_bits?: boolean[];       
}

const API_URL = 'http://localhost:3001/events'

export function useRobotSSE() {
  const [data, setData] = useState<RobotData | null>(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    const source = new EventSource(API_URL)

    source.onopen = () => {
      setConnected(true)
      // Usando seu log estilizado para conexão
      logRobo("Conectado ao servidor de eventos", "SUCCESS", { status: "Online" });
    }

    source.onmessage = (e) => {
      try {
        const parsedData: RobotData = JSON.parse(e.data);
        
        // --- LOG ESTILIZADO + FORMATO TERMINAL ---
        // Primeiro a mensagem colorida
        logRobo(`Dados Recebidos: ${parsedData.status_robo}`);

        // Depois o detalhamento organizado como no terminal (para facilitar leitura)
        console.log("%c{", "color: #71717a");
        console.log(`  %c"status_robo": %c"${parsedData.status_robo}",`, "color: #94a3b8", "color: #22c55e");
        console.log(`  %c"timestamp": %c"${parsedData.timestamp}",`, "color: #94a3b8", "color: #3b82f6");
        console.log(`  %c"raw_bits": %c${JSON.stringify(parsedData.raw_bits)}`, "color: #94a3b8", "color: #f75599");
        console.log("%c}", "color: #71717a");

        setData(parsedData);
      } catch (err) {
        // Log de erro estilizado (você pode mudar a cor no logRobo se quiser)
        logRobo("Erro ao processar dados", "ERROR", err);
      }
    }

    source.onerror = () => {
      setConnected(false)
      logRobo("Conexão perdida ou servidor offline", "WARN", { erro: "Connection Lost" });
    }

    return () => {
      source.close();
      logRobo("Conexão encerrada pelo cliente");
    }
  }, [])

  return { data, connected }
}