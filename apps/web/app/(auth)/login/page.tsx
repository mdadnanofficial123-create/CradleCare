"use client";

import React, { useEffect, useState } from "react";

export default function LoginPage() {
  // prefer explicit env var, but fall back to the current host:3001 if unreachable
  const rawEnvBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const envBase = rawEnvBase ? rawEnvBase.replace(/^\"|\"$/g, '') : undefined;
  const fallbackBase = `${typeof window !== 'undefined' ? window.location.protocol : 'http:'}//${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}:3001`;
  const baseCandidates = [envBase, fallbackBase].filter(Boolean) as string[];
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const tok = localStorage.getItem("cc_token");
    if (tok) {
      fetch(`${base}/users/me`, {
        headers: { Authorization: `Bearer ${tok}` },
      })
        .then((r) => r.json())
        .then((data) => setUser(data))
        .catch(() => localStorage.removeItem("cc_token"));
    }
  }, []);

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Try candidates (env first, then fallback) until one succeeds
      let lastError: any = null;
      let json: any = null;
      for (const b of baseCandidates) {
        try {
          const url = `${b}/auth/${mode}`;
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          // if server responded but with error payload (e.g. invalid credentials), parse anyway
          json = await res.json().catch(() => null);
          if (!res.ok) throw new Error(json?.message || JSON.stringify(json) || res.statusText);
          // success
          if (mode === "login") {
            const token = json?.access_token;
            if (!token) throw new Error(json?.error || "No token returned");
            localStorage.setItem("cc_token", token);
            // fetch profile
            const profileRes = await fetch(`${b}/users/me`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const profile = await profileRes.json().catch(() => null);
            setUser(profile);
          } else {
            setMode("login");
            setEmail("");
            setPassword("");
          }
          lastError = null;
          break;
        } catch (e) {
          lastError = e;
          // try next candidate
        }
      }
      if (lastError) throw lastError;
    } catch (err: any) {
      setError(err?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("cc_token");
    setUser(null);
  }

  return (
    <main>
      <div className="card" style={{ padding: 24, maxWidth: 520, margin: "0 auto" }}>
        <h1 className="text-2xl font-bold" style={{ margin: 0 }}>
          {mode === "login" ? "Login" : "Register"}
        </h1>
        <p className="mt-2 text-muted">
          {mode === "login"
            ? "Sign in to save your child profile, milestone progress, and subscription preferences."
            : "Create an account to save your child profile and track milestones."}
        </p>

        {user ? (
          <div className="mt-4">
            <div className="font-semibold">Signed in as</div>
            <div className="mt-2">{user.email || user.name || JSON.stringify(user)}</div>
            <button className="btn btnPrimary mt-4" onClick={logout}>
              Sign out
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-3 mt-4" onSubmit={submit}>
            <label className="font-semibold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded-lg border border-border bg-surface text-base"
              required
            />

            <label className="font-semibold mt-2">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="p-3 rounded-lg border border-border bg-surface text-base"
              required
            />

            <div className="flex items-center gap-2 mt-2">
              <button className="btn btnPrimary" type="submit" disabled={loading}>
                {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => setMode(mode === "login" ? "register" : "login")}
              >
                {mode === "login" ? "Need an account?" : "Have an account?"}
              </button>
            </div>

            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

            <div className="text-muted text-xs mt-2">You can test with seeded user: alice.parent@example.com / password123</div>
          </form>
        )}
      </div>
    </main>
  );
}

