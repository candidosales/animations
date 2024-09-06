import "./style.css";

export default function Orchestration() {
  return (
    <div className="orchestration">
      <h1>Jon Doe</h1>
      {COPY.map((copy, index) => (
        <p key={copy} style={{ "--stagger": index }}>
          {copy}
        </p>
      ))}
    </div>
  );
}

const COPY = [
  `Using Apple's Sheet component on iOS feels natural, I wanted to create the same experience, but for the web. That's how Vaul, the React component was born.`,
  `Open-sourcing meant that more people will use it, which will result in more feedback, ultimately making the component better.`,
  `I chose to build Vaul on top of Radix's Dialog primitive. Radix ensures the component is accessible, handles focus management etc. I also made Vaul's API is very similar to Radix's, so that it feels familiar.`,
  `Once the content of the drawer got bigger than ~20 list items the drag gesture became laggy, and I couldn't figure out why. `,
  `Since CSS Variables are inheritable, changing them will cause style recalculation for all children, meaning the more items I have in my drawer, the more expensive the calculation gets.`,
];
