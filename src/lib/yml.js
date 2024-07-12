const yaml = require('js-yaml');

export function parseYAML(yamlString) {
  try {
    const data = yaml.load(yamlString);
    console.log('Parsed YAML data:', data);
    return data;
  } catch (error) {
    console.error('Error parsing YAML:', error);
  }
}