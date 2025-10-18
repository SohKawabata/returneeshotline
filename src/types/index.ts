export type Page =
  | 'home'
  | 'about'
  | 'programs'
  | 'get-involved'
  | 'events'
  | 'research'
  | 'team'
  | 'donate';

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  isPast?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}
