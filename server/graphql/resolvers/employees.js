const Employee = require("../../models/Employee");

module.exports = {
  Query: {
    async getEmployees() {
      try {
        const employees = await Employee.find();
        return employees;
      } catch (err) {
        throw new Error(err);
      }
    },
  }
}
