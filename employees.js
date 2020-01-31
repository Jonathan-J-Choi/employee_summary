// Employees class
class Employees{
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.title = "Employee";
    this.email = email;
  }

  // Function to return name of employee
  getName() {
    return this.name;
  }

  // Function to return ID number of employee
  getId(){
    return this.id;
  }

  // Function to return email of employee
  getEmail(){
    return this.email;
  }

  // Function to return title of employee
  getTitle (){
    return this.title;
  }
}
