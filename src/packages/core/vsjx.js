import { h } from 'snabbdom';

const paint = (componentType, props = {}, ...children) => {
    if (typeof (type) == 'function') {
        return componentType(props);
      }
    return h(componentType, { props }, children);
};
  
  const Vjsx = {
    paint
  };
  
  export default Vjsx;
  