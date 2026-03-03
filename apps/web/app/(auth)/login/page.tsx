"use client";

import React, { useEffect, useState } from "react";

type User = {
  id?: string;
  email?: string;
  name?: string;
};

type AuthResponse = {
  access_token?: string;
  message?: string;
  error?: string;
};

export default function LoginPage() {
  const rawEnvBase = process.env.NEXT_PUBLIC_API_BASE_URL;

  const envBase = rawEnvBase
    ? rawEnvBase.replace(/^"|"$/g, "")
    : undefined;

  const fallbackBase =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.hostname}:3001`
      : "http://localhost:3001";

  const baseCandidates = [envBase, fallbackBase].filter(
    Boolean
  ) as string[];

  const base = baseCandidates[0];

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!base) return;

    const tok = localStorage.getItem("cc_token");
    if (!tok) return;

    fetch(`${base}/users/me`, {
      headers: { Authorization: `Bearer ${tok}` },
    })
      .then((r) => r.json())
      .then((data: User) => setUser(data))
      .catch(() => localStorage.removeItem("cc_token"));
  }, [base]);

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    setLoading(true);

    try {
      let lastError: unknown = null;

      for (const b of baseCandidates) {
        try {
          const res = await fetch(`${b}/auth/${mode}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const json = (await res.json().catch(
            () => null
          )) as AuthResponse | null;

          if (!res.ok) {
            throw new Error(
              json?.message ||
                json?.error ||
                res.statusText
            );
          }

          if (mode === "login") {
            const token = json?.access_token;
            if (!token)
              throw new Error("No token returned");

            localStorage.setItem("cc_token", token);

            const profileRes = await fetch(
              `${b}/users/me`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            const profile =
              (await profileRes.json().catch(
                () => null
              )) as User | null;

            setUser(profile);
          } else {
            setMode("login");
            setEmail("");
            setPassword("");
          }

          lastError = null;
          break;
        } catch (err) {
          lastError = err;
        }
      }

      if (lastError) throw lastError;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Request failed");
      }
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
      <div
        className="card"
        style={{ padding: 24, maxWidth: 520, margin: "0 auto" }}
      >
        <h1
          className="text-2xl font-bold"
          style={{ margin: 0 }}
        >
          {mode === "login" ? "Login" : "Register"}
        </h1>

        <p className="mt-2 text-muted">
          {mode === "login"
            ? "Sign in to save your child profile and progress."
            : "Create an account to track milestones."}
        </p>

        {user ? (
          <div className="mt-4">
            <div className="font-semibold">
              Signed in as
            </div>
            <div className="mt-2">
              {user.email ??
                user.name ??
                "User"}
            </div>

            <button
              className="btn btnPrimary mt-4"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col gap-3 mt-4"
            onSubmit={submit}
          >
            <label className="font-semibold">
              Email
            </label>

            <input
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              type="email"
              required
            />

            <label className="font-semibold mt-2">
              Password
            </label>

            <input
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              type="password"
              required
            />

            <div className="flex items-center gap-2 mt-2">
              <button
                className="btn btnPrimary"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Please wait..."
                  : mode === "login"
                  ? "Sign in"
                  : "Create account"}
              </button>

              <button
                className="btn"
                type="button"
                onClick={() =>
                  setMode(
                    mode === "login"
                      ? "register"
                      : "login"
                  )
                }
              >
                {mode === "login"
                  ? "Need an account?"
                  : "Have an account?"}
              </button>
            </div>

            {error && (
              <div className="text-red-600 text-sm mt-2">
                {error}
              </div>
            )}
          </form>
        )}
      </div>
    </main>
  );
}