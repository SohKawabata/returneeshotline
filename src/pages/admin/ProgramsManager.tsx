import { useState, useEffect } from 'react';
import { supabase, Program } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';

export default function ProgramsManager() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { user, isAdmin, isEditor } = useAuth();

  const emptyProgram: Partial<Program> = {
    title: '',
    description: '',
    content: '',
    image_url: '',
    published: false,
  };

  const [formData, setFormData] = useState<Partial<Program>>(emptyProgram);

  useEffect(() => {
    fetchPrograms();
  }, []);

  async function fetchPrograms() {
    setLoading(true);
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching programs:', error);
    } else {
      setPrograms(data || []);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!formData.title || !formData.description || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from('programs')
        .update({ ...formData, updated_at: new Date().toISOString() })
        .eq('id', editingId);

      if (error) {
        console.error('Error updating program:', error);
        alert('Failed to update program');
      } else {
        setEditingId(null);
        fetchPrograms();
      }
    } else {
      const { error } = await supabase
        .from('programs')
        .insert([{ ...formData, created_by: user?.id }]);

      if (error) {
        console.error('Error creating program:', error);
        alert('Failed to create program');
      } else {
        setIsCreating(false);
        setFormData(emptyProgram);
        fetchPrograms();
      }
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this program?')) return;
    const { error } = await supabase.from('programs').delete().eq('id', id);
    if (error) {
      console.error('Error deleting program:', error);
      alert('Failed to delete program');
    } else {
      fetchPrograms();
    }
  }

  async function togglePublished(program: Program) {
    const { error } = await supabase
      .from('programs')
      .update({ published: !program.published })
      .eq('id', program.id);
    if (!error) fetchPrograms();
  }

  function handleEdit(program: Program) {
    setEditingId(program.id);
    setFormData(program);
    setIsCreating(false);
  }

  function handleCancel() {
    setEditingId(null);
    setIsCreating(false);
    setFormData(emptyProgram);
  }

  const canEdit = isAdmin || isEditor;

  if (loading) return <div className="p-8">Loading programs...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Programs</h2>
        {!isCreating && !editingId && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            New Program
          </button>
        )}
      </div>

      {(isCreating || editingId) && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {editingId ? 'Edit Program' : 'Create New Program'}
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
              <label className="block text-sm font-medium text-slate-700 mb-2">Description *</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Content *</label>
              <textarea
                value={formData.content || ''}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={6}
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
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${program.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {program.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-slate-600">{program.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button onClick={() => togglePublished(program)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition">
                  {program.published ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {canEdit && (
                  <>
                    <button onClick={() => handleEdit(program)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    {isAdmin && (
                      <button onClick={() => handleDelete(program.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        {programs.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No programs yet. Create your first program!
          </div>
        )}
      </div>
    </div>
  );
}
