import { useState, useEffect } from 'react';
import axios from 'axios';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const API_URL = 'https://portfolio-backend-sohaib.fly.dev';

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/projects`);
      setProjects(res.data);
    } catch (error) {
      console.error('Error fetching projects', error);
    }
  };

  const openModal = (project = null) => {
    if (project) {
      setCurrentProject(project);
      setTitle(project.title);
      setDescription(project.description);
      setGithub(project.github);
      setTags(project.tags.join(', '));
      setImage(null); // Can't easily pre-fill file input
    } else {
      setCurrentProject(null);
      setTitle('');
      setDescription('');
      setGithub('');
      setTags('');
      setImage(null);
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('github', github);
    formData.append('tags', tags);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (currentProject) {
        await axios.put(`${API_URL}/api/projects/${currentProject._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post(`${API_URL}/api/projects`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      fetchProjects();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving project', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`${API_URL}/api/projects/${id}`);
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project', error);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Projects Management</h2>
        <button 
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project._id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden bg-gray-800">
              {project.image && <img src={project.image.startsWith('http') ? project.image : `${API_URL}${project.image}`} alt={project.title} className="w-full h-full object-cover" />}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{project.description.substring(0, 100)}...</p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm">View Code</a>
                <div className="flex space-x-2">
                  <button onClick={() => openModal(project)} className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(project._id)} className="p-2 text-rose-400 hover:text-white hover:bg-rose-500/20 rounded">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">{currentProject ? 'Edit Project' : 'Add New Project'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows="4" className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-indigo-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">GitHub Link</label>
                <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} required className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Tags (comma separated)</label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="React, Node, MongoDB" className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Image {currentProject && '(leave blank to keep current)'}</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-indigo-500" />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-800 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
