const user = {
  name: "hite",
  email: "myemail@gmail",
  isActive: true
}

// function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {}
// Or this:
// type User = { name: string, isPaid: boolean }
// function createUser({ name, isPaid }: User) {}


// When object returns an object

interface Course  {
  name: string;
  price: number;
}
function createCourse({name, price}):{course: Course}{
return {course: {name: "typescript", price: 399}};
}