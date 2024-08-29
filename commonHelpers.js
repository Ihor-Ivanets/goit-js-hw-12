import{a as g,S as L,i as y}from"./assets/vendor-a7b3a87b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/";const h=(l,e)=>{const s={params:{key:"45589223-69f3ad275007a1fe85231a89e",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return g.get("",s)},p=({webformatURL:l,largeImageURL:e,tags:s,likes:a,views:t,comments:r,downloads:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
        class="gallery-image"
        src="${l}"
        alt="${s}"/>
      </a>
      <ul class="gallary-descr">
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Likes</h2>
          <p class="gallary-descr-item-num">${a}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Views</h2>
          <p class="gallary-descr-item-num">${t}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Comments</h2>
          <p class="gallary-descr-item-num">${r}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Downloads</h2>
          <p class="gallary-descr-item-num">${o}</p>
        </li>
      </ul>
  </li>
  `,c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),m=document.querySelector(".js-load-more");let i=1,d="",f=0;const b=async l=>{try{l.preventDefault(),u.classList.remove("is-hidden"),d=c.elements.user_query.value,i=1;const e=await h(d,i);if(e.data.hits.length===0){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"}),n.innerHTML="",c.reset();return}const s=e.data.hits.map(a=>p(a)).join("");n.innerHTML=s,f=n.querySelector("li").getBoundingClientRect().height,m.classList.remove("is-hidden"),S.refresh()}catch(e){console.log(e)}finally{c.reset(),u.classList.add("is-hidden")}},v=async l=>{try{i++;const e=await h(d,i);console.log(e);const s=e.data.hits.map(a=>p(a)).join("");n.insertAdjacentHTML("beforeend",s),scrollBy({top:f*2,behavior:"smooth"}),i===Math.trunc(e.data.total/15)&&(m.classList.add("is-hidden"),y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}};c.addEventListener("submit",b);m.addEventListener("click",v);const S=new L(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
