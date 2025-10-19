import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
          insert: async () => ({ data: [], error: null }),
          select: async () => ({ data: [], error: null }),
          update: async () => ({ data: [], error: null }),
          delete: async () => ({ data: [], error: null }),
        }),
        auth: {
          getSession: async () => ({
            data: { session: null },
            error: null,
          }),
          onAuthStateChange: (callback: any) => {
            const fakeSubscription = {
              data: { subscription: { unsubscribe: () => {} } },
            };
            callback('INITIAL_SESSION', { user: null });
            return fakeSubscription;
          },
        },
      };

// Optional: keep your types below
export type UserRole = 'admin' | 'editor' | 'contributor';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
  published: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  content: string;
  image_url: string;
  published: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  email: string;
  published: boolean;
  display_order: number;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface ResearchArticle {
  id: string;
  title: string;
  abstract: string;
  content: string;
  authors: string;
  publication_date: string;
  published: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  published: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}
