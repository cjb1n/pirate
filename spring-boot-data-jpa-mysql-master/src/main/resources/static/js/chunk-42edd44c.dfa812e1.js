(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42edd44c"],{"0496":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var n=i("7a23"),o={class:"submit-form"},c={key:0},u={class:"form-group"},l=Object(n["f"])("label",{for:"title"},"Title",-1),r={class:"form-group"},s=Object(n["f"])("label",{for:"description"},"Description",-1),a={key:1},d=Object(n["f"])("h4",null,"You submitted successfully!",-1);function b(t,e,i,b,f,p){return Object(n["o"])(),Object(n["d"])("div",o,[f.submitted?(Object(n["o"])(),Object(n["d"])("div",a,[d,Object(n["f"])("button",{class:"btn btn-success",onClick:e[4]||(e[4]=function(){return p.newTutorial&&p.newTutorial.apply(p,arguments)})},"Add")])):(Object(n["o"])(),Object(n["d"])("div",c,[Object(n["f"])("div",u,[l,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",id:"title",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return f.tutorial.title=t}),name:"title"},null,512),[[n["x"],f.tutorial.title]])]),Object(n["f"])("div",r,[s,Object(n["A"])(Object(n["f"])("input",{class:"form-control",id:"description",required:"","onUpdate:modelValue":e[2]||(e[2]=function(t){return f.tutorial.description=t}),name:"description"},null,512),[[n["x"],f.tutorial.description]])]),Object(n["f"])("button",{onClick:e[3]||(e[3]=function(){return p.saveTutorial&&p.saveTutorial.apply(p,arguments)}),class:"btn btn-success"},"Submit")]))])}var f=i("f652"),p={name:"add-tutorial",data:function(){return{tutorial:{id:null,title:"",description:"",published:!1},submitted:!1}},methods:{saveTutorial:function(){var t=this,e={title:this.tutorial.title,description:this.tutorial.description};f["a"].create(e).then((function(e){t.tutorial.id=e.data.id,console.log(e.data),t.submitted=!0})).catch((function(t){console.log(t)}))},newTutorial:function(){this.submitted=!1,this.tutorial={}}}};i("d731");p.render=b;e["default"]=p},1004:function(t,e,i){},d731:function(t,e,i){"use strict";i("1004")}}]);
//# sourceMappingURL=chunk-42edd44c.dfa812e1.js.map