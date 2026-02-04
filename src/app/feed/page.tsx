"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Heart, MessageSquare, Share2, Code2, Video, Image as ImageIcon, 
  MoreHorizontal, Filter, Search, Award, Github, PlayCircle, Layers, 
  Terminal, TrendingUp, CheckCircle2 
} from 'lucide-react';

// --- Types ---
type PostType = 'update' | 'milestone' | 'demo';

interface Post {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
    role: string;
    isOpenToWork: boolean;
  };
  content: string;
  type: PostType;
  timestamp: string;
  tags: string[];
  // Proof of Work Assets
  codeSnippet?: { language: string; code: string };
  mediaUrl?: string; // Image or Video thumbnail
  mediaType?: 'image' | 'video';
  hackathonContext?: { name: string; slug: string; rank?: string }; // Linked Hackathon
  metrics: { likes: number; comments: number };
}

// --- Mock Data ---
const MOCK_POSTS: Post[] = [
  {
    id: '1',
    user: {
      name: "Sarah Chen",
      handle: "@sarah_builds",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      role: "Blockchain Dev",
      isOpenToWork: true
    },
    content: "Finally got the Zero-Knowledge Proof verification working on the testnet! 🚀 Reduced gas costs by 40% using the new batching logic. Here is the core circuit logic:",
    type: 'milestone',
    timestamp: '2h ago',
    tags: ['Solidity', 'ZK-Rollup', 'Web3'],
    codeSnippet: {
      language: 'solidity',
      code: `function verifyProof(
    uint[2] memory a,
    uint[2][2] memory b,
    uint[2] memory c,
    uint[1] memory input
) public view returns (bool) {
    // Verifying zk-SNARK proof on-chain
    return verifier.verifyTx(a, b, c, input);
}`
    },
    hackathonContext: { name: 'CyberStrike 2025', slug: 'cyberstrike-2025' },
    metrics: { likes: 124, comments: 18 }
  },
  {
    id: '2',
    user: {
      name: "David Park",
      handle: "@d_park_ai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      role: "ML Engineer",
      isOpenToWork: false
    },
    content: "Demo of my multi-modal agent interacting with the canvas API. It can now 'see' the UI and suggest CSS fixes in real-time. 🎨🤖",
    type: 'demo',
    timestamp: '5h ago',
    tags: ['Python', 'OpenAI', 'React'],
    mediaUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
    mediaType: 'video',
    hackathonContext: { name: 'Neural Nexus AI', slug: 'neural-nexus-ai', rank: 'Top 10 Finalist' },
    metrics: { likes: 856, comments: 42 }
  },
  {
    id: '3',
    user: {
      name: "Alex Rivera",
      handle: "@arivera",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
      role: "Frontend Architect",
      isOpenToWork: true
    },
    content: "Just shipped the new glass-morphism UI kit for our team. The performance score is 100 on Lighthouse! ⚡️ Check the repo.",
    type: 'update',
    timestamp: '1d ago',
    tags: ['Next.js', 'Tailwind', 'UI/UX'],
    mediaUrl: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?auto=format&fit=crop&q=80&w=600",
    mediaType: 'image',
    metrics: { likes: 45, comments: 7 }
  }
];

const TABS = [
  { id: 'all', label: 'Global Feed' },
  { id: 'following', label: 'Following' },
  { id: 'hackathons', label: 'My Missions' }
];

