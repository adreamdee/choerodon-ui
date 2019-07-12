webpackJsonp([71],{2274:function(n,a,s){n.exports={cascade:s(3006),dataset:s(3007),multiple:s(3008)}},3006:function(n,a,s){n.exports={content:{"zh-CN":[["p","LOV级联。"]],"en-US":[["p","LOV Cascade"]]},meta:{order:3,title:{"zh-CN":"LOV级联","en-US":"LOV Cascade"},filename:"components-pro/lov/demo/cascade.md",id:"components-pro-lov-demo-cascade"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Lov<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleDataSetChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[dataset newValue]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">\'[record.toJSONData()]\'</span><span class="token punctuation">,</span> record<span class="token punctuation">.</span><span class="token function">toJSONData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token punctuation">:</span> <span class="token string">\'mySex\'</span><span class="token punctuation">,</span>\n        type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'性别\'</span><span class="token punctuation">,</span>\n        lookupCode<span class="token punctuation">:</span> <span class="token string">\'HR.EMPLOYEE_GENDER\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token punctuation">:</span> <span class="token string">\'code\'</span><span class="token punctuation">,</span>\n        type<span class="token punctuation">:</span> <span class="token string">\'object\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'LOV\'</span><span class="token punctuation">,</span>\n        lovCode<span class="token punctuation">:</span> <span class="token string">\'LOV_CODE\'</span><span class="token punctuation">,</span>\n        cascadeMap<span class="token punctuation">:</span> <span class="token punctuation">{</span> sex<span class="token punctuation">:</span> <span class="token string">\'mySex\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      update<span class="token punctuation">:</span> handleDataSetChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">gutter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mySex<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Lov</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>code<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n){var a=n.record,s=n.value,t=n.oldValue;console.log("[dataset newValue]",s,"[oldValue]",t,"[record.toJSONData()]",a.toJSONData())}var o=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),c=s(492),u=function(s){function u(){var s,t,o,e;n(this,u);for(var l=arguments.length,i=Array(l),k=0;k<l;k++)i[k]=arguments[k];return t=o=a(this,(s=u.__proto__||Object.getPrototypeOf(u)).call.apply(s,[this].concat(i))),o.ds=new c.DataSet({fields:[{name:"mySex",type:"string",label:"性别",lookupCode:"HR.EMPLOYEE_GENDER"},{name:"code",type:"object",label:"LOV",lovCode:"LOV_CODE",cascadeMap:{sex:"mySex"}}],events:{update:p}}),e=t,a(o,e)}return t(u,s),e(u,[{key:"render",value:function(){return o.createElement(c.Row,{gutter:10},o.createElement(c.Col,{span:12},o.createElement(c.Select,{dataSet:this.ds,name:"mySex"})),o.createElement(c.Col,{span:12},o.createElement(c.Lov,{dataSet:this.ds,name:"code"})))}}]),u}(o.Component);return o.createElement(u,null)}}},3007:function(n,a,s){n.exports={content:{"zh-CN":[["p","绑定数据源。"]],"en-US":[["p","DataSet binding."]]},meta:{order:0,title:{"zh-CN":"数据源","en-US":"DataSet"},filename:"components-pro/lov/demo/dataset.md",id:"components-pro-lov-demo-dataset"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Lov<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleDataSetChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[dataset]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`[record.get(\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\')]`</span></span><span class="token punctuation">,</span> record<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoCreate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'code\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'object\'</span><span class="token punctuation">,</span> lovCode<span class="token punctuation">:</span> <span class="token string">\'LOV_CODE\'</span><span class="token punctuation">,</span> lovPara<span class="token punctuation">:</span> <span class="token punctuation">{</span> code<span class="token punctuation">:</span> <span class="token string">\'111\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'code_string\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> lovCode<span class="token punctuation">:</span> <span class="token string">\'LOV_CODE\'</span><span class="token punctuation">,</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'SYS.TIME_ZONE\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'code_code\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> bind<span class="token punctuation">:</span> <span class="token string">\'code.code\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'code_description\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> bind<span class="token punctuation">:</span> <span class="token string">\'code.description\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      update<span class="token punctuation">:</span> handleDataSetChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">gutter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Lov</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>code<span class="token punctuation">"</span></span> <span class="token attr-name">noCache</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Lov</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>code_string<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n){var a=n.record,s=n.name,t=n.value,p=n.oldValue;console.log("[dataset]",t,"[oldValue]",p,"[record.get('"+s+"')]",a.get(s))}var o=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),c=s(492),u=function(s){function u(){var s,t,o,e;n(this,u);for(var l=arguments.length,i=Array(l),k=0;k<l;k++)i[k]=arguments[k];return t=o=a(this,(s=u.__proto__||Object.getPrototypeOf(u)).call.apply(s,[this].concat(i))),o.ds=new c.DataSet({autoCreate:!0,fields:[{name:"code",type:"object",lovCode:"LOV_CODE",lovPara:{code:"111"},required:!0},{name:"code_string",type:"string",lovCode:"LOV_CODE",required:!0,defaultValue:"SYS.TIME_ZONE"},{name:"code_code",type:"string",bind:"code.code"},{name:"code_description",type:"string",bind:"code.description"}],events:{update:p}}),e=t,a(o,e)}return t(u,s),e(u,[{key:"render",value:function(){return o.createElement(c.Row,{gutter:10},o.createElement(c.Col,{span:12},o.createElement(c.Lov,{dataSet:this.ds,name:"code",noCache:!0})),o.createElement(c.Col,{span:12},o.createElement(c.Lov,{dataSet:this.ds,name:"code_string"})))}}]),u}(o.Component);return o.createElement(u,null)}}},3008:function(n,a,s){n.exports={content:{"zh-CN":[["p","通过属性",["code","multiple"],"设置为多值。"]],"en-US":[["p","Multiple values via property ",["code","multiple"],"."]]},meta:{order:1,title:{"zh-CN":"多值","en-US":"Multiple"},filename:"components-pro/lov/demo/multiple.md",id:"components-pro-lov-demo-multiple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Lov <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleDataSetChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[dataset multiple]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`[record.get(\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\')]`</span></span><span class="token punctuation">,</span> record<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoCreate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'code\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'object\'</span><span class="token punctuation">,</span> lovCode<span class="token punctuation">:</span> <span class="token string">\'LOV_CODE\'</span><span class="token punctuation">,</span> multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      update<span class="token punctuation">:</span> handleDataSetChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Lov</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>code<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>复选LOV<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n){var a=n.record,s=n.name,t=n.value,p=n.oldValue;console.log("[dataset multiple]",t,"[oldValue]",p,"[record.get('"+s+"')]",a.get(s))}var o=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),c=s(492),u=function(s){function u(){var s,t,o,e;n(this,u);for(var l=arguments.length,i=Array(l),k=0;k<l;k++)i[k]=arguments[k];return t=o=a(this,(s=u.__proto__||Object.getPrototypeOf(u)).call.apply(s,[this].concat(i))),o.ds=new c.DataSet({autoCreate:!0,fields:[{name:"code",type:"object",lovCode:"LOV_CODE",multiple:!0,required:!0,defaultValue:[{}]}],events:{update:p}}),e=t,a(o,e)}return t(u,s),e(u,[{key:"render",value:function(){return o.createElement(c.Lov,{dataSet:this.ds,name:"code",placeholder:"复选LOV"})}}]),u}(o.Component);return o.createElement(u,null)}}}});