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
  Globe,
  Smartphone,
  CreditCard,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---

type View = 'hero' | 'saas' | 'itaas' | 'paas' | 'iaas' | 'cloud' | 'games' | 'research' | 'players' | 'guru';

// --- Components ---

const Navbar = ({ activeView, setView }: { activeView: View, setView: (v: View) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'saas', label: 'SaaS', icon: Layout },
    { id: 'itaas', label: 'ITaaS', icon: Cpu },
    { id: 'paas', label: 'PaaS', icon: Database },
    { id: 'iaas', label: 'IaaS', icon: Cloud },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
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

  const askGuruAi = async () => {
    if (!aiInput.trim()) return;

    setIsLoading(true);
    setAiResponse('');
    try {
      const response = await fetch('http://localhost:5000/api/ai-strategist', {
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

        {/* Computer Science & Digital Ecosystem */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Smartphone className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold">Ecosystem Hub</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs bg-slate-800 p-2 rounded">
              <Globe className="w-3 h-3 text-cyan-400" />
              <span className="text-slate-300">5G Network Mesh active</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800 p-2 rounded text-center">
                <div className="text-xs text-slate-500">Subscribers</div>
                <div className="text-sm font-mono text-cyan-400">1.2M</div>
              </div>
              <div className="bg-slate-800 p-2 rounded text-center">
                <div className="text-xs text-slate-500">Coverage</div>
                <div className="text-sm font-mono text-cyan-400">98.4%</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">IoT Edge Nodes</span>
                <span className="text-xs font-mono text-white">12,402</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Network Latency</span>
                <span className="text-xs font-mono text-cyan-400">0.8ms</span>
              </div>
            </div>
            <button className="w-full py-2 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-600/50 rounded-lg text-xs font-semibold text-cyan-400 transition-colors">
              Operator Dashboard
            </button>
          </div>
        </div>

        {/* Finance Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Landmark className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold">FinTech Engine</h3>
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
                <span>Core Banking Status</span>
                <span className="text-emerald-400 font-mono">Synchronized</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Transaction Vol.</span>
                <span className="text-xs font-mono text-white">4.2k / sec</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">KYC/AML Compliance</span>
                <span className="text-xs font-mono text-emerald-400">99.9%</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <span className="text-xs">Yield Aggregator</span>
                <span className="text-xs font-mono text-white">420.5 ETH</span>
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

        {/* AI Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <Bot className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl font-bold">AI Strategist</h3>
          </div>
          <textarea
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none h-32"
            placeholder="Describe your tech stack problem..."
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
          />
          <button
            onClick={askGuruAi}
            disabled={isLoading || !aiInput.trim()}
            className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Ask Guru AI'
            )}
          </button>
          {aiResponse && (
            <div className="mt-4 p-3 bg-slate-800 border-l-4 border-indigo-500 text-xs font-mono">
              {aiResponse}
            </div>
          )}
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

        {/* Payments Tool */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-700">
          <div className="flex items-center space-x-2 mb-6">
            <CreditCard className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-bold">PayNexus</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Gateway Status</span>
              <span className="text-orange-400 font-mono">All Systems Nominal</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400">Success Rate</span>
              <span className="text-white font-mono">99.98%</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <div className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-orange-400" />
                  <span className="text-xs">Instant Payouts</span>
                </div>
                <span className="text-[10px] bg-orange-400/20 text-orange-400 px-1.5 py-0.5 rounded">Active</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3 h-3 text-orange-400" />
                  <span className="text-xs">Fraud Detection</span>
                </div>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">AI Monitoring</span>
              </div>
            </div>
            <button className="w-full py-2 mt-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-xs font-semibold transition-colors">
              Configure Payment Rails
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
