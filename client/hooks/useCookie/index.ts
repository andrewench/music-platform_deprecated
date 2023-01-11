import Cookies, { CookieAttributes } from 'js-cookie';

import { useCallback, useState } from 'react';

export const useCookie = (name: string, initialValue?: string) => {
  const [value, setValue] = useState<string | null>(() => {
    const cookie = Cookies.get(name);

    if (cookie) return cookie;

    if (initialValue) {
      Cookies.set(name, initialValue);

      return initialValue;
    }

    return null;
  });

  const updateCookie = useCallback(
    (newValue: string, options: CookieAttributes) => {
      Cookies.set(name, newValue, options);

      setValue(value);
    },
    [name, value, setValue]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);

    setValue(null);
  }, [name, setValue]);

  return { value, updateCookie, deleteCookie };
};
