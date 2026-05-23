const Profile = require('../models/Profile');

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({});
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateProfile = async (req, res) => {
  const { name, title, email, location, about } = req.body;

  try {
    let profile = await Profile.findOne({});

    if (profile) {
      profile.name = name || profile.name;
      profile.title = title || profile.title;
      profile.email = email || profile.email;
      profile.location = location || profile.location;
      profile.about = about || profile.about;

      const updatedProfile = await profile.save();
      res.json(updatedProfile);
    } else {
      profile = new Profile({
        name,
        title,
        email,
        location,
        about,
      });
      const createdProfile = await profile.save();
      res.status(201).json(createdProfile);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getProfile, updateProfile };
