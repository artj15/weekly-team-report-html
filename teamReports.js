!function(){var e=document.getElementById("team-filter").querySelectorAll("button"),t=document.getElementById("immediate-team"),n=document.getElementById("immediate-team-btn"),c=document.getElementById("immediate-team-header"),a=document.getElementById("extended-team-header"),d=document.getElementById("extended-team"),s=document.getElementById("extended-team-btn"),o=document.getElementById("period-filter").querySelectorAll("button"),i=document.getElementById("older-reports-btn"),r=document.getElementById("older-reports-content"),l=document.getElementById("type-filter"),m=l.querySelectorAll("button"),u=document.getElementById("overall-filter"),v=document.getElementById("overall-filter-content");function L(e,t){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}function f(){t.classList.remove("d-none"),l.classList.add("d-none"),c.classList.remove("d-none"),a.classList.add("d-none"),d.classList.add("d-none"),o.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget;L(o,t)}))})),m.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget;L(m,t)}))}))}e.forEach((function(E){E.addEventListener("click",(function(E){var g=E.currentTarget;L(e,g),n.classList.contains("active")?f():(t.classList.add("d-none"),l.classList.remove("d-none"),c.classList.add("d-none"),a.classList.remove("d-none"),d.classList.remove("d-none"),i.classList.add("active"),o.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget;L(o,t),s.classList.contains("active")&&i.classList.contains("active")?r.classList.remove("d-none"):r.classList.add("d-none")}))})),m.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget;L(m,t),s.classList.contains("active")&&i.classList.contains("active")&&u.classList.contains("active")?v.classList.remove("d-none"):v.classList.add("d-none")}))})))}))})),f()}();