import { PiForkKnifeFill } from "react-icons/pi";
import { FaDroplet } from "react-icons/fa6";
import { IoIosLeaf } from "react-icons/io"; 
import React from 'react'; // Add this import


export const navItems = [
    { label: "Features", href: "#" },
    { label: "Workflow", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Testimonials", href: "#" },
];



// hum jsx se ese lete h image component

export const HeroLogo = [
    {
        label: "Delicious",
        img: React.createElement(PiForkKnifeFill ,{size:25} ) // Fix: Use React.createElement
    },
    {
        label: "Delicious",
        img: React.createElement(FaDroplet ,{size:25} ) // Fix: Use React.createElement
    },
    {
        label: "Delicious",
        img: React.createElement(IoIosLeaf ,{size:25}) // Fix: Use React.createElement
    }
];


export const FC=[
    {
        img:'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
        label:"FOOD",
        text: "lorem kljafjeflj ekjr/ejfejf'weh eprhh gwhfpweh",
        shop:"Buy Online"
    },
    {
        img:'https://media.gettyimages.com/id/1127143256/photo/samosa.jpg?s=612x612&w=0&k=20&c=oNVDQbrqV9JwBxp4Deq5KBXAUwybUc3PUhhpP9JQPwk=',
        label:"SNACKS",
        text: "lorem kljafjeflj ekjr/ejfejf'weh eprhh gwhfpweh",
        shop:"Buy Online"
    },
    {
        img:'https://images.pexels.com/photos/4113660/pexels-photo-4113660.jpeg?auto=compress&cs=tinysrgb&w=600',
        label:"SOFT DRINKS ",
        text: "lorem kljafjeflj ekjr/ejfejf'weh eprhh gwhfpweh",
        shop:"Buy Online"
    }
];

export const MenuType=[
    {
        name:'All',
    },
    {
        name:'Food',
    },
    {
        name:'Snacks',
    },
    {
        name:'Beverage',
    }
];
export const PRICE=[
    {
        name:'$10',
    },
    {
        name:'$20',
    },
    {
        name:'$30',
    },
    {
        name:'$40',
    }
];

// 
export const MenuItems=[
    {   img:"https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.webp?b=1&s=612x612&w=0&k=20&c=E3luPwP4R3nP5w8wwOLsulK_8vghssL51yEPgTmCMxM=",
        type:"Burger" ,
        name:"REGULAR CHICKEN BURGER" ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$10"
    },
    {   img:"https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.webp?b=1&s=612x612&w=0&k=20&c=E3luPwP4R3nP5w8wwOLsulK_8vghssL51yEPgTmCMxM=",
        type:"Burger" ,
        name:"REGULAR CHICKEN BURGER" ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$20"
    },
    {   img:"https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.webp?b=1&s=612x612&w=0&k=20&c=E3luPwP4R3nP5w8wwOLsulK_8vghssL51yEPgTmCMxM=",
        type:"Burger" ,
        name:"REGULAR CHICKEN BURGER" ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$8"
    },
    {   img:"https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.webp?b=1&s=612x612&w=0&k=20&c=E3luPwP4R3nP5w8wwOLsulK_8vghssL51yEPgTmCMxM=",
        type:"Burger" ,
        name:"REGULAR CHICKEN BURGER" ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$20"
    },


    // Pizza
    {   img:"https://tse1.mm.bing.net/th?id=OIP.MfhIfzrC6x6T1-szQkjtCgHaEo&pid=Api&rs=1&c=1&qlt=95&w=152&h=95",
        type:"Pizza" ,
        name:"EXTRA CHEEZE PIZZA " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$20"
    },
   
    {   img:"https://tse1.mm.bing.net/th?id=OIP.MfhIfzrC6x6T1-szQkjtCgHaEo&pid=Api&rs=1&c=1&qlt=95&w=152&h=95",
        type:"Pizza" ,
        name:"EXTRA CHEEZE PIZZA " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$12"
    },
   
    {   img:"https://tse1.mm.bing.net/th?id=OIP.MfhIfzrC6x6T1-szQkjtCgHaEo&pid=Api&rs=1&c=1&qlt=95&w=152&h=95",
        type:"Pizza" ,
        name:"EXTRA CHEEZE PIZZA " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$13"
    },
   
    {   img:"https://tse1.mm.bing.net/th?id=OIP.MfhIfzrC6x6T1-szQkjtCgHaEo&pid=Api&rs=1&c=1&qlt=95&w=152&h=95",
        type:"Pizza" ,
        name:"EXTRA CHEEZE PIZZA " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$19"
    },
   


    // Pasta

    {   img:"https://tse1.mm.bing.net/th?id=OIP.97sCoBUDcbtSstciyvZPUQHaE8&pid=Api&P=0&h=180",
        type:"Pasta" ,
        name:"SPICY PASTA 1   " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$13"
    },

    {   img:"https://tse1.mm.bing.net/th?id=OIP.97sCoBUDcbtSstciyvZPUQHaE8&pid=Api&P=0&h=180",
        type:"Pasta" ,
        name:"SPICY PASTA CREAMY  " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$10"
    },

    {   img:"https://tse1.mm.bing.net/th?id=OIP.97sCoBUDcbtSstciyvZPUQHaE8&pid=Api&P=0&h=180",
        type:"Pasta" ,
        name:" CHICKEN PASTA    " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$20"
    },

    {   img:"https://tse1.mm.bing.net/th?id=OIP.97sCoBUDcbtSstciyvZPUQHaE8&pid=Api&P=0&h=180",
        type:"Pasta" ,
        name:" VEG PASTA    " ,
        about:"lorem Lucide Scisso rsS qddr usdfs areDash e dBo ttom" ,
        cost:"$8"
    },


];



export const ReviewSection = [

    {
        name:"JOHN DOE",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
        about2:"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        about3 : "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        job:"Designer",
    },
    {
        name:"DARRY SINS",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
        about2:"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        about3 : "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        job:"Dancer",
    },
    {
        name:"LELA GEORGE ",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
        about2:"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
        about3 : "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        job:"Cook",
    },

];