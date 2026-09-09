import React, { useState } from 'react';
import { 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  Zap, 
  CreditCard, 
  ChevronRight, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Wand2,
  ShieldCheck
} from 'lucide-react';

const AI_MODELS = [
  { name: 'Flux 1.1 Pro', type: 'Image', logo: '⚡', badge: 'Top Image' },
  { name: 'Kling AI 1.5', type: 'Video', logo: '🎬', badge: 'HD Motion' },
  { name: 'Seedance 2.0', type: 'Video', logo: '🌱', badge: 'Trending' },
  { name: 'Nano Banana', type: 'Image', logo: '🍌', badge: 'Ultra Fast' },
  { name: 'GPT Image (DALL-E 3)', type: 'Image', logo: '🤖', badge: 'Creative' },
  { name: 'MiniMax Video 01', type: 'Video', logo: '🎥', badge: 'Cinematic' },
  { name: 'Midjourney v6.1', type: 'Image', logo: '🎨', badge: 'Photorealistic' },
  { name: 'Runway Gen-3 Alpha', type: 'Video', logo: '🚀', badge: 'VFX' },
];

const LOCAL_PARTNERS = [
  { name: 'CIB Card', icon: '💳', desc: 'Algerian Interbank Card' },
  { name: 'Edahabia', icon: '✉️', desc: 'Algérie Poste Instant' },
  { name: 'BaridiMob', icon: '📱', desc: 'Mobile Postal Transfer' },
  { name: 'DZD Bank Wire', icon: '🏦', desc: 'Local Business Accounts' }
];

const PROMPT_TEMPLATES = [
  "A high-fashion editorial photo of an Algerian model in a modernized traditional Karakou, sunset in Algiers Kasbah, 8k resolution, cinematic lighting.",
  "Hyper-realistic 4K drone shot over Tassili n'Ajjer mountains at dusk, sweeping camera movement, dramatic fog.",
  "Minimalist 3D product mockup of an Algerian olive oil bottle, Mediterranean aesthetic, studio softbox illumination."
];

export default function LandingPage() {
  const [selectedModel, setSelectedModel] = useState('Flux 1.1 Pro');
  const [prompt, setPrompt] = useState(PROMPT_TEMPLATES[0]);
  const [aspectRatio, setAspectRatio] = useState('16:9');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-slate-950 text-xs sm:text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <span className="bg-slate-950/20 text-white px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider">Nouveau</span>
        <span>🇩🇿 Jaxxy — La 1ère plateforme IA créative en Algérie ! Payez par CIB & Edahabia.</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Sparkles className="w-6 h-6 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white">Jaxxy</span>
                <span className="text-xs bg-teal-500/10 text-teal-400 font-bold px-1.5 py-0.5 rounded border border-teal-500/30">.ai</span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wide">Premier studio IA en Algérie</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#models" className="hover:text-teal-400 transition-colors">Modèles IA</a>
            <a href="#studio" className="hover:text-teal-400 transition-colors">Studio Créatif</a>
            <a href="#pricing" className="hover:text-teal-400 transition-colors">Tarifs en DZD</a>
            <a href="#local" className="hover:text-teal-400 transition-colors">Paiement Local</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors">
              Connexion
            </button>
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm hover:opacity-95 transition-all">
              Créer un compte
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 px-6 border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-8 text-xs sm:text-sm">
            <span className="text-amber-400 font-bold">★ 4.9</span>
            <span className="text-slate-400">Plateforme locale #1</span>
            <span className="text-slate-700">|</span>
            <span className="text-teal-400 font-medium">CIB & Edahabia acceptées</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white max-w-4xl mx-auto">
            Tous vos outils IA créatifs{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              réunis en un seul endroit.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Générez des images et vidéos haute définition avec <strong className="text-white">Flux, Kling, Seedance, Nano Banana, GPT Image, et MiniMax</strong>. Un seul compte, sans besoin de carte internationale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-extrabold text-base shadow-lg shadow-teal-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              <Wand2 className="w-5 h-5" />
              Essayer gratuitement (50 Crédits)
            </button>
            <button className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <Play className="w-4 h-4 text-teal-400 fill-teal-400" />
              Voir la démonstration
            </button>
          </div>

          {/* Model Selection Concept UI */}
          <div className="mt-16 relative py-12 px-6 max-w-5xl mx-auto bg-slate-950/60 border border-slate-800 rounded-3xl backdrop-blur-xl shadow-2xl">
            <div className="text-xs uppercase tracking-widest text-teal-400 font-extrabold mb-6">
              ⚡ Accès unifié aux meilleurs modèles mondiaux
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
              {AI_MODELS.map((model, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedModel(model.name)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all text-left ${
                    selectedModel === model.name 
                      ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-teal-400 shadow-lg shadow-teal-500/10 scale-105' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{model.logo}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {model.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm">{model.name}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{model.badge}</p>
                </div>
              ))}
            </div>

            {/* Prompt Interactive Bar */}
            <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 text-left shadow-xl">
              <div className="flex items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Studio de Génération Jaxxy</span>
                <span className="bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30 text-xs font-semibold">
                  {selectedModel}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={2}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Ratio:</span>
                    {['1:1', '16:9', '9:16', '4:3'].map((ratio) => (
                      <button 
                        key={ratio}
                        onClick={() => setAspectRatio(ratio)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                          aspectRatio === ratio 
                            ? 'bg-teal-500/20 border-teal-500 text-teal-300' 
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-95 transition-all flex items-center gap-2 ml-auto">
                    <Zap className="w-4 h-4 fill-slate-950" />
                    Générer (3 Crédits)
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Local Payment Section */}
      <section id="local" className="py-12 bg-slate-900/50 border-b border-slate-800/80 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold mb-3">
              🇩🇿 Conçu pour l'Algérie & Afrique du Nord
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Plus besoin de carte Visa internationale
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl">
              Payez vos crédits directement en Dinars Algériens (DZD) via vos moyens de paiement locaux.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            {LOCAL_PARTNERS.map((partner, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
                <div className="text-3xl mb-1">{partner.icon}</div>
                <div className="font-bold text-white text-sm">{partner.name}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{partner.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing in DZD */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Tarifs simples en DZD
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Achetez des packs de crédits rechargeables sans abonnement mensuel obligatoire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Pack Découverte</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">1,500</span>
                  <span className="text-lg font-bold text-teal-400">DA</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">100 Crédits (~30 Images ou 10 Vidéos)</p>
              </div>
              <button className="mt-8 w-full py-3 rounded-xl bg-slate-800 text-white font-bold text-sm">
                Acheter
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-teal-500/10">
              <div>
                <span className="bg-teal-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase">Recommandé</span>
                <h3 className="text-lg font-bold text-white mt-4">Pack Créateur Pro</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">4,500</span>
                  <span className="text-lg font-bold text-teal-400">DA</span>
                </div>
                <p className="text-xs text-teal-300 mt-1 font-semibold">400 Crédits (350 + 50 Bonus)</p>
              </div>
              <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold text-sm">
                Obtenir le Pack Pro
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Pack Business</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">12,000</span>
                  <span className="text-lg font-bold text-teal-400">DA</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">1,000 Crédits + Support Prioritaire</p>
              </div>
              <button className="mt-8 w-full py-3 rounded-xl bg-slate-800 text-white font-bold text-sm">
                Acheter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-white font-bold">Jaxxy.ai © 2026 Algeria</span>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Support DZD</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
