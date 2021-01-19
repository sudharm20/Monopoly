import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolldie',
  templateUrl: './rolldie.component.html',
  styleUrls: ['./rolldie.component.scss']
})
export class RolldieComponent implements OnInit {


 
  cities = ["Start", "Delhi", "Chennai","Himachal","Nagpur","Bangalore","Sydney","Hongkong","Russia","Pune"];
  cost = [0, 30, 10,50,15,25,40,35,30,20];
  rent = [0, 15, 5,25,10,15,20,15,10,10];
  turns=0;
  
  position1 = ["__","__ ","__ ","__ ","__ ","__ ","__","__ ","__ ","__ "];
  position2 = ["__","__ ","__ ","__ ","__ ","__ ","__","__ ","__ ","__ "];
  
  player1account=1000;
  player2account=1000;
  city1: string;
  price1: number;
  numberOnDice1: number=1;
  numberOnDice2: number=1;
  city2: string;
  price2: number;
  prev1=0;
  prev2=0;
  value=0;
  player="Bob";
  chance: boolean=true;
  acquired1=[];
  acquired2=[];
  


  constructor() { }

  ngOnInit(): void {
   


  }
  
  rolldie()
{

this.turns=this.turns+1;  
if(this.turns<50)
{
 if(this.chance)
 {
  this.position1 = ["__","__ ","__ ","__ ","__ ","__ ","__","__ ","__ ","__ "];
  //this.position2 = ["__","__ ","__ ","__ ","__ ","__ ","__","__ ","__ ","__ "];
    var x = Math.floor(Math.random() * 12) + 2;
    this.numberOnDice1=x;
    this.prev1=this.prev1+this.numberOnDice1;
   
    if(this.prev1>10)
    {
      this.prev1=this.prev1%10
      this.player1account=this.player1account+200;
    }
    this.city1=this.cities[this.prev1-1];
   
    if(this.acquired2.includes(this.city1)||this.acquired1.includes(this.city1))
    {
      if(this.acquired2.includes(this.city1))
      this.player1account=this.player1account-this.rent[this.prev1-1];
      Swal.fire(`Rent Deducted  ${this.rent[this.prev1-1]}`)
    }
    else
    {
    this.acquired1.push(this.city1);
    this.player1account=this.player1account-this.cost[this.prev1-1];
    if(this.city1!="start")
    {
    Swal.fire(`Bought city ${this.city1}`)
    }  
    }
    
    this.price1 = this.cost[this.prev1-1]; 
    this.position1[this.prev1-1]="Bob";
   this.chance = false;
   this.player="Alice"; 
   

   
  console.log(this.acquired1)
  }
  else
  {
    //this.position1 = ["__","__ ","__ ","__ ","__ ","__ ","__","__ ","__ ","__ "];
    this.position2 = ["__","__ ","__ ","__ ","__ ","__ ","__","__ ","__ ","__ "];
    var x = Math.floor((Math.random() * 6) + 1);
    this.numberOnDice2=x;
    this.prev2=this.prev2+this.numberOnDice2;

    if(this.prev2>10)
    {
      this.player2account=this.player2account+200;
      this.prev2=this.prev2%10
    }
    this.city2=this.cities[this.prev2-1];

    if(this.acquired1.includes(this.city2)||this.acquired2.includes(this.city2))
    {
      if(this.acquired1.includes(this.city2))
      {
      this.player2account=this.player2account-this.rent[this.prev2-1];
      Swal.fire(`Rent Deducted  ${this.rent[this.prev2-1]}`)
      }
    }
    else
    {
      this.acquired2.push(this.city2);
    this.player2account=this.player2account-this.cost[this.prev2-1];
    if(this.city1!="start")
    {
    Swal.fire(`Bought city ${this.city2}`)
    }
    }
 


    //console.log(this.prev2,x+1,"check2")
    this.position2[this.prev2-1]="Alice";
    this.price2 = this.cost[this.prev2-1];
   this.chance = true;
   this.player="Bob";


   console.log(this.acquired2,"player2")


  }
 }
 else
 {
   if(this.player1account>this.player2account)
      {
        Swal.fire("Bob is the Winner")
      }
    else  
    {
     
      Swal.fire("Alice is the Winner")
      
    }
  }
}
}
