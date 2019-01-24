let root = "";

if (process.argv.includes("--deploy"))
  root = "/cmints-multi-lang-starter"; // Github Pages root

const templateData =
{
  site: {
    root,
    title: "CMintS Starter" // See "layouts/_head.ejs"
  }
};

module.exports = {root, templateData};
