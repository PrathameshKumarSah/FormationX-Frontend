// app/u/[username]/page.tsx
import { Github, Linkedin, ExternalLink, Award, Code2, MessageSquare, Trophy } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background mt-16">
      {/* 1. Header / Intro Card */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div className="premium-card p-8 flex flex-col md:flex-row gap-8 items-center bg-white">
          <div className="w-32 h-32 rounded-2xl bg-primary/10 border-2 border-primary/20 overflow-hidden">
            <img src="/avatar.png" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">Alex Rivera</h1>
              <span className="badge-success">Open to Requests</span>
            </div>
            <p className="text-muted-foreground mb-4">Full Stack Engineer • Blockchain Specialist</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <a href="#" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-primary"><Github size={16}/> GitHub</a>
               <a href="#" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-primary"><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <MessageSquare size={18} /> Request Interview
          </button>
        </div>
      </div>

      {/* 2. Stats Grid (The "Signal") */}
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Hackathons Won" value="4" icon={<Award className="text-yellow-500" />} />
        <StatCard label="GitHub Commits" value="1.2k+" icon={<Code2 className="text-blue-500" />} />
        <StatCard label="Rank" value="Top 1%" icon={<Trophy className="text-primary" />} />
      </div>

      {/* 3. Proof of Work Section */}
      <div className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-bold">Hackathon History</h2>
          {/* Reuse your HackathonCard component but in a "Compact/History" mode */}
          <div className="premium-card p-6 bg-white">
             <div className="flex justify-between items-start">
                <div>
                   <h3 className="font-bold">Winner: CyberStrike 2025</h3>
                   <p className="text-sm text-muted-foreground mt-1">Built a ZK-Proof based identity protocol.</p>
                </div>
                <span className="text-xs font-bold text-primary uppercase">1st Place</span>
             </div>
             <div className="mt-4 flex gap-2">
                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">Solidity</span>
                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded">Next.js</span>
             </div>
          </div>
        </div>

        {/* Sidebar: Skills Verification */}
        <div className="space-y-6">
           <h2 className="text-xl font-bold">Verified Skills</h2>
           <div className="premium-card p-6 space-y-4">
              {['React', 'Rust', 'Go', 'AWS'].map(skill => (
                <div key={skill} className="flex items-center justify-between">
                   <span className="text-sm font-medium">{skill}</span>
                   <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '85%' }} />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: any) {
  return (
    <div className="premium-card p-6 bg-white flex items-center gap-4">
      <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}