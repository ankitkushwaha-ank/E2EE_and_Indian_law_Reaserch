import React, { useState, useEffect } from 'react';
import { 
  Shield, Server, Scale, Network, Smartphone, 
  Database, Lock, Eye, AlertTriangle, Info,
  ChevronDown, Zap, FileText, Clock, ArrowRight,
  WifiOff, Globe, Radio, Code, CheckCircle2, BookOpen,
  Terminal, Activity, ShieldAlert, Key, Unlock, FileLock2, Play,
  Router, RadioTower, Cpu, Bug
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AbstractSection />
      <ArchitectureSection />
      <EncryptionVisualizerSection />
      <MetadataSection />
      <LegalSection />
      <FirewallSimulatorSection />
      <BypassSection />
      <ChecklistSection />
      <Footer />
    </div>
  );
}

// --- COMPONENTS ---

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Shield className="text-cyan-500" size={24} />
          <span className="font-bold text-white tracking-wide">BLΔCK OS <span className="text-cyan-500">Security</span></span>
        </div>
        <div className="hidden lg:flex gap-6 text-sm font-medium text-slate-400">
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
          <a href="#encryption" className="hover:text-cyan-400 transition-colors">Encryption Sim</a>
          <a href="#metadata" className="hover:text-cyan-400 transition-colors">Metadata</a>
          <a href="#legal" className="hover:text-cyan-400 transition-colors">IT Act</a>
          <a href="#firewall" className="hover:text-cyan-400 transition-colors">Firewall Sim</a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 pt-20 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>

      <div className="z-10 max-w-5xl mx-auto flex flex-col items-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Database size={16} className="text-cyan-400" />
          <span className="text-sm font-medium text-slate-200">Advanced Systems Design & Legal Jurisprudence Review</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          AN ARCHITECTURAL ANALYSIS & <br/>
          LEGAL EVALUATION OF <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            DIGITAL MESSAGING ECOSYSTEMS
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
          & State-Enforced Infrastructure Restrictions in India
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-700 backdrop-blur-md shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            AK
          </div>
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-xl mb-1">Ankit Kumar</p>
            <p className="text-sm text-cyan-400 font-medium">Author & Principal Systems Architect</p>
            <p className="text-sm text-slate-400 mt-1">Computer Science and Data Analytics, IIT Patna</p>
            <p className="text-xs text-slate-500 mt-2 font-mono">Date: June 23, 2026</p>
          </div>
        </div>

        <div className="mt-16 animate-bounce text-slate-500">
          <ChevronDown size={32} />
        </div>
      </div>
    </header>
  );
}

