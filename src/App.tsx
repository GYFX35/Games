import { useState } from 'react';
import {
  Layout,
  Cpu,
  Database,
  Cloud,
  Gamepad2,
  Search,
  User,
  Bot,
  Link as LinkIcon,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Car,
  Landmark,
  Briefcase,
  TrendingUp,
  Smartphone,
  CreditCard,
  Layers,
  ShieldCheck,
  Zap,
  Tablet,
  Monitor,
  Wifi,
  HardDrive,
  Telescope,
  Radio,
  Brain,
  Signal,
  Globe,
  Box,
  Palette
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---

type View = 'hero' | 'saas' | 'itaas' | 'paas' | 'iaas' | 'cloud' | 'web3' | 'games' | 'research' | 'players' | 'guru';

// --- Components ---

const Navbar = ({ activeView, setView }: { activeView: View, setView: (v: View) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'saas', label: 'SaaS', icon: Layout },
    { id: 'itaas', label: 'ITaaS', icon: Cpu },
    { id: 'paas', label: 'PaaS', icon: Database },
    { id: 'iaas', label: 'IaaS', icon: Cloud },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'web3', label: 'Web3', icon: Box },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'research', label: 'Research', icon: Search },
    { id: 'players', label: 'Players', icon: User },
    { id: 'guru', label: 'Guru Tools', icon: Bot },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer flex items-center space-x-2" onClick={() => setView('hero')}>
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">ITsaas Nexus</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id as View)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      activeView === item.id
                        ? "bg-slate-800 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setView(item.id as View); setIsOpen(false); }}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
                  activeView === item.id
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                )}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setView }: { setView: (v: View) => void }) => (
  <div className="bg-slate-900 text-white min-h-[calc(100vh-4rem)] flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <span className="block">The Ultimate Platform for</span>
          <span className="block text-indigo-500">Next-Gen Tech Innovation</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-slate-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Integrating HTML5, React, AI, and Blockchain into a seamless SaaS ecosystem.
          Empowering developers, researchers, and players with Guru-level tools.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <button
              onClick={() => setView('saas')}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started
            </button>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              onClick={() => setView('guru')}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10"
            >
              Guru Tools
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Game Dev", desc: "Advanced HTML5 & WebGL integration", icon: Gamepad2 },
          { title: "Research AI", desc: "Distributed computing for AI models", icon: Bot },
          { title: "Blockchain", desc: "Secure decentralized infrastructure", icon: LinkIcon }
        ].map((feature, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
            <feature.icon className="w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, desc, icon: Icon, tags }: { title: string, desc: string, icon: any, tags: string[] }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
    <div className="bg-indigo-50 p-3 rounded-lg w-fit mb-4">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4 flex-grow">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded uppercase">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Section = ({ title, subtitle, items }: { title: string, subtitle: string, items: any[] }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="mb-12">
      <h2 className="text-3xl font-extrabold text-slate-900">{title}</h2>
      <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <FeatureCard key={i} {...item} />
      ))}
    </div>
  </div>
);

// --- Content Data ---

const saasContent = [
  { title: "Smart CRM", desc: "AI-driven customer relationship management with blockchain-verified transactions.", icon: Layout, tags: ["AI", "Blockchain", "SaaS"] },
  { title: "Project Guru", desc: "Collaborative project management tool for remote tech teams.", icon: Cpu, tags: ["Collaboration", "Agile"] },
  { title: "Secure Vault", desc: "Encrypted storage for sensitive developer assets and credentials.", icon: Cloud, tags: ["Security", "Storage"] }
];

const itaasContent = [
  { title: "Managed AI Nodes", desc: "Ready-to-go GPU instances for training machine learning models.", icon: Bot, tags: ["AI", "GPU", "Managed"] },
  { title: "Cyber Security Ops", desc: "24/7 managed security operations center for your infrastructure.", icon: Search, tags: ["Security", "Compliance"] },
  { title: "Hybrid Cloud Bridge", desc: "Seamless integration between on-premise and public cloud resources.", icon: Cloud, tags: ["Cloud", "Networking"] }
];

const paasContent = [
  { title: "Game Engine SDK", desc: "HTML5 and WebGL optimized engine for browser-based gaming.", icon: Gamepad2, tags: ["Gaming", "HTML5", "SDK"] },
  { title: "Blockchain API", desc: "Easy-to-use hooks for Ethereum, Solana, and Layer 2 integrations.", icon: LinkIcon, tags: ["Web3", "API"] },
  { title: "Real-time Analytics", desc: "Low-latency data processing pipeline for player behavior.", icon: Database, tags: ["Data", "Real-time"] }
];

