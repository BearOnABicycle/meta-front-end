// Inheritance: 
//    1. There is a basic class of "thing"
//    2. There is one or more subclass of "Things" that inherit from the base class
//    3. There might be sub-classes of those "Things" that inherit from that sub-class

class Animal {/* ...class code here... */}
class Bird extends Animal {/* ...Class code here... */}
class Eagle extends Bird {/* ...Class code here... */}

//Encapsulation:
//   Making a code implementation "hidden" from other users, in the sense that they dont need to know how the code works to "consume" the code.

console.log("abc".toUpperCase());

//Abstraction:
//    Extracting the concept of what you're tring to do, rather than dealing with specific manifestation of that concept

//Polymorphism:
//    Greek meaning multiple forms, or can take on many shapes. 
//    ex. A door has a bell. This bell can ring. When would someone ring the bell? Obviouslt to get someone to come to the door. 
//        Now consider that a bike can have a bell. The purpose of the bell on a bike is to get someone out of the way. Both bells
//        ring, but have different meanings and desired results. 
//
const bicycle = {
  bell: function() {
    return "Ring, ring! Watch out, please!"
  }
}

const door = {
  bell: function() {
    return "Ring, ring! Come here, please!"
  }
}

console.log(bicycle.bell());
console.log(door.bell());
