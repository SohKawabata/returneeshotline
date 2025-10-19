import { useState, useEffect } from 'react';
import { supabase, UserRole } from '../../lib/supabase';
import { Shield, Plus, Trash2, Save, X } from 'lucide-react';

interface UserRoleData {
  id: string;
  user_id: string;
  role: UserRole;
  created_at: string;
  email?: string;
}

export default function UserManager() {
  const [userRoles, setUserRoles] = useState<UserRoleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState<UserRole>('contributor');

  useEffect(() => {
    fetchUserRoles();
  }, []);

  async function fetchUserRoles() {
    setLoading(true);
    const { data: rolesData, error } = await supabase
      .from('user_roles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching user roles:', error);
      setLoading(false);
      return;
    }

    const rolesWithEmails: UserRoleData[] = [];

    for (const role of rolesData || []) {
      const { data: userData } = await supabase.auth.admin.getUserById(role.user_id);
      rolesWithEmails.push({
        ...role,
        email: userData?.user?.email,
      });
    }

    setUserRoles(rolesWithEmails);
    setLoading(false);
  }

  async function handleCreateUser() {
    if (!newEmail || !newPassword) {
      alert('Please fill in all fields');
      return;
    }

    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email: newEmail,
      password: newPassword,
    });

    if (signUpError) {
      console.error('Error creating user:', signUpError);
      alert('Failed to create user: ' + signUpError.message);
      return;
    }

    if (authData.user) {
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert([
          {
            user_id: authData.user.id,
            role: newRole,
          },
        ]);

      if (roleError) {
        console.error('Error assigning role:', roleError);
        alert('User created but failed to assign role');
      } else {
        setIsCreating(false);
        setNewEmail('');
        setNewPassword('');
        setNewRole('contributor');
        fetchUserRoles();
      }
    }
  }

  async function handleUpdateRole(userId: string, newRole: UserRole) {
    const { error } = await supabase
      .from('user_roles')
      .update({ role: newRole, updated_at: new Date().toISOString() })
      .eq('user_id', userId);

    if (error) {
      console.error('Error updating role:', error);
      alert('Failed to update role');
    } else {
      fetchUserRoles();
    }
  }

  async function handleDeleteUser(userId: string) {
    if (!confirm('Are you sure you want to delete this user? This will remove their access.')) return;

    const { error } = await supabase
      .from('user_roles')
      .delete()
      .eq('user_id', userId);

    if (error) {
      console.error('Error deleting user role:', error);
      alert('Failed to remove user');
    } else {
      fetchUserRoles();
    }
  }

  if (loading) return <div className="p-8">Loading users...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-900">User Management</h2>
        {!isCreating && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            Add User
          </button>
        )}
      </div>

      {isCreating && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Create New User</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="user@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password *</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Min. 6 characters"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Role *</label>
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value as UserRole)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="contributor">Contributor</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
              <p className="text-xs text-slate-500 mt-1">
                Contributor: Can create and edit own content | Editor: Can edit all content | Admin: Full access
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleCreateUser}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Save className="w-4 h-4" />
                Create User
              </button>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setNewEmail('');
                  setNewPassword('');
                  setNewRole('contributor');
                }}
                className="flex items-center gap-2 bg-slate-200 text-slate-700 px-6 py-2 rounded-lg hover:bg-slate-300 transition"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Email</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Role</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Created</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-slate-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {userRoles.map((userRole) => (
              <tr key={userRole.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-900">{userRole.email || 'Unknown'}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={userRole.role}
                    onChange={(e) => handleUpdateRole(userRole.user_id, e.target.value as UserRole)}
                    className="px-3 py-1 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="contributor">Contributor</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {new Date(userRole.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDeleteUser(userRole.user_id)}
                    className="inline-flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {userRoles.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No users yet. Create your first user!
          </div>
        )}
      </div>
    </div>
  );
}
