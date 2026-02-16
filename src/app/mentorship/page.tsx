"use client"
import { Star, Briefcase, Clock, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { toast } from "@/app/admin-dashboard/hooks/use-toast";

const mentors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    role: "AI/ML Lead @ Google",
    expertise: ["Machine Learning", "Python", "TensorFlow"],
    avatar: "AS",
    rating: 4.9,
    sessions: 120,
    bio: "10+ years in AI research. Passionate about helping newcomers build their first ML project.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Full-Stack Dev @ Microsoft",
    expertise: ["React", "Node.js", "System Design"],
    avatar: "RV",
    rating: 4.8,
    sessions: 95,
    bio: "Expert in scalable web apps. Will guide you from ideation to deployment.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Product Manager @ Flipkart",
    expertise: ["Product Strategy", "UI/UX", "Pitching"],
    avatar: "PP",
    rating: 4.7,
    sessions: 78,
    bio: "Helps teams refine their pitch and product vision for winning presentations.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Hiring Manager @ Amazon",
    expertise: ["Resume Building", "DSA", "Interview Prep"],
    avatar: "VS",
    rating: 4.9,
    sessions: 200,
    bio: "Conducted 500+ interviews. Will help you crack your dream job after the hackathon.",
  },
  {
    id: 5,
    name: "Sneha Gupta",
    role: "Blockchain Dev @ Polygon",
    expertise: ["Web3", "Solidity", "Smart Contracts"],
    avatar: "SG",
    rating: 4.6,
    sessions: 60,
    bio: "Building the decentralized future. Guides teams building Web3 projects.",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    role: "DevOps Engineer @ Razorpay",
    expertise: ["Cloud", "CI/CD", "Docker"],
    avatar: "AM",
    rating: 4.8,
    sessions: 85,
    bio: "Helps teams deploy and scale their hackathon projects with best DevOps practices.",
  },
];

const schedule = [
  { time: "10:00 AM", title: "Hackathon Orientation", mentor: "All Mentors", type: "briefing", description: "How the hackathon works, rules, judging criteria, and tips to win." },
  { time: "11:00 AM", title: "Ideation Workshop", mentor: "Priya Patel", type: "workshop", description: "Brainstorm ideas, validate them, and create your project roadmap." },
  { time: "1:00 PM", title: "Tech Stack Guidance", mentor: "Rahul Verma", type: "workshop", description: "Choose the right tech stack for your project and set up your environment." },
  { time: "3:00 PM", title: "1-on-1 Mentor Sessions", mentor: "Available Mentors", type: "session", description: "Book a slot with any mentor for personalized guidance on your project." },
  { time: "5:00 PM", title: "Career & Job Guidance", mentor: "Vikram Singh", type: "career", description: "How to leverage your hackathon project for job applications and interviews." },
  { time: "7:00 PM", title: "Pitch Practice", mentor: "Priya Patel", type: "workshop", description: "Practice and refine your final presentation before the judges." },
];

const typeColors: Record<string, string> = {
  briefing: "bg-primary/15 text-primary",
  workshop: "bg-secondary/15 text-secondary",
  session: "bg-accent/15 text-accent",
  career: "bg-destructive/15 text-destructive",
};

const Mentorship = () => {
  const handleBook = (mentorName: string) => {
    toast({ title: "📅 Session Requested!", description: `Request sent to ${mentorName}. You'll be notified soon.` });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mentor Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Expert Guidance
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
            Meet Your <span className="gradient-text">Mentors</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Industry experts ready to guide you through the hackathon — from building your project to landing your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="group vendor-card-hover rounded-xl overflow-hidden bg-card shadow-[var(--card-shadow)] p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-primary font-display font-bold text-lg">
                  {mentor.avatar}
                </div>
                <div>
                  <h3 className="font-body font-bold text-lg text-card-foreground">{mentor.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {mentor.role}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mentor.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {mentor.expertise.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold text-foreground">{mentor.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">{mentor.sessions} sessions</span>
              </div>

              <Button
                onClick={() => handleBook(mentor.name)}
                className="w-full rounded-full"
                size="sm"
              >
                Book Session
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            Day Schedule
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
            Mentorship <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Plan your day — attend briefings, workshops, and career guidance sessions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl bg-card shadow-[var(--card-shadow)] vendor-card-hover"
            >
              <div className="flex flex-col items-center min-w-[72px]">
                <Clock className="w-4 h-4 text-primary mb-1" />
                <span className="text-sm font-bold text-foreground whitespace-nowrap">{item.time}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-body font-bold text-foreground">{item.title}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeColors[item.type]}`}>
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.mentor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mentorship;
