const bcrypt = require("bcrypt");

module.exports = {
  // Can't use arrow function here for the scope of this
  hashedPassword: async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);

      this.password = hashedPassword;
    } catch (err) {
      next(error);
    }
  },

  // Can't use arrow function here for the scope of this
  validatePassword: async function (newPassword) {
    try {
      return await bcrypt.compare(newPassword, this.password);
    } catch (err) {
      throw new Error(err);
    }
  },
};
