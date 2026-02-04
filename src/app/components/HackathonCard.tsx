// components/HackathonCard.tsx
import React from 'react';
import Link from 'next/link';
import { HackathonCardProps } from '../types';

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'ongoing': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Link href={`/hackathon/${hackathon?.id}`} >
      <div className="group cursor-pointer h-full">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 h-full flex flex-col">
          {/* Card Header with Status */}
          <div className="p-4 border-b border-gray-700/50 flex justify-between items-center">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(hackathon.status)}`}>
              {hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(hackathon.difficulty)}`}>
              {hackathon.difficulty}
            </span>
          </div>

          {/* Card Content */}
          <div className="p-5 flex-1">
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
              {hackathon.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {hackathon.description}
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {hackathon.themes.slice(0, 2).map((theme, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">
                    {theme}
                  </span>
                ))}
                {hackathon.themes.length > 2 && (
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs">
                    +{hackathon.themes.length - 2}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Prize Pool</span>
                <span className="font-bold text-yellow-400">${hackathon.prize.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Participants</span>
                <span className="font-medium">{hackathon.participants.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Duration</span>
                <span className="font-medium">{hackathon.duration}</span>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold mr-2">
                  {hackathon.organizer.charAt(0)}
                </div>
                <span className="text-sm text-gray-300">{hackathon.organizer}</span>
              </div>
              
              <div className="text-blue-400 text-sm font-medium group-hover:underline">
                View Details →
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HackathonCard;