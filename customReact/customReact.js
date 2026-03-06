
function RenderContainer(reactElement, container) {

  const domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);

}


const reactElement = {
  type: 'a',
  props: {
    href: "http://google.com",
    target: "_blank"
  },
  children: "hey this is my tag"
}

const container = document.querySelector('#root')

RenderContainer(reactElement, container);