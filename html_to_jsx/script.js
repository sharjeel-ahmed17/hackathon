document.getElementById('convertBtn').addEventListener('click', function () {
    const htmlInput = document.getElementById('htmlInput').value;
    const jsxOutput = htmlToJSX(htmlInput);
    document.getElementById('jsxOutput').value = jsxOutput;
});

document.getElementById('copyBtn').addEventListener('click', function () {
    const jsxOutput = document.getElementById('jsxOutput');
    jsxOutput.select();
    document.execCommand('copy');
    alert('JSX copied to clipboard!');
});

function htmlToJSX(html) {
    let jsx = html;

    // Replace class with className
    jsx = jsx.replace(/class=/g, 'className=');

    // Convert style attributes
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const style = p1.split(';').reduce((styleObj, styleProp) => {
            if (styleProp.trim()) {
                const [property, value] = styleProp.split(':');
                const camelCaseProperty = property.trim().replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
                styleObj[camelCaseProperty] = value.trim();
            }
            return styleObj;
        }, {});
        return `style={${JSON.stringify(style)}}`;
    });

    // Self-closing tags
    const selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    selfClosingTags.forEach(tag => {
        const regex = new RegExp(`<${tag}([^>]*)>`, 'g');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    });

    // Remove comments
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

    return jsx;
}
