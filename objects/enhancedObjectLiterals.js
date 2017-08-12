let inventory = [ { name: 'potatoes' } ];

let obj = {
  inventory, // inventory: inventory .. if prop key is same as value variable name only one occurence is needed
  inventoryLog() {
    //prop: function() or () => no longer needed
    console.log('this.inventory', this.inventory);
  }
};

obj.inventoryLog();
