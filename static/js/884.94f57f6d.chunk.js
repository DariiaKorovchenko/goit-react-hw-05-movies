"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,i,n){n.r(i);var t=n(439),s=n(791),a=n(689),c=n(87),o=n(289),r=n(184);i.default=function(){var e,i,n=(0,a.TH)(),l=(0,s.useState)({}),h=(0,t.Z)(l,2),d=h[0],m=h[1],v=(0,s.useState)(""),j=(0,t.Z)(v,2),u=j[0],f=j[1],x=(0,a.UO)().movieId;return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(x,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRhNzk5NWRjYjk2OTM0YWE4MzU1MDIzYTEwNjI0YyIsInN1YiI6IjY0ZTc4NzZhNTk0Yzk0MDExYzM1ZmViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6frVgnjYRfE5oQtx-Q6Irkw72W67RYy_0_qTBVd5JjI"}}).then((function(e){return e.json()})).then((function(e){m(e),f(e.release_date.slice(0,4))})).catch((function(e){return(0,r.jsx)("div",{children:e})}))}),[x]),(0,r.jsxs)("div",{className:o.Z.container,children:[(0,r.jsx)(c.rU,{to:null!==(e=null===(i=n.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/movies",className:o.Z.goback_link,children:"Go back"}),(0,r.jsxs)("div",{className:o.Z.movie_container,children:[(0,r.jsx)("div",{children:void 0!==d.poster_path&&(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(d.poster_path),width:"300",alt:d.original_title})}),(0,r.jsxs)("div",{className:o.Z.movie_description,children:[(0,r.jsxs)("h1",{className:o.Z.movie_title,children:[d.original_title," (",u,")"]}),(0,r.jsxs)("p",{children:["User score: ",Math.round(d.vote_average/10*100),"%"]}),(0,r.jsx)("h2",{children:"Overview"}),(0,r.jsx)("p",{children:d.overview}),(0,r.jsx)("h2",{children:"Genres"}),void 0!==d.genres&&d.genres.map((function(e){return(0,r.jsx)("li",{children:e.name},e.id)}))]})]}),(0,r.jsxs)("div",{className:o.Z.movie_information,children:[(0,r.jsx)("h3",{children:"Additional information"}),(0,r.jsx)(c.rU,{to:"cast",className:"".concat(o.Z.movieLink," ").concat(o.Z.information_link),children:"Cast"}),(0,r.jsx)(c.rU,{to:"reviews",className:"".concat(o.Z.movieLink," ").concat(o.Z.information_link),children:"Reviews"}),(0,r.jsx)(a.j3,{})]})]})}}}]);
//# sourceMappingURL=884.94f57f6d.chunk.js.map