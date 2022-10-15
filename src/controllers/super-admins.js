import SuperAdmins from '../models/Super-admins';

const getAllSuperAdmins = async (req, res) => {
  try {
    const superAdmins = await SuperAdmins.find();

    return res.status(200).json({
      message: 'Super admins found',
      data: superAdmins,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: `An error ocurred! ${error.message}`,
      error: true,
    });
  }
};

const createSuperAdmin = async (req, res) => {
  try {
    const superAdmin = new SuperAdmins({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    const result = await superAdmin.save();
    return res.status(201).json({
      message: 'Super Admin created successfuly',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: `An error ocurred! ${error.message}`,
      error: true,
    });
  }
};

export default {
  getAllSuperAdmins,
  createSuperAdmin,
};
