!function(){var t={startBtn:document.querySelector("button[data-start"),stopBtn:document.querySelector("button[data-stop"),span:document.querySelector("span")},n=1e3,a=null;t.startBtn.addEventListener("click",(function(){var e=new Date;a=setInterval((function(){var a,o=new Date-e,c=Math.floor(o%n),r=Math.floor(o/n%60),l=Math.floor(o/6e4%60),s=Math.floor(o/36e5%24),d=Math.floor(o/864e5),u=2==="".concat(r).length?r:"".concat(r).padStart(2,"0"),i=2===l.toString().length?l:"0".concat(l),f=2==="".concat(s).length?s:"0".concat(s),h="".concat(d,":").concat(f,":").concat(i,":").concat(u,":").concat(c);a=h,t.span.innerText=a,t.startBtn.disabled=!0}),0)})),t.stopBtn.addEventListener("click",(function(){clearTimeout(a),t.startBtn.disabled=!1}))}();
//# sourceMappingURL=extra_stopwatch.6a9595f3.js.map
