var a=Object.defineProperty;var o=(n,r)=>a(n,"name",{value:r,configurable:!0});import{a as t,j as e}from"./jsx-runtime.a2838a31.js";function d({tokens:n,hasRemValue:r=!1}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Token"}),e("th",{children:"Value"}),r&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([s,i])=>t("tr",{children:[e("td",{children:s}),e("td",{children:i}),r&&t("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},s))})]})}o(d,"TokensGrid");try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:d.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{d as T};
//# sourceMappingURL=TokensGrid.17e64662.js.map
