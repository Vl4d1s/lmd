type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto px-4 pb-4 pt-24 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
