"use strict";

const categoryModel = require("../models/categorySchema");

class categoryController {
  static async addCategory(req, res) {
    try {
      const { name, description } = req.body;
      const category = new categoryModel({
        name,
        description,
      });
      await category.save();
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllCategory(_, res) {
    try {
      const findCategory = await categoryModel.find();
      res.status(200).json({ category: findCategory });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      const findCategory = await categoryModel.findOne({ _id: id });

      if (!findCategory) {
        throw { message: "Category not found!" };
      }
      if (findCategory._id == id) {
        const updateCategory = await categoryModel.findOneAndUpdate(
          {
            _id: id,
          },
          { name, description },
          { new: true, upsert: true }
        );
        res.status(200).json({ category: updateCategory });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      if (!(await categoryModel.findOne({ _id: id }))) {
        throw { message: "Category not found!" };
      }
      await categoryModel.findOneAndDelete({
        _id: id,
      });
      res.status(200).json({
        message: "Category deleted successfully!",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = categoryController;
