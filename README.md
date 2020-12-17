# Random number with decimal places

random_number_with_decimal_places is used to generate random numbers within a range with required decimal places.

## Installation

Use npm to install random_number_with_decimal_places.

```bash
npm install random_number_with_decimal_places
```

## Usage

It takes inputs min,max and decimal_places(default=0) and returns a number between min and mix with requested number of decimal places.
Passing inputs other than number will return undefined.
```node 
import random from 'random_number_with_decimal_places'

random(20,40) // returns 24
random(20,40,4) // returns 36.0307
random('a','c') // returns undefined
```

## Warning
It will not work using require , you have to use ES6 module. 

## License
[MIT](https://choosealicense.com/licenses/mit/)