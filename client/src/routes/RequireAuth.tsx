import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import React from "react";

/**
 * HOC to protect pages/components that require authentication.
 * Usage: export default withRequireAuth(MyComponent)
 */
export function withRequireAuth<P>(Component: React.ComponentType<P>) {
  const RequireAuthWrapper = React.forwardRef<unknown, P>((props, ref) => {
    const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
    if (!loggedIn) {
      return <Navigate to="/login" replace />;
    }
    // @ts-expect-error: Forwarding ref to both class/function components is not always type-safe
    return <Component ref={ref} {...props} />;
  });
  RequireAuthWrapper.displayName = `withRequireAuth(${
    Component.displayName || Component.name || "Component"
  })`;
  return RequireAuthWrapper;
}
