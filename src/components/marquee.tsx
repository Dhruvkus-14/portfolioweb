import React from 'react';

const Marquee: React.FC<{
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}> = ({ children, reverse = false, className }) => {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${
        reverse ? 'flex-row-reverse' : ''
      } ${className}`}
    >
      <div className="flex animate-marquee">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="mx-4">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
