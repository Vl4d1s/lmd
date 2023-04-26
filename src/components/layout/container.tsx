type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
