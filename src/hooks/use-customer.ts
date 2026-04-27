import { useState, useEffect, useCallback } from 'react';
import type { VonderaCustomer, VonderaOrder } from '@/types';
import { login, signup, fetchProfile, fetchCustomerOrders, setToken } from '@/lib/vondera-api';

export function useCustomer() {
  const [customer, setCustomer] = useState<VonderaCustomer | null>(null);
  const [orders, setOrders] = useState<VonderaOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);
      const profile = await fetchProfile();
      setCustomer(profile);
      const customerOrders = await fetchCustomerOrders();
      setOrders(customerOrders);
    } catch {
      setError('Failed to load profile');
      logout();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('vondera-token');
    if (token) {
      loadProfile();
    } else {
      setLoading(false);
    }
  }, [loadProfile]);

  const handleLogin = async (credentials: Record<string, string>) => {
    try {
      setLoading(true);
      const data = await login(credentials);
      setCustomer(data.user);
      loadProfile();
      return data;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (data: Record<string, unknown>) => {
    try {
      setLoading(true);
      const newUser = await signup(data);
      return newUser;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Signup failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = useCallback(() => {
    setCustomer(null);
    setOrders([]);
    setToken(null);
    localStorage.removeItem('vondera-token');
  }, []);

  return {
    customer,
    orders,
    loading,
    error,
    login: handleLogin,
    signup: handleSignup,
    logout,
    refreshProfile: loadProfile,
  };
}
