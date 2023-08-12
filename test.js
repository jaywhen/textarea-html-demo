const contentPattern = /{{[\w]*$/g;
const tipPattern = /({{.*?}})/g;

function getContent(str) {
  return str.split(tipPattern).map(item => {
    if(item.match(tipPattern)) {
      return {
        type: 'val',
        value: item
      }
    }

    return {
      type: 'common',
      value: item
    }
  })
}

function checkAndGetString(string) {
  console.log('origin string:  ', `|${string}|`)
  const match = string.match(contentPattern);
  if(match) {
    const content = getContent(string.split(contentPattern)[0]);
    content.push({
      type: 'tip',
      value: match[0]
    })

    return content;
  }

  return getContent(string);
}

console.log(checkAndGetString("Hello {{exp}} {{asd"));
console.log(checkAndGetString("This is not the end {{asdd {{ "));
console.log(checkAndGetString("World {{example"));