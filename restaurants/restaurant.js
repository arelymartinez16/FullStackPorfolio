class Restaurant {
    constructor(name, rating, numEmployees, menu) {
        this.name = name;
        this.rating = rating;
        this.numEmployees = numEmployees;
        this.menu = menu;
    }

    /* get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    } */

    hireWaitress() {
        this.numEmployees++;
    }

    fireEmployee() {
        this.numEmployees--;
    }
}