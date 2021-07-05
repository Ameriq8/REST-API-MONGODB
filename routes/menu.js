const router = require("express").Router();
const Menu = require("../models/menuModel");

router.post("/new-item", async (req, res) => {
  try {
    const {name, category, description} = req.body;

    if (!name || !category || !description)
      return res.status(400).json({msg: "Not all fields have been entered"});

    const newItem = new Menu({
      name,
      category,
      description,
    });
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.get("/fetch-item/:id", async (req, res) => {
  const item = await Menu.findOne({id: req.params.id});
  res.json(item);
});

router.get("/fetch-items", async (req, res) => {
  const items = await Menu.find({});
  res.json(items);
});

router.delete("/delete/:id", auth, async (req, res) => {
  const item = await Menu.findOne({id: req.params.id});
  if (!item) return res.status(400).json({msg: "No item found !!"});
  const deletedItem = await Menu.findByIdAndDelete(item._id);
  res.json(deletedItem);
});

module.exports = router;
