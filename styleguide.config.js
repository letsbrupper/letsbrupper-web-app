const fs = require('fs');
const path = require('path');

const version = require(path.join(__dirname, 'package.json')).version;

const getTitle = () => {
  return `Letsbrupper Web-app Style Guide (${version})`;
};

const getSections = () => {
  // Get a list of all markdown files from 'docs' folder on an app level
  // And lists them as sections in react-styleguidist
  var docsDir = path.resolve(process.cwd(), 'docs');
  var sections = [];
  if (fs.existsSync(docsDir)) {
    var docs = fs.readdirSync(docsDir);
    sections = docs
      .filter(function(file) {
        return file.match(/.*\.(md)/gi);
      })
      .map(function(file) {
        return {
          name: file.slice(0, -3),
          content: path.join(docsDir, file)
        };
      });
  }

  sections.push({
    name: 'Components',
    components: 'src/components/*/index.js'
  });

  return sections;
};

module.exports = {
  title: getTitle(),
  skipComponentsWithoutExample: true,
  sections: getSections(),
}
