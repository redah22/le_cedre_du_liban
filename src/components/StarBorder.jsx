import './StarBorder.css';

const StarBorder = ({
  as: Component = 'div', // Changé par défaut en 'div' car on enveloppe du contenu
  className = '',
  color = '#2E7D32', // Vert Cèdre par défaut
  speed = '6s',
  thickness = 2, // Un peu plus épais pour que ça se voie bien
  children,
  highlight = false, // Prop pour le style spécial formule midi
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className={`inner-content ${highlight ? 'highlight' : ''}`}>{children}</div>
    </Component>
  );
};

export default StarBorder;
