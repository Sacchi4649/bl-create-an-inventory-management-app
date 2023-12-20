"use strict";

const itemModel = require("../models/itemSchema");

class itemController {
  static async addItem(req, res) {
    try {
      const { name, description, category, price, quantity } = req.body;
      const item = new itemModel({
        name,
        description,
        category,
        price,
        quantity,
      });
      await item.save();
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllItem(_, res) {
    try {
      const findCategory = await itemModel.find();
      res.status(200).json({ category: findCategory });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateItem(req, res) {
    try {
      const { id } = req.params;
      const { name, description, category, price, quantity } = req.body;

      const findItem = await itemModel.findOne({ _id: id });

      if (!findItem) {
        throw { message: "Item not found!" };
      }
      if (findItem._id == id) {
        const updateItem = await itemModel.findOneAndUpdate(
          {
            _id: id,
          },
          { name, description, category, price, quantity },
          { new: true, upsert: true }
        );
        res.status(200).json({ category: updateItem });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteItem(req, res) {
    try {
      const { id } = req.params;
      if (!(await itemModel.findOne({ _id: id }))) {
        throw { message: "Item not found!" };
      }
      await itemModel.findOneAndDelete({
        _id: id,
      });
      res.status(200).json({
        message: "Item deleted successfully!",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = itemController;
