import { Component, PropsWithChildren } from "react";

interface State {
  hasError: boolean;
  error: Error | null;
}
export default class ErrorBoundary extends Component<PropsWithChildren, State> {
  public state: State = {
    hasError: false,
    error: null,
  };
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log the error to an error reporting service
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <h2>Something went wrong</h2>
          <p>{this.state.error!.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
