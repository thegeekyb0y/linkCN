"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Enable2FA({ session }: any) {
  const [step, setStep] = useState<"idle" | "qr" | "verify">("idle");
  const [totpURI, setTotpURI] = useState("");
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [code, setCode] = useState("");

  const startEnable2FA = async () => {
    const pass = prompt("Confirm your password");
    if (!pass) return; // user canceled → stop

    const { data } = await authClient.twoFactor.enable({
      password: pass,
      issuer: "My App",
    });

    if (data?.totpURI) {
      setStep("qr");
      setTotpURI(data.totpURI);
      setBackupCodes(data.backupCodes || []);
    }
  };

  const verifyInitialCode = async () => {
    await authClient.twoFactor.verifyTotp({
      code,
    });
    // Once verified, refresh page to update 2FA status
    window.location.reload();
  };

  return (
    <div className="mt-20">
      {!session.user.twoFactorEnabled ? (
        <>
          <button onClick={startEnable2FA}>Enable 2FA</button>
        </>
      ) : (
        <p>2FA is already enabled</p>
      )}

      {step === "qr" && (
        <div>
          <h3>Scan this QR with Authenticator</h3>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
              totpURI,
            )}`}
          />
          <p>Backup codes:</p>
          <pre>{backupCodes.join("\n")}</pre>

          <input
            placeholder="Enter first code from app"
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={verifyInitialCode}>Verify Code</button>
        </div>
      )}
    </div>
  );
}
