import Admins from '../models/Admins';
import SuperAdmins from '../models/Super-admins';
import Employees from '../models/Employees';

const getUserProfile = async (req, res) => {
  try {
    const { role, firebaseUid } = req;
    if (role === 'ADMIN') {
      const admin = await Admins.findOne({ firebaseUid });
      if (admin) {
        return res.status(200).json({
          message: 'Admin found',
          data: admin,
        });
      }
    }

    if (role === 'SUPER_ADMIN') {
      const superAdmin = await SuperAdmins.findOne({ firebaseUid });
      if (superAdmin) {
        return res.status(200).json({
          message: 'Super Admin found',
          data: superAdmin,
        });
      }
    }

    if (role === 'EMPLOYEE') {
      const employee = await Employees.findOne({ firebaseUid });
      if (employee) {
        return res.status(200).json({
          message: 'Employee found',
          data: employee,
        });
      }
    }

    return res.status(404).json({
      message: 'User not found',
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
    });
  }
};

export default getUserProfile;
