'use strict'
// This is the random number generator, I'm setting it between min and max
function getRandom(max, min) {
    return Math.ceil(Math.random() * (max-min) + min);
}
// Const is an object, it contains an array, variables separate from the array, and a function. Objects contain a plethora of info that can be used in future reference.
const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersPerHour: function() {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;   
    },
    showit: function() {
        this.getCookies(); 
        let hoursArray = document.querySelector('.Seattle-output')
         for(let i = 0; i < this.hoursOfOperation.length; i++) { 
             let variable = document.createElement('li');
             variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
             hoursArray.append(variable);
         }
     }

}
seattle.showit();

const tokyo  = {
    min: 3,
    max: 24,
    avg: 1.2,
    location: 'Tokyo',
    hoursOfOperation: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersPerHour: function() {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('tokyo avg/sale', this.avg);
            console.log('tokyo avg customers/hour', this.customersPerHour());
            
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;   
    },
    showit: function() {
        this.getCookies(); 
        let hoursArray = document.querySelector('.Tokyo-output')
         for(let i = 0; i < this.hoursOfOperation.length; i++) { 
             let variable = document.createElement('li');
             variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
             hoursArray.append(variable);
         }
     }

}
tokyo.showit();

const dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location: 'Dubai',
    hoursOfOperation: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersPerHour: function() {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('dubai avg/sale', this.avg);
            console.log('dubai avg customers/hour', this.customersPerHour());
            
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;   
    },
    showit: function() {
        this.getCookies(); 
        let hoursArray = document.querySelector('.Dubai-output')
         for(let i = 0; i < this.hoursOfOperation.length; i++) { 
             let variable = document.createElement('li');
             variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
             hoursArray.append(variable);
         }
     }
}
dubai.showit();
const paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    location: 'Paris',
    hoursOfOperation: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersPerHour: function() {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;   
    },
    showit: function() {
        this.getCookies(); 
        let hoursArray = document.querySelector('.Paris-output')
         for(let i = 0; i < this.hoursOfOperation.length; i++) { 
             let variable = document.createElement('li');
             variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
             hoursArray.append(variable);
         }
     }
    
}
paris.showit();
const lima = {
    min: 2,
    max: 16,
    avg: 4.2,
    location: 'Lima',
    hoursOfOperation: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    customersPerHour: function() {
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('lima avg/sale', this.avg);
            console.log('lima avg customers/hour', this.customersPerHour());
            
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;  
    },
    showit: function() {
       this.getCookies(); 
       let hoursArray = document.querySelector('.Lima-output')
        for(let i = 0; i < this.hoursOfOperation.length; i++) { 
            let variable = document.createElement('li');
            variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
            hoursArray.append(variable);
        }
    }
}
   //dubai.showit()
  //  paris.showit()
lima.showit();

//let hoursOpen =["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
//let seattleCookies =[164, 328, 385, 360, 221, 259, 164, 278, 158, 378, 322, 378, 372, 215];
// let hoursArray = document.querySelector('.output')
//for(let i = 0; i < hoursOpen.length; i++) {
    //let variable = document.createElement('li');
    //variable.innerHTML = `${hoursOpen[i]}: ${seattleCookies[i]} cookies`;
   // hoursArray.append(variable);


//}


