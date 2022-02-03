var menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],

    //getter for appetizer
    get appetizers () {
      return this._appetizers; 
    },
    //setter for appetizer
    set appetizers (newAppetizers) {
      this._appetizers = newAppetizers;
    },
    //getter for mains
    get mains () {
      return this._mains;
    },
    //setter for mains
    set mains (newMains) {
      this._mains = newMains;
    },
    //getter for desserts
    get desserts () {
      return this._desserts;
    },
  
    //setter for desserts
    set desserts (newDesserts) {
      this._desserts = newDesserts;
    },
  
    //getter for courses
    get courses (){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
  
    //Add dish to course method
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice 
      };
      return this._courses[courseName].push(dish);
    },
  
    // Get random dish from course method
    getRandomDishFromCourse (courseName){
      const dishes = this.courses[courseName];
      const random = Math.floor(Math.random() * dishes.length);
      return dishes[random];
    },
  
    generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    let totalPrice = appetizer.price +main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is ${totalPrice}`
    }
  }
};
  
  menu.addDishToCourse("appetizer", "soup", "10.25");
  menu.addDishToCourse("appetizer", "salad", "9.60");
  menu.addDishToCourse("appetizer", "appple sauce", "5.75");
  menu.addDishToCourse("appetizer", "pudding cake", "6.99");
  menu.addDishToCourse("appetizer", "cheese", "8.00");
  
  menu.addDishToCourse("mains", "Homemade pasta", "20.89");
  menu.addDishToCourse("mains", "Slow-cooked white beans", "54.87");
  menu.addDishToCourse("mains", "Tartiflette and aragula salade", "45.23");
  menu.addDishToCourse("mains", "Celeriac purée,", "78.36");
  menu.addDishToCourse("mains", "Beet salad and fruit ketchup", "45.35");
  
  menu.addDishToCourse("dessert", "Caramel Cake", "10.25");
  menu.addDishToCourse("dessert", "White Chocolate", "11.25");
  menu.addDishToCourse("dessert", "Macaroon", "17.25");
  menu.addDishToCourse("dessert", "Iced Honey Nougatine", "9.25");
  menu.addDishToCourse("dessert", "Creme Brulee", "5.23");
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  
  
  
  
  
  
  
  
  
  