const RECRUITER_FILTERS = ["React", "Solidity", "Python", "Rust", "AI/ML", "DeFi"];

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter Logic (Simulated)
  const filteredPosts = useMemo(() => {
    let posts = MOCK_POSTS;
    if (activeTab === 'hackathons') {
      posts = posts.filter(p => p.hackathonContext);
    }
    if (activeFilter) {
      posts = posts.filter(p => p.tags.includes(activeFilter));
    }
    return posts;
  }, [activeTab, activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50/50 mt-20">
      
      {/* Mobile Top Bar */}
      <div className="lg:hidden sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
         <h1 className="font-bold text-lg">ProFeed</h1>
         <div className="w-8 h-8 rounded-full bg-primary/20" /> 
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 px-4 pb-20">
        
        {/* --- LEFT SIDEBAR: User Profile (Hidden on Mobile) --- */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            <UserProfileCard />
            <NavigationMenu />
          </div>
        </div>

        {/* --- CENTER: The Feed --- */}
        <main className="lg:col-span-6 space-y-6">
          
          {/* Create Post Input */}
          <CreatePostBox />

          {/* Feed Tabs */}
          <div className="flex items-center gap-2 border-b border-border bg-background/50 backdrop-blur-sm sticky top-14 lg:top-0 z-20 pt-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Filter Pill (Mobile Visible) */}
          {activeFilter && (
            <div className="flex items-center gap-2 animate-fade-in-up">
              <span className="text-xs text-muted-foreground">Filtered by:</span>
              <button 
                onClick={() => setActiveFilter(null)}
                className="badge-success bg-primary text-white border-primary px-3 py-1 flex items-center gap-2 hover:bg-primary-dark"
              >
                {activeFilter} <span className="text-[10px]">✕</span>
              </button>
            </div>
          )}

          {/* Post Stream */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            
            {/* End of Feed */}
            <div className="py-8 text-center text-muted-foreground">
               <p className="text-sm">You're all caught up!</p>
            </div>
          </div>
        </main>

        {/* --- RIGHT SIDEBAR: Recruiter Tools (Hidden on Mobile) --- */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            
            {/* Recruiter Radar */}
            <div className="premium-card p-5 bg-white border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                 <Search size={18} className="text-primary" />
                 <h3 className="font-bold text-slate-800">Recruiter Radar</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Filter feed by technical competencies to find talent with specific proof of work.
              </p>
              <div className="flex flex-wrap gap-2">
                {RECRUITER_FILTERS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveFilter(tag === activeFilter ? null : tag)}
                    className={`text-xs px-2.5 py-1.5 rounded-md border transition-all ${
                      activeFilter === tag 
                        ? 'bg-primary text-white border-primary shadow-md' 
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-primary/50'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Hacks */}
            <div className="premium-card p-5 bg-slate-50 border-transparent">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} className="text-secondary-foreground" />
                <h3 className="font-bold text-slate-800">Trending Missions</h3>
              </div>
              <div className="space-y-3">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-primary">
                        #{i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">CyberStrike 2025</p>
                        <p className="text-[10px] text-muted-foreground">2.4k Posts</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function PostCard({ post }: { post: Post }) {
  return (
    <div className="premium-card bg-white p-0 overflow-hidden hover:shadow-md transition-shadow">
      
      {/* Header */}
      <div className="p-4 flex justify-between items-start">
        <div className="flex gap-3">
          <Link href={`/u/${post.user.handle}`}>
             <div className="relative">
                <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                {post.user.isOpenToWork && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" title="Open to Work" />
                )}
             </div>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/u/${post.user.handle}`} className="font-bold text-slate-900 hover:underline">{post.user.name}</Link>
              <span className="text-xs text-muted-foreground">{post.user.handle}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
               <span>{post.user.role}</span>
               <span>•</span>
               <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-2">
        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap mb-3">
          {post.hackathonContext && (
             <span className="block mb-2 text-xs font-medium text-primary bg-primary/5 w-fit px-2 py-0.5 rounded border border-primary/10">
                🚀 Building for {post.hackathonContext.name} {post.hackathonContext.rank && `— ${post.hackathonContext.rank}`}
             </span>
          )}
          {post.content}
        </p>
      </div>

      {/* Rich Media / Proof of Work */}
      {post.codeSnippet && (
        <div className="px-4 pb-4">
          <div className="rounded-lg bg-slate-900 overflow-hidden border border-slate-800">
             <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800 border-b border-slate-700">
                <span className="text-[10px] text-slate-400 uppercase font-mono">{post.codeSnippet.language}</span>
                <Code2 size={12} className="text-slate-400" />
             </div>
             <pre className="p-3 overflow-x-auto text-xs font-mono text-emerald-400">
                {post.codeSnippet.code}
             </pre>
          </div>
        </div>
      )}

      {post.mediaUrl && (
        <div className="relative w-full bg-slate-100 border-y border-slate-100">
          <img src={post.mediaUrl} alt="Post content" className="w-full h-auto max-h-[400px] object-cover" />
          {post.mediaType === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer hover:bg-black/30 transition-colors">
               <PlayCircle className="text-white w-16 h-16 opacity-90 group-hover:scale-110 transition-transform" />
            </div>
          )}
        </div>
      )}

      {/* Footer Tags & Actions */}
      <div className="p-4 pt-2">
        <div className="flex flex-wrap gap-2 mb-4">
           {post.tags.map(tag => (
             <span key={tag} className="text-[11px] font-medium text-slate-500 hover:text-primary cursor-pointer">#{tag}</span>
           ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
           <div className="flex gap-6">
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-pink-500 transition-colors text-sm group">
                 <Heart size={18} className="group-hover:fill-pink-500" /> 
                 <span>{post.metrics.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm">
                 <MessageSquare size={18} /> 
                 <span>{post.metrics.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-sm">
                 <Share2 size={18} /> 
              </button>
           </div>
           
           {/* Recruiter Action */}
           {post.codeSnippet || post.mediaUrl ? (
             <button className="text-xs font-bold text-primary border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all">
                View Project
             </button>
           ) : null}
        </div>
      </div>
    </div>
  );
}

function CreatePostBox() {
  return (
    <div className="premium-card p-4 bg-white shadow-sm">
      <div className="flex gap-3">
         <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0" /> {/* Current User Avatar */}
         <div className="flex-1">
            <input 
              type="text" 
              placeholder="Share your build progress, code snippets, or deployment URL..." 
              className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 text-sm py-2"
            />
         </div>
      </div>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
         <div className="flex gap-2">
            <IconButton icon={<Code2 size={18} />} label="Code" />
            <IconButton icon={<ImageIcon size={18} />} label="Media" />
            <IconButton icon={<Terminal size={18} />} label="Gist" />
         </div>
         <button className="bg-slate-900 text-white text-sm font-bold px-4 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">
            Post Update
         </button>
      </div>
    </div>
  );
}

function UserProfileCard() {
  return (
    <div className="premium-card p-0 bg-white overflow-hidden">
      <div className="h-20 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
      <div className="px-5 pb-5 relative">
        <div className="absolute -top-8 left-5 w-16 h-16 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
           <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" />
        </div>
        <div className="pt-10 mb-3">
           <h2 className="font-bold text-lg text-slate-900">You</h2>
           <p className="text-sm text-muted-foreground">Frontend Engineer</p>
        </div>
        
        <div className="flex justify-between items-center py-3 border-y border-slate-100 mb-3">
           <div className="text-center">
              <p className="text-sm font-bold text-slate-800">12</p>
              <p className="text-[10px] text-muted-foreground uppercase">Hacks</p>
           </div>
           <div className="text-center border-l border-slate-100 pl-4">
              <p className="text-sm font-bold text-slate-800">Top 5%</p>
              <p className="text-[10px] text-muted-foreground uppercase">Rank</p>
           </div>
           <div className="text-center border-l border-slate-100 pl-4">
              <p className="text-sm font-bold text-slate-800">842</p>
              <p className="text-[10px] text-muted-foreground uppercase">Karma</p>
           </div>
        </div>
        
        <Link href="/u/me" className="block text-center text-xs font-bold text-primary hover:underline">
           View My Profile
        </Link>
      </div>
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className="premium-card p-2 bg-white flex flex-col">
       <NavItem icon={<Award size={18} />} label="My Hackathons" active />
       <NavItem icon={<Github size={18} />} label="Repositories" />
       <NavItem icon={<Layers size={18} />} label="Saved Snipets" />
    </div>
  )
}

const IconButton = ({ icon, label }: { icon: any, label: string }) => (
  <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors" title={label}>
    {icon}
  </button>
);

const NavItem = ({ icon, label, active }: { icon: any, label: string, active?: boolean }) => (
  <button className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:bg-slate-50'}`}>
     {icon}
     {label}
  </button>
);