const iaasContent = [
  { title: "Edge Computing", desc: "Deploy your game servers closer to players for ultra-low latency.", icon: Cloud, tags: ["Infrastructure", "Edge"] },
  { title: "Decentralized Storage", desc: "IPFS-backed storage for immutable game assets and data.", icon: LinkIcon, tags: ["Web3", "Storage"] },
  { title: "Auto-scaling Clusters", desc: "Kubernetes clusters that grow with your user base automatically.", icon: Database, tags: ["K8s", "Scale"] }
];

const cloudContent = [
  { title: "Cloud IDE", desc: "Collaborative development environment in the browser with pre-configured stacks.", icon: Cpu, tags: ["Cloud", "DevTools"] },
  { title: "Serverless Forge", desc: "Deploy functions as a service with instant scaling and pay-per-use billing.", icon: Cloud, tags: ["Serverless", "PaaS"] },
  { title: "DevSecOps Pipeline", desc: "Automated CI/CD with integrated security scanning and compliance checks.", icon: Search, tags: ["DevOps", "Security"] }
];

const web3Content = [
  { title: "Smart Contract Auditor", desc: "AI-powered automated security audits for Solidity and Rust contracts.", icon: ShieldCheck, tags: ["Security", "Web3"] },
  { title: "Multi-Chain Deployer", desc: "One-click deployment to Ethereum, Solana, and Layer 2 networks.", icon: Layers, tags: ["Infrastructure", "Deployment"] },
  { title: "Oracle Bridge", desc: "High-fidelity real-world data feeds for your decentralized applications.", icon: Radio, tags: ["Data", "Oracles"] }
];

const GamesSection = () => (
  <div className="bg-slate-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900">Developer Ecosystem</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">Tools specifically crafted for the creators of tomorrow.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-indigo-900 rounded-3xl p-8 text-white flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">For Game Developers</h3>
            <ul className="space-y-4 text-indigo-100 text-lg">
              <li className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-indigo-400" />
                <span>WebGPU & WebGL2 rendering pipeline</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-indigo-400" />
                <span>Asset pipeline with AI upscaling</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-indigo-400" />
                <span>Multiplayer lobby as a service</span>
              </li>
            </ul>
          </div>
          <Gamepad2 className="absolute -bottom-10 -right-10 w-64 h-64 text-indigo-800 opacity-50" />
        </div>
        <div className="bg-emerald-900 rounded-3xl p-8 text-white flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">For Researchers</h3>
            <ul className="space-y-4 text-emerald-100 text-lg">
              <li className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-emerald-400" />
                <span>Distributed simulation environments</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-emerald-400" />
                <span>Large dataset management (Petabyte scale)</span>
              </li>
              <li className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-emerald-400" />
                <span>Academic collaboration workspaces</span>
              </li>
            </ul>
          </div>
          <Search className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-800 opacity-50" />
        </div>
      </div>
    </div>
  </div>
);

