import { useState, useEffect } from 'react';
import { supabase, NewsPost } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';

export default function NewsManager() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { user, isAdmin, isEditor } = useAuth();

  const emptyPost: Partial<NewsPost> = {
    title: '',
    excerpt: '',
    content: '',
    image_url: '',
    published: false,
  };

  const [formData, setFormData] = useState<Partial<NewsPost>>(emptyPost);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from('news_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!formData.title || !formData.excerpt || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from('news_posts')
        .update({ ...formData, updated_at: new Date().toISOString() })
        .eq('id', editingId);

      if (error) {
        console.error('Error updating news:', error);
        alert('Failed to update news post');
      } else {
        setEditingId(null);
        fetchPosts();
      }
    } else {
      const { error } = await supabase
        .from('news_posts')
        .insert([{ ...formData, created_by: user?.id }]);

      if (error) {
        console.error('Error creating news:', error);
        alert('Failed to create news post');
      } else {
        setIsCreating(false);
        setFormData(emptyPost);
        fetchPosts();
      }
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this news post?')) return;
    const { error } = await supabase.from('news_posts').delete().eq('id', id);
    if (error) {
      console.error('Error deleting news:', error);
      alert('Failed to delete news post');
    } else {
      fetchPosts();
    }
  }

  async function togglePublished(post: NewsPost) {
    const { error } = await supabase
      .from('news_posts')
      .update({ published: !post.published })
      .eq('id', post.id);
    if (!error) fetchPosts();
  }

  function handleEdit(post: NewsPost) {
    setEditingId(post.id);
    setFormData(post);
    setIsCreating(false);
  }

  function handleCancel() {
    setEditingId(null);
    setIsCreating(false);
    setFormData(emptyPost);
  }

  const canEdit = isAdmin || isEditor;

  if (loading) return <div className="p-8">Loading news posts...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900">News Posts</h2>
        {!isCreating && !editingId && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            New Post
          </button>
        )}
      </div>

      {(isCreating || editingId) && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {editingId ? 'Edit News Post' : 'Create New News Post'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title *</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Excerpt *</label>
              <textarea
                value={formData.excerpt || ''}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Content *</label>
              <textarea
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={8}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Image URL</label>
              <input
                type="url"
                value={formData.image_url || ''}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={formData.published || false}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="published" className="text-sm font-medium text-slate-700">
                Published
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-slate-200 text-slate-700 px-6 py-2 rounded-lg hover:bg-slate-300 transition"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-slate-600 mb-2">{post.excerpt}</p>
                <p className="text-xs text-slate-500">
                  Created: {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-2 ml-4">
                <button onClick={() => togglePublished(post)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition">
                  {post.published ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {canEdit && (
                  <>
                    <button onClick={() => handleEdit(post)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    {isAdmin && (
                      <button onClick={() => handleDelete(post.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No news posts yet. Create your first post!
          </div>
        )}
      </div>
    </div>
  );
}