function AbstractSection() {
  return (
    <section className="py-20 px-6 bg-slate-900/50 relative border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px bg-slate-700 flex-1"></div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 uppercase tracking-widest">
            <BookOpen className="text-cyan-400"/> Abstract
          </h2>
          <div className="h-px bg-slate-700 flex-1"></div>
        </div>
        <p className="text-lg md:text-xl text-slate-300 leading-loose text-justify font-serif">
          This academic paper explores the operational intersections between edge-device cryptographic architectures, multi-tier transport routing pipelines, and sovereign data regulatory actions within the Republic of India. Using recent structural shifts—specifically, the emergency platform interventions executed under Section 69A of the Information Technology (IT) Act, 2000 during the June 2026 NEET-UG competitive examination crisis—this document provides a strict, step-by-step evaluation of end-to-end encryption (E2EE) models against centralized cloud architectures. It maps out the network engineering protocols applied during carrier-level platform blockages and investigates the technical validity of decentralized, off-grid communication mechanisms.
        </p>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const platforms = [
    { name: 'WhatsApp', icon: <Lock className="text-emerald-400"/>, proto: 'Signal Protocol (Custom)', e2ee: 'End-to-End (E2EE)', server: 'Absolute Zero (Blinded Router)', data: 'Volatile (Purged post-delivery)', sync: 'Independent Ephemeral Ratchets', edit: '15 Mins / Edge Overwrite Only' },
    { name: 'Instagram DMs', icon: <Eye className="text-red-400"/>, proto: 'TLS 1.3 Transport Layer Only', e2ee: 'Client-to-Server Only', server: 'Plaintext View at Edge Gateway', data: 'Persistent Encrypted Database', sync: 'Centralized Index Matching', edit: '15 Mins / Server Audit Trail' },
    { name: 'Telegram (Chats)', icon: <Server className="text-purple-400"/>, proto: 'MTProto 2.0 (C2S Mode)', e2ee: 'Client-to-Server Only', server: 'Plaintext View at Edge Terminus', data: 'Geographically Sharded Cloud DB', sync: 'Server-Side State Replication', edit: '48 Hours / Server Array Log' },
    { name: 'Telegram (Secret)', icon: <Shield className="text-emerald-400"/>, proto: 'MTProto 2.0 (End-to-End)', e2ee: 'End-to-End (E2EE)', server: 'Absolute Zero (Blinded Router)', data: 'Volatile (Device-Bound Only)', sync: 'Null (Locked to Single Device)', edit: 'Null (Feature Disabled)' },
  ];

  return (
    <section id="architecture" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">1. Comprehensive Architectural Comparison</h2>
        <p className="text-xl text-cyan-400 mb-12">Modern instant messaging systems are structurally engineered around a defining trade-off: absolute zero-knowledge privacy at the device edge or flexible server-side multi-device state synchronization.</p>

        {/* Matrix */}
        <h3 className="text-2xl font-bold text-white mb-6">A. Core Communication Pipeline Matrix</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-2xl mb-20 bg-slate-900/50">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="p-4 font-bold">Platform</th>
                <th className="p-4 font-bold">Cryptographic Protocol</th>
                <th className="p-4 font-bold">Default Encryption State</th>
                <th className="p-4 font-bold">Server Payload Visibility</th>
                <th className="p-4 font-bold">Data-at-Rest Protocol</th>
                <th className="p-4 font-bold">Multi-Device State Sync</th>
                <th className="p-4 font-bold">Edit Window & History</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {platforms.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/80 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center gap-3">{row.icon} {row.name}</td>
                  <td className="p-4 text-slate-300 font-mono text-xs">{row.proto}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.e2ee.includes('E2EE') ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>{row.e2ee}</span>
                  </td>
                  <td className="p-4 text-slate-300">{row.server}</td>
                  <td className="p-4 text-slate-300">{row.data}</td>
                  <td className="p-4 text-slate-300">{row.sync}</td>
                  <td className="p-4 text-slate-300">{row.edit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Signal Protocol */}
        <h3 className="text-2xl font-bold text-white mb-6">B. Asymmetric Cryptography & Key Management (The Signal Protocol)</h3>
        <p className="text-slate-300 mb-8 text-lg leading-relaxed">WhatsApp’s architecture relies on the Signal Protocol, a dual-phase cryptographic system designed to secure sessions asynchronously.</p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl hover:border-cyan-500/50 transition-colors">
            <h4 className="text-xl font-bold text-cyan-400 mb-4 border-b border-slate-800 pb-4">Phase 1: Session Initialization via X3DH</h4>
            <p className="text-slate-300 mb-6 text-justify">To allow users to exchange keys securely even if one node is entirely offline, the Signal Protocol deploys Extended Triple Diffie-Hellman (X3DH) utilizing an untrusted intermediate server hosting pre-published public keys:</p>
            <ul className="space-y-3 text-slate-300 mb-6 font-mono text-sm bg-slate-950 p-6 rounded-xl border border-slate-800">
              <li><span className="text-blue-400">Identity Key ($IK_B$):</span> Long-term hardware-bound key.</li>
              <li><span className="text-blue-400">Signed Prekey ($SPK_B$):</span> Medium-term key rotated periodically and cryptographically signed by $IK_B$.</li>
              <li><span className="text-blue-400">One-Time Prekeys ($OPK_B$):</span> A pool of single-use ephemeral keys.</li>
            </ul>
            <p className="text-slate-300 mb-4">Upon session initialization, the initiating node generates its own temporary Ephemeral Key ($EK_A$) and calculates a master Shared Key ($SK$) using four parallel Diffie-Hellman functions:</p>
            <div className="bg-slate-950 p-6 rounded-xl font-mono text-emerald-400 border border-slate-800 space-y-2 text-sm shadow-inner mb-6">
              <p>$$DH_1 = DH(IK_A, SPK_B)$$</p>
              <p>$$DH_2 = DH(EK_A, IK_B)$$</p>
              <p>$$DH_3 = DH(EK_A, SPK_B)$$</p>
              <p>$$DH_4 = DH(EK_A, OPK_B)$$</p>
              <div className="h-px bg-slate-800 my-4"></div>
              <p className="text-cyan-300 font-bold">$$SK = KDF(DH_1 || DH_2 || DH_3 || DH_4)$$</p>
            </div>
            <div className="p-4 bg-cyan-950/30 border border-cyan-800/50 rounded-lg">
              <p className="text-sm text-cyan-200"><strong>💡 Simple Explanation:</strong> X3DH acts like a secure digital locker at a post office. It allows your friend to leave a locked message for you even if your phone is turned off or has no internet. When you come online, you use your unique private key to open the locker.</p>
            </div>
          </div>
          
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl hover:border-blue-500/50 transition-colors">
            <h4 className="text-xl font-bold text-blue-400 mb-4 border-b border-slate-800 pb-4">Phase 2: The Double Ratchet System</h4>
            <p className="text-slate-300 mb-6 text-justify">Once $SK$ is established, payload encryption keys advance sequentially using a two-tier architectural loop:</p>
            <div className="space-y-6 mb-6">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
                <h5 className="font-bold text-emerald-400 text-lg mb-2">Symmetric KDF Chain (Forward Secrecy)</h5>
                <p className="text-sm text-slate-300 text-justify leading-relaxed">Every single message sent or received steps a one-way cryptographic hashing chain forward. The chain key splits into a child chain key and a temporary Message Key (used to execute symmetric AES-256-GCM encryption). Because hash functions are mathematically non-invertible, an attacker compromising the current chain key cannot trace the math backward to expose past chats.</p>
              </div>
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-purple-500"></div>
                <h5 className="font-bold text-purple-400 text-lg mb-2">Asymmetric DH Ratchet (Future/Break-in Recovery)</h5>
                <p className="text-sm text-slate-300 text-justify leading-relaxed">When a user receives a reply, the message header includes a new public key. The receiving client automatically triggers a fresh Diffie-Hellman calculation, blending it into the root chain. This injects fresh, unpredictable entropy into the system. If an adversary compromises a device's current memory state, they are locked out of the future communication stream the moment the ratchet steps forward.</p>
              </div>
            </div>
            <div className="p-4 bg-blue-950/30 border border-blue-800/50 rounded-lg">
              <p className="text-sm text-blue-200"><strong>💡 Simple Explanation:</strong> The Double Ratchet algorithm changes your encryption password after <em>every single word</em> you send. If a hacker steals your phone's password today, they cannot read the messages you sent yesterday, and they can't read the messages you'll send tomorrow.</p>
            </div>
          </div>
        </div>

        {/* Structural Shift & Data At Rest */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">C. Meta’s May 2026 Structural Shift</h3>
            <div className="bg-gradient-to-br from-red-950/40 to-slate-900 border border-red-900/50 p-8 rounded-3xl relative">
              <AlertTriangle className="absolute top-6 right-6 text-red-500/20" size={64}/>
              <h4 className="text-lg font-bold text-red-400 mb-4">The De-preservation of E2EE on Instagram DMs</h4>
              <p className="text-slate-300 mb-6 text-justify">On May 8, 2026, Meta permanently discontinued support for optional end-to-end encryption within Instagram Direct Messages. This architectural rollback highlights the friction between zero-knowledge privacy and multi-platform business constraints:</p>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-red-400 shrink-0 mt-1" size={16}/> <span><strong>Product Utilization Dynamics:</strong> Meta cited low mainstream user adoption, as the hidden, manual per-chat opt-in mechanism failed to capture significant volume compared to the integrated cloud experience.</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-red-400 shrink-0 mt-1" size={16}/> <span><strong>The Legal Compliance Driver (The Take It Down Act):</strong> Following the enactment of the Take It Down Act, platforms are legally mandated to detect, scan, and remove non-consensual intimate imagery and deepfakes within 48 hours of notification. Because E2EE makes server-side automated content matching mathematically impossible, Meta dismantled the cryptographic layer on Instagram to enable its automated AI safety engines to scan raw DM text and media payloads at the server boundary.</span></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">D. Data-at-Rest & The Multi-Edit Problem</h3>
            <p className="text-slate-400 mb-6">When data states change through user modifications, the backend database mutation strategies diverge fundamentally:</p>
            
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2"><Lock size={18}/> WhatsApp Local Edge Storage</h4>
                <p className="text-sm text-slate-300 mb-4 text-justify">The server maintains no persistent database rows for delivered payloads. When a message text is edited, the local database on the sender's device (encrypted using SQLCipher) applies an UPDATE command. The phone then generates a cryptographic control packet containing the new text payload and routes it blindly to the recipient. The recipient's edge device catches the packet, verifies the original message ID inside its local database schema, and rewrites the record:</p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <pre className="text-xs text-blue-300 font-mono whitespace-pre-wrap">
{`-- Conceptual SQLite Local Client Schema
CREATE TABLE messages (
    message_id TEXT PRIMARY KEY,
    conversation_id TEXT,
    payload_blob BLOB,       -- Encrypted via AES-256-GCM
    edit_count INTEGER DEFAULT 0,
    timestamp_utc INTEGER
);`}
                  </pre>
                  <p className="text-xs text-red-400 mt-2 font-bold italic">Past intermediate states are entirely destroyed on disk.</p>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2"><Database size={18}/> Telegram Centralized Cloud Storage</h4>
                <p className="text-sm text-slate-300 mb-4 text-justify">Standard chats rely on a distributed cloud document store. When a user edits a message, the client app calls the remote API method <code>messages.editMessage</code>. The master cloud server terminates the request, scans the payload via safety utilities, and rewrites the targeted row. Crucially, to prevent state fragmentation across desktop and mobile synchronization pools, the server does not discard the historical text versions. Instead, it appends them to an internal history array linked to that row:</p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <pre className="text-xs text-purple-300 font-mono whitespace-pre-wrap">
{`{
  "message_id": "554321",
  "chat_id": "998877",
  "current_text": "Final updated content block.",
  "edit_counter": 5,
  "timestamp_history": [1782130000, 1782130100, 1782130200],
  "historical_payloads": [
    "Original raw message text.",
    "First edited variation.",
    "Second edited text iteration."
  ]
}`}
                  </pre>
                  <p className="text-xs text-emerald-400 mt-2 italic">If a user edits a post 5+ times, all 5 historical states are sequentially stored in Telegram's backend database architecture to maintain sync integrity across all connected device nodes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EncryptionVisualizerSection() {
  const [activeProto, setActiveProto] = useState('signal');
  const [animStage, setAnimStage] = useState(0); 
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimStage(1); // Encrypting
    
    setTimeout(() => setAnimStage(2), 1500); // Alice -> Cell Tower
    setTimeout(() => setAnimStage(3), 3000); // Cell Tower -> Server
    setTimeout(() => setAnimStage(4), 4500); // Server Action
    setTimeout(() => setAnimStage(5), 6500); // Server -> ISP Router
    setTimeout(() => setAnimStage(6), 8000); // ISP Router -> Bob
    setTimeout(() => setAnimStage(7), 9500); // Decrypting at Bob
    setTimeout(() => {
      setAnimStage(8); // Done
      setIsAnimating(false);
    }, 11000);
  };

  const resetAnimation = () => {
    setAnimStage(0);
    setIsAnimating(false);
  };

  const protocols = {
    'signal': {
      name: "E2EE: Signal Protocol (WhatsApp)",
      desc: "True End-to-End Encryption. Only the sender and receiver hold the keys. The server is completely blind.",
      creator: "Trevor Perrin & Moxie Marlinspike (Open Whisper Systems)",
      complexity: "O(1) symmetric operations per message (AES-256), with heavy O(N) initial overhead during X3DH key generation. Relies on advanced Elliptic Curve Cryptography (Curve25519).",
      hackable: "Transit is MATHEMATICALLY UNHACKABLE by modern supercomputers. The system is ONLY vulnerable at the endpoint screens (e.g., if a government infects your phone OS with Pegasus spyware to read the screen before it encrypts).",
      pathDesc: "Local Encryption -> Emitted via LTE/5G Radio -> ISP Cellular Gateway -> Meta Edge Router -> Blind WhatsApp Server -> Recipient ISP -> Recipient Device -> Local Decryption.",
      serverAction: "BLIND ROUTER: The server cannot read the data. It sees encrypted gibberish bytes and simply queues them for the recipient.",
      serverColor: "border-slate-600 bg-slate-900 text-slate-500",
      serverIcon: <Lock size={40} className="text-slate-500"/>
    },
    'mtproto-c2s': {
      name: "C2S: MTProto Standard (Telegram Cloud)",
      desc: "Client-to-Server Encryption. Your phone encrypts data to the server. The server decrypts it, stores it, and re-encrypts it.",
      creator: "Nikolai Durov (Telegram)",
      complexity: "O(1) highly optimized symmetric hashing. Uses a custom implementation of AES-256-IGE combined with SHA-256 for rapid server-side indexing of billions of messages.",
      hackable: "Transit is secure, but the SERVER IS VULNERABLE. Because Telegram holds the decryption keys in their cloud, a rogue internal employee or a highly coordinated multi-national state raid could theoretically decrypt standard cloud chats.",
      pathDesc: "Client-to-Server Encryption -> Local ISP -> Telegram Edge Gateway -> Server Decryption & DB Logging -> Server-to-Client Encryption -> Recipient ISP -> Recipient Device.",
      serverAction: "DECRYPT & STORE: The server unlocks the message, reads it in plaintext, checks for spam, saves it to the cloud database, and re-encrypts it.",
      serverColor: "border-red-500 bg-red-950/40 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.2)]",
      serverIcon: <Eye size={40} className="text-red-400"/>
    },
    'mtproto-e2ee': {
      name: "E2EE: MTProto Secret Chats",
      desc: "Device-bound End-to-End Encryption. Bypasses Telegram's cloud storage completely.",
      creator: "Nikolai Durov (Telegram)",
      complexity: "O(1) AES-256-IGE encryption built dynamically on top of a direct device-to-device Diffie-Hellman key exchange. Requires both users to be online to initialize.",
      hackable: "Transit is UNHACKABLE. Unlike standard chats, Telegram cannot read these. Vulnerability shifts entirely to the physical device. If you lose your phone, the chat is permanently gone.",
      pathDesc: "Device Key Generation -> Encrypted Payload -> Telegram Server (Dumb Pipe Routing) -> Recipient Device -> Keys matched & decrypted locally.",
      serverAction: "BLIND ROUTER: The server acts as a dumb pipe. It cannot read or store the message in its cloud database.",
      serverColor: "border-emerald-500 bg-emerald-950/40 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]",
      serverIcon: <Shield size={40} className="text-emerald-400"/>
    },
    'tor-onion': {
      name: "Tor: Onion Routing (Briar App)",
      desc: "Traffic is wrapped in multiple layers of encryption like an onion. It bounces randomly worldwide.",
      creator: "US Naval Research Laboratory & The Tor Project",
      complexity: "O(N) complexity where N is the number of hops. Extremely high latency. Encrypts the same packet multiple times (Onion wrapping) using ephemeral RSA/AES layers.",
      hackable: "Highly resilient to interception. Vulnerable to 'Traffic Correlation Attacks' if a global adversary (like the NSA) monitors both the entry and exit nodes simultaneously to guess who is talking.",
      pathDesc: "Encrypted Payload -> Wrapped in 3+ layers -> Guard Node (Strips layer 1) -> Middle Node (Strips layer 2) -> Exit Node (Strips layer 3) -> Hidden Service/Recipient.",
      serverAction: "ONION RELAY: Node peels off ONE layer of encryption to reveal the next destination IP. It does not know the final payload or the original sender.",
      serverColor: "border-indigo-500 bg-indigo-950/40 text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.2)]",
      serverIcon: <Globe size={40} className="text-indigo-400"/>
    },
    'mesh-radio': {
      name: "Mesh: Radio Frequency (LoRa)",
      desc: "No internet required. Phones connect to radio chips, broadcasting AES-256 encrypted packets directly over the air.",
      creator: "Semtech (LoRa Modulation) & Open Source Community",
      complexity: "Low computational overhead but heavy physical CSMA/CA collision avoidance logic. Operates at very low bandwidth (bytes per second).",
      hackable: "AES-256 payload is secure, but the network is vulnerable to PHYSICAL ATTACKS. Governments can use Radio Direction Finding (RDF) to physically triangulate the radio signals and arrest the transmitter, or deploy jammers to block the frequencies.",
      pathDesc: "Phone Bluetooth -> LoRa Hardware Radio -> Broadcasts via 868MHz/915MHz RF -> Intercepted by nearby unknown Node -> Automatically Rebroadcasts -> Reaches Target Radio -> Phone Bluetooth.",
      serverAction: "BLIND BROADCAST: A nearby radio node receives the packet via frequency waves and rebroadcasts it. It has no internet connection and no key to read the payload.",
      serverColor: "border-orange-500 bg-orange-950/40 text-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.2)]",
      serverIcon: <Radio size={40} className="text-orange-400"/>
    }
  };

  const pData = protocols[activeProto];

  const getPacketPosition = () => {
    switch(animStage) {
      case 0: return '0%';
      case 1: return '0%';
      case 2: return '25%';
      case 3: return '50%';
      case 4: return '50%';
      case 5: return '75%';
      case 6: return '100%';
      case 7: return '100%';
      case 8: return '100%';
      default: return '0%';
    }
  };

  return (
    <section id="encryption" className="py-24 px-6 relative bg-slate-950 border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest mb-6">
            <Key size={16}/> LIVE CRYPTOGRAPHY VISUALIZER
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">2. Deep Network Encryption & Decryption Mechanics</h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            See exactly how a packet traverses the internet architecture. Select a protocol to watch data travel from your phone, through cell towers and ISPs, into cloud servers, and back down to the recipient.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(protocols).map(key => (
            <button
              key={key}
              onClick={() => { setActiveProto(key); resetAnimation(); }}
              disabled={isAnimating}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all text-sm md:text-base ${
                activeProto === key 
                ? 'bg-cyan-600 text-white shadow-[0_0_20px_rgba(8,145,178,0.4)]' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 disabled:opacity-50'
              }`}
            >
              {protocols[key].name.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Visualizer Canvas */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl mb-12 overflow-x-auto">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-white">{pData.name}</h3>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto">{pData.desc}</p>
          </div>

          <div className="relative h-64 md:h-80 flex items-center justify-between min-w-[800px] bg-slate-950 rounded-2xl border border-slate-800 px-8 py-4">
            
            {/* Background Routing Line */}
            <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 z-0 opacity-30 border-b-2 border-dashed border-slate-600"></div>

            {/* Node 1: Alice */}
            <div className={`relative z-10 flex flex-col items-center w-24 transition-all ${animStage === 1 ? 'scale-110' : ''}`}>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 border-2 bg-slate-800 ${animStage === 1 ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'border-slate-600'}`}>
                <Smartphone size={32} className="text-white"/>
              </div>
              <p className="font-bold text-white text-sm">Alice</p>
              <div className="h-8 mt-2 flex items-center">
                {animStage === 0 && <span className="text-[10px] bg-slate-700 px-2 py-1 rounded text-white">"Deploy Code"</span>}
                {animStage === 1 && <span className="text-[10px] bg-cyan-900 text-cyan-400 px-2 py-1 rounded font-bold"><Lock size={10} className="inline mr-1"/>Encrypting</span>}
              </div>
            </div>

            {/* Node 2: Cell Tower */}
            <div className="relative z-10 flex flex-col items-center w-24">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 bg-slate-800 transition-colors ${animStage === 2 ? 'border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-slate-700 text-slate-500'}`}>
                <RadioTower size={32} />
              </div>
              <p className="font-bold text-slate-300 text-xs text-center">Local Node <br/><span className="font-normal text-[10px] text-slate-500">(Tower/Wi-Fi)</span></p>
            </div>

            {/* Node 3: Cloud Server */}
            <div className={`relative z-10 flex flex-col items-center w-32 transition-all ${animStage === 4 ? 'scale-110' : ''}`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 border-2 transition-colors duration-500 ${animStage === 4 ? pData.serverColor : 'bg-slate-800 border-slate-600'}`}>
                {animStage === 4 ? pData.serverIcon : <Server size={36} className="text-slate-500"/>}
              </div>
              <p className="font-bold text-white text-sm text-center">
                {activeProto === 'mesh-radio' ? 'Random Radio Relay' : activeProto === 'tor-onion' ? 'Tor Guard/Exit Node' : 'Central Datacenter'}
              </p>
              
              {/* Server Action Popup */}
              <div className={`absolute top-28 w-56 p-3 rounded-lg text-[10px] font-mono text-center transition-opacity duration-300 z-30 ${animStage === 4 ? 'opacity-100' : 'opacity-0'} ${pData.serverColor}`}>
                {activeProto === 'mtproto-c2s' ? (
                  <div>
                    <p className="mb-1 border-b border-red-500/30 pb-1">DECRYPTING PAYLOAD...</p>
                    <p className="text-white bg-red-900/50 px-1 py-0.5 rounded my-1 text-xs">"Deploy Code"</p>
                    <p className="mt-1 border-t border-red-500/30 pt-1">LOGGING TO DB & RE-ENCRYPTING</p>
                  </div>
                ) : activeProto === 'tor-onion' ? (
                  <div>
                    <p className="mb-1 border-b border-indigo-500/30 pb-1">PEELING ONION LAYER...</p>
                    <p className="text-white bg-indigo-900/50 px-1 py-0.5 rounded my-1">Route To: 198.51.100.2</p>
                    <p className="mt-1 border-t border-indigo-500/30 pt-1">FORWARDING ENCRYPTED BLOB</p>
                  </div>
                ) : activeProto === 'mesh-radio' ? (
                  <div>
                    <p className="mb-1 border-b border-orange-500/30 pb-1">RF SIGNAL DETECTED</p>
                    <p className="text-white bg-orange-900/50 px-1 py-0.5 rounded my-1">No Decryption Keys Found</p>
                    <p className="mt-1 border-t border-orange-500/30 pt-1">REBROADCASTING TO MESH</p>
                  </div>
                ) : (
                  <p className="font-bold">{pData.serverAction}</p>
                )}
              </div>
            </div>

            {/* Node 4: ISP Router */}
            <div className="relative z-10 flex flex-col items-center w-24">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 bg-slate-800 transition-colors ${animStage === 6 ? 'border-purple-400 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'border-slate-700 text-slate-500'}`}>
                <Router size={32} />
              </div>
              <p className="font-bold text-slate-300 text-xs text-center">ISP Gateway <br/><span className="font-normal text-[10px] text-slate-500">(BGP/Routing)</span></p>
            </div>

            {/* Node 5: Bob (Receiver) */}
            <div className={`relative z-10 flex flex-col items-center w-24 transition-all ${animStage === 7 ? 'scale-110' : ''}`}>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 border-2 bg-slate-800 ${animStage === 7 ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'border-slate-600'}`}>
                <Smartphone size={32} className="text-white"/>
              </div>
              <p className="font-bold text-white text-sm">Bob</p>
              <div className="h-8 mt-2 flex items-center">
                {animStage === 7 && <span className="text-[10px] bg-cyan-900 text-cyan-400 px-2 py-1 rounded font-bold"><Unlock size={10} className="inline mr-1"/>Decrypting</span>}
                {animStage === 8 && <span className="text-[10px] bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">"Deploy Code"</span>}
              </div>
            </div>

            {/* The Moving Packet */}
            {animStage >= 2 && animStage <= 6 && (
              <div 
                className="absolute top-1/2 -translate-y-1/2 z-20 transition-all duration-[1500ms] ease-linear ml-[-30px]"
                style={{ left: getPacketPosition() }}
              >
                <div className={`border px-3 py-2 rounded-lg shadow-2xl flex items-center gap-2 backdrop-blur-md ${
                  animStage === 4 ? 'opacity-0' : 'opacity-100' // Hide it while inside the server node
                } ${
                  activeProto === 'tor-onion' ? 'bg-indigo-900/80 border-indigo-500' :
                  activeProto === 'mesh-radio' ? 'bg-orange-900/80 border-orange-500' :
                  activeProto === 'mtproto-c2s' && animStage >= 5 ? 'bg-purple-900/80 border-purple-500' : 
                  'bg-slate-800 border-yellow-500'
                }`}>
                  <FileLock2 size={16} className={
                    activeProto === 'tor-onion' ? 'text-indigo-400' :
                    activeProto === 'mesh-radio' ? 'text-orange-400' :
                    activeProto === 'mtproto-c2s' && animStage >= 5 ? 'text-purple-400' : 
                    'text-yellow-400'
                  }/>
                  <span className="font-mono text-[10px] text-white">
                    {activeProto === 'tor-onion' ? '[[((#@!))]]' : activeProto === 'mtproto-c2s' && animStage >= 5 ? '%^&*#@!' : '#@!*&%^$'}
                  </span>
                </div>
              </div>
            )}

          </div>

          <div className="mt-16 flex justify-center">
            {animStage === 0 || animStage === 8 ? (
              <button 
                onClick={startAnimation}
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)]"
              >
                <Play size={20} fill="currentColor"/> {animStage === 8 ? 'Restart Transmission' : 'Simulate Packet Transmission'}
              </button>
            ) : (
              <button disabled className="flex items-center gap-2 bg-slate-800 text-slate-500 px-8 py-3 rounded-full font-bold cursor-not-allowed border border-slate-700">
                <Activity size={20} className="animate-spin"/> Routing Network Traffic...
              </button>
            )}
          </div>
        </div>

        {/* Developer Insights Pane */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
           <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg">
               <h4 className="flex items-center gap-2 text-cyan-400 font-bold mb-6 text-lg"><Cpu size={20}/> Developer Specs & Complexity</h4>
               <div className="space-y-4 text-sm">
                 <p><strong className="text-white block mb-1">Architects/Creators:</strong> <span className="text-slate-400">{pData.creator}</span></p>
                 <div className="h-px bg-slate-800 my-2"></div>
                 <p><strong className="text-white block mb-1">Time Complexity & Advancement:</strong> <span className="text-slate-400 leading-relaxed">{pData.complexity}</span></p>
               </div>
           </div>
           
           <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-red-900/50 shadow-[0_0_20px_rgba(239,68,68,0.05)]">
               <h4 className="flex items-center gap-2 text-red-400 font-bold mb-6 text-lg"><Bug size={20}/> Vulnerability Profile</h4>
               <p className="text-sm font-bold text-white mb-2">Can anyone hack this?</p>
               <p className="text-sm text-slate-400 leading-relaxed text-justify">{pData.hackable}</p>
           </div>

           <div className="md:col-span-2 bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg">
               <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-4 text-lg"><Network size={20}/> Detailed Network Transit Path</h4>
               <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-400 leading-loose">
                 {pData.pathDesc.split(' -> ').map((step, idx, arr) => (
                   <span key={idx}>
                     <span className="text-emerald-400">{step}</span>
                     {idx < arr.length - 1 && <span className="text-slate-600 mx-2">{`->`}</span>}
                   </span>
                 ))}
               </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function MetadataSection() {
  return (
    <section id="metadata" className="py-24 px-6 bg-slate-900/40 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">3. Traceability, Metadata, and the Ad-Targeting Illusion</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* LERT */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">A. Non-Encrypted Operational Metadata Capture (LERT Pipelines)</h3>
            <p className="text-slate-300 mb-6 text-justify leading-relaxed">While WhatsApp maintains zero-knowledge blinding over the message payload, it intercepts operational metadata necessary to sustain network sessions. Law Enforcement Response Teams (LERT) can subpoena this non-encrypted metadata, which is structured inside Meta's distributed logging systems (like RocksDB clusters):</p>
            
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 mb-6 shadow-xl">
              <pre className="text-sm text-emerald-400 overflow-x-auto font-mono leading-relaxed">
{`-- Conceptual Architecture Log Layout
CREATE TABLE metadata_lert_log (
    session_id VARCHAR(64),
    sender_identity_hash VARCHAR(64),
    recipient_identity_hash VARCHAR(64),
    routing_edge_ip VARCHAR(45),      -- IPv4/IPv6 address tracking
    device_imei_signature VARCHAR(32), 
    packet_size_bytes INT,
    transmission_timestamp_ms BIGINT
);`}
              </pre>
            </div>
            <p className="text-sm text-slate-400 border-l-4 border-cyan-500 pl-4 py-2 italic text-justify">By analyzing traffic cadence (e.g., matching a 45KB payload outbound from Node A at 14:02:11.102 with a 45KB payload inbound to Node B at 14:02:11.198), investigators can construct high-probability relationship graphs without ever decrypting a single byte of text.</p>
          </div>

          {/* Ad Targeting Diagram */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">B. Deconstructing the "Ad-Targeting Illusion"</h3>
            <p className="text-slate-300 mb-8 text-justify leading-relaxed">The user perception that Meta is "listening" to encrypted text arises from advanced cross-app behavioral telemetry rather than cryptographic breaches.</p>
            
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl relative">
              <div className="flex flex-col gap-6 relative">
                <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-slate-700 border-dashed border-l-2 border-slate-700"></div>

                <div className="flex items-center gap-6 relative z-10 group">
                  <div className="w-16 h-16 bg-blue-900/50 rounded-2xl border border-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <Smartphone size={28} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Co-Location Topology Mapping</h4>
                    <p className="text-sm text-slate-400 mt-1">When two users meet physically, their applications transmit telemetry logs detailing matching Wi-Fi BSSIDs, equivalent cellular base-station sector tracking, and synchronized Bluetooth Low Energy (BLE) beacon discovery scans. Meta’s background event processors ingestion pipeline flags these tokens as a proximity event.</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 relative z-10 group">
                  <div className="w-16 h-16 bg-purple-900/50 rounded-2xl border border-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Database size={28} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Lookalike Audience Injection</h4>
                    <p className="text-sm text-slate-400 mt-1">If Device A holds a high consumer intent score for a specific brand (tracked via off-site Meta Pixel integrations or search histories on non-encrypted apps), the graph processing engine dynamically matches Device B into a "Lookalike" target cluster. Device B is served corresponding ads within minutes of the physical meeting.</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 relative z-10 group">
                  <div className="w-16 h-16 bg-cyan-900/50 rounded-2xl border border-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <Zap size={28} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Meta AI Non-Encrypted Vector Extraction</h4>
                    <p className="text-sm text-slate-400 mt-1">When a user engages with the built-in "Meta AI" chatbot inside a WhatsApp chat thread, the session drops E2EE constraints. The conversational tokens are processed on cloud GPUs, vectorized, and written into the user’s centralized advertising profile context.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Leak */}
        <div className="mt-16 bg-gradient-to-r from-red-950/40 to-slate-900 border border-red-900/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <ShieldAlert className="absolute top-1/2 -translate-y-1/2 right-10 text-red-500/10" size={200}/>
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl font-bold text-white mb-6">C. The Endpoint Notification History Leak Vulnerability</h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">The absolute security of E2EE breaks at the application sandboxing interface when rendering user notifications.</p>
            
            <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 font-mono text-sm text-slate-400 whitespace-pre-wrap overflow-x-auto mb-8 shadow-inner">
{`[Encrypted Network Packet] 
     |
     v
[WhatsApp Client Memory] ---> Decrypts Payload ---> Formats Plaintext String
                                                         |
                                      (Inter-Process Communication API)
                                                         v
                                                [Mobile OS Kernel]
                                                         |
                                      +------------------+------------------+
                                      |                                     |
                                      v                                     v
                           [UI Display Thread]                  [System Notification Log]
                           (Renders text on screen)             (Plaintext SQLite Database)`}
            </div>
            <p className="text-base text-slate-300 text-justify leading-relaxed">When an incoming packet is decrypted in isolated application memory, the client must trigger the operating system's Inter-Process Communication (IPC) API to populate a banner alert. The host OS (Android or iOS) writes this plaintext string chunk into a system-managed diagnostic tracking database (<code>notification_history.db</code>). If a user accidentally approves a malicious background asset with <strong>Notification Access</strong> privileges, that secondary asset can crawl the OS notification log database via standard system APIs, exfiltrating the plaintext strings of all incoming messages and rendering edge-to-edge transit encryption completely useless.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalSection() {
  return (
    <section id="legal" className="py-24 px-6 relative border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">4. Statutory Enforcement & Indian Cyber Law Frameworks</h2>
        <p className="text-xl text-cyan-400 mb-16">The deployment and restriction of digital communication frameworks within the territory of India are governed by the Information Technology (IT) Act, 2000 and its subordinate rules.</p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">A. Section 69A: Sovereign Emergency Blocking Powers</h3>
            <p className="text-slate-300 mb-6 text-justify">Section 69A of the IT Act grants the Central Government (operationalized via the Ministry of Electronics and Information Technology - MeitY) the statutory power to order intermediaries to restrict public access to digital information.</p>
            
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
              <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2"><Scale/> Constitutional Safeguards & Judicial Limits</h4>
              <p className="text-sm text-slate-300 mb-4 text-justify">As established by the Supreme Court of India in the landmark <em>Shreya Singhal vs. Union of India (2015)</em> ruling, Section 69A is constitutionally valid because it contains explicit procedural guardrails:</p>
              <ul className="space-y-4 text-sm text-slate-400 list-disc pl-5">
                <li>Directives must be backed by written, recorded justifications matching the six protected statutory grounds (Sovereignty and Integrity of India, Defense of India, Security of the State, Friendly Relations with Foreign States, Public Order, or Prevention of Incitement to any cognizable offense relating to these parameters).</li>
                <li>Under Rule 9 of the 2009 Blocking Rules, the government can issue an immediate <em>ex-parte</em> interim blocking order in strict emergencies, bypassing the prior hearing requirement, provided a formal review committee evaluates the action within 48 hours.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">B. The Intermediary Guidelines & Traceability Mandate</h3>
            <p className="text-slate-300 mb-6 text-justify">Under Rule 4(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, significant social media intermediaries providing messaging services must enable the identification of the <strong>"First Originator"</strong> of information.</p>
            
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 h-full">
              <h4 className="text-lg font-bold text-white mb-6">This creates a critical technical paradox:</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold border border-blue-500/30">1</div>
                  <div>
                    <h5 className="font-bold text-blue-400">The State’s Perspective:</h5>
                    <p className="text-sm text-slate-400 mt-1">Identifying the source of viral misinformation or illegal content is vital to maintain public order.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-bold border border-purple-500/30">2</div>
                  <div>
                    <h5 className="font-bold text-purple-400">The Architectural Constraint:</h5>
                    <p className="text-sm text-slate-400 mt-1">Fulfilling this mandate requires E2EE platforms to attach a permanent, cryptographically traceable tracking tag to every message payload or maintain a centralized database indexing every user's transmission history. This effectively dismantles the zero-knowledge design of the Signal Protocol.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telegram Crisis */}
        <h3 className="text-3xl font-bold text-white mb-8 border-t border-slate-800 pt-16">C. Case Study: The June 2026 Telegram Crisis & The NEET-UG Exam Leaks</h3>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">On June 16, 2026, the National Testing Agency (NTA) and MeitY initiated a nationwide restriction on Telegram under Section 69A, scheduled to cover the national medical entrance re-examination phase.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="col-span-3"><h4 className="text-xl font-bold text-cyan-400 mb-2">Why the Indian Government Targeted Telegram for the NEET-UG Crisis</h4>
          <p className="text-slate-400 mb-6 text-sm">The decision to block Telegram while leaving WhatsApp operational was driven by Telegram's broadcast-heavy product architecture, which can easily be exploited for large-scale cheating schemes:</p></div>
          
          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
            <Network className="text-blue-400 mb-4" size={32}/>
            <h5 className="font-bold text-white mb-3 text-lg">Massive Public Broadcasting Channels</h5>
            <p className="text-sm text-slate-400 text-justify">WhatsApp enforces forward restrictions to slow down virality. Telegram allows individual, anonymous channels to broadcast uncompressed high-resolution PDFs of stolen exam question papers to millions of users simultaneously.</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
            <Terminal className="text-purple-400 mb-4" size={32}/>
            <h5 className="font-bold text-white mb-3 text-lg">Automated Scraping Bots</h5>
            <p className="text-sm text-slate-400 text-justify">Cheating syndicates deployed automated Telegram bots to distribute leaked papers, take digital payments via mule bank accounts, and delete evidence channels instantly when flagged.</p>
          </div>
          <div className="bg-slate-800/40 border border-red-900/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.05)]">
            <AlertTriangle className="text-red-400 mb-4" size={32}/>
            <h5 className="font-bold text-red-400 mb-3 text-lg">The Timestamp Retention Edit Exploit</h5>
            <p className="text-sm text-slate-400 text-justify">Fraud syndicates exploited Telegram’s core database architecture to execute "backdating scams." An administrator would post a blank file placeholder weeks before the exam date. Once the actual exam concluded and the real question paper was visible, the admin would use the <code>editMessage</code> function to swap out the placeholder for the real paper. Because Telegram’s UI updated the file but retained the original, historical timestamp of the old post, the scammers claimed they had leaked the paper hours prior to the test, using this fabricated evidence to extort money from thousands of students.</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-12 shadow-2xl relative overflow-hidden">
          <Scale className="absolute top-1/2 -translate-y-1/2 right-10 text-cyan-500/10" size={150}/>
          <div className="relative z-10 max-w-4xl">
            <h4 className="text-2xl font-bold text-white mb-4">The Delhi High Court Judicial Review</h4>
            <p className="text-cyan-400 font-mono text-sm mb-6">Telegram FZ-LLC vs. Union of India - June 19, 2026</p>
            <p className="text-slate-300 mb-6 text-justify">Telegram challenged the interim directive before a vacation bench of the Delhi High Court, arguing that a blanket platform ban violated the proportionality test under Article 19(1)(a) of the Constitution and that Section 69A only authorized the blocking of specific, identified links or messages. The High Court dismissed Telegram’s plea and upheld MeitY's emergency order based on two key legal and architectural findings:</p>
            
            <div className="space-y-4">
              <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={18}/> Expansion of Section 69A Target Definitions</h5>
                <p className="text-sm text-slate-400 text-justify">Justice Tejas Karia ruled that since Section 2(1)(v) of the IT Act explicitly includes "software, source codes, and computer programmes" under the definition of information, an entire application or platform architecture qualifies as information generated and hosted through a computer resource. Therefore, the state possesses the full statutory authority to block an entire app platform under Section 69A if narrower interventions prove ineffective.</p>
              </div>
              <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800">
                <h5 className="font-bold text-white mb-2 flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={18}/> Failure of Less Restrictive Measures</h5>
                <p className="text-sm text-slate-400 text-justify">The court observed that individual channel takedowns were entirely futile because operators used automated bots to instantly clone and reconstitute blocked networks under new handles. Consequently, the court ordered the platform block to remain active through the exam window and forced Telegram to disable its message-editing feature across India until June 30, 2026 to halt the backdating exploit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Dilemma */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h4 className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-2">Critical Policy Assessment</h4>
            <h3 className="text-3xl font-bold text-white">Should the Indian Government Have Executed This Ban?</h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">The execution of a total platform ban represents a severe, high-friction regulatory tool that highlights a difficult policy trade-off:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
            
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-emerald-900/50 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
              <h5 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
                <Shield className="text-emerald-500" size={24}/> The Justification (Hit)
              </h5>
              <div className="space-y-4">
                <p className="text-sm text-emerald-100/70 font-semibold bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">Argument for Executive Intervention</p>
                <ul className="text-sm text-slate-400 space-y-2 list-disc pl-5">
                  <li>Protects public order and exam integrity.</li>
                  <li>Halts runaway criminal monetization syndicates.</li>
                  <li>Counters systemic structural design exploits.</li>
                </ul>
                <p className="text-sm text-slate-300 text-justify mt-4 leading-relaxed">From a national security and public order standpoint, the intervention was a necessary emergency move. The systematic weaponization of Telegram's broadcast architecture threatened the academic integrity of an exam involving millions of students. When a platform’s core design features (like timestamp-retaining edits) are actively exploited to orchestrate multi-state fraud rings, the state has a clear duty to intervene and stabilize the network environment.</p>
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-red-900/50 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
              <h5 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-3">
                <AlertTriangle className="text-red-500" size={24}/> The Counterpoint (Miss)
              </h5>
              <div className="space-y-4">
                <p className="text-sm text-red-100/70 font-semibold bg-red-500/10 p-3 rounded-lg border border-red-500/20">Argument Against Platform Censorship</p>
                <ul className="text-sm text-slate-400 space-y-2 list-disc pl-5">
                  <li>Fails the test of digital proportionality.</li>
                  <li>Punishes legitimate students and businesses.</li>
                  <li>Targets a communication medium, not root flaws.</li>
                </ul>
                <p className="text-sm text-slate-300 text-justify mt-4 leading-relaxed">From a digital rights and proportionality perspective, a blanket ban sets a dangerous precedent. It functions as a digital collective punishment, severing communication lines for millions of innocent students, educational communities, and legitimate tech businesses to contain the actions of a few bad actors. Banning an application targets the symptom rather than the systemic institutional flaws within the examination bodies themselves. The state should prioritize building robust, leak-proof internal data chains rather than shutting down parts of the global public internet.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FirewallSimulatorSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      layer: "Layer 7",
      title: "Application Store Geo-Fencing",
      subtitle: "Distribution Layer Injection",
      desc: "The Indian government serves formal enforcement notices to Apple and Google. In response, they alter storefront metadata and delist the binary. They also push the application's MD5 package hashes to carrier blacklists to prevent easy sideloading from unauthorized CDNs.",
      visual: "App Store icon turns grey/red. 'Download' button disabled."
    },
    {
      id: 2,
      layer: "Layer 5",
      title: "DNS Cache Poisoning & Sinkholing",
      subtitle: "Session Hijacking (UDP Port 53)",
      desc: "Indian telecom providers (like Jio, Airtel, Vi, and BSNL) alter their BIND/Unbound authoritative DNS resolvers. When your phone asks for the IP address of 'api.telegram.org', the ISP intercepts the UDP request and injects a fake loopback address (127.0.0.1) or an NXDOMAIN error.",
      visual: "DNS request -> 127.0.0.1 returned instead of real IP."
    },
    {
      id: 3,
      layer: "Layer 3",
      title: "BGP Hijacking & Router ACL Blocks",
      subtitle: "Network Routing Interception (Null0)",
      desc: "To fight back, apps secretly hardcode physical IP addresses. To stop this, Jio and Airtel update core routing tables to trigger 'BGP Blackholing'. Any packet addressing the target Autonomous System Number (ASN) is forcefully routed into a 'Null0' interface—a digital black hole.",
      visual: "Packet travels to ISP Router -> Hits Red Wall (ASN Drop)."
    },
    {
      id: 4,
      layer: "Layer 4-7",
      title: "Deep Packet Inspection (DPI)",
      subtitle: "Protocol Fingerprinting & SNI Scanning",
      desc: "If users try to hide using a VPN or proxy, ISPs deploy Deep Packet Inspection hardware. The firewall reads the unencrypted 'ClientHello' in TLS handshakes to find Server Name Indications (SNI), and uses heuristics to measure MTProto packet lengths. Once matched, it injects a spoofed TCP RST packet to sever the connection.",
      visual: "Packet scanned -> Signature matched -> TCP RST injected."
    }
  ];

  // Auto-advance simulator for effect
  useEffect(() => {
    if (activeStep > 0 && activeStep < 4) {
      const timer = setTimeout(() => {
        // Optional: auto-advance
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  return (
    <section id="firewall" className="py-32 px-6 bg-slate-950 relative border-b border-white/5 overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold tracking-widest mb-6 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <Activity className="animate-pulse" size={16}/> LIVE SIMULATOR
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">5. Network Firewalls & App Suppression Mechanisms</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            When a sovereign authority enforces a platform block under Section 69A, domestic Internet Service Providers (ISPs) must deploy a coordinated network interception sequence across the routing stack.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Simulator Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="font-mono text-xs text-slate-500">root@meity-firewall:~# execute_ban_sequence.sh</div>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* Control Panel */}
            <div className="lg:w-1/3 bg-slate-800/50 border-r border-slate-700 p-6 flex flex-col justify-center">
              <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Select Intervention Layer</h3>
              <div className="space-y-3">
                <button onClick={() => setActiveStep(0)} className={`w-full text-left p-4 rounded-xl border transition-all ${activeStep === 0 ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'}`}>
                  <div className="font-bold font-mono">DEFAULT STATE</div>
                  <div className="text-xs mt-1">Normal Network Traffic</div>
                </button>
                {steps.map((step) => (
                  <button 
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${activeStep === step.id ? 'bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="font-bold font-mono">{step.layer}</div>
                      {activeStep > step.id && <CheckCircle2 size={16} className="text-slate-500"/>}
                    </div>
                    <div className="text-xs mt-1 truncate">{step.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Visualizer Panel */}
            <div className="lg:w-2/3 p-8 flex flex-col relative bg-[#0a0a0f]">
              {/* Active Step Content */}
              <div className="h-48 mb-8">
                {activeStep === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-slate-500 animate-pulse">
                    <Network size={64} className="mb-4 text-emerald-500/50"/>
                    <p className="font-mono">Waiting for executive command...</p>
                    <p className="text-xs mt-2">Select a layer from the control panel to simulate a block.</p>
                  </div>
                ) : (
                  <div className="animate-in slide-in-from-right-8 duration-300">
                    <div className="inline-block px-3 py-1 rounded bg-red-500/20 text-red-400 font-mono text-xs border border-red-500/50 mb-4">{steps[activeStep-1].subtitle}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{steps[activeStep-1].layer}: {steps[activeStep-1].title}</h3>
                    <p className="text-slate-300 text-justify leading-relaxed">{steps[activeStep-1].desc}</p>
                  </div>
                )}
              </div>

              {/* Graphic Terminal/Visual */}
              <div className="flex-1 bg-black rounded-xl border border-slate-800 p-6 relative overflow-hidden font-mono text-sm">
                
                {activeStep === 0 && (
                  <div className="flex items-center justify-between h-full opacity-50">
                    <Smartphone className="text-emerald-400" size={40}/>
                    <div className="flex-1 h-px bg-emerald-500/50 mx-4 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-[ping_2s_linear_infinite]"></div>
                    </div>
                    <Server className="text-cyan-400" size={40}/>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="flex flex-col justify-center h-full gap-4 text-emerald-400">
                    <p>{`> Fetching app_metadata.json from store.apple.com...`}</p>
                    <p className="text-red-500">{`> HTTP 403 Forbidden - Region Restricted (IN)`}</p>
                    <p className="text-slate-500">{`> App binary delisted. Preventing new client acquisitions.`}</p>
                    <p className="text-slate-500">{`> MD5 Hash added to carrier blacklist to block sideloading.`}</p>
                    <div className="mt-2 p-4 border border-red-500/30 bg-red-900/20 rounded flex items-center gap-4">
                      <ShieldAlert className="text-red-500" size={32}/>
                      <span className="text-white font-sans">App Not Available in Your Country or Region</span>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="flex flex-col justify-center h-full gap-2 text-emerald-400">
                    <p>{`> DNS Request (UDP Port 53): api.telegram.org`}</p>
                    <p>{`> Intercepted by ISP BIND server...`}</p>
                    <div className="my-2 border-l-2 border-red-500 pl-4 py-2 bg-red-900/20 text-red-400">
                      <p>{`[INTERCEPT] DNS Cache Poisoning Active`}</p>
                      <p>{`Overriding A record with loopback/NXDOMAIN...`}</p>
                    </div>
                    <p className="text-yellow-400">{`> Response: api.telegram.org IN A 127.0.0.1`}</p>
                    <p className="text-slate-500">{`> Client routing to localhost. Connection failed.`}</p>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="flex flex-col justify-center h-full gap-2 text-emerald-400">
                    <p>{`> Client utilizing hardcoded IP fallback...`}</p>
                    <p>{`> Target IP: 149.154.167.99 (ASN: AS62041)`}</p>
                    <p>{`> Reaching Jio/Airtel BGP boundary router...`}</p>
                    <div className="my-2 border-l-2 border-red-500 pl-4 py-2 bg-red-900/20 text-red-400 flex items-center justify-between">
                      <div>
                        <p>{`[BGP BLACKHOLE] ACL Rule Matched`}</p>
                        <p>{`ip route 149.154.160.0 255.255.240.0 Null0`}</p>
                      </div>
                      <div className="px-3 py-1 bg-red-500 text-white font-bold text-xs rounded">DROPPED</div>
                    </div>
                    <p className="text-slate-500">{`> Traffic routed to nowhere. Connection times out.`}</p>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="flex flex-col justify-center h-full gap-2 text-emerald-400">
                    <p>{`> Client connecting... Scanning TLS Handshake.`}</p>
                    <p className="animate-pulse">{`> Running Heuristics & Server Name Indication (SNI)...`}</p>
                    <div className="my-2 border-l-2 border-red-500 pl-4 py-2 bg-red-900/20 text-red-400">
                      <p>{`[HEURISTIC MATCH] MTProto packet length anomaly detected.`}</p>
                      <p>{`[SNI MATCH] *.telegram.org detected in ClientHello.`}</p>
                      <p>{`Generating spoofed TCP Reset...`}</p>
                    </div>
                    <p className="text-yellow-400">{`> Injecting TCP RST flag into stream.`}</p>
                    <p className="text-slate-500">{`> Network socket connection torn down instantly.`}</p>
                  </div>
                )}

                {/* Scanline effect over terminal */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent w-full h-[20%] animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BypassSection() {
  return (
    <section className="py-24 px-6 relative border-b border-white/5 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">6. Off-Grid & Resilient Bypass Topologies</h2>
        <p className="text-xl text-cyan-400 mb-12 text-justify">
          To maintain communication resilience during total infrastructure blackouts or strict state censorship, software networks must drop their reliance on centralized ISP gateways and closed application storefronts.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Radio size={48} className="text-orange-400 mb-6 group-hover:scale-110 transition-transform"/>
            <h3 className="text-xl font-bold text-white mb-4">A. Hardware Mesh Networks: LoRa Topologies</h3>
            <p className="text-sm text-slate-400 mb-4 text-justify">When cellular networks and broadband gateways go completely dark, communication networks can drop down to the physical electromagnetic spectrum using license-free ultra-high frequency (UHF) industrial, scientific, and medical (ISM) bands (868 MHz / 915 MHz).</p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-orange-400 font-bold mb-2">The Mesh Mechanism (Meshtastic Framework):</p>
              <p className="text-xs text-slate-400 text-justify">The app connects via Bluetooth to a pocket-sized radio node. Text strings are compressed, encrypted using AES-256-GCM (military-grade locks), and transmitted over the air. Every nearby node running the protocol receives the packet, evaluates the target token, and automatically relays the data forward. This forms an ad-hoc, localized citywide communication mesh that operates completely free of Jio, Airtel, or government network gateways.</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Network size={48} className="text-blue-400 mb-6 group-hover:scale-110 transition-transform"/>
            <h3 className="text-xl font-bold text-white mb-4">B. Multi-Transport P2P Networks</h3>
            <p className="text-sm text-slate-400 mb-4 text-justify">The Briar project provides a peer-to-peer messaging network that contains no central server nodes, making it impossible to take down via a single data center block. It routes traffic through a dynamic multi-transport framework:</p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
              <div>
                <p className="text-xs text-blue-400 font-bold mb-1">Online Transport Layer:</p>
                <p className="text-xs text-slate-400 text-justify">Encapsulates data in Tor Onion format. Hops traffic through global volunteer relays. Renders destination IP tracking impossible.</p>
              </div>
              <div>
                <p className="text-xs text-blue-400 font-bold mb-1">Offline Mesh Layer:</p>
                <p className="text-xs text-slate-400 text-justify">Disables IP routing entirely. Deploys Bluetooth & Local Wi-Fi loops. Syncs data via device-to-device proximity.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <Globe size={48} className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform"/>
            <h3 className="text-xl font-bold text-white mb-4">C. Alternative Binary Distribution & PWAs</h3>
            <p className="text-sm text-slate-400 mb-4 text-justify">When central app stores restrict software access, developers deploy decentralized software distribution models:</p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
              <div>
                <p className="text-xs text-emerald-400 font-bold mb-1">Decentralized Repository Sideloading:</p>
                <p className="text-xs text-slate-400 text-justify">Android architecture allows users to bypass the Google Play Store entirely. Users can download signed application packages (raw .APK files) from open-source repositories like F-Droid. The OS verifies the developer's cryptographic signing certificate locally.</p>
              </div>
              <div>
                <p className="text-xs text-emerald-400 font-bold mb-1">Progressive Web Applications (PWAs):</p>
                <p className="text-xs text-slate-400 text-justify">To bypass Apple's locked iOS ecosystem, developers write messaging tools as PWAs. Running entirely within the browser sandbox (HTML5/Service Workers) and caching locally, there is no compiled binary file to host, hence no App Store asset for a government to ban.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistSection() {
  const checks = [
    { title: "Enforce Zero-Knowledge Architecture", text: "Ensure that session initializations exclusively utilize local client-side key generation (e.g., X3DH) so that backend servers function purely as blinded data routers." },
    { title: "Implement Local Storage Encryption", text: "Protect all local client databases using SQLCipher with key derivations tied tightly to the device's hardware-backed security enclave." },
    { title: "Isolate the Notification Pipeline", text: "Never pass plaintext message strings into the host operating system's notification APIs. Use empty background wake-up triggers and force local biometric authentication before rendering text on screen." },
    { title: "Audit Database Change Logs", text: "Ensure that data modifications (like edits or deletions) execute hard overwrites on local disks and maintain clear server-side audit trails in cloud systems to protect against timestamp manipulation scams." },
    { title: "Deploy Multi-Transport Fallbacks", text: "Architect the application network layer to dynamically pivot away from standard IP connections and drop into Tor Onion Routing or local Bluetooth/Wi-Fi mesh loops if the main network gateway goes cold." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight text-center">7. System Security Reference Checklist</h2>
        <p className="text-xl text-cyan-400 mb-12 text-center max-w-3xl mx-auto">Architects and developers must cross-reference their communication systems against this strict technical auditing checklist to ensure resilience against endpoint leaks and network-level censorship:</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {checks.map((check, idx) => (
            <div key={idx} className={`bg-slate-900 border border-slate-700 p-6 rounded-2xl flex gap-4 items-start shadow-lg ${idx === 4 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
              <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={28} />
              <div>
                <h4 className="text-white font-bold mb-2 text-lg">{check.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">{check.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-800 text-center px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <Shield size={48} className="text-cyan-500 mb-8" />
        <h2 className="text-3xl font-extrabold text-white mb-6 uppercase tracking-widest">8. Conclusion</h2>
        <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 shadow-2xl mb-12 backdrop-blur-md">
          <p className="text-slate-300 text-lg leading-relaxed mb-6 text-justify">
            The security landscape of modern digital messaging is defined by a continuous technological struggle between edge-device cryptographic privacy, platform product design choices, and sovereign legislative enforcement. As demonstrated by the June 2026 Telegram crisis in India, technical features like cloud database storage and message editing can be exploited by criminal syndicates, drawing fast and severe regulatory interventions under Section 69A of the IT Act.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed text-justify">
            For developers, systems architects, and researchers like Ankit Kumar, the takeaway is clear: achieving true privacy and system resilience requires looking past basic transit encryption. A secure system must also protect against endpoint notification leaks, secure local data-at-rest databases, and maintain flexible, multi-transport fallback routing paths that can keep communications flowing even when the global internet is intentionally blocked.
          </p>
        </div>
        
        <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl text-justify mb-16 shadow-inner">
          <p className="text-sm text-slate-400 italic">
            For a closer look at the actual administrative and operational realities of how the government deploys emergency blocking mandates to secure competitive systems, this detailed report on the Telegram Ban in India and Section 69A of the IT Act outlines the legal workflows and enforcement parameters used by the state to manage digital communication threats.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-800 w-full flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 font-semibold tracking-wide">
          <p>© 2026 Ankit Kumar, IIT Patna. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Document Classification: Advanced Systems Design & Legal Jurisprudence Review</p>
        </div>
      </div>
    </footer>
  );
}