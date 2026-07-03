import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h2>Loading...</h2>;

  return user ? children : <Navigate to="/login" replace />;
}





export default ProtectedRoute;