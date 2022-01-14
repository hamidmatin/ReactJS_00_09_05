import { Loading } from '../components/loading';

export const withLoading = (component) => {
  const Component = component;

  return ({ isloadng, ...props }) => {
    return isloadng ? <Loading /> : <Component {...props} />;
  };
};
