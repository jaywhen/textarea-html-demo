const str = '2024 {{Preview}}: Bidenomics {{Versus}} the Trump {{Freak}} Show';
const regex = /({{.*?}})/g;

const result = str.split(regex);

console.log(result);