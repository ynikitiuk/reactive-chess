(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={taken:"takenPieces_taken__EaYaT","taken-white":"takenPieces_taken-white__3YiLr","taken-black":"takenPieces_taken-black__2e9ox",figure:"takenPieces_figure__13VlE",number:"takenPieces_number__knijx"}},22:function(e,t,n){e.exports={square:"square_square__3aaD-","square-light":"square_square-light__2Byps","square-dark":"square_square-dark__1oFKM","square-selected":"square_square-selected__15z7V","square-checked":"square_square-checked__1-Vqq","square-allowed":"square_square-allowed__bXO7e"}},23:function(e,t,n){e.exports={"current-container":"currentPlayer_current-container__hfQzT","current-square":"currentPlayer_current-square__72FGf","current-black":"currentPlayer_current-black__1rcxs","current-white":"currentPlayer_current-white__u0UHW"}},31:function(e,t,n){e.exports={game:"App_game__2Od1p",field:"App_field__3kAwM"}},49:function(e,t,n){e.exports={"board-container":"board_board-container__3zE84"}},50:function(e,t,n){e.exports=n(94)},55:function(e,t,n){},87:function(e,t){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(46),c=n.n(i),o=(n(55),n(2)),u=n(4),l=n(6),s=n(5),d=n(7),f=n(31),b=n.n(f),h=n(3),w=n(1),m=n(9),p=n(20),k=n.n(p),v=n(49),O=n.n(v),g=n(22),j=n.n(g),_=function(e){var t=e.url,n=e.color,a=e.state,i=e.clicked,c=[j.a.square,j.a["square-".concat(n)]];return a&&c.push(j.a["square-".concat(a)]),r.a.createElement("div",{className:c.join(" "),style:{backgroundImage:t},onClick:i})},y=function(e){var t=M(e),n=Object(h.a)(t,2),a=n[0],r=n[1];return"".concat(String.fromCharCode(97+r)).concat(8-a)},q=function(e){var t=Object(h.a)(e,2);return 8*t[0]+t[1]},M=function(e){return[Math.floor(e/8),e%8]},E=function(e,t){return null!==t?e[t].getMoves(e,t).filter(function(n){return!e[n]||e[n].player!==e[t].player}):[]},x=function e(t,n,a){Object(o.a)(this,e),this.player=t,this.image=n,this.name=a,this.firstMove=!0},C={row:function(e){return[[e,0],[e,1],[e,2],[e,3],[e,4],[e,5],[e,6],[e,7]].map(q)},column:function(e){return[[0,e],[1,e],[2,e],[3,e],[4,e],[5,e],[6,e],[7,e]].map(q)},diagonalX:function(e){return[[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]].map(function(t){return[t[0]+e,t[1]]}).filter(S).map(q)},diagonalY:function(e){return[[0,7],[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[7,0]].map(function(t){return[t[0]+e,t[1]]}).filter(S).map(q)},shapeL:function(e,t){return[[e-2,t-1],[e-2,t+1],[e-1,t-2],[e-1,t+2],[e+1,t-2],[e+1,t+2],[e+2,t-1],[e+2,t+1]].filter(S).map(q)},around:function(e,t){return[[e-1,t-1],[e-1,t],[e-1,t+1],[e,t-1],[e,t+1],[e+1,t-1],[e+1,t],[e+1,t+1]].filter(S).map(q)},forward:function(e,t,n){return[[e+n,t],[e+2*n,t]].filter(S).map(q)},sides:function(e,t,n){return[[e+n,t+1],[e+n,t-1]].filter(S).map(q)}},S=function(e){return e[0]>=0&&e[0]<=7&&e[1]>=0&&e[1]<=7},P=function(e,t,n){var a=e.slice(0,e.indexOf(n)).filter(function(e){return e!==n}).map(function(e){return t[e]?1:0}).lastIndexOf(1),r=e.slice(e.indexOf(n)+1).map(function(e){return t[e]?1:0}).indexOf(1);return e.slice(-1===a?0:a,-1===r?e.length+1:e.indexOf(n)+r+2)},N=function(e){function t(e){Object(o.a)(this,t);var n="white"===e?"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";return Object(l.a)(this,Object(s.a)(t).call(this,e,n,"Queen"))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMoves",value:function(e,t){var n=M(t),a=Object(h.a)(n,2),r=a[0],i=a[1],c=P(C.row(r),e,t),o=P(C.column(i),e,t),u=P(C.diagonalX(r-i),e,t),l=P(C.diagonalY(r+i-7),e,t);return Object(w.a)(c).concat(Object(w.a)(o),Object(w.a)(u),Object(w.a)(l))}}]),t}(x),K=function(e,t){var n=e.whiteMove?"white":"black",a=Object(w.a)(e.board);return a[t.from]=null,a[t.to]="Pawn"===e.board[t.from].name&&(t.to<=7||t.to>=56)?new N(n):e.board[t.from],"King"===e.board[t.from].name&&t.from-t.to===2?(a[t.from-4]=null,a[t.from-1]=e.board[t.from-4]):"King"===e.board[t.from].name&&t.from-t.to===-2&&(a[t.from+3]=null,a[t.from+1]=e.board[t.from+3]),a},L=function(e,t){return e.map(function(e,t){return{figure:e,index:t}}).filter(function(e){return e.figure&&e.figure.player===("white"===t.figure.player?"black":"white")}).reduce(function(t,n){return Object(w.a)(t).concat(Object(w.a)(E(e,n.index)))},[]).includes(t.index)},V=function(e,t){return E(e.board,t).filter(function(n){var a=K(e,{from:t,to:n}),r=a.map(function(e,t){return{figure:e,index:t}}).filter(function(e){return e.figure&&e.figure.player===a[n].player&&"King"===e.figure.name})[0];return!L(a,r)})},T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props.state.whiteMove?"white":"black",n=this.props.board.map(function(e,t){return{figure:e,index:t}}).filter(function(e){return e.figure&&e.figure.player===t&&"King"===e.figure.name})[0],a=0===this.props.board.map(function(e,t){return{figure:e,index:t}}).filter(function(e){return e.figure&&e.figure.player===t}).reduce(function(t,n){return Object(w.a)(t).concat(Object(w.a)(V(e.props.state,n.index)))},[]).length?L(this.props.board,n)?"Checkmate! ".concat(this.props.state.whiteMove?"Black":"White"," wins!"):"Stalemate!":null;a&&alert(a)}},{key:"render",value:function(){var e=this.props,t=e.state,n=e.board,a=e.selected,i=e.checked,c=e.allowed,o=e.clickHandler;return r.a.createElement("div",{className:O.a["board-container"]},n.map(function(e,n){var u=M(n),l=Object(h.a)(u,2),s=l[0],d=l[1],f=a===n?"selected":c.includes(n)?"allowed":i===n?"checked":null;return r.a.createElement(_,{key:y(n),url:e?"url(".concat(e.image,")"):"none",color:(s+d)%2===0?"light":"dark",state:f,clicked:function(){return o(t,n)}})}))}}]),t}(a.Component),B=Object(m.b)(function(e){return{state:e,board:e.board,selected:e.selectedSquare,allowed:e.allowedMoves,checked:e.checkedSquare}},function(e){return{clickHandler:function(t,n){null!==t.selectedSquare?t.selectedSquare===n?e({type:"DESELECT"}):t.allowedMoves.includes(n)&&k()("http://localhost:3001").emit("MOVE",{type:"MOVE",from:t.selectedSquare,to:n}):function(e,t){return e.board[t]&&"white"===e.board[t].player===e.whiteMove}(t,n)&&e({type:"SELECT",id:n})}}})(T),Y=n(11),A=n(10),D=n(14),I=n.n(D),W=Object(m.b)(function(e){return{taken:e.taken,white:e.taken.white}})(function(e){var t=e.player,n=e.taken,a=[I.a.taken,I.a["taken-".concat(t)]],i=n[t].length?n[t].reduce(function(e,t){return e.hasOwnProperty(t.name)?Object(A.a)({},e,Object(Y.a)({},t.name,[t.image,++e[t.name][1]])):Object(A.a)({},e,Object(Y.a)({},t.name,[t.image,1]))},{}):{},c=Object.values(i)?Object.values(i).map(function(e,t){var n=Object(h.a)(e,2),a=n[0],i=n[1];return r.a.createElement("div",{key:t,className:I.a.figure,style:{backgroundImage:"url(".concat(a,")")}},i>1?r.a.createElement("div",{className:I.a.number},i):null)}):null;return r.a.createElement("div",{className:a.join(" ")},c)}),X=n(23),z=n.n(X),H=Object(m.b)(function(e){return{player:e.whiteMove?"white":"black"}})(function(e){var t=e.player,n=[z.a["current-square"],z.a["current-".concat(t)]];return r.a.createElement("div",{className:z.a["current-container"]},"Move: ",r.a.createElement("div",{className:n.join(" ")}))}),F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:b.a.game},r.a.createElement("div",{className:b.a.field},r.a.createElement(W,{player:"black"}),r.a.createElement(B,null),r.a.createElement(W,{player:"white"})),r.a.createElement(H,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(19),Q=function(e){function t(e){Object(o.a)(this,t);var n="white"===e?"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg":"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";return Object(l.a)(this,Object(s.a)(t).call(this,e,n,"Bishop"))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMoves",value:function(e,t){var n=M(t),a=Object(h.a)(n,2),r=a[0],i=a[1],c=P(C.diagonalX(r-i),e,t),o=P(C.diagonalY(r+i-7),e,t);return Object(w.a)(c).concat(Object(w.a)(o))}}]),t}(x),U=function(e){function t(e){Object(o.a)(this,t);var n="white"===e?"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";return Object(l.a)(this,Object(s.a)(t).call(this,e,n,"King"))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMoves",value:function(e,t){var n=M(t),a=Object(h.a)(n,2),r=a[0],i=a[1],c=C.around(r,i),o=this.firstMove&&e[t+3]&&e[t+3].firstMove&&!e[t+1]&&!e[t+2]?[8*r+6]:[],u=this.firstMove&&e[t-4]&&e[t-4].firstMove&&!e[t-1]&&!e[t-2]&&!e[t-3]?[8*r+2]:[];return Object(w.a)(c).concat(o,u)}}]),t}(x),G=function(e){function t(e){Object(o.a)(this,t);var n="white"===e?"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";return Object(l.a)(this,Object(s.a)(t).call(this,e,n,"Knight"))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMoves",value:function(e,t){return C.shapeL.apply(C,Object(w.a)(M(t)))}}]),t}(x),R=function(e){function t(e){Object(o.a)(this,t);var n="white"===e?"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg":"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";return Object(l.a)(this,Object(s.a)(t).call(this,e,n,"Pawn"))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMoves",value:function(e,t){var n=M(t),a=Object(h.a)(n,2),r=a[0],i=a[1],c="black"===this.player?1:-1,o=C.sides(r,i,c).filter(function(t){return e[t]}),u=C.forward(r,i,c),l=Object(h.a)(u,2),s=l[0],d=l[1],f=e[s]?[]:this.firstMove&&!e[d]?[s,d]:[s];return Object(w.a)(o).concat(f)}}]),t}(x),$=function(e){function t(e){Object(o.a)(this,t);var n="white"===e?"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";return Object(l.a)(this,Object(s.a)(t).call(this,e,n,"Rook"))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getMoves",value:function(e,t){var n=M(t),a=Object(h.a)(n,2),r=a[0],i=a[1],c=P(C.row(r),e,t),o=P(C.column(i),e,t);return Object(w.a)(c).concat(Object(w.a)(o))}}]),t}(x),Z={board:function(){var e={a1:new $("white"),b1:new G("white"),c1:new Q("white"),d1:new N("white"),e1:new U("white"),f1:new Q("white"),g1:new G("white"),h1:new $("white"),a2:new R("white"),b2:new R("white"),c2:new R("white"),d2:new R("white"),e2:new R("white"),f2:new R("white"),g2:new R("white"),h2:new R("white"),a7:new R("black"),b7:new R("black"),c7:new R("black"),d7:new R("black"),e7:new R("black"),f7:new R("black"),g7:new R("black"),h7:new R("black"),a8:new $("black"),b8:new G("black"),c8:new Q("black"),d8:new N("black"),e8:new U("black"),f8:new Q("black"),g8:new G("black"),h8:new $("black")};return Array(64).fill(null).map(function(t,n){var a=y(n);return e.hasOwnProperty(a)?e[a]:t})}(),taken:{black:[],white:[]},whiteMove:!0,selectedSquare:null,checkedSquare:null,allowedMoves:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT":return Object(A.a)({},e,{selectedSquare:t.id,allowedMoves:V(e,t.id)});case"DESELECT":return Object(A.a)({},e,{selectedSquare:null,allowedMoves:[]});case"MOVE":e.board[t.from].firstMove=!1;var n=e.whiteMove?"white":"black",a=K(e,t),r=e.board[t.to]?Object(A.a)({},e.taken,Object(Y.a)({},n,Object(w.a)(e.taken[n]).concat([e.board[t.to]]))):e.taken,i=e.board.map(function(e,t){return{figure:e,index:t}}).filter(function(e){return e.figure&&e.figure.player===("white"===n?"black":"white")&&"King"===e.figure.name})[0];return Object(A.a)({},e,{board:a,taken:r,whiteMove:!e.whiteMove,selectedSquare:null,allowedMoves:[],checkedSquare:L(a,i)?i.index:null});default:return e}},te=Object(J.b)(ee);k()("http://localhost:3001").on("MOVE",function(e){te.dispatch(e)}),c.a.render(r.a.createElement(m.a,{store:te},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,2,1]]]);
//# sourceMappingURL=main.4cb95d64.chunk.js.map