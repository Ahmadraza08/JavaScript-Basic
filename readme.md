# JavaScript Basics (Roman Urdu)

## Topic 1: Word vs. Keyword

- **Word**: Aik random text ya naam jo JavaScript me koi khaas meaning nahi rakhta.
  ```javascript
  let chacha = "random text";
  ```

- **Keyword**: Ek reserved word jo JavaScript me ek specific meaning rakhta hai.
  ```javascript
  if (true) {
    console.log("Yeh ek keyword hai.");
  }
  ```

---

## Topic 2: var, let, aur const

- **var**: Jab value change karni ho.
  ```javascript
  var me = "Ahmad";
  me = "Ali";
  console.log(me); // Output: Ali
  ```

- **const**: Jab value change nahi karni ho.
  ```javascript
  const you = "Ali";
  // you = "Ahmad"; // ❌ Error dega agar change karne ki koshish karein
  console.log(you); // Output: Ali
  ```

---

## Topic 3: Types in JavaScript

- **Primitive**: Jab value copy hoti hai, tu asli value copy hoti hai, na ke uska reference.
  ```javascript
  var a = 123;
  var b = a; 
  b = 456;
  console.log(a, b); // Output: 123, 456
  ```

- **Reference**: Jab value copy hoti hai, tu asli value copy nahi hoti, sirf reference pass hota hai.
  ```javascript
  var arr1 = [1, 2, 3];
  var arr2 = arr1;
  arr2.pop();
  console.log(arr1, arr2); // Output: [1, 2], [1, 2]
  ```

---

## Topic 4: Conditionals (If, Else If, Else)

- **Example**:
  ```javascript
  var age = 18;

  if (age < 18) {
    console.log("Underage");
  } else if (age === 18) {
    console.log("Just Adult");
  } else {
    console.log("Adult");
  }
  ```

---

## Topic 5: Loop (Repetition)

- **For Loop**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // Loop 0 se 4 tak chalega
  }
  ```

- **While Loop**:
  ```javascript
  let a = 1;
  while (a <= 5) {
    console.log(a++); // Loop tab tak chalega jab tak condition true hai
  }
  ```

---

## Topic 6: Function (Code ko naam dena)

1. **Function ko bad me chalana**:
   ```javascript
   function greet() {
     console.log("Hello!");
   }
   greet(); // Function tab chalega jab usay call karein
   ```

2. **Code reuse**:
   ```javascript
   function sayHello() {
     console.log("Hello!");
   }
   sayHello(); // Function reuse
   sayHello();
   ```

3. **Har dafa different data ke sath chalana**:
   ```javascript
   function add(a, b) {
     console.log(a + b); // Function ko har dafa alag data ke sath chala saktay hain
   }
   add(5, 10); // Output: 15
   add(20, 30); // Output: 50
   ```

---

## Topic 7: Array

- **Array**: Group of values.
  ```javascript
  var arr = [1, 2, 3, 4, 5];
  console.log(arr);
  ```

---

## Topic 8: Array Methods ([Push, Pop, Shift, Unshift, Splice])

- **Push**: Last me value add karne ke liye.
  ```javascript
  arr.push(6);
  console.log(arr); // [1, 2, 3, 4, 5, 6]
  ```

- **Pop**: Last se value remove karne ke liye.
  ```javascript
  arr.pop();
  console.log(arr); // [1, 2, 3, 4, 5]
  ```

- **Unshift**: Start me value add karne ke liye.
  ```javascript
  arr.unshift(0);
  console.log(arr); // [0, 1, 2, 3, 4, 5]
  ```

- **Shift**: Start se value remove karne ke liye.
  ```javascript
  arr.shift();
  console.log(arr); // [1, 2, 3, 4, 5]
  ```

- **Splice**: Beech se value remove karne ke liye.
  ```javascript
  arr.splice(2, 1); // Index 2 se 1 value remove karega
  console.log(arr); // [1, 2, 4, 5]
  ```

---

## Topic 9: Object

- **Blank Object**:
  ```javascript
  var blankObj = {}; // Khali object
  console.log(blankObj);
  ```

- **Filled Object**:
  ```javascript
  var filledObj = {
    name: "xyz",
    age: 20,
    human: true,
  };
  console.log(filledObj);
  ```

### Properties vs. Methods:

- **Properties**: Object ki values.
  ```javascript
  console.log(filledObj.name); // Property "name" ki value access
  console.log(filledObj.age);  // Property "age" ki value access
  ```

- **Methods**: Object ke andar function.
  ```javascript
  var objWithMethods = {
    name: "xyz",
    age: 20,
    greet: function () {
      console.log("Hello! My name is " + this.name);
    },
  };
  objWithMethods.greet(); // Method "greet" ko call karna
  ```

---

## Topic 10: Updating Object

- **Object ki properties ko update karna**:
  ```javascript
  var user = {
    name: "Ahmad",
    age: 25,
  };

  // Name property update karna
  user.name = "Ali";
  console.log(user.name); // Output: Ali

  // Nayi property add karna
  user.gender = "Male";
  console.log(user.gender); // Output: Male
  ```
