import { useState, useEffect } from 'react';
import { supabase, Event } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';

export default function EventsManager() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { user, isAdmin, isEditor } = useAuth();

  const emptyEvent: Partial<Event> = {
    title: '',
    description: '',
    date: new Date().toISOString().slice(0, 16),
    location: '',
    image_url: '',
    published: false,
  };

  const [formData, setFormData] = useState<Partial<Event>>(emptyEvent);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    setLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data || []);
    }
    setLoading(false);
  }

  async function handleSave() {
    if (!formData.title || !formData.description || !formData.date || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from('events')
        .update({
          ...formData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingId);

      if (error) {
        console.error('Error updating event:', error);
        alert('Failed to update event');
      } else {
        setEditingId(null);
        fetchEvents();
      }
    } else {
      const { error } = await supabase
        .from('events')
        .insert([
          {
            ...formData,
            created_by: user?.id,
          },
        ]);

      if (error) {
        console.error('Error creating event:', error);
        alert('Failed to create event');
      } else {
        setIsCreating(false);
        setFormData(emptyEvent);
        fetchEvents();
      }
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this event?')) return;

    const { error } = await supabase.from('events').delete().eq('id', id);

    if (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    } else {
      fetchEvents();
    }
  }

  async function togglePublished(event: Event) {
    const { error } = await supabase
      .from('events')
      .update({ published: !event.published })
      .eq('id', event.id);

    if (error) {
      console.error('Error toggling published:', error);
    } else {
      fetchEvents();
    }
  }

  function handleEdit(event: Event) {
    setEditingId(event.id);
    setFormData(event);
    setIsCreating(false);
  }

  function handleCancel() {
    setEditingId(null);
    setIsCreating(false);
    setFormData(emptyEvent);
  }

  const canEdit = isAdmin || isEditor;

  if (loading) {
    return <div className="p-8">Loading events...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Events</h2>
        {!isCreating && !editingId && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            New Event
          </button>
        )}
      </div>

      {(isCreating || editingId) && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {editingId ? 'Edit Event' : 'Create New Event'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Date & Time *
                </label>
                <input
                  type="datetime-local"
                  value={formData.date ? new Date(formData.date).toISOString().slice(0, 16) : ''}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location || ''}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Image URL
              </label>
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
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.published
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {event.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-slate-600 mb-3">{event.description}</p>
                <div className="flex gap-4 text-sm text-slate-500">
                  <span>{new Date(event.date).toLocaleString()}</span>
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => togglePublished(event)}
                  className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
                  title={event.published ? 'Unpublish' : 'Publish'}
                >
                  {event.published ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {canEdit && (
                  <>
                    <button
                      onClick={() => handleEdit(event)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {events.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No events yet. Create your first event!
          </div>
        )}
      </div>
    </div>
  );
}
