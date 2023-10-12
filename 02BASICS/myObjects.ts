const user = {
  name: "hite",
  email: "myemail@gmail",
  isActive: true,
};

// function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {}
// Or this:
// type User = { name: string, isPaid: boolean }
// function createUser({ name, isPaid }: User) {}

// When object returns an object

// interface Course  {
//   name: string;
//   price: number;
// }
// function createCourse({name, price}):{course: Course}{
// return {course: {name: "typescript", price: 399}};
// }

// Type Alias

type User = {
  readonly _id : string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "h",
  email: "h@gmail",
  isActive: false
}

function createUser(user: User): User {
  return user;
}

type cardNumber = {
   cardnumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

myUser.email = "hh@gmail.com"