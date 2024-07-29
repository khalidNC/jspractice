function loadTemplate(templateId, templateFile) {
  fetch(templateFile)
      .then(response => response.text())
      .then(data => {
          document.getElementById(templateId).innerHTML = data;
      });
}