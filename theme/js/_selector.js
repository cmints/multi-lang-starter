const init = () =>
{
  console.log("here");
  const langaugeSelectors = document.querySelectorAll("select.languageSelector");
  for (const langaugeSelector of langaugeSelectors)
  {
    langaugeSelector.addEventListener("change", () =>
    {
      const path = [];
      if (langaugeSelector.value != "en")
        path.push(langaugeSelector.value);
      path.push(langaugeSelector.dataset.page);
      const hostname = window.location.hostname;
      const protocol = window.location.protocol;
      const port = ":" + window.location.port;
      window.location.href = `${protocol}//${hostname}${port}/${path.join("/")}`;
    });
  }
}

module.exports.init = init;
