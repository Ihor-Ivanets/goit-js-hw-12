import{a as h,S as b,i as y}from"./assets/vendor-a7b3a87b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();h.defaults.baseURL="https://pixabay.com/api/";const g=(l,e)=>{const r={params:{key:"45589223-69f3ad275007a1fe85231a89e",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return h.get("",r)},p=({webformatURL:l,largeImageURL:e,tags:r,likes:a,views:t,comments:s,downloads:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
        class="gallery-image"
        src="${l}"
        alt="${r}"/>
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
          <p class="gallary-descr-item-num">${s}</p>
        </li>
        <li class="gallary-descr-item">
          <h2 class="gallary-descr-item-title">Downloads</h2>
          <p class="gallary-descr-item-num">${o}</p>
        </li>
      </ul>
  </li>
  `,c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),d=document.querySelector(".js-load-more");let i=1,m="",f=0;const L=new b(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),v=async l=>{try{l.preventDefault(),u.classList.remove("is-hidden"),m=c.elements.user_query.value.trim(),i=1;const e=await g(m,i);if(e.data.hits.length===0){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fafafb",iconColor:"#fafafb"}),d.classList.add("is-hidden"),n.innerHTML="",c.reset();return}const r=e.data.hits.map(a=>p(a)).join("");n.innerHTML=r,f=n.querySelector("li").getBoundingClientRect().height,d.classList.remove("is-hidden"),L.refresh()}catch(e){console.log(e)}finally{c.reset(),u.classList.add("is-hidden")}},S=async l=>{try{i++;const e=await g(m,i),r=e.data.hits.map(a=>p(a)).join("");n.insertAdjacentHTML("beforeend",r),L.refresh(),scrollBy({top:f*2,behavior:"smooth"}),i===Math.trunc(e.data.totalHits/15)&&(d.classList.add("is-hidden"),y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}};c.addEventListener("submit",v);d.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map
