const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],

    //getter for appetizer
    get appetizers () {
      return this._appetizers; 
    },
    //setter for appetizer
    set appetizers (appetizers) {
      this._appetizers = appetizers;
    },
    //getter for mains
    get mains () {
      return this._mains;
    },
    //setter for mains
    set mains (mains) {
      this._mains = mains;
    },
    //getter for desserts
    get desserts () {
      return this._desserts;
    },
  
    //setter for desserts
    set desserts (desserts) {
      this._desserts = desserts;
    },
},
    //getter for courses
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        };
    },
  
    //Add dish to course method
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },
  
    // Get random dish from course method
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
  
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. Your total is $${totalPrice}.`
    }
}
  
  menu.addDishToCourse("appetizers", "soup", 10.25);
  menu.addDishToCourse("appetizers", "salad", 9.60);
  menu.addDishToCourse("appetizers", "appple sauce", 5.75);
  menu.addDishToCourse("appetizers", "pudding cake", 6.99);
  menu.addDishToCourse("appetizers", "cheese", 8.00);
  
  menu.addDishToCourse("mains", "Homemade pasta", 20.89);
  menu.addDishToCourse("mains", "Slow-cooked white beans", 54.87);
  menu.addDishToCourse("mains", "Tartiflette and aragula salade", 45.23);
  menu.addDishToCourse("mains", "Celeriac purée,", 78.36);
  menu.addDishToCourse("mains", "Beet salad and fruit ketchup", 45.35);
  
  menu.addDishToCourse("desserts", "Caramel Cake", 10.25);
  menu.addDishToCourse("desserts", "White Chocolate", 11.25);
  menu.addDishToCourse("desserts", "Macaroon", 17.25);
  menu.addDishToCourse("desserts", "Iced Honey Nougatine", 9.25);
  menu.addDishToCourse("desserts", "Creme Brulee", 5.23);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  
  
  
  
  
  
  
  
  
  
