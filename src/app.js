/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const somebody = ["luke", "vader", "leia", "han"];
  const action = ["fought", "saved", "beat", "found"];
  const whatever = ["star", "force", "saber", "droid"];
  const when = ["wars", "rogue", "clones", "jedi"];
  const domainEnd = [".com", ".es", ".us", ".io"];

  const domainList = [];

  for (let i = 0; i < somebody.length; i++) {
    for (let j = 0; j < action.length; j++) {
      for (let k = 0; k < whatever.length; k++) {
        for (let l = 0; l < when.length; l++) {
          for (let m = 0; m < domainEnd.length; m++) {
            const domainStarWars =
              somebody[i] + action[j] + whatever[k] + when[l] + domainEnd[m];
            domainList.push(domainStarWars);
          }
        }
      }
    }
  }

  const domainGenerator = document.getElementById("domainGenerator");
  domainList.forEach(function(domain) {
    const domainElement = document.createElement("div");
    domainElement.textContent = domain;
    domainGenerator.appendChild(domainElement);
  });
};
