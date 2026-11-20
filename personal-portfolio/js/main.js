'use strict';
// Change this name before publishing.
const PROFILE = { name: 'Zaid Mohammad' };
const root = document.documentElement;
document.querySelectorAll('.name, .footer-name').forEach(el => { el.textContent = PROFILE.name; });
function applyTheme(theme) {
  root.dataset.theme = theme;
  document.querySelectorAll('.theme-button').forEach(button => {
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
  try { localStorage.setItem('portfolio-theme', theme); } catch (error) {}
}
function startTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const full = el.dataset.en || el.textContent;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = full;
    return;
  }
  let i = 0;
  el.textContent = '';
  const timer = setInterval(() => {
    el.textContent = full.slice(0, ++i);
    if (i >= full.length) clearInterval(timer);
  }, 65);
}
document.querySelectorAll('.theme-button').forEach(b=>b.addEventListener('click',()=>applyTheme(root.dataset.theme==='dark'?'light':'dark')));
const menu=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));}
const reveals=document.querySelectorAll('.reveal');if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.08});reveals.forEach(el=>observer.observe(el));}else reveals.forEach(el=>el.classList.add('visible'));
const sections=document.querySelectorAll('main section[id]');if(sections.length&&'IntersectionObserver' in window){const activeObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-25% 0px -65% 0px'});sections.forEach(s=>activeObserver.observe(s));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();applyTheme(root.dataset.theme==='light'?'light':'dark');startTyping();
