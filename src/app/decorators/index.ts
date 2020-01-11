




export const AppDecorator = config => {
  console.log(config.message);

  return target => {
    console.log('Decorated class - ', target);

    target.prototype.hello = 'Hello From Decorator';
  };
};
