import { useLocation } from '@reach/router';

const usePrimaryFolder = () => {
  const { pathname } = useLocation();

  const [primaryFolder] = pathname.slice(1).split('/');

  return primaryFolder || 'paintings';
};

export default usePrimaryFolder;
