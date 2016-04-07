

var intro_section = "<h1>Golden Threads</h1>"+
  '<p> It is inspiring to see women do amazing things and change the course of their destiny despite all odds by absoulte stength, courage and positiveness. I am incredibly honored to be part of Kavithas journey to take her business a step further by building an online presence for her brand</p>'+
  '<div class="italic">Golden Threads is based out of Hyderabad, India which makes beautiful and sustainable south asian ethnic clothing for a modern woman</div>';

var challenge = '<h4>The Challenge</h4>'+
    '<h1>Create personalized experiences with clients</h1>'+
    '<p>Since 2013,Golden Threads provides personalized design services to their clients, based on the customers indiviual needs</p>'+ 
    '<p>As the brand gained popularity via social marketing channels, they realized they had significant amount of customer base that is interested in their customized services from countries where theres large south Asian demographic market</p>'+
    '<p> In order to extend their services to this market, they wanted a marketplace where they can provide a shopping experience similar to their brick and mortar store  </p>';

var role ='<h1>My Role</h1>'+
    '<h2> Ideation</h2>'+
    '<p>I  came up with multiple ideas on how we can making buying experience easier </p>'+
    '<h2>Research & Design </h2>'+
    '<p>I did market research on customers, businesses that are already doing this.Usability Testing </p>'+
    '<h2>Usability Testing</h2>'+
    '<p>I did user testing at different stages of product developement</p>';

var heading = '<h4>The Discovery</h4>'+    
    '<h1>Customer Insights</h1>'+  
    '<p>Conducted user reserch to understand the current online shopping patterns for south asian clothing by women living in United States</P>';

var discovery_feature_content =
    '<div class="row">'+
    '<div class="col-6">'+
    '<div><img src="img/customer2.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Fashion Lovers</h2><caption>'+
        '<div><p>The primary segment are the customer who follow fashion and would like to buy new garments often</p></div></div>'+
     '<div class="col-6">'+   
     '<div><img src="img/customer1.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Shop when needed</h2><caption>'+
        '<div><p>These are the segment of customers who would like to buy Indian clothing when they have an occassion it. 65 percent of the customer have about 7 to 10 events to attend and shops atleast twice a year</p></div>'+
        '</div></div>'+
    '<div class="row">'+
    '<div class="col-6">'+
        '<div><img src="img/pricesensitive.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Price Sensitive</h2><caption>'+
        '<div><p>These segment of market is price sensitive. They like to find a balance between price and quality. Willing to spend up to 200 dollars</p></div>'+
    '</div>'+
    '<div class="col-6">'+
        '<div><img src="img/visual.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Visualization</h2><caption>'+
        '<div><p>Customers find it hard to visualize how a garment might look on them. They are not sure how true the colors are</p></div>'+
    '</div>'+ 
    '</div>'+  
    '<div class="row">'+
    '<div class="col-6">'+
        '<div><img src="img/consultation.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Design Consultation</h2><caption>'+
        '<div><p>Current south asians find businesses/boutiques from their home towns on social media like facebook and has a real design consulation on phone. Abuot 68 percent of people prefer this method as they feel they can talk to the business and have a personel relationship</p></div>'+
    '</div>'+  
    '<div class="col-6">'+
        '<div><img src="img/returnpolicy.jpg" alt="Ezvari"></div>'+
        '<caption><h2>Ways of shopping</h2><caption>'+
        '<div><p>About 65 percent of customers are concerened about return policy and easy way of getting a return label</p></div>'+
    '</div>'+
    '</div>'+   
    '<div class="row">'+
     '<div class="col-6">'+
      '<div><img src="img/devices.jpg" alt="Ezvari"></div>'+
      '<caption><h2>Ways of shopping</h2><caption>'+
      '<div><p>Up to 65 percent of customers still likes to shop on web, whereas other 35 percent prefers shopping on mobile</p></div>'+
    '</div>'+ 
    '</div>';

 var persona_header = '<h1>Personas</h1><p>Below are the personas that I came up with</p>';
 var persona_container =  '<div style="display: inline-block;"><img src="img/Fashionista.png"/></div>'+
    '<div><img src="img/BusyProfessional.png"/></div>'+
    '<button class="next"><img src="http://placeimg.com/50/50/people"/></button>'+
    '<button class="prev"><img src="http://placeimg.com/50/50/people"/></button>';

var scope_header =' <h1>Feature set</h1>'+
 '<p>Below are the new features that I came up with, apart from traditinal e-comm shopping cart and store</p>';

 var scope_content='<div class="row">'+
  '<div class="col-4"><img src="img/dress.jpg" alt="Ezvari"><h3>Customizing for your measurements</h3></div>'+
  '<div class="col-4"><img src="img/tape.jpg" alt="Ezvari"><h3>Sizing guide</h3></div>'+
  '<div class="col-4"><img src="img/insta.jpg" alt="Ezvari"><h3>Real customer pictures from instagram</h3></div></div>'+
  '<div class="row"><div class="col-4"><img src="img/girl.jpg" alt="Ezvari"><h3>CustomerOnBorading</h3></div>'+  
  '<div class="col-4"><img src="img/chat.jpg" alt="Ezvari"><h3>Instant chat with the business</h3></div>'+
  '<div class="col-4"><img src="img/gift.jpg" alt="Ezvari"><h3>Test the fit via free sample</h3></div></div>'+
  '<div class="row"><div class="col-4"><img src="img/return.jpg" alt="Ezvari"><h3>Return labels</h3></div>'+
  '<div class="col-4"><img src="img/calender.jpg" alt="Ezvari"><h3>Scheduling design consulation appointments</h3></div></div>';

$("#intro_section").append(intro_section);
$("#challenge").append(challenge);
$("#role").append(role);
$(".heading").append(heading);
$(".feature-content").append(discovery_feature_content);
$(".persona-heading").append(persona_header);
$(".persona-content").append(persona_container);
$(".scope-heading").append(scope_header);
$(".scope-content").append(scope_content);

    


