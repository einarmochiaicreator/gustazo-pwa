// In-memory user store. Replace with a real DB (Neon, Supabase, PlanetScale) for production.
import bcrypt from "bcryptjs";

export interface User {
  id: string;
  nombre: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

// Module-level store — survives hot reloads in dev but resets on cold starts.
// For production on Vercel, migrate this to a database adapter.
declare global {
  // eslint-disable-next-line no-var
  var __usersStore: Map<string, User> | undefined;
}
const store: Map<string, User> = global.__usersStore ?? new Map();
if (!global.__usersStore) global.__usersStore = store;

export async function createUser(nombre: string, email: string, password: string): Promise<User | null> {
  const normalized = email.toLowerCase().trim();
  if (store.has(normalized)) return null;
  const passwordHash = await bcrypt.hash(password, 10);
  const user: User = {
    id: crypto.randomUUID(),
    nombre: nombre.trim(),
    email: normalized,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  store.set(normalized, user);
  return user;
}

export async function verifyUser(email: string, password: string): Promise<User | null> {
  const user = store.get(email.toLowerCase().trim());
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}

export function getUserByEmail(email: string): User | undefined {
  return store.get(email.toLowerCase().trim());
}
