"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Code2, 
  Cpu, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Bot, 
  Monitor,
  CheckCircle2,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function PortfolioGilberto() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#1e293b', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* --- NAVEGAÇÃO --- */}
      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '20px 60px', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, 
        backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', zIndex: 100 
      }}>
        <div style={{ fontWeight: '900', fontSize: '20px', letterSpacing: '-1px' }}>
          GILBERTO <span style={{ color: '#ef4444' }}>JUNIOR</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://github.com/gilbertojunior06" target="_blank" style={{ color: '#64748b' }}><Github size={20} /></a>
            <a href="#" style={{ color: '#0077b5' }}><Linkedin size={20} /></a>
          </div>
          <span style={{ color: '#ef4444', fontWeight: '800', fontSize: '13px' }}>SENAI VILA MARIANA</span>
        </div>
      </nav>

      {/* --- HERO: DESENVOLVEDOR FRONT-END --- */}
      <header style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', 
          borderRadius: '50px', backgroundColor: '#fef2f2', color: '#ef4444', 
          fontSize: '12px', fontWeight: '800', marginBottom: '24px', border: '1px solid #fee2e2'
        }}>
          <Zap size={14} fill="#ef4444" /> DESENVOLVEDOR FRONT-END
        </div>
        
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: '900', marginBottom: '20px', letterSpacing: '-2px', lineHeight: '1.1' }}>
          Interfaces Modernas & <br /> <span style={{ color: '#ef4444' }}>Monitoramento Industrial</span>
        </h1>
        
        <p style={{ maxWidth: '700px', margin: '0 auto 40px', fontSize: '19px', color: '#475569', lineHeight: '1.6' }}>
          Especialista em criar experiências digitais fluidas com **React** e **Next.js**. 
          Focado em conectar o Front-End à realidade da Indústria 4.0 no curso de Conectividade do SENAI.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
           <Tag label="JavaScript ES6+" />
           <Tag label="React.js" />
           <Tag label="Next.js" />
           <Tag label="TypeScript" />
           <Tag label="Tailwind CSS" />
        </div>
      </header>

      {/* --- SEÇÃO DE PROJETOS --- */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '12px', margin: 0 }}>
              <Monitor color="#ef4444" size={32} /> Projetos de Aula
            </h2>
            <p style={{ color: '#64748b', marginTop: '8px' }}>Desenvolvidos sob orientação da Profª Natalia Lima Oliveira</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          
          <ProjectCard 
            title="Dashboard Robótico Real-Time"
            tags={["Next.js", "Robótica", "SSE"]}
            desc="Interface de monitoramento para robôs FANUC, utilizando Server-Sent Events para exibir telemetria industrial em tempo real com foco em performance."
            link="/dashboard" 
          />

          <ProjectCard 
            title="Portal de Conectividade"
            tags={["React", "UI/UX", "Acessibilidade"]}
            desc="Desenvolvimento de componentes acessíveis e responsivos para o portal do laboratório, garantindo usabilidade em diferentes dispositivos industriais."
            link="/cadastro"
          />

        </div>
      </section>

      {/* --- HABILIDADES TÉCNICAS (CURRÍCULO) --- */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 20px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '850' }}>Minha Stack de Front-End</h2>
            <p style={{ color: '#64748b' }}>Tecnologias que domino e aplico nos meus projetos do SENAI</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <SkillGroup 
              title="Desenvolvimento Web" 
              items={["HTML5 Semântico", "CSS3 Avançado / Flexbox", "JavaScript (DOM & APIs)", "React Hooks (useState, useEffect)"]} 
            />
            <SkillGroup 
              title="Frameworks & Ferramentas" 
              items={["Next.js 14 (App Router)", "TypeScript Essentials", "Git & GitHub Workflow", "Vercel Cloud Deploy"]} 
            />
            <SkillGroup 
              title="Especialidade Industrial" 
              items={["Integração com Node-RED", "Consumo de dados JSON", "Dashboards Responsivos", "Interfaces para Automação"]} 
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER FINAL --- */}
      <footer style={{ padding: '80px 20px', textAlign: 'center', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ marginBottom: '20px' }}>
           <Image src="/senai.png" alt="SENAI" width={100} height={30} unoptimized style={{ opacity: 0.5 }} />
        </div>
        <p style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '500' }}>
          © {new Date().getFullYear()} — Gilberto Antônio de Almeida Silvério Júnior <br />
          <span style={{ fontSize: '12px' }}>Curso de Front-End | SENAI Vila Mariana - Unidade Anchieta</span>
        </p>
      </footer>
    </div>
  );
}

// COMPONENTES AUXILIARES
function Tag({ label }: { label: string }) {
  return (
    <span style={{ padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', fontWeight: '600', color: '#475569', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
      {label}
    </span>
  );
}

function ProjectCard({ title, tags, desc, link }: { title: string, tags: string[], desc: string, link: string }) {
  return (
    <div style={{ 
      border: '1px solid #e2e8f0', borderRadius: '24px', padding: '32px', 
      transition: '0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      backgroundColor: '#fff', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04)'
    }}>
      <div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {tags.map(tag => (
            <span key={tag} style={{ fontSize: '10px', fontWeight: '800', color: '#ef4444', backgroundColor: '#fef2f2', padding: '4px 10px', borderRadius: '6px', border: '1px solid #fee2e2' }}>
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}>{title}</h3>
        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>{desc}</p>
      </div>
      <Link href={link} style={{ 
        display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: '700', textDecoration: 'none', fontSize: '14px' 
      }}>
        Explorar Projeto <ChevronRight size={18} />
      </Link>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string, items: string[] }) {
  return (
    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
      <h4 style={{ color: '#0f172a', fontSize: '15px', fontWeight: '800', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <CheckCircle2 size={18} color="#ef4444" /> {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(item => (
          <li key={item} style={{ marginBottom: '10px', fontSize: '14px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}