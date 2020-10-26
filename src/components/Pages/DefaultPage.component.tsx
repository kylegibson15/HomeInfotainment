import React from 'react';
import { useLocation } from 'react-router-dom';

function Page() {
  const { pathname } = useLocation();

  return (
    <div
      className="page-content"
    >
      {pathname}
    </div>
  );
}

export default Page;
