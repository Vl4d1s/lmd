type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center">
      {children}
    </div>
  );
}