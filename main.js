(()=>{"use strict";const e=()=>{document.getElementById("body").textContent="",document.querySelector(".body").style.backgroundColor="rgb(253, 200, 131)",document.querySelector(".body").style.backgroundImage="none",(()=>{const e=document.createElement("div");e.classList.add("bodyContentM");const t=document.createElement("div");t.classList.add("menuTxt"),t.textContent="Menu",e.appendChild(t);const a=(t,a,n,d,o)=>{const s=document.createElement("div");s.classList.add("item");const i=document.createElement("img");i.classList.add("imgM"),i.src=t,i.alt=a;const c=document.createElement("div");c.classList.add("wrapper");const l=document.createElement("div");l.classList.add("wrapper2");const m=document.createElement("div");m.classList.add("titleM"),m.textContent=n;const p=document.createElement("div");p.classList.add("textM"),p.textContent=d;const r=document.createElement("div");r.classList.add("textM"),r.textContent=o,l.appendChild(m),l.appendChild(p),c.appendChild(l),c.appendChild(r),s.appendChild(i),s.appendChild(c),e.appendChild(s)};a("./imagesFonts/risotto.jpg","risotto","Risotto with Shrimp","$9.79","A classic creamy risotto topped with shrimp and garnish"),a("./imagesFonts/margherita.jpg","margherita pizza","Margherita pizza","$17.99","A delicious 12-inch pizza with fresh mozzarella"),a("./imagesFonts/pepperoni.jpg","pepperoni pizza","Pepperoni Pizza","$17.99","A delicious take on the classic cheese pizza with pepperoni"),a("./imagesFonts/meat-pizza.jpg","meat lovers pizza","Meat Lovers Pizza","$17.99","A pizza for meat lovers with pepperoni, sausage, and ground beef"),a("./imagesFonts/gnocchi.jpg","gnocchi","Gnocchi","$10.99","Puffy Gnocchi topped with parmesean and tomato sauce"),a("./imagesFonts/meatballs-and-spaghetti.jpg","spaghetti and meatballs","Spaghetti and meatballs","$12.99","Delicous fresh meatballs with handmade spaghetti."),a("./imagesFonts/lasagne-bolgnese.png","lasagne","Lasagne Bolognese","$12.99","Fresh meat, cheese, and sauce stacked between handmade noodles"),a("./imagesFonts/chocolate-Gelato.jpg","gelato","Gelato","$5.99","Comes in 6 flavors: Cioccolato, Fragola, Limone, Menta, Stracciatella, and Bacio");const n=document.createElement("div");n.textContent="Dishes may contain allergens. Please check before ordering.",n.classList.add("menuBottom"),e.appendChild(n),body.appendChild(e)})()},t=()=>{document.getElementById("body").textContent="",document.querySelector(".body").style.backgroundImage="url(https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",(()=>{const e=document.createElement("div");e.classList.add("bodyContent");const t=document.createElement("div");t.classList.add("homeTxt"),t.textContent="Serving the delicious authentic Italian cuisine since 1836.";const a=document.createElement("img");a.src="./imagesFonts/ManMakingNoodles.jpg",a.alt="man making noodles",a.classList.add("homeImg");const n=document.createElement("div");n.textContent="Handcrafted meals made with fresh, locally sourced ingredients.",n.classList.add("homeTxt"),e.appendChild(t),e.appendChild(a),e.appendChild(n),body.appendChild(e)})()},a=document.getElementById("content");(()=>{const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.textContent="Brizza Italian Cuisine",t.classList.add("title");const n=document.createElement("div");n.classList.add("pageWrapper");const d=document.createElement("button");d.textContent="Home",d.classList.add("page");const o=document.createElement("button");o.textContent="Menu",o.classList.add("page");const s=document.createElement("button");s.textContent="About",s.classList.add("page"),n.appendChild(d),n.appendChild(o),n.appendChild(s),e.appendChild(t),e.appendChild(n),a.appendChild(e)})(),(()=>{const e=document.createElement("div");e.classList.add("body"),e.id="body",a.appendChild(e)})(),(()=>{const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("div");t.textContent="Made by Brandon Young 2022",t.classList.add("credit"),e.appendChild(t),a.appendChild(e)})(),t(),e()})();