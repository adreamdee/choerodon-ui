webpackJsonp([258],{2261:function(t,n){t.exports={content:["section",["p","表单控件的抽象基类。"]],meta:{category:"Pro Components",subtitle:"抽象表单控件",type:"Abstract",title:"FormField",filename:"components-pro/field/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","FormField"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","label"],["td","标签, 只在Form下生效"],["td","ReactNode"],["td"]],["tr",["td","name"],["td","字段名"],["td","string"],["td"]],["tr",["td","value"],["td","<受控>当前值"],["td","any"],["td"]],["tr",["td","defaultValue"],["td","默认值"],["td","any"],["td"]],["tr",["td","required"],["td","是否必输"],["td","boolean"],["td","false"]],["tr",["td","readOnly"],["td","是否只读"],["td","boolean"],["td","false"]],["tr",["td","form"],["td","对照表单id"],["td","string"],["td"]],["tr",["td","dataIndex"],["td","对照record在DataSet中的index"],["td","number"],["td","ds.currentIndex"]],["tr",["td","record"],["td","对照record, 优先级高于dataSet和dataIndex"],["td","Record"],["td"]],["tr",["td","multiple"],["td","是否是多值"],["td","boolean"],["td","false"]],["tr",["td","validator"],["td","校验器，回调返回值为",["code","true"]," 或 ",["code","Promise.resolve(true)"],"为校验通过，否则为不通过"],["td","(value, name, form) => string ","|"," boolean ","|"," Promise","<","string ","|"," boolean",">"],["td"]],["tr",["td","help"],["td","额外信息，常用于提示"],["td",["code","string"]],["td",["code","undefined"]]],["tr",["td","showHelp"],["td","展示提示信息的方式，",["code","'tooltip'"],"只有在",["code","TextField"],"及其子类上生效"],["td",["code","'tooltip' \\| 'newLine' \\| 'none'"]],["td",["code","'newLine'"]]],["tr",["td","renderer"],["td","渲染器，覆盖默认渲染行为"],["td","({ value, text, name, record, dataSet }) => ReactNode"],["td","({ text }) => text"]],["tr",["td","noValidate"],["td","不校验，不影响DataSet校验"],["td","boolean"],["td","false"]],["tr",["td","maxTagPlaceholder"],["td","多值标签超出最大数量时的占位描述"],["td","ReactNode ","|"," (restValues) => ReactNode"],["td"]],["tr",["td","maxTagCount"],["td","多值标签最大数量"],["td","number"],["td"]],["tr",["td","maxTagTextLength"],["td","多值标签文案最大长度"],["td","number"],["td"]],["tr",["td","onInvalid"],["td","校验失败回调"],["td","(validationMessage, validity, name) => void"],["td"]],["tr",["td","onChange"],["td","值变化回调"],["td","(value, oldValue, form) => void"],["td"]],["tr",["td","onInput"],["td","输入回调"],["td","Function"],["td"]],["tr",["td","onEnterDown"],["td","键盘回车回调"],["td","Function"],["td"]],["tr",["td","onClear"],["td","值清空回调"],["td","Function"],["td"]]]],["p","注意，当绑定DataSet时，以DataSet的校验为主，校验规则应设置在DataSet的Field上。"],["p","更多属性请参考 ",["a",{title:null,href:"/components-pro/core/#DataSetComponent"},"DataSetComponent"],"。"],["h4","RenderParam"],["pre",{lang:"ts",highlighted:'<span class="token keyword">export</span> type RendererParam <span class="token operator">=</span> <span class="token punctuation">{</span>\n  value<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n  text<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n  record<span class="token operator">?</span><span class="token punctuation">:</span> Record <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  name<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n  dataSet<span class="token operator">?</span><span class="token punctuation">:</span> DataSet <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","export type RendererParam = {\n  value?: any;\n  text?: any;\n  record?: Record | null;\n  name?: string;\n  dataSet?: DataSet | null;\n}"]]]}}});