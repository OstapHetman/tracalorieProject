// Storage Controller

// Item Controller
const ItemCtrl = (function() {
    // Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure / State
    const data = {
        items: [
            { id: 0, name: 'Steak Dinner', calories: 1200 },
            { id: 1, name: 'Cookie', calories: 400 },
            { id: 2, name: 'Eggs', calories: 100 }
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public methods
    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        }
    }
})();

// UI Controller
const UICtrl = (function() {
    const UISelectros = {
        itemList: '#item-list'
    }

    // Public methods
    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(item => {
                html += `<li class="collection-item" id="item-${item.id}}">
                <strong>${item.name} </strong><em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
            });

            // Insert list items
            document.querySelector(UISelectros.itemList).innerHTML = html;
        }
    }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {

    // Public methods
    return {
        init: function() {
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // Populate List with items
            UICtrl.populateItemList(items);

        }
    }

})(ItemCtrl, UICtrl);

App.init();