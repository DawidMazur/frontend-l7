import React from 'react';

export default function Nav({ items }) {
  return (
    <nav>
      <ul>
        {items.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    </nav>
  );
}
