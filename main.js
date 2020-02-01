// class - use this keyword for public access 
function users() //constructor
{
   // public property
   this.Fname=undefined;
   this.Lname=undefined;

   //public method
   this.display=function(){
       console.log(`${this.Fname} ${this.Lname}` );// get property
   }
}

let userobj1=new users(); //instance of class users
userobj1.Fname="Madhuri"; //set property
userobj1.Lname="Patil";
userobj1.display();

let userobj2=new users();
userobj2.Fname="Vaibhav";
userobj2.Lname="Sankpal";
userobj2.display();

