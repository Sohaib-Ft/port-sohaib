const Project = require('../models/Project');

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a project
const createProject = async (req, res) => {
  try {
    const { title, description, github, tags } = req.body;
    let tagsArray = tags;
    if (typeof tags === 'string') {
      tagsArray = tags.split(',').map(tag => tag.trim());
    }

    const project = new Project({
      title,
      description,
      github,
      tags: tagsArray,
      image: req.file ? `/uploads/${req.file.filename}` : '',
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const { title, description, github, tags } = req.body;

    const project = await Project.findById(req.params.id);

    if (project) {
      project.title = title || project.title;
      project.description = description || project.description;
      project.github = github || project.github;
      
      if (tags) {
        project.tags = typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : tags;
      }

      if (req.file) {
        project.image = `/uploads/${req.file.filename}`;
      }

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      await Project.deleteOne({ _id: project._id });
      res.json({ message: 'Project removed' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
