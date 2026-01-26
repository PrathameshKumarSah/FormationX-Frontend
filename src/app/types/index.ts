//  Navigation ------------------------------------------------------

export type NavItemType = 'link' | 'dropdown';

export interface NavLink {
  label: string;
  href: string;
  type: NavItemType;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'outline' | 'secondary';
}

export interface NavigationData {
  navLinks: NavLink[];
  ctaButtons: {
    signIn: CTAButton;
    getStarted: CTAButton;
  };
}


// Hackathon types -------------------------------------------------



// types/index.ts
export type HackathonStatus = 'upcoming' | 'ongoing' | 'completed';
export type HackathonDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Hackathon {
  id: number;
  title: string;
  description: string;
  status: HackathonStatus;
  difficulty: HackathonDifficulty;
  themes: string[];
  organizer: string;
  prize: number;
  participants: number;
  duration: string;
  registrationDeadline: string;
  startDate: string;
  endDate: string;
  technologies: string[];
}

export interface FilterState {
  status: HackathonStatus | 'all';
  difficulty: HackathonDifficulty | 'all';
  theme: string;
}

export interface HackathonCardProps {
  hackathon: Hackathon;
}

export interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  resultCount: number;
}