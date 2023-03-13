interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return <div style={{ padding: 10, fontSize: 20 }}>{message}</div>;
};

export default Error;
