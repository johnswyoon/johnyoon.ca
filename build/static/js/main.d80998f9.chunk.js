(this["webpackJsonpjohnyoon.ca"]=this["webpackJsonpjohnyoon.ca"]||[]).push([[0],{36:function(n,e,t){},37:function(n,e,t){"use strict";t.r(e);var i=t(1),a=t(0),r=t.n(a),o=t(20),c=t.n(o),l=t(24),s=t(2),d=t(5),m=t(10),p=t(6),u=t(4),h={initial:{y:50},animate:{y:0,transition:{duration:.8,ease:[.6,-.05,.01,.9],when:"beforeChildren",staggerChildren:.1,delayChildren:1}},exit:{opacity:0,transition:{duration:.5}}};function g(){var n=Object(d.a)(["\n  /* display: none; */\n  place-content: center;\n  z-index: 10;\n  min-height: 80vh;\n  ul {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    list-style: none;\n    li {\n      padding: 0.5rem;\n      h3 {\n        font-size: clamp(1.5rem, 10vw, 2.5rem);\n        font-weight: 700;\n        color: #5e5e5e;\n      }\n    }\n  }\n"]);return g=function(){return n},n}function j(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* padding: 3rem 10rem 1rem 10rem; */\n  padding: 0 clamp(1rem, 10%, 500px);\n  width: 100%;\n  min-height: 10vh;\n  ul {\n    display: flex;\n    list-style: none;\n    li {\n      padding: 0rem 1.25rem;\n      a {\n        font-size: 1rem;\n        font-weight: 700;\n        color: #5e5e5e;\n      }\n    }\n  }\n  .toggle-button {\n    display: none;\n  }\n  @media screen and (max-width: 1024px) {\n    ul {\n      display: none;\n      position: relative;\n    }\n    .toggle-button {\n      display: block;\n    }\n  }\n"]);return j=function(){return n},n}var b=[{title:"home",url:"/"},{title:"photography",url:"/photography"},{title:"about",url:"/about"}],A=p.a.nav(j()),y=Object(p.a)(u.b.div)(g()),x=function(n){var e=n.isToggled,t=n.toggleHandler;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(A,{children:[Object(i.jsx)(m.b,{to:"/",children:Object(i.jsx)("h1",{children:"john yoon"})}),Object(i.jsx)("ul",{children:b.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(m.b,{to:n.url,children:n.title})})}))}),Object(i.jsx)("div",{className:"toggle-button",onClick:t,children:Object(i.jsx)("button",{className:"burger ".concat(e?"active":"")})})]}),Object(i.jsx)(y,{style:{display:e?"grid":"none"},variants:h,initial:"initial",animate:e?"animate":"",exit:"exit",children:Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:b.map((function(n){return Object(i.jsx)(u.b.li,{whileHover:{scale:1.1,transiton:{duration:1}},whileTap:{scale:.9},onClick:t,children:Object(i.jsx)(m.b,{to:n.url,children:Object(i.jsx)("h3",{children:n.title})})})}))})})})]})};function f(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-height: 80vh;\n  padding-left: clamp(30px, 10vw, 1500px);\n  padding-right: clamp(30px, 10vw, 1500px);\n  text-align: center;\n  h2 {\n    font-size: clamp(40px, 5vw, 70px);\n  }\n  p {\n  }\n"]);return f=function(){return n},n}var v=Object(p.a)(u.b.div)(f()),w=function(){return Object(i.jsxs)(v,{children:[Object(i.jsx)("h2",{children:"Hello Friends"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda officiis neque maxime rerum qui aliquam molestiae pariatur? Repellat fugit, alias unde mollitia nobis fugiat quas aliquam placeat dicta est, tempora sit non ullam maxime ipsam illo pariatur, suscipit laborum laudantium incidunt id voluptas dignissimos temporibus possimus. Enim id, quidem ab culpa facilis dignissimos nesciunt consequatur nostrum? Non dicta placeat aliquam est dolores eum dolorum quas reprehenderit unde dolor, nisi mollitia nobis quidem expedita ullam molestias, hic repellendus voluptates illum? Explicabo odit doloremque eius corrupti modi, laborum porro totam optio sed quos itaque voluptatem neque, accusantium velit, officiis eum atque?"})]})};function O(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 70vh;\n  h2 {\n    font-size: 2rem;\n    letter-spacing: 4px;\n    padding: 1rem;\n  }\n  ul {\n    list-style-type: none;\n  }\n"]);return O=function(){return n},n}var B=[{name:"street",image:"",url:"/photography/street"},{name:"portrait",image:"",url:"/photography/portrait"},{name:"architecture",image:"",url:"/photography/architecture"},{name:"automotive",image:"",url:"/photography/automotive"}],C=Object(p.a)(u.b.div)(O()),I=function(){return Object(i.jsx)(C,{children:Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:B.map((function(n){return Object(i.jsx)(u.b.li,{whileHover:{scale:1.1,transiton:{duration:1}},whileTap:{scale:.9},children:Object(i.jsx)(m.b,{to:n.url,children:Object(i.jsx)("h2",{children:n.name})})})}))})})})},G=t.p+"static/media/dooly.3f0fdfa2.JPEG",D=t.p+"static/media/room-for-squares.f0b2c3e3.jpg",Q=t.p+"static/media/good-kid-maad-city.b4b334c4.jpg",S=t.p+"static/media/every-letter-i-sent-you.0f9f8173.jpg";function U(){var n=Object(d.a)(["\n  .song-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 2rem;\n  }\n  img {\n    width: 200px;\n    height: 200px;\n    margin: 1rem;\n    border-radius: 5%;\n    box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);\n  }\n  li {\n    list-style-type: none;\n    a {\n      display: flex;\n      p {\n        font-size: 1.5rem;\n      }\n    }\n  }\n  @media screen and (max-width: 1024px) {\n    h3 {\n      text-align: center;\n    }\n    a {\n      flex-direction: column;\n      align-items: center;\n      p {\n        line-height: 1.5rem;\n        text-align: center;\n      }\n    }\n    .song-info {\n      align-items: center;\n      padding-left: 0rem;\n      p {\n        font-size: 1.25rem;\n        line-height: 1rem;\n      }\n    }\n  }\n"]);return U=function(){return n},n}function z(){var n=Object(d.a)(["\n  padding-right: 5rem;\n  @media screen and (max-width: 1024px) {\n    padding-right: 0;\n  }\n  text-align: center;\n  #profile-pic {\n    width: 250px;\n    border-radius: 50%;\n    box-shadow: 0 0px 50px -20px rgba(0, 0, 0, 0.5);\n  }\n  ul {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    list-style-type: none;\n    a {\n      display: flex;\n      align-items: center;\n      img {\n        width: 50px;\n        margin-right: 1rem;\n      }\n      p {\n        letter-spacing: 2.5px;\n        line-height: 2.5rem;\n      }\n    }\n  }\n"]);return z=function(){return n},n}function F(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  p {\n    padding-bottom: 1.5rem;\n  }\n  p:last-child {\n    padding-bottom: 0rem;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0rem clamp(1rem, 5vw, 5rem);\n  }\n"]);return F=function(){return n},n}function H(){var n=Object(d.a)(["\n  display: flex;\n  max-width: 1200px;\n  margin: auto;\n  h2 {\n    /* font-size: 3.5rem; */\n    font-size: clamp(40px, 5vw, 3.5rem);\n    padding-top: 1rem;\n    padding-bottom: 2rem;\n  }\n  h3 {\n    /* font-size: 1.75rem; */\n    font-size: clamp(1.25rem, 5vw, 1.75rem);\n    font-weight: 700;\n    letter-spacing: 2px;\n    padding: 3rem 0rem 1rem 0rem;\n  }\n  p {\n    font-size: 1.25rem;\n    line-height: 2rem;\n  }\n  @media screen and (max-width: 1024px) {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem 2rem;\n    h2 {\n      margin-top: 5rem;\n    }\n  }\n"]);return H=function(){return n},n}var N=[{name:"aycejohn",image:"data:image/png;base64,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",url:"https://www.instagram.com/aycejohn/"},{name:"johnswyoon",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEF0lEQVR4nO3dTYhWVRzH8e84KbkoKjRxSil6IwsVauPCHB2iyEXZokVBCC3ctKs2tQ3xpVZtXLmZATFDsFYlFaWbIMKIKAoURsleaAhfJm2amRbnER7qnuee8Zx7zn9Ovw8cZO5zzr3nnp9zn/vce547ICIiIiIiIiIiIiIiiQ11tN4RYAOwCljW0TZK+Qv4BTgFnC/cl1ZjwElgDpivvMwBJ4BtSUYusWHgLcoPUqmyH1gSPYoJvU35QSld9kWPYiJjlB8MK2U0ciyTOEn5gbBSPo8cy+izrDuAs571zAPngJnIbVizFLiT5n2e671W7OzrSZr/p8wBW0t1KoNt+M8kn4hZceyZwUrP8p+ATyPXbdknuH1scnvMimMDGfYsr+0w1cS3j74xCWLq3FkUiDk3FNruELAdeAZYC0wBx4EJ4GqhPlVhJ81nGmcGtLkF+MjT7gfgwQ77m9IZmvdhZ8xKcx+yhoB3gcc9r98HfAjclq1HxuQOZDv+MK5ZA7ySoS8m5Q5kR2C9ZzvthWG5A1kTWG9tp70wLHcgU4H1fu+0F4blDuR44nrVyR3IBPBjS51pYE+GvpiUO5CrwNO4S/ZNpoHnaQ+tWiUunXwHbAR2A9/jQjgLHOwtP1agT2aUunQyBbzRK9JHFxeNUSDGlDpk5bYceARYB9zaW3YZOA18BfxcqF//USKQD4DVLXV2A0cblh8B7h7Qbhp4rO/nu3DvU88BNw9odwo4gDuxWNR3O6/n8rvvsnV/2eVp+21Lu4t9dV8G/gzYVn/5Brg/bNfruPyey5vAO8CNC2z3MG5u1b3JexSoxkCeAl6PaL8KOER33wwYqLZAlgPjxA/mo7grCtnVFsgw6e42vpZoPQtSWyApbQJW5N5o7Z9DZoAvgEnc4ewhws+ihnDTYY9007VmNf+GjOMmPm8GXsDdFn4A995wcUC7fhu76ZpfrYEcBl4Efm147X3gpcD1ZL+VXGMgfwOvttR5DzcHrI0CSeAE7nspg8wTdpv4pvjuLEyNgXwZWC/kN2Shn/Sj1RjIb4H1/gioo0ASCJ1qdCWgTvbLJzUGcjmwXkgg2dUYyKKmQIxRIMYoEGMUiDEKxBgFYowCMUaBGKNAjFEgxigQYxSIMSVmnUziHv41yAXP8nO036O4FNiPa7PfB2m785hciUC2RLSNelrbv3wM3JNwfUnokGWMAjFGgRgTG8isZ/nSyPUuBr599I1JkNhAfDM8RjD6kPpExnD72KRptmSw2FkVI7hTQz1I2Sn+IGVwMwVLP+LbSvksciyT2Er5gbBSYj5jJbWf8oNRuph6gtES/t+h7MXoR4hR3NeKZyk/SF2XWdx7RtLDVFdzV1cD63v/1vhHwc4DX2PokRwiIiIiIiIiIiIiIuL1DzhyOZKn+sc3AAAAAElFTkSuQmCC",url:"https://www.linkedin.com/in/johnswyoon/"},{name:"johnswyoon",image:"data:image/png;base64,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",url:"https://github.com/johnswyoon"},{name:"john.sw.yoon@gmail.com",image:"",url:"mailto:john.sw.yoon@gmail.com"}],R=[{name:"macbook pro 16",url:""},{name:"sony a6000",url:""},{name:"sigma 30mm f/1.4",url:""}],k=[{title:"No Such Thing",album:"Room of Squares",artist:"John Mayer",image:D,url:"https://open.spotify.com/track/0WZhf0isd4av5qlFfKknC3?si=fy6OG2clRW2Fq8ezZ49nkQ"},{title:"Now Or Never",album:"good kid, m.A.A.d city (Deluxe Version)",artist:"Kendrick Lamar",image:Q,url:"https://open.spotify.com/track/4KjnaUNYPwGnJjoeTFlt91?si=K5PvtqxvRl2M8-5c-K4nEQ"},{title:"Square (2017)",album:"Every letter I sent you.",artist:"\ubc31\uc608\ub9b0",image:S,url:"https://open.spotify.com/track/0WZhf0isd4av5qlFfKknC3?si=fktTdj1jRjiu19iAedD0RA"}],P=p.a.div(H()),Z=p.a.div(F()),E=p.a.div(z()),M=p.a.div(U()),T=function(){return Object(i.jsxs)(P,{className:"container",children:[Object(i.jsxs)(E,{children:[Object(i.jsx)("img",{id:"profile-pic",src:G,alt:"john yoon profile picture"}),Object(i.jsx)("h3",{children:"connect with me"}),Object(i.jsx)("div",{id:"social",children:Object(i.jsx)("ul",{children:N.map((function(n){return Object(i.jsx)(u.b.li,{whileHover:{scale:1.05,transiton:{duration:10}},whileTap:{scale:.95},children:Object(i.jsxs)("a",{href:n.url,target:"_blank",children:[n.image&&Object(i.jsx)("img",{src:n.image,alt:n.name}),Object(i.jsx)("p",{children:n.name})]})})}))})}),Object(i.jsx)("h3",{children:"my gear"}),Object(i.jsx)("div",{id:"gear",children:Object(i.jsx)("ul",{children:R.map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{style:{justifyContent:"center",cursor:"default"},children:Object(i.jsx)("p",{children:n.name})})})}))})})]}),Object(i.jsxs)(Z,{children:[Object(i.jsx)("h2",{children:"Hi, I'm John"}),Object(i.jsxs)("div",{className:"intro-text",children:[Object(i.jsx)("p",{children:"I'm a 2nd Year Computer Engineering student at the University of Waterloo . I am also a photographer based in Canada, interested in portrait, street, and automotive photography."}),Object(i.jsx)("p",{children:"I created this website to showcase my creativity through software projects and photography."}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, repellat illum. Alias sapiente sit minima repellendus nemo expedita sint maxime."}),Object(i.jsx)("p",{children:"Autem, impedit minima optio, recusandae eligendi error, magni ea omnis aperiam nam reiciendis vero voluptas."})]}),Object(i.jsxs)(M,{children:[Object(i.jsx)("h3",{children:"Currently Listening To"}),Object(i.jsx)("ul",{children:k.map((function(n){return Object(i.jsx)(u.b.li,{whileHover:{scale:1.05,transiton:{duration:10}},whileTap:{scale:.95},children:Object(i.jsxs)("a",{href:n.url,target:"_blank",children:[Object(i.jsx)("img",{src:n.image,alt:"".concat(n.title," - ").concat(n.artist)}),Object(i.jsxs)("div",{className:"song-info",children:[Object(i.jsx)("p",{children:Object(i.jsx)("strong",{children:n.album})}),Object(i.jsx)("p",{children:Object(i.jsx)("em",{children:n.title})}),Object(i.jsx)("p",{children:Object(i.jsx)("em",{children:n.artist})})]})]})})}))})]})]})]})},K=[{id:"automotive",title:"Automotive",description:"A Collection of Cars",images:[{name:"bmw335i-roller-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609646586/automotive/new_DSC_8203-min_lbb48n.jpg",type:"card square"},{name:"porsche-gt4-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609646293/automotive/porsche_gt4_final_jil2p2.jpg",type:"card card-tall"},{name:"benz-c300-carwash-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609646292/automotive/DSC02999_crop_fvteg4.jpg",type:"card card-tall"}]},{id:"street",title:"Street Photography",description:'"The documentation of human existance" - Pat Kay',images:[{name:"td-square-shadow2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609649126/street/DSC03397-min_p0grt7.jpg",type:"card-tall"},{name:"ajay-stair-shadow-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609649126/street/DSC03228-min_zjjdb3.jpg",type:"card-tall"},{name:"st-lawrence-butcher-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609649126/street/DSC03112-min_hixtpc.jpg",type:"card-tall"},{name:"coin-wash-smoker-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609649126/street/DSC02837-Edit-min_vyzcu4.jpg",type:"card-tall"}]},{id:"portrait",title:"Portraits",description:"Capturing the personality of people around me",images:[{name:"angela-toronto-orange-teal-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609647810/portraits/DSC_7289-min_h9dqf8.jpg",type:"card-tall"},{name:"sq1-concert-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609647805/portraits/DSC01009-min_hsbsfo.jpg",type:"card-tall"},{name:"george-drivethru-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609647812/portraits/DSC_4500-min_i3bin8.jpg",type:"card-tall"},{name:"david-utm-bag-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609647804/portraits/DSC04479-min_smtmdd.jpg",type:"card-tall"},{name:"david-lakehore-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609647810/portraits/DSC_8455_IG-min_rddbgz.jpg",type:"card-tall"},{name:"daniel-phone-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609647810/portraits/DSC_7602_IG-min_k90hpg.jpg",type:"card-tall"},{name:"david-utm-sitting-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609647806/portraits/DSC05000-min_eev4af.jpg",type:"card-tall"},{name:"friends-bench-montreal-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609649132/portraits/DSC_7602_IG2_edit-min_ujkxli.jpg",type:"card-tall"}]},{id:"architecture",title:"Architecture",description:"Symmetry, Patterns, and Shape",images:[{name:"toronto-condo-2020",url:"https://res.cloudinary.com/jyoon/image/upload/v1609648883/architecture/DSC03071-min_zpzlor.jpg",type:"square"}]}];function J(){var n=Object(d.a)(["\n  padding-bottom: 2rem;\n  h2 {\n    font-size: clamp(40px, 3vw, 70px);\n  }\n  p {\n    font-size: 1.25rem;\n  }\n"]);return J=function(){return n},n}function L(){var n=Object(d.a)(["\n  padding: 2rem clamp(2rem, 20vw, 50rem);\n  @media screen and (max-width: 1600px) {\n    padding: 2rem 10rem;\n  }\n  @media screen and (max-width: 1200px) {\n    padding: 2rem 5rem;\n  }\n  @media screen and (max-width: 600px) {\n    padding: 1rem 1.5rem;\n  }\n  @media screen and (max-width: 350px) {\n    padding: 1rem;\n  }\n  text-align: center;\n  .photo-grid {\n    display: grid;\n    justify-items: center;\n    gap: 2rem;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  }\n  .card {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n  @media screen and (min-width: 600px) {\n    .photo-grid {\n      grid-auto-rows: 240px;\n    }\n    .card-tall {\n      grid-row: span 2 / auto;\n    }\n    .card-wide {\n      grid-column: span 2 / auto;\n    }\n    .square {\n      grid-row: span 2 / auto;\n      grid-column: span 2 / auto;\n    }\n  }\n"]);return L=function(){return n},n}var q=Object(p.a)(u.b.div)(L()),Y=Object(p.a)(u.b.div)(J()),W=function(){for(var n=Object(s.f)().genre,e={},t=0;t<K.length;t++)K[t].id===n&&(e=K[t]);return console.log(e),Object(i.jsxs)(q,{children:[Object(i.jsxs)(Y,{children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsx)("p",{children:Object(i.jsx)("em",{children:e.description})})]}),Object(i.jsx)("div",{className:"photo-grid",children:e.images.map((function(n){return Object(i.jsx)("div",{className:"card ".concat(n.type),children:Object(i.jsx)("img",{src:n.url,alt:n.alt})})}))})]})};t(36);var V=function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(x,{isToggled:t,toggleHandler:function(){r(!t)}}),!t&&Object(i.jsx)(u.a,{children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/",component:w}),Object(i.jsx)(s.a,{exact:!0,path:"/photography",component:I}),Object(i.jsx)(s.a,{exact:!0,path:"/about",component:T}),Object(i.jsx)(s.a,{path:"/photography/:genre",component:W})]})})]})},X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m.a,{children:Object(i.jsx)(V,{})})}),document.getElementById("root")),X()}},[[37,1,2]]]);
//# sourceMappingURL=main.d80998f9.chunk.js.map