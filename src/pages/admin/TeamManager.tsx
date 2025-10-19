import { useState, useEffect } from 'react';
import { supabase, TeamMember } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';

export default function TeamManager() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { user, isAdmin, isEditor } = useAuth();

  const emptyMember: Partial<TeamMember> = {
    name: '',
    role: '',
    bio: '',
    image_url: '',
    email: '',
    published: false,
    display_order: 0,
  };

  const [formData, setFormData] = useState<Partial<TeamMember>>(emptyMember);

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    setLoading(true);
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching team members:', error);
    } else {
      setMembers(data || []);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!formData.name || !formData.role || !formData.bio) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from('team_members')
        .update({ ...formData, updated_at: new Date().toISOString() })
        .eq('id', editingId);

      if (error) {
        console.error('Error updating team member:', error);
        alert('Failed to update team member');
      } else {
        setEditingId(null);
        fetchMembers();
      }
    } else {
      const { error } = await supabase
        .from('team_members')
        .insert([{ ...formData, created_by: user?.id }]);

      if (error) {
        console.error('Error creating team member:', error);
        alert('Failed to create team member');
      } else {
        setIsCreating(false);
        setFormData(emptyMember);
        fetchMembers();
      }
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    const { error } = await supabase.from('team_members').delete().eq('id', id);
    if (error) {
      console.error('Error deleting team member:', error);
      alert('Failed to delete team member');
    } else {
      fetchMembers();
    }
  }

  async function togglePublished(member: TeamMember) {
    const { error } = await supabase
      .from('team_members')
      .update({ published: !member.published })
      .eq('id', member.id);
    if (!error) fetchMembers();
  }

  function handleEdit(member: TeamMember) {
    setEditingId(member.id);
    setFormData(member);
    setIsCreating(false);
  }

  function handleCancel() {
    setEditingId(null);
    setIsCreating(false);
    setFormData(emptyMember);
  }

  const canEdit = isAdmin || isEditor;

  if (loading) return <div className="p-8">Loading team members...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Team Members</h2>
        {!isCreating && !editingId && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            New Team Member
          </button>
        )}
      </div>

      {(isCreating || editingId) && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {editingId ? 'Edit Team Member' : 'Add New Team Member'}
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Role/Title *</label>
                <input
                  type="text"
                  value={formData.role || ''}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Bio *</label>
              <textarea
                value={formData.bio || ''}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Display Order</label>
                <input
                  type="number"
                  value={formData.display_order || 0}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${member.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {member.published ? 'Published' : 'Draft'}
                </span>
              </div>
            </div>
            <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-sm text-slate-600 mb-3 line-clamp-2">{member.bio}</p>
            {member.email && <p className="text-xs text-slate-500 mb-3">{member.email}</p>}
            <div className="flex gap-2">
              <button onClick={() => togglePublished(member)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition">
                {member.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              {canEdit && (
                <>
                  <button onClick={() => handleEdit(member)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  {isAdmin && (
                    <button onClick={() => handleDelete(member.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
        {members.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-500">
            No team members yet. Add your first team member!
          </div>
        )}
      </div>
    </div>
  );
}
