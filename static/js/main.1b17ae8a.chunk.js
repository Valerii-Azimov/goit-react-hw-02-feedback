(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),u=n.n(c),o=n(8),i=n(9),l=n(10),f=n(15),d=n(14),s=n(1),b=n(2);function v(){var e=Object(s.a)(["\n  margin: 0;\n"]);return v=function(){return e},e}var m=b.a.div(v());function p(e){var t=e.children;return r.a.createElement(m,null,t)}function g(){var e=Object(s.a)([""]);return g=function(){return e},e}function E(){var e=Object(s.a)(["\n  margin-top: 5px;\n  width: 180px;\n  display: flex;\n  justify-content: space-between;\n"]);return E=function(){return e},e}var k=b.a.div(E()),h=b.a.button(g());var j=function(e){var t=e.onIncrement;return r.a.createElement(k,null,r.a.createElement(h,{type:"button",name:"good",onClick:t},"Good"),r.a.createElement(h,{type:"button",name:"neutral",onClick:t},"Neutral"),r.a.createElement(h,{type:"button",name:"bad",onClick:t},"Bad"))};function O(){var e=Object(s.a)(["\n  margin-top: 10px;\n"]);return O=function(){return e},e}var P=b.a.section(O());function y(e){var t=e.children,n=e.title;return r.a.createElement(P,null,n," ",t)}function F(){var e=Object(s.a)([""]);return F=function(){return e},e}function x(){var e=Object(s.a)([""]);return x=function(){return e},e}function w(){var e=Object(s.a)([""]);return w=function(){return e},e}function V(){var e=Object(s.a)([""]);return V=function(){return e},e}function T(){var e=Object(s.a)([""]);return T=function(){return e},e}function I(){var e=Object(s.a)([""]);return I=function(){return e},e}function N(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n"]);return N=function(){return e},e}var C=b.a.div(N()),B=b.a.p(I()),M=b.a.p(T()),G=b.a.p(V()),J=b.a.p(w()),S=b.a.p(x()),A=b.a.p(F());function q(e){var t=e.NotificationMessage;return r.a.createElement(A,null,t)}var z=function(e){var t=e.goodValue,n=e.neutralValue,a=e.badValue,c=e.countTotalFeedback,u=e.countPositiveFeedbackPercentage;return 0!==c?r.a.createElement(C,null,r.a.createElement(B,null,"Good:",t),r.a.createElement(M,null,"Neutral:",n),r.a.createElement(G,null,"Bad:",a),r.a.createElement(J,null,"Total:",c),r.a.createElement(S,null,"PositiveFedback:",u,"%")):r.a.createElement(q,{NotificationMessage:"No feedback given"})},D=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onIncrement=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+=t}),0)},e.countPositiveFeedbackPercentage=function(){return 0!==e.state.good?Math.trunc(e.state.good/e.countTotalFeedback()*100):e.state.good},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(y,{title:"Please leave feedback"},r.a.createElement(j,{onIncrement:this.onIncrement})),r.a.createElement(y,{title:"Statistics"},r.a.createElement(z,{goodValue:this.state.good,neutralValue:this.state.neutral,badValue:this.state.bad,countTotalFeedback:this.countTotalFeedback(),countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage()})))}}]),n}(a.Component);D.defaultProps={initialValue:0},u.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1b17ae8a.chunk.js.map