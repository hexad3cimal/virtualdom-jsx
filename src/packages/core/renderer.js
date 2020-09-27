import * as snabbdom from 'snabbdom';
import propsModule from 'snabbdom/modules/props';

let virtualNodes;
const reconcile = snabbdom.init([propsModule, eventlistenersModule]);

const render = (el, rootDomElement) => {
  if (virtualNodes == null) {
    virtualNodes = rootDomElement;
  }

  virtualNodes = reconcile(virtualNodes, el);
}

export default render;
