import { useState, useEffect } from 'react';
import { supabase, ResearchArticle } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';

export default function ResearchManager() {
  const [articles, setArticles] = useState<ResearchArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { user, isAdmin, isEditor } = useAuth();

  const emptyArticle: Partial<ResearchArticle> = {
    title: '',
    abstract: '',
    content: '',
    authors: '',
    publication_date: new Date().toISOString().split('T')[0],
    published: false,
  };

  const [formData, setFormData] = useState<Partial<ResearchArticle>>(emptyArticle);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    setLoading(true);
    const { data, error } = await supabase
      .from('research_articles')
      .select('*')
      .order('publication_date', { ascending: false });

    if (error) {
      console.error('Error fetching research:', error);
    } else {
      setArticles(data || []);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!formData.title || !formData.abstract || !formData.content || !formData.authors || !formData.publication_date) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from('research_articles')
        .update({ ...formData, updated_at: new Date().toISOString() })
        .eq('id', editingId);

      if (error) {
        console.error('Error updating research:', error);
        alert('Failed to update research');
      } else {
        setEditingId(null);
        fetchArticles();
      }
    } else {
      const { error } = await supabase
        .from('research_articles')
        .insert([{ ...formData, created_by: user?.id }]);

      if (error) {
        console.error('Error creating research:', error);
        alert('Failed to create research');
      } else {
        setIsCreating(false);
        setFormData(emptyArticle);
        fetchArticles();
      }
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this research article?')) return;
    const { error } = await supabase.from('research_articles').delete().eq('id', id);
    if (error) {
      console.error('Error deleting research:', error);
      alert('Failed to delete research');
    } else {
      fetchArticles();
    }
  }

  async function togglePublished(article: ResearchArticle) {
    const { error } = await supabase
      .from('research_articles')
      .update({ published: !article.published })
      .eq('id', article.id);
    if (!error) fetchArticles();
  }

  function handleEdit(article: ResearchArticle) {
    setEditingId(article.id);
    setFormData(article);
    setIsCreating(false);
  }

  function handleCancel() {
    setEditingId(null);
    setIsCreating(false);
    setFormData(emptyArticle);
  }

  const canEdit = isAdmin || isEditor;

  if (loading) return <div className="p-8">Loading research articles...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Research Articles</h2>
        {!isCreating && !editingId && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            New Article
          </button>
        )}
      </div>

      {(isCreating || editingId) && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {editingId ? 'Edit Research Article' : 'Create New Research Article'}
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Authors *</label>
                <input
                  type="text"
                  value={formData.authors || ''}
                  onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                  placeholder="John Doe, Jane Smith"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Publication Date *</label>
                <input
                  type="date"
                  value={formData.publication_date || ''}
                  onChange={(e) => setFormData({ ...formData, publication_date: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Abstract *</label>
              <textarea
                value={formData.abstract || ''}
                onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Content *</label>
              <textarea
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={8}
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
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">{article.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${article.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {article.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{article.authors}</p>
                <p className="text-sm text-slate-500 mb-3">
                  Published: {new Date(article.publication_date).toLocaleDateString()}
                </p>
                <p className="text-slate-600 line-clamp-2">{article.abstract}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button onClick={() => togglePublished(article)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition">
                  {article.published ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {canEdit && (
                  <>
                    <button onClick={() => handleEdit(article)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    {isAdmin && (
                      <button onClick={() => handleDelete(article.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        {articles.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No research articles yet. Create your first article!
          </div>
        )}
      </div>
    </div>
  );
}
