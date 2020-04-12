"use strict"
const OxTLator = (templatePath, options = {}) => {
  let $options = {
    root:"#ox-root",
    default: "en",
    path: "src/data.json",
    ...options
  }
  const init = () => {
    $options.default = localStorage.getItem("lang") ? localStorage.getItem("lang") : $options.default;
    fetch(templatePath)
      .then((response) => {
        response.text().then(HTML => {
          fetch($options.path)
            .then((data) => {
              return data.json();
            })
            .then((data) => {
              let list = [];
              data.forEach(item => {
                Object.keys(item.data).forEach(element => { !list.includes(element) ? list.push(element) : false });
              });
              document.querySelector("body").insertAdjacentHTML('beforeend', `<div class="oxtlator"><select>${list.map(i => `<option ${i === $options.default ? "selected" : ""}>${i}</option>`)}</select></div>`);
              let panel = document.querySelector(".oxtlator>select");
              translator(HTML, data, $options.default);
              panel.addEventListener("change", (e) => {
                translator(HTML, data, e.target.value);
              });
            });
        });
      })
  }
  const translator = (HTML, data, lang) => {
    let vars = HTML.match(/[^{}]*(?=\})/g);
    vars = vars.filter((i) => i !== "");
    let newHTML = HTML;
    vars.forEach(i => {
      data.forEach(item => {
        if (i.trim() === item.id) {
          newHTML = newHTML.replace("{{" + i + "}}", item.data[lang]?item.data[lang]:"");
        }
      });
    });
    document.querySelector($options.root).innerHTML = newHTML;
    localStorage.setItem("lang", lang);
  }
  init();
};