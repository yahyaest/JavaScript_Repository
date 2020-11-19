const _array = new WeakMap();

class Stack {
  constructor() {
    _array.set(this, []);
  }

  push(obj) {
    _array.get(this).push(obj);
    //console.log(_array);
  }

  pop() {
    const array = _array.get(this);

    if (array.length === 0) {
      throw new Error("Stack is empty");
    }

    return array.pop();
  }

  peek() {
    const array = _array.get(this);

    if (array.length === 0) {
      throw new Error("Stack is empty");
    }

    return array[array.length - 1];
  }

  get count() {
    return _array.get(this).length;
  }
}
