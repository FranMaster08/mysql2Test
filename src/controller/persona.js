const { persona } = require("../model");

module.exports = {
  findAll: async (req, res, next) => {
    try {
      const data = await persona.findAll();
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name, lastname, dni } = req.body;
      const data = await persona.create({ name, lastname, dni });
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, lastname, dni } = req.body;
      const data = await persona.update(id, { name, lastname, dni });
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await persona.deleted(id);
      res.status(200).json({ data, success: true });
    } catch (error) {
      next(error);
    }
  },
};
