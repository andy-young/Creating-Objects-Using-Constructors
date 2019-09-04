# Creating-Objects-Using-Constructors

## Local Server using Node.js

```bash
$ npm install -g http-server
$ http-server -p 8080
```

Afterwards visit `http://localhost:8080` where we see the contents of `index.html`.

## Customizing Objects with Prototypes

A more object-oriented way to draw our cars would be to give each cr object a `draw` method.
Then, instead of writing `drawCar(tesla)`, you'd write `tesla.draw()`.
In object-oriented programming, we want objects to have their own functionality built in as methods.
In this case, the `drawCar` function is always meant to be used on car objects, so instead of saving `drawCar` as a separate function, we should include it as part of each car object.

JavaScript _prototypes_ make it easy to share functionality (as methods) between different objects.
All constructors have a `prototype` property, and we can add methods to it.
Any method that we add to a constructor's `prototype` property will be available as a method to all objects created by that constructor.

```javascript
Car.prototype.draw = function() {
  // The body of the method
};
```

