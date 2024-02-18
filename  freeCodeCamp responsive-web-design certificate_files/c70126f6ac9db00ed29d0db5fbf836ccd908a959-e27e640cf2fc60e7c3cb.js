"use strict";(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[6832],{16158:function(e,t,n){n.d(t,{Z:function(){return J}});n(15752);var a=n(37711),o=n(23278),r=n(5323),s=n(25497),i=n(81636),l=n(99042);const c=e=>Intl.NumberFormat("en-US").format(e),m=e=>c(e/100);var d=n(48185),p=n(95217),u=n.n(p),h=n(90147),y=n(85226),g=n(22126),E=n(47307),b=n(88919);function S(e){let{processing:t,reset:n,success:r,redirecting:l,isSignedIn:c,error:m=null}=e;const{t:d}=(0,s.$G)(),p=t||l?"info":r?"success":"danger",h=l?""+d("donate.redirecting"):t?""+d("donate.processing"):r?""+d("donate.thank-you"):""+d("donate.error");return a.createElement(o.bZ,{variant:p,className:"donation-completion"},a.createElement("b",null,h),a.createElement(i.LZ,{size:"medium"}),a.createElement("div",{className:"donation-completion-body"},(t||l)&&a.createElement(u(),{className:"user-state-spinner",color:"#0a0a23",fadeIn:"none",name:"line-scale"}),r&&a.createElement("div",null,a.createElement("p",null,d("donate.free-tech")),c&&a.createElement(a.Fragment,null,a.createElement("p",null,d("donate.visit-supporters")),a.createElement(i.rU,{className:"btn",key:"supporters",sameTab:!1,to:"/supporters"},d("buttons.go-to-supporters")))),m&&a.createElement("p",null,m)),a.createElement("div",{className:"donation-completion-buttons"},m&&a.createElement("button",{type:"button",className:"try-again-button",onClick:n},d("buttons.try-again"))))}S.displayName="DonateCompletion";var f=S,v=n(90048);const P=e=>a.createElement("svg",Object.assign({id:"patreon-logo",viewBox:"10 0 2560 356",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",role:"img","aria-labelledby":"patreon-logo-label"},e),a.createElement("title",{id:"patreon-logo-label"},"Patreon"),a.createElement("g",null,a.createElement("path",{d:"M1536.54 72.449v76.933h128.24v61.473h-128.24v74.51h128.24v62.921h-206.64V9.529h206.64v62.92h-128.24M2070.82 178.907c0-55.652-37.76-107.434-99.21-107.434-61.95 0-99.21 51.782-99.21 107.434s37.26 107.435 99.21 107.435c61.45 0 99.21-51.783 99.21-107.435zm-278.77 0c0-92.916 66.79-178.093 179.56-178.093 112.26 0 179.05 85.177 179.05 178.093 0 92.916-66.79 178.093-179.05 178.093-112.77 0-179.56-85.177-179.56-178.093zM186.32 131.97c0-31.46-21.299-58.563-54.206-58.563H78.398v117.109h53.716c32.907 0 54.206-27.086 54.206-58.546zM0 9.529h141.788c75.016 0 123.417 56.628 123.417 122.441s-48.401 122.423-123.417 122.423h-63.39v93.893H0V9.529zM492.17 106.314l-41.621 139.382h82.266L492.17 106.314zm73.081 241.972-13.054-41.134H431.69l-13.072 41.134h-83.73L455.882 9.529h72.105l122.442 338.757h-85.178zM782.055 77.277H705.61V9.529h231.793v67.748h-76.951v271.009h-78.397V77.277M2485.08 230.202V9.529h77.91v338.757h-81.78l-121.97-217.78v217.78h-78.4V9.529h81.78l122.46 220.673M1245.68 131.97c0-31.46-21.3-58.563-54.21-58.563h-53.72v117.109h53.72c32.91 0 54.21-27.086 54.21-58.546zM1059.36 9.529h142.29c75 0 123.4 56.628 123.4 122.441 0 47.425-25.17 89.517-67.28 109.369l67.77 106.947h-90.98l-60.03-93.893h-36.78v93.893h-78.39V9.529z"})));P.displayName="PatreonLogo";var C=P;const{patreonClientId:D}=v;var N=e=>{let{postPayment:t,donationAmount:n}=e;if(!D||!n||!l.es.successUrl)return null;const o="https://www.patreon.com/oauth2/become-patron?response_type=code"+("$&min_cents="+n)+("&client_id="+D)+("&redirect_uri="+l.es.successUrl)+"&scope=identity%20identity[email]";return a.createElement("a",{className:"patreon-button link-button","data-patreon-widget-type":"become-patron-button",href:o,onClick:()=>t({paymentProvider:l.OH.Patreon}),rel:"noreferrer",target:"_blank"},a.createElement(C,null))},F=n(86362),w=n(29791),M=n(3184);class L extends a.Component{constructor(){super(...arguments),this.state={isSdkLoaded:!!window.paypal,isSubscription:!0},this.onScriptLoad=()=>{this.setState({isSdkLoaded:!0}),this.props.onLoad()}}static getDerivedStateFromProps(e,t){const{isSubscription:n}=e;return n!==t.isSubscription?{isSubscription:n}:null}componentDidMount(){this.loadScript(this.props.isSubscription,!0)}componentWillUnmount(){(0,M.wc)("paypal-sdk")}componentDidUpdate(e){e.isSubscription===this.state.isSubscription&&e.style.color===this.props.style.color&&e.style.tagline===this.props.style.tagline&&e.style.height===this.props.style.height&&e.isMinimalForm===this.props.isMinimalForm||(this.setState({isSdkLoaded:!1}),this.loadScript(this.state.isSubscription,!0))}loadScript(e,t){t&&(0,M.wc)("paypal-sdk");const n=this.props.isMinimalForm?"card,":"";let a="?client-id="+this.props.clientId+"&disable-funding="+n+"credit,bancontact,blik,eps,giropay,ideal,mybank,p24,sepa,sofort,venmo";e&&(a+="&vault=true&intent=subscription"),(0,M.Vs)("paypal-sdk",!0,"https://www.paypal.com/sdk/js"+a,this.onScriptLoad,"paypal")}captureOneTimePayment(e,t){return t.order.capture().then((t=>this.props.onApprove(t,e)))}render(){const{isSdkLoaded:e,isSubscription:t}=this.state,{onApprove:n,onError:o,onCancel:r,createSubscription:s,createOrder:i,style:l}=this.props;if(!e)return a.createElement(a.Fragment,null);const c=window.paypal.Buttons.driver("react",{React:a,ReactDOM:w});return a.createElement(c,{createOrder:t?null:i,createSubscription:t?s:null,onApprove:t?(e,t)=>n(e,t):(e,t)=>this.captureOneTimePayment(e,t),onCancel:r,onError:o,style:l})}}L.displayName="PayPalButtonScriptLoader";const{paypalClientId:k,deploymentEnv:x}=v;class A extends a.Component{constructor(e){super(e),this.state={amount:l.M4.donationAmount,duration:l.M4.donationDuration,planId:null}}static getDerivedStateFromProps(e){const{donationAmount:t,donationDuration:n}=e;return{...(0,l.l7)(t,n,l.IQ[x||"staging"])}}render(){const{duration:e,planId:t,amount:n}=this.state,{t:o,theme:r,isPaypalLoading:s,isMinimalForm:i}=this.props,c="one-time"!==e,m=r===F.b.Night?"white":"gold";return k?a.createElement("div",{className:"paypal-buttons-container"},a.createElement(L,{clientId:k,createOrder:(e,t)=>t.order.create({purchase_units:[{amount:{currency_code:"USD",value:(n/100).toString()}}]}),createSubscription:(e,n)=>n.subscription.create({plan_id:t}),isMinimalForm:i,isPaypalLoading:s,isSubscription:c,onApprove:e=>{this.props.postPayment({paymentProvider:l.OH.Paypal,data:e})},onCancel:()=>{this.props.onDonationStateChange({redirecting:!1,processing:!1,success:!1,error:o("donate.failed-pay")})},onError:()=>{this.props.handlePaymentButtonLoad("paypal"),this.props.onDonationStateChange({redirecting:!1,processing:!1,success:!1,error:o("donate.try-again")})},onLoad:()=>this.props.handlePaymentButtonLoad("paypal"),planId:t,style:{tagline:!1,height:43,color:m}})):null}}A.displayName="PaypalButton";const B=(0,h.P1)(E.np,E.Kt,((e,t)=>{let{isDonating:n}=e;return{isDonating:n,showLoading:t}}));A.displayName="PaypalButton";var I=(0,d.$j)(B)((0,s.Zh)()(A)),T=n(37850);function z(e){let{theme:t,t:n,onDonationStateChange:o,postPayment:r,processing:s}=e;const[i,c]=(0,a.useState)(!0),[m,d]=(0,a.useState)(!1),[p,u]=(0,a.useState)([{elementType:"cardNumber",complete:!1,error:null},{elementType:"cardExpiry",complete:!1,error:null}]),h=p.every((e=>{let{complete:t,error:n}=e;return t&&!n})),y=m||s,g=(0,T.useStripe)(),E=(0,T.useElements)();function b(e){const{elementType:t,error:n,complete:a}=e;u(p.map((e=>e.elementType===t?{elementType:t,error:n,complete:a}:e)))}const S={style:{base:{fontSize:"18px",color:t===F.b.Night?"#fff":"#0a0a23","::placeholder":{color:"#858591"}}}},f=async(e,t)=>g?g.confirmCardPayment(e,{payment_method:t}):{error:{type:"StripeNotLoaded"}};return a.createElement("form",{className:"donation-form",onSubmit:e=>{(async e=>{if(e.preventDefault(),!h)return c(!1);if(c(!0),!y&&g&&E){const e=E.getElement(T.CardNumberElement);if(e){d(!0);const{paymentMethod:t,error:a}=await g.createPaymentMethod({type:"card",card:e});a?o({redirecting:!1,processing:!1,success:!1,error:n("donate.went-wrong")}):t&&r({paymentProvider:l.OH.StripeCard,paymentMethodId:t.id,handleAuthentication:f})}}d(!1)})(e)}},a.createElement("div",{className:"donation-elements"+(i?"":" failed-submission")},a.createElement(T.CardNumberElement,{className:"form-control donate-input-element",onChange:b,options:S}),a.createElement(T.CardExpiryElement,{className:"form-control donate-input-element",onChange:b,options:S})),a.createElement("div",{className:"form-status"},!i&&a.createElement("p",null,n("donate.valid-card"))),a.createElement("button",{className:"confirm-donation-btn",disabled:!g||!E||y,"data-cy":"donation-confirmation-button",type:"submit"},n("buttons.donate")))}const H=e=>{let{stripe:t,label:n,amount:o,theme:r,refreshErrorMessage:s,postPayment:i,onDonationStateChange:c,handlePaymentButtonLoad:m}=e;const[d,p]=(0,a.useState)(null),[u,h]=(0,a.useState)(null),[y,g]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if(!t)return;const e=t.paymentRequest({country:"US",currency:"usd",total:{label:n,amount:o},requestPayerName:!0,requestPayerEmail:!0,disableWallets:["browserCard"]});e.on("token",(e=>{const{token:t,payerEmail:n,payerName:a}=e;p(t),e.complete("success"),i({paymentProvider:l.OH.Stripe,token:t,payerEmail:n,payerName:a})})),e.canMakePayment().then((t=>{t?(h(e),g(!0)):g(!1)}))}),[n,o,t,i,m]);return a.createElement("form",{className:"wallets-form"},y&&u&&a.createElement(T.PaymentRequestButtonElement,{onClick:()=>{d&&c({redirecting:!1,processing:!1,success:!1,error:s})},onReady:()=>m("stripe"),options:{style:{paymentRequestButton:{type:"default",theme:r===F.b.Night?"light":"dark",height:"43px"}},paymentRequest:u}}))};function j(e){return a.createElement(T.ElementsConsumer,null,(t=>{let{stripe:n}=t;return a.createElement(H,Object.assign({stripe:n},e))}))}var _=n(12236),O=n(73737);var V=()=>a.createElement(a.Fragment,null,a.createElement(O.G,{icon:_.byT}),"  ");const q=(0,h.P1)(E.Kt,E.Qi,E.qm,E.cX,E.np,E.Fx,((e,t,n,a,o,r)=>{let{email:s,theme:i}=o;return{isSignedIn:t,isDonating:n,showLoading:e,donationFormState:a,email:s,theme:i,completedChallenges:r}})),U={postCharge:g.Ys,updateDonationFormState:g.Nb},Z=()=>a.createElement("div",{className:" donation-completion donation-completion-loading"},a.createElement(u(),{className:"script-loading-spinner",fadeIn:"none",name:"line-scale"}));class $ extends a.Component{constructor(e){super(e),this.postPayment=e=>{let{paymentProvider:t,data:n,payerEmail:a,payerName:o,token:r,paymentMethodId:s,handleAuthentication:i}=e;const{donationAmount:l,donationDuration:c}=this.state,{paymentContext:m,email:d,selectedDonationAmount:p}=this.props,u=p||l;this.props.postCharge({paymentProvider:t,paymentContext:m,amount:u,duration:c,data:n,token:r,email:d||a,name:o,paymentMethodId:s,handleAuthentication:i}),this.props.handleProcessing&&this.props.handleProcessing()};const t=l.M4;this.state={...t},this.onDonationStateChange=this.onDonationStateChange.bind(this),this.resetDonation=this.resetDonation.bind(this),this.postPayment=this.postPayment.bind(this),this.handlePaymentButtonLoad=this.handlePaymentButtonLoad.bind(this)}componentWillUnmount(){this.resetDonation()}onDonationStateChange(e){window.scrollTo(0,0),this.props.updateDonationFormState({...this.props.donationFormState,...e})}handlePaymentButtonLoad(e){this.props.updateDonationFormState({...this.props.donationFormState,loading:{...this.props.donationFormState.loading,[e]:!1}})}resetDonation(){return this.props.updateDonationFormState({...y.g$})}renderButtonGroup(){const{donationAmount:e,donationDuration:t}=this.state,{donationFormState:{loading:n,processing:o},defaultTheme:r,theme:s,t:i,isMinimalForm:l,isSignedIn:c,isDonating:d,editAmount:p,selectedDonationAmount:u,completedChallenges:h}=this.props,y=u||e,g=r||s,E=i("donate.wallet-label-1",{usd:y/100})+":",S=h.length>=3,f=c&&(l||!d)&&S,v=a.createElement(a.Fragment,null,a.createElement("b",null,i("donate.confirm-multitier",{usd:m(y)})),a.createElement("button",{type:"button",className:"edit-amount-button",onClick:p},i("donate.edit-amount")));return a.createElement(a.Fragment,null,a.createElement("div",{className:p?"edit-amount-confirmation":l?"donation-label-modal":""},v),a.createElement(b.Z,{size:p?"small":"medium"}),a.createElement("fieldset",{"data-playwright-test-label":"donation-form",className:"donate-btn-group security-legend"},a.createElement("legend",null,a.createElement(V,null),i("donate.secure-donation")),n.stripe&&n.paypal&&a.createElement(Z,null),a.createElement(j,{amount:y,handlePaymentButtonLoad:this.handlePaymentButtonLoad,label:E,onDonationStateChange:this.onDonationStateChange,postPayment:this.postPayment,refreshErrorMessage:i("donate.refresh-needed"),theme:g}),a.createElement(I,{donationAmount:y,donationDuration:t,handlePaymentButtonLoad:this.handlePaymentButtonLoad,postPayment:this.postPayment,isMinimalForm:f,isPaypalLoading:n.paypal,onDonationStateChange:this.onDonationStateChange,theme:g}),(!n.stripe||!n.paypal)&&a.createElement(N,{postPayment:this.postPayment,donationAmount:y}),f&&a.createElement(a.Fragment,null,a.createElement("div",{className:"separator"},i("donate.or-card")),a.createElement(z,{onDonationStateChange:this.onDonationStateChange,postPayment:this.postPayment,processing:o,t:i,theme:g}))))}renderPageForm(){return a.createElement(a.Fragment,null,a.createElement("div",null,this.renderButtonGroup()))}render(){const{donationFormState:{processing:e,success:t,error:n,redirecting:o},isMinimalForm:r,isSignedIn:s}=this.props;return t||n?a.createElement(f,{processing:e,redirecting:o,success:t,error:n,isSignedIn:s,reset:this.resetDonation}):a.createElement(a.Fragment,null,(e||o)&&a.createElement(f,{processing:e,redirecting:o,success:t,error:n,isSignedIn:s,reset:this.resetDonation}),a.createElement("div",{className:e||o?"hide":""},r?this.renderButtonGroup():this.renderPageForm()))}}$.displayName="DonateForm",$.displayName="DonateForm";var R=(0,d.$j)(q,U)((0,s.Zh)()($));function X(e){let{donationAmount:t,setDonationAmount:n,setShowDonateForm:d,isAnimationEnabled:p}=e;const{t:u}=(0,s.$G)();return(0,r.SS)("aa-test-in-component"),a.createElement(o.X2,{className:"donate-btn-group donation-tier-selection","data-playwright-test-label":"donation-tier-selector"},a.createElement(o.JX,{xs:12},a.createElement("b",null,u("donate.confirm-monthly",{usd:m(t)})),a.createElement(i.LZ,{size:"small"}),a.createElement(o.mQ,{className:"donate-btn-group",defaultValue:t.toString(),onValueChange:e=>{n(Number(e))}},a.createElement(o.dr,{className:"nav-lists"},l.H5.map((e=>a.createElement(o.SP,{key:e,value:e.toString(),onClick:()=>n(e)},"$",m(e))))),a.createElement(i.LZ,{size:"small"}),l.H5.map((e=>{const n=m(t),r=c(t/100*50);const s=u("donate.your-donation-2",{usd:n,hours:r});return a.createElement(o.nU,{key:e,className:"tab-content",value:e.toString()},a.createElement("p",null,s))}))),a.createElement("button",{className:"text-center confirm-donation-btn donate-btn-group",type:"submit","data-cy":"donation-tier-selection-button",onClick:()=>d(!0)},u(p?"buttons.confirm-amount":"buttons.donate")),a.createElement(i.LZ,{size:"medium"})))}function G(e){let{handleProcessing:t,isMinimalForm:n,setShowDonateForm:r,donationAmount:s,paymentContext:l}=e;return a.createElement(o.X2,null,a.createElement(o.JX,{xs:12},a.createElement(R,{handleProcessing:t,isMinimalForm:n,paymentContext:l,editAmount:()=>r(!1),selectedDonationAmount:s}),a.createElement(i.LZ,{size:"medium"})))}var J=e=>{let{handleProcessing:t,setShowHeaderAndFooter:n,isMinimalForm:o,paymentContext:r,isAnimationEnabled:s}=e;const[i,c]=(0,a.useState)(l.LT),[m,d]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{n&&n(!m)}),[m,n]),a.createElement(a.Fragment,null,a.createElement("div",m&&{className:"hide"},a.createElement(X,{donationAmount:i,setDonationAmount:c,setShowDonateForm:d,isAnimationEnabled:s})),a.createElement("div",!m&&{className:"hide"},a.createElement(G,{donationAmount:i,handleProcessing:t,setShowDonateForm:d,isMinimalForm:o,paymentContext:r})))}},3184:function(e,t,n){function a(e,t,n,a,o){const r=document.createElement("script");r.type="text/javascript",r.id=e,r.async=t,r.onload=a,r.src=n,r.text=o,document.getElementsByTagName("head")[0].appendChild(r)}function o(e){const t=document.getElementById(e);t&&t.remove()}function r(){a("mathjax",!1,"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML",null,"MathJax.Hub.Config({\n      tex2jax: {\n        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],\n        processEscapes: true,\n        processClass: 'rosetta-code|project-euler|intermediate-algorithm-scripting'\n      }\n    });\n    MathJax.Hub.Queue([\n      'Typeset',\n      MathJax.Hub,\n      document.querySelector('intermediate-algorithm-scripting'),\n      document.querySelector('.rosetta-code'),\n      document.querySelector('.project-euler')\n    ]);")}n.d(t,{LE:function(){return r},Vs:function(){return a},wc:function(){return o}})}}]);
//# sourceMappingURL=c70126f6ac9db00ed29d0db5fbf836ccd908a959-e27e640cf2fc60e7c3cb.js.map