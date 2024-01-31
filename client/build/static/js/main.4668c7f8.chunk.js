(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/memories-Logo.e342bbed.png"},120:function(e,t,a){e.exports=a.p+"static/media/memories-Text.fcbcfa5a.png"},142:function(e,t,a){e.exports=a(199)},150:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),c=a(11),i=a(45),s=a(134);var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return{...e,isLoading:!0};case"END_LOADING":return{...e,isLoading:!1};case"DELETE":return{...e,posts:e.posts.filter(e=>e._id!==t.payload)};case"UPDATE":case"COMMENT":return{...e,posts:e.posts.map(e=>e._id===t.payload._id?t.payload:e)};case"FETCH_ALL":return{...e,posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages};case"FETCH_BY_SEARCH":return{...e,posts:t.payload};case"FETCH_POST":return{...e,post:t.payload};case"CREATE":return{...e,posts:[...e.posts,t.payload]};default:return e}};var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify({...null===t||void 0===t?void 0:t.data})),{...e,authData:null===t||void 0===t?void 0:t.data};case"LOGOUT":return localStorage.clear(),{...e,authData:null};default:return e}},p=Object(i.b)({posts:m,authReducer:d}),u=(a(150),a(236)),g=a(225),h=a(226),E=a(242),v=a(204),b=a(227),y=a(14),f=a(24),x=a(70),O=a(119),C=a.n(O),N=a(120),w=a.n(N),S=a(222),j=a(224),I=Object(S.a)(e=>({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",[e.breakpoints.down("sm")]:{flexDirection:"column"}},heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px",[e.breakpoints.down("sm")]:{width:"auto"}},profile:{display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center",[e.breakpoints.down("sm")]:{width:"auto",marginTop:20,justifyContent:"center"}},logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(j.a[500]),backgroundColor:j.a[500]}}));var k=()=>{const[e,t]=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),a=Object(c.b)(),o=Object(y.h)(),r=Object(y.g)(),i=I(),s=()=>{a({type:"LOGOUT"}),r.push("/auth"),t(null)};return Object(n.useEffect)(()=>{const a=null===e||void 0===e?void 0:e.token;if(a){1e3*Object(x.a)(a).exp<(new Date).getTime()&&s()}t(JSON.parse(localStorage.getItem("profile")))},[o]),l.a.createElement(g.a,{className:i.appBar,position:"static",color:"inherit"},l.a.createElement(f.b,{to:"/",className:i.brandContainer},l.a.createElement("img",{src:w.a,alt:"icon",height:"45px"}),l.a.createElement("img",{className:i.image,src:C.a,alt:"icon",height:"40px"})),l.a.createElement(h.a,{className:i.toolbar},(null===e||void 0===e?void 0:e.result)?l.a.createElement("div",{className:i.profile},l.a.createElement(E.a,{className:i.purple,alt:null===e||void 0===e?void 0:e.result.name,src:null===e||void 0===e?void 0:e.result.imageUrl},null===e||void 0===e?void 0:e.result.name.charAt(0)),l.a.createElement(v.a,{className:i.userName,variant:"h6"},null===e||void 0===e?void 0:e.result.name),l.a.createElement(b.a,{variant:"contained",className:i.logout,color:"secondary",onClick:s},"Logout")):l.a.createElement(b.a,{component:f.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},T=a(136),A=a(228),D=a(229),L=a(239),_=Object(S.a)(e=>({media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:{display:"flex",width:"100%",[e.breakpoints.down("sm")]:{flexWrap:"wrap",flexDirection:"column"}},section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:{marginLeft:"20px",[e.breakpoints.down("sm")]:{marginLeft:0}},recommendedPosts:{display:"flex",[e.breakpoints.down("sm")]:{flexDirection:"column"}},loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",overflowY:"auto",marginRight:"30px"}})),B=a(125);const F=a.n(B).a.create({baseURL:"http://localhost:5000"});F.interceptors.request.use(e=>(localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e));const P=e=>async t=>{try{t({type:"START_LOADING"});const{data:a}=await(e=>F.get("/posts/".concat(e)))(e);t({type:"FETCH_POST",payload:a}),t({type:"END_LOADING"})}catch(a){console.log(a)}},R=e=>async t=>{try{t({type:"START_LOADING"});const{data:a}=await(e=>F.get("/posts?page=".concat(e)))(e);t({type:"FETCH_ALL",payload:a}),t({type:"END_LOADING"})}catch(a){console.log(a)}},W=e=>async t=>{try{t({type:"START_LOADING"});const{data:{data:a}}=await(e=>F.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags)))(e);t({type:"FETCH_BY_SEARCH",payload:a}),t({type:"END_LOADING"})}catch(a){console.log(a)}},H=(e,t)=>async a=>{try{a({type:"START_LOADING"});const{data:l}=await(n=e,F.post("/posts",n));t.push("/posts/".concat(l._id)),a({type:"CREATE",payload:l})}catch(l){console.log(l)}var n},U=(e,t)=>async a=>{try{const{data:n}=await((e,t)=>F.patch("/posts/".concat(e),t))(e,t);a({type:"UPDATE",payload:n})}catch(n){console.log(n)}},z=e=>async t=>{const a=JSON.parse(localStorage.getItem("profile"));try{const{data:n}=await(e=>F.patch("/posts/".concat(e,"/likePost")))(e,null===a||void 0===a||a.token);t({type:"LIKE",payload:n})}catch(n){console.log(n)}},G=(e,t)=>async a=>{try{const{data:n}=await((e,t)=>F.post("/posts/".concat(t,"/commentPost"),{value:e}))(e,t);return a({type:"COMMENT",payload:n}),n.comments}catch(n){console.log(n)}},J=e=>async t=>{try{await(await(e=>F.delete("/posts/".concat(e)))(e)),t({type:"DELETE",payload:e})}catch(a){console.log(a)}};var M=function(e){let{post:t}=e;const a=_(),o=Object(c.b)(),[r,i]=Object(n.useState)(t?t.comments:[]),[s,m]=Object(n.useState)(""),d=JSON.parse(localStorage.getItem("profile")),p=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement("div",{className:a.commentsOuterContainer},l.a.createElement("div",{className:a.commentsInnerContainer},l.a.createElement(v.a,{gutterBottom:!0,variant:"h6"},"Comments"),r&&r.map((e,t)=>l.a.createElement(v.a,{key:t,gutterBottom:!0,variant:"subtitle1"},l.a.createElement("strong",null," ",e.split(": ")[0],": "),e.split(": ")[1])),l.a.createElement("div",{ref:p})),d&&l.a.createElement("div",{style:{width:"70%"}},l.a.createElement(v.a,{gutterButtom:!0,variant:"h6"},"Write a Comment"),l.a.createElement(L.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:s,onChange:e=>m(e.target.value)}),l.a.createElement(b.a,{style:{marginTop:"10px"},fullWidth:!0,color:"primary",disabled:!s,variant:"contained",onClick:async()=>{const e="".concat(d.result.name,": ").concat(s),a=await o(G(e,t._id));i(a),m(""),p.current.scrollIntoView({behaviour:"smooth"})}},"Comment"))))},Y=a(77),q=a.n(Y);var Q=()=>{const{post:e,posts:t,isLoading:a}=Object(c.c)(e=>e.posts),o=Object(c.b)(),r=Object(y.g)(),i=_(),{id:s}=Object(y.i)();if(Object(n.useEffect)(()=>{o(P(s))},[s]),Object(n.useEffect)(()=>{e&&o(W({search:"none",tags:null===e||void 0===e?void 0:e.tags.join(",")}))},[e]),!e)return null;if(a)return l.a.createElement(T.a,{elevation:6,className:i.loadingPaper},l.a.createElement(A.a,{size:"7em"}));const m=t.filter(t=>{let{_id:a}=t;return a!==e._id});return l.a.createElement(T.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},l.a.createElement("div",{className:i.card},l.a.createElement("div",{className:i.section},l.a.createElement(v.a,{variant:"h3",component:"h2"},e.title),l.a.createElement(v.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},e.tags.map(e=>"#".concat(e," "))),l.a.createElement(v.a,{gutterBottom:!0,variant:"body1",component:"p"},e.message),l.a.createElement(v.a,{variant:"h6"},"Created by: ",e.name),l.a.createElement(v.a,{variant:"body1"},q()(e.createdAt).fromNow()),l.a.createElement(D.a,{style:{margin:"20px 0"}}),l.a.createElement(v.a,{variant:"body1"},l.a.createElement("strong",null,"Realtime Chat - coming soon!")),l.a.createElement(D.a,{style:{margin:"20px 0"}}),l.a.createElement(M,{post:e}),l.a.createElement(D.a,{style:{margin:"20px 0"}})),l.a.createElement("div",{className:i.imageSection},l.a.createElement("img",{className:i.media,src:e.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:e.title}))),m&&l.a.createElement("div",{className:i.section},l.a.createElement(v.a,{gutterBottom:!0,variant:"h5"},"You might also like:"),l.a.createElement(D.a,null),l.a.createElement("div",{className:i.recommendedPosts},m.map(e=>{let{title:t,message:a,name:n,likes:o,selectedFile:c,_id:i}=e;return l.a.createElement("div",{style:{margin:"20px",cursor:"pointer"},onClick:()=>(e=>r.push("/posts/".concat(e)))(i),key:i},l.a.createElement(v.a,{gutterBottom:!0,variant:"h6"},t),l.a.createElement(v.a,{gutterBottom:!0,variant:"subtitle2"},n),l.a.createElement(v.a,{gutterBottom:!0,variant:"subtitle2"},a),l.a.createElement(v.a,{gutterBottom:!0,variant:"h6"},"Likes: ",o.length),l.a.createElement("img",{src:c,width:"200px"}))}))))},K=a(240),V=a(235),X=a(126),Z=a.n(X),$=a(230),ee=a(231),te=a(232),ae=a(233),ne=a(234),le=a(127),oe=a.n(le),re=a(129),ce=a.n(re),ie=a(128),se=a.n(ie),me=a(90),de=a.n(me),pe=Object(S.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}});var ue=e=>{var t,a,o,r;let{post:i,setCurrentId:s}=e;const m=pe(),d=Object(c.b)(),p=Object(y.g)(),u=JSON.parse(localStorage.getItem("profile")),g=(null===u||void 0===u?void 0:u.result.googleId)||(null===u||void 0===u?void 0:u._id),h=i.likes.find(e=>e===g),[E,f]=Object(n.useState)(null===i||void 0===i?void 0:i.likes),x=()=>E.length>0?E.find(e=>e===g)?l.a.createElement(l.a.Fragment,null,l.a.createElement(oe.a,{fontSize:"small"}),"\xa0",E.length>2?"You and ".concat(E.length-1," others"):"".concat(E.length," like").concat(E.length>1?"s":"")):l.a.createElement(l.a.Fragment,null,l.a.createElement(de.a,{fontSize:"small"}),"\xa0",E.length," ",1===E.length?"Like":"Likes"):l.a.createElement(l.a.Fragment,null,l.a.createElement(de.a,{fontSize:"small"}),"\xa0Like");return l.a.createElement($.a,{className:m.card,raised:!0,elevation:6},l.a.createElement(ee.a,{onClick:()=>p.push("/posts/".concat(i._id))},l.a.createElement(te.a,{className:m.media,image:i.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:i.title}),l.a.createElement("div",{className:m.overlay},l.a.createElement(v.a,{variant:"h6"},i.name),l.a.createElement(v.a,{variant:"body2"},q()(i.createdAt).fromNow())),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a._id)===(null===i||void 0===i?void 0:i.creator))&&l.a.createElement("div",{className:m.overlay2},l.a.createElement(b.a,{onClick:()=>s(i._id),style:{color:"white"},size:"small"},l.a.createElement(se.a,{fontSize:"default"}))),l.a.createElement("div",{className:m.details},l.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"h2"},i.tags.map(e=>"#".concat(e," ")))),l.a.createElement(v.a,{className:m.title,gutterBottom:!0,variant:"h5",component:"h2"},i.title),l.a.createElement(ae.a,null,l.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},i.message))),l.a.createElement(ne.a,{className:m.cardActions},l.a.createElement(b.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:async()=>{d(z(i._id)),f(h?i.likes.filter(e=>e!==g):[...i.likes,g])}},l.a.createElement(x,null)),((null===u||void 0===u||null===(o=u.result)||void 0===o?void 0:o.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===i||void 0===i?void 0:i.creator))&&l.a.createElement(b.a,{size:"small",color:"secondary",onClick:()=>d(J(i._id))},l.a.createElement(ce.a,{fontSize:"small"})," Delete")))},ge=Object(S.a)(e=>({mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}));var he=e=>{let{setCurrentId:t}=e;const{posts:a,isLoading:n}=Object(c.c)(e=>e.posts),o=ge();return a.length||n?n?l.a.createElement(A.a,null):l.a.createElement(V.a,{className:o.container,container:!0,alignItems:"stretch",spacing:3},a.map(e=>l.a.createElement(V.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},l.a.createElement(ue,{post:e,setCurrentId:t})))):"No posts"},Ee=a(130),ve=a.n(Ee),be=Object(S.a)(e=>({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10,width:"97%"},clear:{marginBottom:10,width:"97%"}}));var ye=e=>{var t;let{currentId:a,setCurrentId:o}=e;const[r,i]=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(c.c)(e=>a?e.posts.posts.find(e=>e._id===a):null),m=Object(c.b)(),d=be(),p=JSON.parse(localStorage.getItem("profile")),u=Object(y.g)();Object(n.useEffect)(()=>{s&&i(s)},[s]);const g=()=>{o(0),i({title:"",message:"",tags:"",selectedFile:""})};return(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.name)?l.a.createElement(T.a,{className:d.paper,elevation:6},l.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:async e=>{var t,n;(e.preventDefault(),0===a)?(m(H({...r,name:null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.name},u)),g()):(m(U(a,{...r,name:null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.name})),g())}},l.a.createElement(v.a,{variant:"h6"},a?'Editing "'.concat(s.title,'"'):"Creating a Memory"),l.a.createElement(L.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:r.title,onChange:e=>i({...r,title:e.target.value})}),l.a.createElement(L.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:r.message,onChange:e=>i({...r,message:e.target.value})}),l.a.createElement(L.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:r.tags,onChange:e=>i({...r,tags:e.target.value.split(",")})}),l.a.createElement("div",{className:d.fileInput},l.a.createElement(ve.a,{type:"file",multiple:!1,onDone:e=>{let{base64:t}=e;return i({...r,selectedFile:t})}})),l.a.createElement(b.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),l.a.createElement(b.a,{className:d.clear,variant:"contained",color:"secondary",size:"small",onClick:g,fullWidth:!0},"Clear"))):l.a.createElement(T.a,{className:d.paper},l.a.createElement(v.a,{variant:"h6",align:"center"},"Please Sign In to create your own memories and like other's memories."))},fe=a(243),xe=a(241),Oe=Object(S.a)(()=>({ul:{justifyContent:"space-around"}}));var Ce=e=>{let{page:t}=e;const{numberOfPages:a}=Object(c.c)(e=>e.posts),o=Object(c.b)(),r=Oe();return Object(n.useEffect)(()=>{t&&o(R(t))},[o,t]),l.a.createElement(fe.a,{classes:{ul:r.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:e=>l.a.createElement(xe.a,Object.assign({},e,{component:f.b,to:"/posts?page=".concat(e.page)}))})},Ne=Object(S.a)(e=>({appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:{[e.breakpoints.down("xs")]:{flexDirection:"column-reverse"}}}));var we=()=>{const e=Ne(),t=new URLSearchParams(Object(y.h)().search),a=t.get("page")||1,o=t.get("searchQuery"),[r,i]=Object(n.useState)(0),s=Object(c.b)(),[m,d]=Object(n.useState)(""),[p,h]=Object(n.useState)([]),E=Object(y.g)(),v=()=>{m.trim()||p?(s(W({search:m,tags:p.join(",")})),E.push("/posts/search?searchQuery=".concat(m||"none","&tags=").concat(p.join(",")))):E.push("/")};return l.a.createElement(K.a,{in:!0},l.a.createElement(u.a,{maxWidth:"xl"},l.a.createElement(V.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer},l.a.createElement(V.a,{item:!0,xs:12,sm:6,md:9},l.a.createElement(he,{setCurrentId:i})),l.a.createElement(V.a,{item:!0,xs:12,sm:6,md:3},l.a.createElement(g.a,{className:e.appBarSearch,position:"static",color:"inherit"},l.a.createElement(L.a,{onKeyDown:e=>{13===e.keyCode&&v()},name:"search",variant:"outlined",label:"Search Memories",fullWidth:!0,value:m,onChange:e=>d(e.target.value)}),l.a.createElement(Z.a,{style:{margin:"10px 0"},value:p,onAdd:e=>{return t=e,h([...p,t]);var t},onDelete:e=>{return t=e,h(p.filter(e=>e!==t));var t},label:"Search Tags",variant:"outlined"}),l.a.createElement(b.a,{onClick:v,className:e.searchButton,variant:"contained",color:"primary"},"Search")),l.a.createElement(ye,{currentId:r,setCurrentId:i}),!o&&!p.length&&l.a.createElement(T.a,{className:e.pagination,elevation:6},l.a.createElement(Ce,{page:a}))))))},Se=Object(S.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{display:"flex",flexDirection:"column",alignItems:"center"}})),je=a(133),Ie=a.n(je),ke=a(237),Te=a(238),Ae=a(131),De=a.n(Ae),Le=a(132),_e=a.n(Le);var Be=e=>{let{name:t,handleChange:a,label:n,half:o,autoFocus:r,type:c,handleShowPassword:i}=e;return l.a.createElement(V.a,{item:!0,xs:12,sm:o?6:12},l.a.createElement(L.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:r,type:c,InputProps:"password"===t?{endAdornment:l.a.createElement(ke.a,{position:"end"},l.a.createElement(Te.a,{onClick:i},"password"===c?l.a.createElement(De.a,null):l.a.createElement(_e.a,null)))}:null}))},Fe=a(78);const Pe=(e,t)=>async a=>{try{const{data:n}=await(e=>F.post("/user/signin",e))(e);a({type:"AUTH",data:n}),t.push("/")}catch(n){console.log(n)}},Re=(e,t)=>async a=>{try{const{data:n}=await(e=>F.post("/user/signup",e))(e);a({type:"AUTH",data:n}),t.push("/")}catch(n){console.log(n)}},We={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};var He=()=>{const e=Object(y.g)(),t=Se(),[a,o]=Object(n.useState)(!1),[r,i]=Object(n.useState)(!0),[s,m]=Object(n.useState)(We),d=e=>{m({...s,[e.target.name]:e.target.value})},p=Object(c.b)();return l.a.createElement(u.a,{component:"main",maxWidth:"xs"},l.a.createElement(T.a,{className:t.paper,elevation:3},l.a.createElement(E.a,{className:t.avatar},l.a.createElement(Ie.a,null)),l.a.createElement(v.a,{variant:"h5"},r?"Sign Up":"Sign In"),l.a.createElement("form",{className:t.form,onSubmit:t=>{t.preventDefault(),p(r?Re(s,e):Pe(s,e))}},l.a.createElement(V.a,{container:!0,spacing:2},r&&l.a.createElement(l.a.Fragment,null,l.a.createElement(Be,{name:"firstName",label:"First Name",handleChange:d,autoFocus:!0,half:!0}),l.a.createElement(Be,{name:"lastName",label:"Last Name",handleChange:d,half:!0})),l.a.createElement(Be,{name:"email",label:"Email Address",handleChange:d,type:"email"}),l.a.createElement(Be,{name:"password",label:"Password",handleChange:d,type:a?"text":"password",handleShowPassword:()=>o(!a)}),r&&l.a.createElement(Be,{name:"confirmPassword",label:"Confirm Password",handleChange:d,type:"password"})),l.a.createElement(b.a,{color:"primary",fullWidth:!0,variant:"contained",type:"submit",className:t.submit},r?"Sign Up":"Sign In"),l.a.createElement(Fe.b,{clientId:"262968664428-k99007cj2e1bo76ha1fl05h4gqkm3tsn.apps.googleusercontent.com"},l.a.createElement("div",{className:t.googleButton},l.a.createElement(Fe.a,{theme:"filled_white",shape:"pill",buttonText:"Login with Google",onSuccess:async t=>{const a=Object(x.a)(t.credential),n=t.credential;try{p({type:"AUTH",data:{result:a,token:n}}),e.push("/")}catch(l){console.log(l)}},onFailure:e=>{console.log(e),console.log("Google Sign In Failed. Try again later")},cookiePolicy:"single_host_origin"}))),l.a.createElement(V.a,{container:!0,justifyContent:"center"},l.a.createElement(V.a,{item:!0},l.a.createElement(b.a,{onClick:()=>{i(!r),o(!1)}},r?"Already have an account? Sign In":"Don't have an account? Sign Up"))))))};var Ue=()=>{const e=JSON.parse(localStorage.getItem("profile"));return l.a.createElement(f.a,null,l.a.createElement(u.a,{maxWidth:"xl"},l.a.createElement(k,null),l.a.createElement(y.d,null,l.a.createElement(y.b,{path:"/",exact:!0,component:()=>l.a.createElement(y.a,{to:"/posts"})}),l.a.createElement(y.b,{path:"/posts",exact:!0,component:we}),l.a.createElement(y.b,{path:"/posts/search",exact:!0,component:we}),l.a.createElement(y.b,{path:"/posts/:id",component:Q}),l.a.createElement(y.b,{path:"/auth",exact:!0,component:()=>e?l.a.createElement(y.a,{to:"/posts"}):l.a.createElement(He,null)}))))};const ze=Object(i.d)(p,Object(i.c)(Object(i.a)(s.a)));r.a.render(l.a.createElement(c.a,{store:ze},l.a.createElement(Ue,null)),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.4668c7f8.chunk.js.map