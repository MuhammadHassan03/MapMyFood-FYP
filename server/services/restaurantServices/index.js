const Item = require('../../models/Item')
const Menu = require('../../models/Menu');
const User = require('../../models/User')

const createItem = async (req, res) => {
    const { _id } = req?.user;
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: "Items should be a non-empty array." });
    }

    try {
        const itemPromises = items.map(item => {
            const newItem = new Item({
                itemName: item.itemName,
                ingredients: item.ingredients,
                price: item.price,
                restaurantId: _id
            });
            return newItem.save();
        });

        const savedItems = await Promise.all(itemPromises);

        const menu = await Menu.findOneAndUpdate(
            { restaurant: _id },
            { $addToSet: { items: { $each: savedItems.map(item => item._id) } } },
            { new: true, upsert: true }
        );

        await User.findByIdAndUpdate(
            _id,
            { menu: menu._id }
        );


        return res.status(201).json({
            message: "Items created and menu updated successfully.",
            items: savedItems,
            menu
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Could not create menu items." });
    }

}

const getItems = async (req, res) => {
    const { _id } = req?.user;

    try {
        const menu = await Menu.findOne({ restaurant: _id }).populate('items');

        if (!menu) {
            return res.status(404).json({ message: "No Menu was Created. Create One Now." });
        }

        return res.status(200).json({
            message: "Menu items retrieved successfully.",
            items: menu.items
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Could not retrieve menu items." });
    }
}

const getItem = async (req, res) => {
    const { _id } = req?.user;
    const { idemId } = req.params;

    try {
        const item = await Item.findById(idemId);

        if (!item) {
            return res.status(404).json({ message: "Menu Item Not Found." });
        }

        return res.status(200).json({
            message: "Menu item retrieved successfully.",
            item: item
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Could not retrieve item." });
    }
}

const updateItem = async (req, res) => {
    const { itemId } = req.params;
    const { itemName, ingredients, price } = req.body;

    try {
        const updatedItem = await Item.findByIdAndUpdate(
            itemId,
            { itemName, ingredients, price },
            { new: true, runValidators: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found." });
        }

        return res.status(200).json({ message: "Item updated successfully.", item: updatedItem });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Could not update the item." });
    }
}

const deleteItem = async (req, res) => {
    const { itemId } = req.params;
    const { _id } = req.user;

    try {
        const deletedItem = await Item.findByIdAndDelete(itemId);

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found." });
        }

        const menu = await Menu.find({ restaurant: _id })
        menu.items.pull(itemId);
        await menu.save();

        return res.status(200).json({ message: "Item deleted successfully.", item: deletedItem });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Could not delete the item." });
    }
}

const createMenu = async (req, res) => {
    const { menuName, isPublic, items } = req.body;
    const { _id } = req.user;

    const menu = new Menu({
        menuName: menuName,
        isPublic: isPublic,
        restaurant: _id,
        items: items
    })

    await menu.save();
   
    return res.status(200).json({ message: "Menu Created successfully.", menu: menu });
}

const getMenu = async (req, res) => {
    const { _id } = req.user;

    try {
        const menus = await Menu.find({ restaurant: _id }).populate('items');

        if (!menus) {
            return res.status(404).json({ message: "No Menu was Created. Create One Now" });
        }

        if (menus.length > 0) {
            return res.status(200).json({ message: "Menu Fetched successfully.", menu: menus });
        }

        return res.status(200).json({ message: "You have no Menu Created Yet. Hurry up create one now" });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Could not find Menu." });

    }
}

const deleteMenu = async (req, res) => {
    const { menuId } = req.params;

    try {
        const menu = await Menu.findOneAndDelete({ restaurant: menuId }).populate('items');

        console.log('menu', menu)

        if (!menu) {
            return res.status(404).json({ message: "No Menu found. Create one now." });
        }

        if (menu.items && menu.items.length > 0) {
            await Item.deleteMany({ _id: { $in: menu.items } });
        }

        return res.status(200).json({ message: "Menu and associated items deleted successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error. Could not delete menu and items." });
    }
};

module.exports = { createItem, getItems, updateItem, deleteItem, getItem, createMenu, getMenu, deleteMenu }