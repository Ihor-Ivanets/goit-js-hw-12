import{a as h,S as L,i as u}from"./assets/vendor-a7b3a87b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();h.defaults.baseURL="https://pixabay.com/api/";const f=(o,t)=>{const s={params:{key:"45589223-69f3ad275007a1fe85231a89e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return h.get("",s)},y=({webformatURL:o,largeImageURL:t,tags:s,likes:a,views:e,comments:r,downloads:l})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
        class="gallery-image"
        src="${o}"
        alt="${s}"/>
      </a>
      <ul class="gallary-descr">
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Likes</h2>
          <p class="gallary-descr-item-num">${a}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Views</h2>
          <p class="gallary-descr-item-num">${e}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Comments</h2>
          <p class="gallary-descr-item-num">${r}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Downloads</h2>
          <p class="gallary-descr-item-num">${l}</p>
        </li>
      </ul>
  </li>
  `,c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),g=document.querySelector(".js-loader"),m=document.querySelector(".js-load-more");let i=1,d="",p=0;const b=new L(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),C=async o=>{try{if(o.preventDefault(),g.classList.remove("is-hidden"),d=c.elements.user_query.value.trim(),!d){u.error({message:"Enter what we are looking for",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"});return}i=1;const t=await f(d,i);if(t.data.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"}),m.classList.add("is-hidden"),n.innerHTML="",c.reset();return}const s=t.data.hits.map(a=>y(a)).join("");n.innerHTML=s,p=n.querySelector("li").getBoundingClientRect().height,m.classList.remove("is-hidden"),b.refresh()}catch(t){console.log(t)}finally{c.reset(),g.classList.add("is-hidden")}},v=async o=>{try{i++;const t=await f(d,i),s=t.data.hits.map(e=>y(e)).join("");n.insertAdjacentHTML("beforeend",s),b.refresh(),scrollBy({top:p*2,behavior:"smooth"});const a=Math.ceil(t.data.totalHits/15);i>=a&&(m.classList.add("is-hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}};c.addEventListener("submit",C);m.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
