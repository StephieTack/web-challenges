export default function Link({ href, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}

// export default function Link({ href, children }) {
//   return (
//     <a className="navigation__link" href={href}>
//       {children}
//     </a>
//   );
// }
