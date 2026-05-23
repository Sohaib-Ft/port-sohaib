const Skill = require('../models/Skill');

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createSkill = async (req, res) => {
  const { name, category, icon, role } = req.body;

  try {
    const skill = new Skill({
      name,
      category,
      icon,
      role: role || '',
    });

    const createdSkill = await skill.save();
    res.status(201).json(createdSkill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const updateSkill = async (req, res) => {
  const { name, category, icon, role } = req.body;

  try {
    const skill = await Skill.findById(req.params.id);

    if (skill) {
      skill.name = name || skill.name;
      skill.category = category || skill.category;
      skill.icon = icon !== undefined ? icon : skill.icon;
      skill.role = role !== undefined ? role : skill.role;

      const updatedSkill = await skill.save();
      res.json(updatedSkill);
    } else {
      res.status(404).json({ message: 'Skill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (skill) {
      await Skill.deleteOne({ _id: skill._id });
      res.json({ message: 'Skill removed' });
    } else {
      res.status(404).json({ message: 'Skill not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