const GuruTools = () => {
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [telecomData, setTelecomData] = useState<any>(null);
  const [astroData, setAstroData] = useState<any>(null);
  const [cyberData, setCyberData] = useState<any>(null);
  const [dataForgeData, setDataForgeData] = useState<any>(null);
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [scienceData, setScienceData] = useState<any>(null);
  const [agentsData, setAgentsData] = useState<any>(null);
  const [modelsData, setModelsData] = useState<any>(null);
  const [design3dData, setDesign3dData] = useState<any>(null);
  const [osData, setOsData] = useState<any>(null);
  const [cardsData, setCardsData] = useState<any>(null);
  const [financeBlockchainData, setFinanceBlockchainData] = useState<any>(null);
  const [web3Data, setWeb3Data] = useState<any>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  const API_BASE_URL = 'http://localhost:5000';

  const performMockAudit = () => {
    setIsAuditing(true);
    setTimeout(() => setIsAuditing(false), 3000);
  };

  const fetchWeb3Ecosystem = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/web3/ecosystem`);
      const data = await response.json();
      setWeb3Data(data);
    } catch (error) {
      console.error('Web3 Ecosystem Error:', error);
    }
  };

  const fetchTelecomStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/telecom/status`);
      const data = await response.json();
      setTelecomData(data);
    } catch (error) {
      console.error('Telecom Status Error:', error);
    }
  };

  const fetchAstroTelemetry = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/astro/telemetry`);
      const data = await response.json();
      setAstroData(data);
    } catch (error) {
      console.error('Astro Telemetry Error:', error);
    }
  };

  const fetchCyberThreatIntel = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cyber/threat-intel`);
      const data = await response.json();
      setCyberData(data);
    } catch (error) {
      console.error('Cyber Threat Intel Error:', error);
    }
  };

  const fetchDataPipelineMetrics = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/data/pipeline-metrics`);
      const data = await response.json();
      setDataForgeData(data);
    } catch (error) {
      console.error('Data Pipeline Metrics Error:', error);
    }
  };

  const fetchAnalyticsRealtime = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/analytics/realtime`);
      const data = await response.json();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Analytics Realtime Error:', error);
    }
  };

  const fetchScienceSimulation = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/science/simulation`);
      const data = await response.json();
      setScienceData(data);
    } catch (error) {
      console.error('Science Simulation Error:', error);
    }
  };

  const fetchAiAgents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/agents`);
      const data = await response.json();
      setAgentsData(data);
    } catch (error) {
      console.error('AI Agents Error:', error);
    }
  };

  const fetchAiModels = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/models`);
      const data = await response.json();
      setModelsData(data);
    } catch (error) {
      console.error('AI Models Error:', error);
    }
  };

  const fetchDesign3dStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/design/3d-nexus`);
      const data = await response.json();
      setDesign3dData(data);
    } catch (error) {
      console.error('Design 3D Status Error:', error);
    }
  };

  const fetchOsStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/os/status`);
      const data = await response.json();
      setOsData(data);
    } catch (error) {
      console.error('OS Status Error:', error);
    }
  };

  const fetchFinanceCards = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/finance/cards`);
      const data = await response.json();
      setCardsData(data);
    } catch (error) {
      console.error('Finance Cards Error:', error);
    }
  };

  const fetchFinanceBlockchain = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/finance/blockchain`);
      const data = await response.json();
      setFinanceBlockchainData(data);
    } catch (error) {
      console.error('Finance Blockchain Error:', error);
    }
  };

  const askGuruAi = async () => {
    if (!aiInput.trim()) return;

    setIsLoading(true);
    setAiResponse('');
    try {
      const response = await fetch(`${API_BASE_URL}/api/ai-strategist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: aiInput }),
      });

      const data = await response.json();
      if (data.response) {
        setAiResponse(data.response);
      } else if (data.error) {
        setAiResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setAiResponse('Error: Could not connect to the AI backend. Make sure the server is running.');
      console.error('AI Strategy Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Guru Innovation Suite</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* AI Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl font-bold">AI Strategist</h3>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2">
            <div className="bg-slate-800/50 p-2 rounded border border-slate-700">
              <span className="text-[10px] text-slate-500 block uppercase">Inference Speed</span>
              <span className="text-xs font-mono text-emerald-400">124 tokens/s</span>
            </div>
            <div className="bg-slate-800/50 p-2 rounded border border-slate-700">
              <span className="text-[10px] text-slate-500 block uppercase">Model</span>
              <span className="text-xs font-mono text-indigo-400">Gemini 1.5 Pro</span>
            </div>
          </div>

          <textarea
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none h-24 mb-4"
            placeholder="Describe your tech stack problem..."
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
          />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-400">API Status: Online</span>
            </div>
            <span className="text-[10px] text-slate-500">v4.0.2-stable</span>
          </div>

          <button
            onClick={askGuruAi}
            disabled={isLoading || !aiInput.trim()}
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Synthesize Strategy'
            )}
          </button>
          {aiResponse && (
            <div className="mt-4 p-3 bg-slate-800 border-l-4 border-indigo-500 text-xs font-mono max-h-32 overflow-y-auto">
              {aiResponse}
            </div>
          )}
        </div>

        {/* Telecom Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2">
            <Signal className="w-4 h-4 text-rose-500 animate-ping opacity-50" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Radio className="w-6 h-6 text-rose-400" />
              <h3 className="text-xl font-bold">Telecom Nexus</h3>
            </div>
            <button
              onClick={fetchTelecomStatus}
              className="p-1 hover:bg-slate-800 rounded transition-colors"
              title="Refresh Status"
            >
              <Zap className="w-4 h-4 text-amber-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Network Load</span>
                <span className="text-xs font-mono text-rose-400">{telecomData?.network_load || '74%'}</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full transition-all duration-500" style={{ width: telecomData?.network_load || '74%' }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">5G Nodes</span>
                <span className="text-sm font-bold">{telecomData?.['5g_nodes']?.toLocaleString() || '14,209'}</span>
              </div>
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">6G Testing</span>
                <span className="text-sm font-bold text-emerald-400">{telecomData?.['6g_status'] || 'Active'}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs px-1">
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 text-rose-400" />
                  <span className="text-slate-300">Global Latency</span>
                </div>
                <span className="font-mono text-white">{telecomData?.global_latency || '24ms'}</span>
              </div>
              <div className="flex items-center justify-between text-xs px-1">
                <div className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span className="text-slate-300">Spectrum Auth</span>
                </div>
                <span className="text-emerald-400">Verified</span>
              </div>
            </div>

            <button className="w-full py-2 bg-rose-600/20 hover:bg-rose-600/30 border border-rose-600/50 rounded-lg text-xs font-semibold text-rose-400 transition-all">
              Manage Cellular Mesh
            </button>
          </div>
        </div>

        {/* Astronomy Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Telescope className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-bold">AstroLink</h3>
            </div>
            <button
              onClick={fetchAstroTelemetry}
              className="p-1 hover:bg-slate-800 rounded transition-colors"
              title="Poll Telemetry"
            >
              <Search className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[10px] text-slate-500 uppercase">
              <span>Deep Space Telemetry</span>
              <span className="text-indigo-400">Receiving...</span>
            </div>

            <div className="space-y-2">
              {[
                { label: 'Orbital Objects', value: astroData?.orbital_objects?.toLocaleString() || '18,492', icon: Globe },
                { label: 'Data Downlink', value: astroData?.data_downlink || '4.2 TB/s', icon: Signal },
                { label: 'Active Arrays', value: astroData?.active_arrays || '128', icon: Radio }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800/40 p-2 rounded border border-slate-700/50">
                  <div className="flex items-center space-x-2">
                    <stat.icon className="w-3 h-3 text-indigo-400" />
                    <span className="text-xs text-slate-300">{stat.label}</span>
                  </div>
                  <span className="text-xs font-mono text-white">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                <span>Constellation Sync</span>
                <span>{astroData?.constellation_sync || '100%'}</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full">
                <div className="bg-indigo-400 h-full rounded-full shadow-[0_0_8px_rgba(129,140,248,0.5)] transition-all duration-1000" style={{ width: astroData?.constellation_sync || '100%' }} />
              </div>
            </div>

            <button className="w-full py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-600/50 rounded-lg text-xs font-semibold text-indigo-400 transition-colors">
              Access Observatories
            </button>
          </div>
        </div>

        {/* Automotive Innovation */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Car className="w-6 h-6 text-red-400" />
            <h3 className="text-xl font-bold">Auto Future</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Autonomous Level</span>
              <span className="text-red-400 font-mono">L5 Prototype</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Energy Efficiency</span>
              <span className="text-white font-mono">98.2%</span>
            </div>
            <div className="mt-4">
              <p className="text-xs text-slate-400 mb-2">Simulating next-gen EV drivetrain performance...</p>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-[75%] animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* IoT Development Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
          <div className="flex items-center space-x-2 mb-6">
            <Wifi className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold">IoT Sentinel</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-3 border border-emerald-900/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Protocol Health</span>
                <span className="text-[10px] text-emerald-400 animate-pulse">MQTT Secure</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                  <div key={i} className="h-1 bg-emerald-500/40 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.3)]" />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                <span className="text-xs text-slate-300">Data Throughput</span>
                <span className="text-xs font-mono text-emerald-400">1.4 GB/s</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                <span className="text-xs text-slate-300">Active Sensors</span>
                <span className="text-xs font-mono text-white">42,891</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                <span className="text-xs text-slate-300">Firmware OTA</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">In Progress</span>
              </div>
            </div>

            <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-bold transition-all shadow-[0_0_15px_rgba(5,150,105,0.2)] hover:shadow-[0_0_20px_rgba(5,150,105,0.4)]">
              Scan Peripheral Mesh
            </button>
          </div>
        </div>

        {/* Mobile & IoT Ecosystem */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Smartphone className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold">Mobile & IoT Hub</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs bg-slate-800 p-2 rounded border border-cyan-900/30">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-slate-300 font-medium">OS Sync Active</span>
              </div>
              <span className="text-cyan-400">v19.4.2</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800/50 p-2 rounded border border-slate-700">
                <div className="flex items-center space-x-1 mb-1">
                  <Smartphone className="w-3 h-3 text-indigo-400" />
                  <span className="text-[10px] text-slate-500">iOS</span>
                </div>
                <div className="text-xs font-mono text-white">42% Traffic</div>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-700">
                <div className="flex items-center space-x-1 mb-1">
                  <Smartphone className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-slate-500">Android</span>
                </div>
                <div className="text-xs font-mono text-white">58% Traffic</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded group hover:bg-slate-800 transition-colors">
                <div className="flex items-center space-x-2">
                  <Wifi className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs">IoT Mesh Nodes</span>
                </div>
                <span className="text-xs font-mono text-white">12,402</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <div className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span className="text-xs">Edge Latency</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">0.8ms</span>
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full py-2 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-600/50 rounded-lg text-xs font-semibold text-cyan-400 transition-all flex items-center justify-center space-x-2">
                <span>Fleet Management</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Blockchain Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <LinkIcon className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold">Chain Explorer</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Network</span>
              <span className="text-emerald-400 font-mono">Mainnet-v2</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Gas Price</span>
              <span className="text-white font-mono">12 Gwei</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Block Height</span>
              <span className="text-white font-mono">18,234,091</span>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-400">Syncing live blockchain data</span>
            </div>
          </div>
        </div>

        {/* Cloud Console Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Cloud className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold">Cloud Console</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-xs text-slate-400">
                <span>CPU Usage</span>
                <span>42%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[42%]" />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Memory</span>
                <span>8.2 / 16 GB</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[51%]" />
              </div>
            </div>
            <div className="pt-2">
              <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-colors">
                <span>Deploy New Instance</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>us-east-1 | active</span>
            </div>
          </div>
        </div>

        {/* Payments Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-bold">PayNexus</h3>
            </div>
            <button onClick={fetchFinanceCards} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-orange-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Virtual Cards Dev</span>
                <span className="text-xs font-mono text-orange-400">{cardsData?.active_virtual_cards?.toLocaleString() || '84,291'} Active</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full transition-all duration-500" style={{ width: '85%' }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Issuance Latency</span>
                <span className="text-sm font-bold text-white">{cardsData?.issuance_latency || '240ms'}</span>
              </div>
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Fraud Prevention</span>
                <span className="text-sm font-bold text-emerald-400">{cardsData?.fraud_prevention_rate || '99.99%'}</span>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-800/30 flex items-center justify-between">
              <span className="text-xs text-slate-300">Compliance Standard</span>
              <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded uppercase">{cardsData?.security_standard || 'PCI-DSS v4.0'}</span>
            </div>

            <button className="w-full py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-xs font-semibold transition-colors">
              Configure Payment Rails
            </button>
          </div>
        </div>


        {/* Finance Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Landmark className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold">FinTech Engine</h3>
            </div>
            <button onClick={fetchFinanceBlockchain} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">$1.2M</span>
              <span className="text-xs text-emerald-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider">
                <span>Blockchain Ledger</span>
                <span className="text-emerald-400 font-mono">{financeBlockchainData?.settlement_speed ? 'Optimized' : 'Synchronized'}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Settlement Speed</span>
                <span className="text-xs font-mono text-emerald-400">{financeBlockchainData?.settlement_speed || '1.2s'}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Active Smart Contracts</span>
                <span className="text-xs font-mono text-white">{financeBlockchainData?.smart_contracts_active?.toLocaleString() || '1,420'}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">TPS Capacity</span>
                <span className="text-xs font-mono text-white">{financeBlockchainData?.tps_capacity?.toLocaleString() || '65,000'}</span>
              </div>
            </div>
            <div className="pt-2">
              <button className="w-full py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-600/50 rounded-lg text-xs font-semibold text-emerald-400 transition-colors">
                Launch Digital Banking API
              </button>
            </div>
          </div>
        </div>


        {/* Product Development Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Layers className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl font-bold">Product Forge</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider">
                <span>Release Velocity</span>
                <span className="text-indigo-400">High</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[88%]" />
              </div>
            </div>
            <div className="space-y-2">
              {[
                { stage: "Ideation", status: "Completed", color: "bg-emerald-500" },
                { stage: "Prototyping", status: "Active", color: "bg-indigo-500" },
                { stage: "Beta Testing", status: "Scheduled", color: "bg-slate-600" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                  <span className="text-xs">{item.stage}</span>
                  <div className="flex items-center space-x-1.5">
                    <div className={cn("h-1.5 w-1.5 rounded-full", item.color)} />
                    <span className="text-[10px] text-slate-400">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xs font-semibold transition-colors">
              New Product Sprint
            </button>
          </div>
        </div>

        {/* Computer Products Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Monitor className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold">Device Matrix</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 uppercase tracking-wider">Lab Testing Status</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">Active</span>
            </div>

            <div className="space-y-3">
              {[
                { name: "Workstation Z1", icon: Monitor, status: "Staging", color: "text-blue-400" },
                { name: "Nexus Tablet", icon: Tablet, status: "Live", color: "text-emerald-400" },
                { name: "Core Server", icon: HardDrive, status: "Uptime 99.9%", color: "text-purple-400" }
              ].map((device, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-800/30 p-2 rounded border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <device.icon className={cn("w-4 h-4", device.color)} />
                    <span className="text-xs font-medium">{device.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{device.status}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="flex justify-between text-[10px] text-slate-500 mb-1 px-1">
                <span>Hardware Optimization</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-full w-[92%] rounded-full shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Business Development */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold">BizDev Portal</h3>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-slate-400 mb-2">Active Strategic Pipelines</div>
            {['Global Expansion', 'M&A Analytics', 'B2B Integration'].map((deal) => (
              <div key={deal} className="flex items-center space-x-3 bg-slate-800 p-2 rounded border border-slate-700/50">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <span className="text-xs">{deal}</span>
                <ChevronRight className="w-3 h-3 ml-auto text-slate-600" />
              </div>
            ))}
            <button className="mt-2 w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-xs font-semibold transition-colors">
              New Partnership Request
            </button>
          </div>
        </div>


        {/* E-commerce Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <ShoppingBag className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold">SaaS Marketplace</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: "Premium Nodes", price: "0.5 ETH" },
              { name: "AI API Credits", price: "$49.99" },
              { name: "L2 Gas Pass", price: "Free" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                <span className="text-sm">{item.name}</span>
                <button className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors text-amber-400 border border-amber-400/20">
                  {item.price}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cybersecurity Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold">Cyber Guard</h3>
            </div>
            <button onClick={fetchCyberThreatIntel} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-red-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Security Score</span>
                <span className="text-xs font-mono text-emerald-400">{cyberData?.security_score || '94'}%</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: `${cyberData?.security_score || '94'}%` }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Active Threats</span>
                <span className="text-sm font-bold text-red-400">{cyberData?.active_threats?.toLocaleString() || '12'}</span>
              </div>
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Threat Level</span>
                <span className="text-sm font-bold text-amber-400">{cyberData?.threat_level || 'Elevated'}</span>
              </div>
            </div>
            <button className="w-full py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600/50 rounded-lg text-xs font-semibold text-red-400 transition-all">
              Initialize System Lockdown
            </button>
          </div>
        </div>

        {/* Data Engineering Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Database className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold">Data Forge</h3>
            </div>
            <button onClick={fetchDataPipelineMetrics} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Throughput</span>
              <span className="text-cyan-400 font-mono">{dataForgeData?.throughput || '1.8 PB/day'}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Data Quality</span>
              <span className="text-emerald-400 font-mono">{dataForgeData?.data_quality || '99.9%'}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Active Pipelines</span>
              <span className="text-white font-mono">{dataForgeData?.active_pipelines || '42'}</span>
            </div>
            <button className="w-full py-2 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-600/50 rounded-lg text-xs font-semibold text-cyan-400 transition-colors">
              Optimize ETL Flow
            </button>
          </div>
        </div>

        {/* Analytics Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-bold">Analytics Pulse</h3>
            </div>
            <button onClick={fetchAnalyticsRealtime} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold">{analyticsData?.active_sessions?.toLocaleString() || '8,429'}</span>
              <span className="text-xs text-slate-400 uppercase">Live Sessions</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider">
                <span>User Engagement</span>
                <span className="text-indigo-400 font-mono">{analyticsData?.user_engagement || 'High'}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Conversion Rate</span>
                <span className="text-xs font-mono text-emerald-400">{analyticsData?.conversion_rate || '3.4%'}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Peak Load</span>
                <span className="text-xs font-mono text-white">{analyticsData?.peak_load || '88%'}</span>
              </div>
            </div>
            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xs font-semibold transition-colors">
              Generate BI Report
            </button>
          </div>
        </div>

        {/* Science Lab Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold">Science Lab</h3>
            </div>
            <button onClick={fetchScienceSimulation} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/50 p-3 rounded-lg border border-emerald-900/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Simulation Progress</span>
                <span className="text-[10px] text-emerald-400">{scienceData?.simulation_progress || '62%'}</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full transition-all duration-1000" style={{ width: scienceData?.simulation_progress || '62%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                <span className="text-xs text-slate-300">Compute Resources</span>
                <span className="text-xs font-mono text-emerald-400">{scienceData?.compute_resources || '84%'}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                <span className="text-xs text-slate-300">Nodes Active</span>
                <span className="text-xs font-mono text-white">{scienceData?.nodes_active?.toLocaleString() || '1,024'}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                <span className="text-xs text-slate-300">Est. Completion</span>
                <span className="text-xs font-mono text-indigo-400">{scienceData?.estimated_completion || '4h 12m'}</span>
              </div>
            </div>
            <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-bold transition-all">
              Launch Quantum Simulation
            </button>
          </div>
        </div>

        {/* AI Agent Nexus */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-bold">AI Agent Nexus</h3>
            </div>
            <button onClick={fetchAiAgents} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Swarm Cohesion</span>
                <span className="text-xs font-mono text-indigo-400">{agentsData?.swarm_cohesion || '98.2%'}</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: agentsData?.swarm_cohesion || '98.2%' }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Active Agents</span>
                <span className="text-sm font-bold text-white">{agentsData?.active_agents?.toLocaleString() || '12,540'}</span>
              </div>
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Global Reach</span>
                <span className="text-sm font-bold text-emerald-400">{agentsData?.global_reach || '142 countries'}</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-800/30 flex items-center justify-between">
              <span className="text-xs text-slate-300">Autonomous Tasks</span>
              <span className="text-xs font-mono text-white">{agentsData?.autonomous_tasks?.toLocaleString() || '84,291'}</span>
            </div>
            <button className="w-full py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-600/50 rounded-lg text-xs font-semibold text-indigo-400 transition-all">
              Deploy Agent Swarm
            </button>
          </div>
        </div>

        {/* Model Dev Forge */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Layers className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold">Model Dev Forge</h3>
            </div>
            <button onClick={fetchAiModels} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Avg. Accuracy</span>
              <span className="text-emerald-400 font-mono">{modelsData?.avg_accuracy || '94.8%'}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Total Parameters</span>
              <span className="text-white font-mono">{modelsData?.total_parameters || '1.2 Trillion'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Training Jobs</span>
                <span className="text-sm font-bold text-white">{modelsData?.training_jobs || '42'}</span>
              </div>
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Deployment</span>
                <span className="text-sm font-bold text-emerald-400">{modelsData?.deployment_status || 'Stable'}</span>
              </div>
            </div>
            <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Initiate Model Training
            </button>
          </div>
        </div>

        {/* Design & 3D Nexus */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Box className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-bold">Design & 3D Nexus</h3>
            </div>
            <button onClick={fetchDesign3dStatus} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">AR/VR Compatibility</span>
                <span className="text-xs font-mono text-indigo-400">{design3dData?.ar_vr_compatibility || '99.2%'}</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: design3dData?.ar_vr_compatibility || '99.2%' }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Active Renders</span>
                <span className="text-sm font-bold text-white">{design3dData?.active_renders || '154'}</span>
              </div>
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">FR Ecosystem</span>
                <span className="text-sm font-bold text-emerald-400">{design3dData?.fr_ecosystem_status || 'Scaling'}</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-800/30 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Palette className="w-3 h-3 text-indigo-400" />
                <span className="text-xs text-slate-300">Mesh Optimization</span>
              </div>
              <span className="text-xs font-mono text-white">{design3dData?.mesh_optimization || 'Adaptive'}</span>
            </div>
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] text-slate-500">Realtime Sync</span>
              <span className="text-[10px] font-mono text-emerald-400">{design3dData?.realtime_sync || '0.4ms'}</span>
            </div>
            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-xs font-bold transition-all shadow-[0_0_15px_rgba(79,70,229,0.2)]">
              Enhance Ecosystem
            </button>
          </div>
        </div>

        {/* OS SuperHub */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Layers className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold">OS SuperHub</h3>
            </div>
            <button onClick={fetchOsStatus} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-blue-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              {[
                { name: 'Windows', instances: osData?.windows?.instances || 452, cpu: osData?.windows?.avg_cpu || '32%', color: 'text-blue-400' },
                { name: 'macOS', instances: osData?.macos?.instances || 128, cpu: osData?.macos?.avg_cpu || '18%', color: 'text-indigo-400' },
                { name: 'Linux', instances: osData?.linux?.instances || 1024, cpu: osData?.linux?.avg_cpu || '45%', color: 'text-orange-400' }
              ].map((os) => (
                <div key={os.name} className="flex items-center justify-between bg-slate-800/40 p-2 rounded border border-slate-700/50">
                  <div className="flex items-center space-x-2">
                    <span className={cn("text-xs font-bold", os.color)}>{os.name}</span>
                    <span className="text-[10px] text-slate-500">{os.instances.toLocaleString()} nodes</span>
                  </div>
                  <span className="text-xs font-mono text-white">{os.cpu} CPU</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Global Sync</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">{osData?.global_sync || 'Active'}</span>
            </div>
            <button className="w-full py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/50 rounded-lg text-xs font-semibold text-blue-400 transition-all">
              Initialize OS Clusters
            </button>
          </div>
        </div>

        {/* Web3 Ecosystem Forge */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Box className="w-6 h-6 text-fuchsia-400" />
              <h3 className="text-xl font-bold">Web3 Forge</h3>
            </div>
            <button onClick={fetchWeb3Ecosystem} className="p-1 hover:bg-slate-800 rounded transition-colors">
              <Zap className="w-4 h-4 text-fuchsia-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Network Health</span>
                <span className="text-xs font-mono text-fuchsia-400">{web3Data?.network_health || '99.9%'}</span>
              </div>
              <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                <div className="bg-fuchsia-500 h-full transition-all duration-500" style={{ width: web3Data?.network_health || '99.9%' }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">Gas Price</span>
                <span className="text-sm font-bold text-white">{web3Data?.gas_price_gwei || '14.2'} Gwei</span>
              </div>
              <div className="flex flex-col bg-slate-800/30 p-2 rounded">
                <span className="text-[10px] text-slate-500">IPFS Nodes</span>
                <span className="text-sm font-bold text-emerald-400">{web3Data?.ipfs_nodes?.toLocaleString() || '8,420'}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Active Wallets</span>
                <span className="text-xs font-mono text-fuchsia-400">{web3Data?.active_wallets?.toLocaleString() || '842,910'}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Deployed Contracts</span>
                <span className="text-xs font-mono text-white">{web3Data?.deployed_contracts?.toLocaleString() || '12,409'}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Cross-Chain Bridges</span>
                <span className="text-xs font-mono text-white">{web3Data?.cross_chain_bridges || '12'}</span>
              </div>
            </div>

            <button
              onClick={performMockAudit}
              disabled={isAuditing}
              className="w-full py-2 bg-fuchsia-600/20 hover:bg-fuchsia-600/30 border border-fuchsia-600/50 rounded-lg text-xs font-semibold text-fuchsia-400 transition-all flex items-center justify-center space-x-2"
            >
              {isAuditing ? (
                <>
                  <div className="h-3 w-3 border-2 border-fuchsia-400/30 border-t-fuchsia-400 rounded-full animate-spin" />
                  <span>Scanning...</span>
                </>
              ) : (
                <span>Launch Smart Contract Auditor</span>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('hero');

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeView={view} setView={setView} />

      <main>
        {view === 'hero' && <Hero setView={setView} />}

        {view === 'saas' && (
          <Section
            title="Software as a Service"
            subtitle="Cloud-based applications for modern enterprises."
            items={saasContent}
          />
        )}

        {view === 'itaas' && (
          <Section
            title="IT as a Service"
            subtitle="Full-spectrum IT management and support delivered as a subscription."
            items={itaasContent}
          />
        )}

        {view === 'paas' && (
          <Section
            title="Platform as a Service"
            subtitle="Build, deploy, and scale your applications faster."
            items={paasContent}
          />
        )}

        {view === 'iaas' && (
          <Section
            title="Infrastructure as a Service"
            subtitle="On-demand access to cloud-based computing resources."
            items={iaasContent}
          />
        )}

        {view === 'cloud' && (
          <Section
            title="Cloud Computing & Dev Tools"
            subtitle="Next-generation cloud infrastructure and development environments."
            items={cloudContent}
          />
        )}

        {view === 'web3' && (
          <Section
            title="Web3 Ecosystem Development"
            subtitle="Advanced tools for decentralized applications and blockchain infrastructure."
            items={web3Content}
          />
        )}

        {(view === 'games' || view === 'research') && <GamesSection />}

        {view === 'players' && (
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold">Player Portal</h2>
            <p className="mt-4 text-slate-600">Coming soon: Decentralized gaming identity and cross-platform achievements.</p>
            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
                    <User className="w-12 h-12 text-slate-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {view === 'guru' && <GuruTools />}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cpu className="w-5 h-5 text-indigo-500" />
            <span className="text-white font-bold tracking-tight">ITsaas Nexus</span>
          </div>
          <p className="text-sm">© 2025 ITsaas Nexus. Integrated AI & Blockchain Solutions for Global Innovation.</p>
        </div>
      </footer>
    </div>
  );
}
