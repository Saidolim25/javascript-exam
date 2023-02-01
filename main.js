const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.pexels.com/photos/2271101/pexels-photo-2271101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://i2-prod.glasgowlive.co.uk/incoming/article16335485.ece/ALTERNATES/s615b/0_DSC_5315.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://static.1000.menu/img/content-v2/92/7b/11920/pirojnoe-mini-pavlova_1616912438_17_max.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://www.sophisticatedgourmet.com/wp-content/uploads/2020/04/how-to-fry-an-egg-recipe-735x979.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://loskitchenco.com/wp-content/uploads/2020/07/IMG_2722-scaled.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://www.caciquefoods.com/wp-content/uploads/2019/09/BACON-WRAPPED-QUESO-STUFFED-JALAPENOS-By-Chef-Aaro%CC%81n-Sa%CC%81nchez-web.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://www.barbarabakes.com/wp-content/uploads/2013/04/All-American-Pizza-Barbara-Bakes.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://images.squarespace-cdn.com/content/v1/5ef389ef91512071d690247a/1607985585412-1CFDE9614YA0VL7G7MLK/Bison+Steak+1.png?format=1000w",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  

  const lunch = document.getElementById('lunch');
  const box = document.querySelector('.box');

  lunch.addEventListener('click', function(){
    for(let i = 0 ; i < menu.length; i++){
        if (menu[i].category === 'lunch') { 
            box.innerHTML += `
             <img src=${menu[i].img} />
             <p>${menu[i].title}</p>
             <p>$${menu[i].price}</p>
             <p>${menu[i].desc}</p>
             <p>${menu[i].category}</p>
            `
        }
    }
  })

  const img1 = document.getElementById('img');
  const name1 = document.getElementById('name');

  window.addEventListener('DocumentContentLoaded',function(){
        for(let i = 0; i < menu.length; i++){
            if(menu[i].category === 'lunch')
            box.innerHTML += `
             <img src=${menu[i].img} />
             <p>${menu[i].title}</p>
             <p>$${menu[i].price}</p>
             <p>${menu[i].desc}</p>
             <p>${menu[i].category}</p>
            `
        }
  })


const input = document.getElementById('value');
const btnSearch = document.getElementById('search');

btnSearch.addEventListener('click', function(){
    for(let i = 0; i < menu.length; i++)    {
       
        if(menu[i].category === input.value) {
            box.innerHTML += `  
         <img src=${menu[i].img}>
         <p>${menu[i].title}</p>
         <p>$${menu[i].price}</p>
         <p>${menu[i].desc}</p>
         <p>${menu[i].category}</p>
         
         
       `
    
        }

       
    }

})


const food = document.getElementById('food');

food.addEventListener('change', function(){
    for(let i = 0; i < menu.length;i++){
        if (menu[i].category === food.value) {
            box.innerHTML += `
          <img src=${menu[i].img}/>
          <p>${menu[i].title}</p>
          <p>$${menu[i].price}</p>
          <p>${menu[i].desc}</p>
          <p>${menu[i].category}</p>
         

            `
        }
    }
    
})




  