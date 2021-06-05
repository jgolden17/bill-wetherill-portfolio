import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';

const HASH_BANG = '#!';

const useHashBangFragment = () => {
  const { hash, pathname } = useLocation();

  const onNavigateFrom = () => navigate(pathname);

  return {
    fragment: hash.replace(HASH_BANG, ''),
    onNavigateFrom,
  };
};

export default useHashBangFragment;
